import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import "@/assets/css/components/list.css";

function Main() {
    const navigate = useNavigate();

    //피드 상단 메뉴 컨트롤
    const [menu, setMenu] = useState([true,false,false,false]);

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
                        <h2 className="title_text" style={{margin:"60px 0 40px", textAlign: "center", fontSize: "24px", fontWeight: "700"}}>피드</h2>

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
                                <button className="select_title">최신순</button>
                                {/* <!-- 1. 선택되었을때 button에 active 클래스 추가 -->
                                <!-- <button className="active">선택</button> --> */}
                                <ul>
                                    <li className="select_list">최신순</li>
                                    <li className="select_list">비트 많은 순</li>
                                    <li className="select_list">댓글 많은 순</li>
                                </ul>
                            </div>

                            <div className="total_count">
                                TOTAL : <span>9999</span>개
                            </div>
                        </div>

                        <ul className="list_box">
                            {/* <!-- title addclassName '자작곡 - category_mark_self shadow' / '커버곡 - category_mark_cover shadow' /  '일상 - category_mark_daily shadow' 을 해주세요--> */}
                            <li className="list_item">
                                <div className="profile_box mobile">
                                    <p>
                                        <span className="profile_img">
                                            <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 이미지"/>
                                        </span>
                                        <span>사용자 닉네임 표시</span>
                                    </p>
                                </div>
                                <div className="img_wrap">
                                    <a onClick={() => {navigate("/feed/feed_detail_daily")}}>
                                        <div className="img">
                                            <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                        </div>

                                        <p className="title category_mark_self shadow">
                                            <span>사용자가 등록한 음원의 제목 표기</span>
                                        </p>

                                        <div className="list_text mobile">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간
                                            입니다.
                                        </div>
                                    </a>

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

                                                        <span>99+</span>
                                                    </div>
                                                </li>

                                                <li className="like">
                                                    <button className="like_toggle_btn white">
                                                        <span>9,999</span>
                                                    </button>
                                                </li>

                                                <li className="music">
                                                    <span>99개</span>
                                                </li>
                                            </ul>

                                            <p>
                                                <span className="profile_img">
                                                    <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 이미지"/>
                                                </span>
                                                <span>닉네임</span>
                                            </p>
                                        </div>
                                    </div>

                                    <span className="play">04:17</span>
                                </div>

                                <div className="list_text pc">
                                    내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다.
                                </div>
                            </li>
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
