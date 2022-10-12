import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import "@/assets/css/components/list.css";

function Main() {
    const navigate = useNavigate();
    const user_idx = useSelector((state) => {return state.idx});

    //피드 타입 받아오기(전체, 자작곡, 커버곡, 데일리)
    const location = useLocation();
    let type = "all";
    if(location.state != null){
        type = location.state.type;
    }

    //피드 상단 메뉴 컨트롤
    const [menu, setMenu] = useState([true,false,false,false]);
    useEffect(() => {
        if(type == "all"){
            setMenu([true,false,false,false]);
        }else if(type == "own"){
            setMenu([false,true,false,false]);
        }else if(type == "cover"){
            setMenu([false,false,true,false]);
        }else if(type == "daily"){
            setMenu([false,false,false,true]);
        }
    }, [type]);

    useEffect(() => {
        if(menu[0] === true){
            type = "all";
        }else if(menu[1] === true){
            type = "own";
        }else if(menu[2] === true){
            type = "cover";
        }else if(menu[3] === true){
            type = "daily";
        }
    }, [menu]);

    //로그인 되어 있는지 확인 후 컨텐츠 등록
    const user = useSelector((state) => {return state});
    const contentAdd = () => {
        if(user.isLogin === true){
            navigate("/feed/feed_add");
        }else{
            $(".plzSignin_modal").fadeIn(200);
            $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
                e.stopPropagation();
            });
        }
    }
    
    //상단 배너 이미지
    const [banners, setbanners] = useState("/assets/images/dummy/banner_img_02.jpg");
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/bannerList", {
            params: {
                bannerCode: "A003",
                lang: localStorage.getItem("language")
            }
        })
        .then(function (response) {
            setbanners("https://beatsomeone.codeidea.io/storage/banner/" + response.data.response.data[0].bannerSource);
        });
    }, [localStorage.getItem("language")]);

    //모달창 닫기 commonjs에서 갖고옴
    useEffect(() => {
        const modalWrap = document.querySelectorAll('.modal_wrap');
        modalWrap.forEach((item, idx) => {
            const closeBtn = item.querySelectorAll('.close_btn');

            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal_wrap')) {
                    $(item).fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                };
            });

            closeBtn.forEach((items, i) => {
                items.addEventListener('click', () => {
                    $(item).fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                });
            });
        });
    }, []);

    //최신순, 비트많은순, 댓글 많은순
    const [feedsorting, setFeedsorting] = useState(1);
    //좋아요 상태
    const [like, setLike] = useState(false);
    //리스트 불러오기
    const [feedList, setFeedList] = useState([]);
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/feed/feedList", {
            params: {
                sorting: feedsorting,
                mem_id: user_idx
            }
        })
        .then(function (response) {
            setFeedList(response.data.response);
        });
    }, [feedsorting]);

    /**파일 확장자 추출 */
    function getExtension(fileName) {
        var fileLength = fileName.length;
        var lastDot = fileName.lastIndexOf('.');
        var fileExtension = fileName.substring(lastDot+1, fileLength);
        return fileExtension;
    }
    
    const aa = () => {
        console.log(type);
    }
    

    return (
        <>
        <div id="wrap_content" className="list_page feed_list">
            <div className="wrap_inner">
                <section className="banner">
                    <div className="inner">
                        {/* <!-- 임시 이미지 입니다 -->
                        <!-- <div className="banner_text">
                            <h2>지금, 당장 글로벌 <br>
                                뮤지션에 도전하세요.
                            </h2>
                            <p>비트썸원이 모든 것을 도와드립니다, 한 번의 음원<br>
                                등록으로 빠르고 정확한 판매와 정산을 경험하세요.</p>
                        </div>
                        <div className="banner_image">
                            <img src="/assets/images/dummy/banner_img_02.jpg" alt="banner" />
                        </div> --> */}
                        <img src={banners} alt="banner" />
                    </div>
                </section>

                <section className="tab_section">
                    <div className="section_inner">
                        <h2 onClick={() => {aa()}} className="title_text" style={{margin:"60px 0 40px", textAlign: "center", fontSize: "24px", fontWeight: "700"}}>피드</h2>

                        <ul className="tab_area">
                            {/* <li className="tab active">전체</li> */}
                            <li className={menu[0]?"tab active" : "tab"} onClick={() => {setMenu([true,false,false,false]);}}>전체</li>
                            <li className={menu[1]?"tab active" : "tab"} onClick={() => {setMenu([false,true,false,false]);}}>자작곡</li>
                            <li className={menu[2]?"tab active" : "tab"} onClick={() => {setMenu([false,false,true,false]);}}>커버곡</li>
                            <li className={menu[3]?"tab active" : "tab"} onClick={() => {setMenu([false,false,false,true]);}}>일상</li>
                        </ul>
                    </div>
                </section>

                <section className="list_wrap">
                    <div className="section_inner">
                        <div className="list_option">
                            <div className="btn_box">
                                <button className="basic_btn_red" onClick={() => {contentAdd()}}>
                                    <span><img src="/assets/images/icon/icon_plus_red.svg" alt="플러스 아이콘" /></span>
                                    컨텐츠 등록</button>
                            </div>
                            {/* <!-- <div className="select_box_wrap open"> --> */}
                            <div className="select_box_wrap">
                                {/* <!-- 셀렉트 박스가 선택되었을때 button 에 active 클래스 넣어주세요 -->
                                <!-- 0. 기본 --> */}
                                <button className="select_title" id="feed_sort">최신순</button>
                                {/* <!-- 1. 선택되었을때 button에 active 클래스 추가 -->
                                <!-- <button className="active">선택</button> --> */}
                                <ul>
                                    <li className="select_list" onClick={() => {setFeedsorting(1)}}>최신순</li>
                                    <li className="select_list" onClick={() => {setFeedsorting(2)}}>비트 많은 순</li>
                                    <li className="select_list" onClick={() => {setFeedsorting(3)}}>댓글 많은 순</li>
                                </ul>
                            </div>

                            <div className="total_count">
                                TOTAL : <span>9999</span>개
                            </div>
                        </div>

                        <ul className="list_box">
                            {/* <!-- title addclassName '자작곡 - category_mark_self shadow' / '커버곡 - category_mark_cover shadow' /  '일상 - category_mark_daily shadow' 을 해주세요--> */}
                            {feedList.map((list) => {
                                let feed_type = ""
                                if(list.wr_type == "자작곡"){
                                    feed_type = "title category_mark_self shadow";
                                }else if(list.wr_type == "커버곡"){
                                    feed_type = "title category_mark_cover shadow";
                                }else if(list.wr_type == "일상"){
                                    feed_type = "title category_mark_daily shadow";
                                }

                                const extension = getExtension(list.feed_source);
                                
                                let like_active = "";
                                if(list.like_status >= 1){
                                    like_active = "active";
                                    setLike(true);
                                }else{
                                    like_active = "";
                                    setLike(false);;
                                }

                                return (
                                <li className="list_item" key={list.idx}>
                                    <div className="profile_box mobile">
                                        <p>
                                            <span className="profile_img">
                                                <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 이미지"/>
                                            </span>
                                            <span>{list.mem_nickname}</span>
                                        </p>
                                    </div>
                                    <div className="img_wrap">
                                        <Link to={`/feed/feed_detail_daily/${list.idx}`}>
                                            {/* <a> */}
                                                {extension == "mp4" ?
                                                <div className="img">
                                                    <video preload="metadata" src={`https://beatsomeone.codeidea.io${list.file_url}${list.feed_source}#t=0.5`}></video>
                                                </div>
                                                :
                                                <div className="img">
                                                    <img src={`https://beatsomeone.codeidea.io${list.file_url}${list.feed_source}`} alt="이미지" />
                                                </div>
                                                }

                                                <p className={feed_type}>
                                                    <span>{list.wr_title}</span>
                                                </p>

                                                <div className="list_text mobile" style={{whiteSpace:"pre-wrap"}}>
                                                    {list.wr_content}
                                                </div>
                                            {/* </a> */}
                                        </Link>

                                        <div className="text_box">
                                            <div className="text_wrap">
                                                <ul>
                                                    <li className="comment">
                                                        <div className="profile_wrap">
                                                            <ul>
                                                                <li>
                                                                    <img src="/assets/images/dummy/profile_01.jpg"
                                                                        alt="프로필 이미지1" />
                                                                </li>
                                                                <li>
                                                                    <img src="/assets/images/dummy/profile_02.jpg"
                                                                        alt="프로필 이미지1" />
                                                                </li>
                                                                <li>
                                                                    <img src="/assets/images/dummy/profile_03.jpg"
                                                                        alt="프로필 이미지1" />
                                                                </li>
                                                            </ul>

                                                            <span>{list.wr_comment}</span>
                                                        </div>
                                                    </li>

                                                    <li className="like">
                                                        <button className={`like_toggle_btn white ${like_active}`}>
                                                            <span>{list.wr_bit}</span>
                                                        </button>
                                                    </li>

                                                    <li className="music">
                                                        <span>0개</span>
                                                    </li>
                                                </ul>

                                                <p>
                                                    <span className="profile_img">
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 이미지"/>
                                                    </span>
                                                    <span>{list.mem_nickname}</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* <span className="play">04:17</span> */}
                                    </div>

                                    <div className="list_text pc" style={{whiteSpace:"pre-wrap"}}>
                                        {list.wr_content}
                                    </div>
                                </li>
                                )}
                            )}
                            {feedList.length === 0 ? 
                                <li className="list_item">등록된 피드가 없습니다.</li>
                            : null}
                        </ul>
                        
                    </div>
                </section>
            </div>
        </div>

        <div className="modal_wrap message_modal plzSignin_modal">
          <div className="modal_box alert">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    로그인이 필요한 서비스입니다.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn close_btn">
                        확인
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
