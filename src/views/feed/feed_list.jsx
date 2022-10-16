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
    let type = "";
    if(location.state != null){
        type = location.state.type;
    }
    const [feedType, setFeedType] = useState(type);

    //피드 상단 메뉴 컨트롤
    const [menu, setMenu] = useState([true,false,false,false]);
    useEffect(() => {
        if(type == ""){
            setMenu([true,false,false,false]);
            setFeedType("");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(0).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }else if(type == "self"){
            setMenu([false,true,false,false]);
            setFeedType("self");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(1).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }else if(type == "cover"){
            setMenu([false,false,true,false]);
            setFeedType("cover");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(2).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }else if(type == "daily"){
            setMenu([false,false,false,true]);
            setFeedType("daily");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(3).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }
    }, [type]);

    useEffect(() => {
        if(menu[0] === true){
            type = "";
            setFeedType("");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(0).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }else if(menu[1] === true){
            type = "self";
            setFeedType("self");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(1).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }else if(menu[2] === true){
            type = "cover";
            setFeedType("cover");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(2).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }else if(menu[3] === true){
            type = "daily";
            setFeedType("daily");
            $('.feedLink').each(function (index, item) {
                $(".feedLink").eq(index).removeClass("active");
                $(".feedLink").eq(3).addClass("active");
            });
            setFeedList([]);
            setPage(1);
        }
    }, [menu]);

    //로그인 되어 있는지 확인 후 컨텐츠 등록
    const user = useSelector((state) => {return state.isLogin});
    const contentAdd = () => {
        if(user === true){
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
    const [bannersURL, setbannersURL] = useState("");
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/bannerList", {
            params: {
                bannerCode: "A003",
                lang: localStorage.getItem("language")
            }
        })
        .then(function (response) {
            setbanners("https://beatsomeone.codeidea.io/storage/banner/" + response.data.response.data[0].bannerSource);
            setbannersURL(response.data.response.data[0].contnetsUrl);
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
    //리스트 불러오기
    const [feedList, setFeedList] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [displayTotal, setDisplayTotal] = useState(6);
    let total = 0;
    const updateList = (page, limit) => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/feed/feedList", {
            params: {
                sorting: feedsorting,
                mem_id: user_idx,
                wr_type: feedType,
                page: page,
                limit: limit
            }
        })
        .then(function (response) {
            setFeedList(feedList.concat(response.data.response));
            setDisplayTotal(response.data.total);
            total = response.data.total;
        });
    };
    useEffect(() => {
        updateList(page, limit)
    }, [page, feedsorting, user, feedType])
    useEffect(() => {
        setFeedList([]);
        setPage(1);
    }, [user])

    const onSroll = () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { scrollTop } = document.documentElement;

        if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
            if(feedList.length >= total){
                return false;
            }else{
                setPage((prev) => prev + 1);
            }      
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onSroll);
        return () => {
          window.removeEventListener('scroll', onSroll);
        };
    }, [page, feedType, feedsorting]);

    /**파일 확장자 추출 */
    function getExtension(fileName) {
        var fileLength = fileName.length;
        var lastDot = fileName.lastIndexOf('.');
        var fileExtension = fileName.substring(lastDot+1, fileLength);
        return fileExtension;
    }

    //좋아요 기능
    const toggleLike = (e, idx) => {
        if(user === null || user === false){
            return false;
        }

        let bit_cnt = parseInt(document.getElementById('bit_cnt_'+idx).textContent);
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
            document.getElementById('bit_cnt_'+idx).textContent = bit_cnt - 1;
            axios.delete(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/beatDelete", {
                params: {
                    mem_id: user_idx,
                    service_name: "feed",
                    service_idx: idx
                }
            })
            .then(function (response) {
            });
        }else{
            e.target.classList.add("active");
            document.getElementById('bit_cnt_'+idx).textContent = bit_cnt + 1;
            axios.post(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/beatAdd", {
                mem_id: user_idx,
                service_name: "feed",
                service_idx: idx
            })
            .then(function (response) {
            });
        }
    }
    
    const aa = () => {
        console.log(type);
    }
    

    return (
        <>
        <div id="wrap_content" className="list_page feed_list">
            <div className="wrap_inner">
                <section className="banner">
                    <div className="inner" onClick={() => {navigate(bannersURL)}}>
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
                                    <li className="select_list" onClick={() => {setFeedsorting(1);setFeedList([]);setPage(1)}}>최신순</li>
                                    <li className="select_list" onClick={() => {setFeedsorting(2);setFeedList([]);setPage(1)}}>비트 많은 순</li>
                                    <li className="select_list" onClick={() => {setFeedsorting(3);setFeedList([]);setPage(1)}}>댓글 많은 순</li>
                                </ul>
                            </div>

                            <div className="total_count">
                                TOTAL : <span>{displayTotal}</span>개
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
                                }else{
                                    like_active = "";
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
                                                        <button className={`like_toggle_btn white ${like_active}`} onClick={(e) => {toggleLike(e, list.idx, list.wr_bit)}}>
                                                            <span id={`bit_cnt_${list.idx}`}>{list.wr_bit}</span>
                                                        </button>
                                                    </li>

                                                    { list.wr_type != "일상" ?
                                                    <li className="music">
                                                        <span>0개</span>
                                                    </li>
                                                    : null }
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
