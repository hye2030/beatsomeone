import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

import MainVideoUrl from "@/assets/video/[BS_MA_01] main video.mp4";
import "@/assets/css/components/main.css";
import TopBanner from "../components/body/topbanner";

function Main() {
    const navigate = useNavigate();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);

        // jQuery("link[rel=stylesheet][href*='/src/assets/css/components/list.css']").remove();
    }, []);

    const [banners, setbanners] = useState([]);
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/bannerList", {
            params: {
                bannerCode: "A001",
                lang: localStorage.getItem("language")
            }
        })
        .then(function (response) {
            setbanners(response.data.response.data);
        });
    }, [localStorage.getItem("language")]);

    return (
      <>
        {/* BEGIN: Page Layout */}
        <div id="wrap_content" className="main_page">
            <div className="top_deco"></div>
            <section className="content_section">
                <div className="video_wrap">
                    <video playsInline autoPlay loop muted>
                        <source src={MainVideoUrl} type="video/mp4" />
                    </video>
                    <div className="check_line"></div>
                </div>
  
                <div className="wrap_inner">
                    <div className="top_area">
                        <div className="text_box">
                            <h3>
                                지금, 당장 <br className="mobile_layout" />글로벌 뮤지션에
                                <br className="pc_layout" />
                                도전하세요.
                            </h3>
                            <p>
                                비트썸원이 모든 것을 도와드립니다,
                                <br />
                                한 번의 음원등록으로 빠르고 정확한 판매와 정산을 경험하세요.
                            </p>
                        </div>
                        <TopBanner banners={banners} />
                    </div>
  
                    <div className="content_mb">
                        <div className="content_slide">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="list_item self">
                                        <div className="img_wrap">
                                            <div className="img">
                                                <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                            </div>
                                            <div className="text_box">
                                                <div className="text_wrap">
                                                    <ul>
                                                        <li className="like">
                                                            <button className="like_toggle_btn white">
                                                                <span>9,999</span>
                                                            </button>
                                                        </li>
  
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
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                                </div>
                                                                <p>
                                                                    닉네임
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
  
                                        <div className="list_text">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간
                                            입니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="list_item cover">
                                        <div className="img_wrap">
                                            <div className="img">
                                                <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                            </div>
                                            <div className="text_box">
                                                <div className="text_wrap">
                                                    <ul>
                                                        <li className="like">
                                                            <button className="like_toggle_btn white">
                                                                <span>9,999</span>
                                                            </button>
                                                        </li>
  
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
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                                </div>
                                                                <p>
                                                                    닉네임
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
  
                                        <div className="list_text">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간
                                            입니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="list_item daily">
                                        <div className="img_wrap">
                                            <div className="img">
                                                <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                            </div>
                                            <div className="text_box">
                                                <div className="text_wrap">
                                                    <ul>
                                                        <li className="like">
                                                            <button className="like_toggle_btn white">
                                                                <span>9,999</span>
                                                            </button>
                                                        </li>
  
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
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                                </div>
                                                                <p>
                                                                    닉네임
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
  
                                        <div className="list_text">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간
                                            입니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="list_item self">
                                        <div className="img_wrap">
                                            <div className="img">
                                                <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                            </div>
                                            <div className="text_box">
                                                <div className="text_wrap">
                                                    <ul>
                                                        <li className="like">
                                                            <button className="like_toggle_btn white">
                                                                <span>9,999</span>
                                                            </button>
                                                        </li>
  
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
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                                </div>
                                                                <p>
                                                                    닉네임
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
  
                                        <div className="list_text">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간
                                            입니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination con"></div>
                        </div>
                    </div>
                    <ul className="content">
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                </div>
                                <div className="text_box">
                                    <div className="text_wrap">
                                        <ul>
                                            <li className="like">
                                                <button className="like_toggle_btn white">
                                                    <span>9,999</span>
                                                </button>
                                            </li>
  
                                            <li className="comment">
                                                <div className="profile_wrap">
                                                    <ul>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                    </div>
                                                    <p>
                                                        닉네임
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
  
                            <div className="list_text">
                                내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다.
                            </div>
                        </li>
                        <li className="list_item cover">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                </div>
                                <div className="text_box">
                                    <div className="text_wrap">
                                        <ul>
                                            <li className="like">
                                                <button className="like_toggle_btn white">
                                                    <span>9,999</span>
                                                </button>
                                            </li>
  
                                            <li className="comment">
                                                <div className="profile_wrap">
                                                    <ul>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                    </div>
                                                    <p>
                                                        닉네임
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
  
                            <div className="list_text">
                                내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다.
                            </div>
                        </li>
                        <li className="list_item daily">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                </div>
                                <div className="text_box">
                                    <div className="text_wrap">
                                        <ul>
                                            <li className="like">
                                                <button className="like_toggle_btn white">
                                                    <span>9,999</span>
                                                </button>
                                            </li>
  
                                            <li className="comment">
                                                <div className="profile_wrap">
                                                    <ul>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                    </div>
                                                    <p>
                                                        닉네임
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
  
                            <div className="list_text">
                                내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다.
                            </div>
                        </li>
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                </div>
                                <div className="text_box">
                                    <div className="text_wrap">
                                        <ul>
                                            <li className="like">
                                                <button className="like_toggle_btn white">
                                                    <span>9,999</span>
                                                </button>
                                            </li>
  
                                            <li className="comment">
                                                <div className="profile_wrap">
                                                    <ul>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                    </div>
                                                    <p>
                                                        닉네임
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
  
                            <div className="list_text">
                                내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다.
                            </div>
                        </li>
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
                                </div>
                                <div className="text_box">
                                    <div className="text_wrap">
                                        <ul>
                                            <li className="like">
                                                <button className="like_toggle_btn white">
                                                    <span>9,999</span>
                                                </button>
                                            </li>
  
                                            <li className="comment">
                                                <div className="profile_wrap">
                                                    <ul>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt="" />
                                                    </div>
                                                    <p>
                                                        닉네임
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
  
                            <div className="list_text">
                                내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다. 내용을 입력해주세요. 더미텍스트 구간 입니다.
                            </div>
                        </li>
                    </ul>
                    <button type="button" className="more_btn" onClick={() =>{navigate("/feed/feed_list")}}>
                        MORE
                    </button>
                </div>
            </section>
  
            <section className="equipment_info">
                <div className="wrap_inner">
  
                    <div className="best_review">
                        <div className="title_box">
                            <h3>
                                <a href="review/prd_list.html">놓치면 후회하는 <span>베스트 리뷰</span></a>
                            </h3>
                        </div>
                        <div className="box_wrap">
                            <ul className="small_box">
                                <li className="list">
                                    <div className="img_box">
                                        <img src="/assets/images/dummy/review_01.png" alt="" />
                                    </div>
                                    <p className="name">
                                        콘덴서 마이크의 전설 노이만 U87
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            너무나 유명한 마이크 노이만 U87 리뷰입니다.
                                            현재 잔 고장 없이 3년째 사용하고있습니다. 다른 마이크들도 많이 사용해봤지만 역시 저에게는 U87이 최고의 마이크 같네요.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                </li>
                                            </ul>
                                            <span>99+</span>
                                        </div>
                                        <button type="button" className="buy_btn">
                                            구매하기
                                        </button>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="img_box">
                                        <img src="/assets/images/dummy/review_02.jpeg" alt="" />
                                    </div>
                                    <p className="name">
                                        Squier Bass 리뷰
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            안녕하세요. 취미로 베이스를 연주하고있는 직장인 입니다.
                                            기존에 가지고 있던 펜더 베이스를 처분하고 스콰이어 베이스를
                                            새로 구입하였습니다.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                </li>
                                            </ul>
                                            <span>99+</span>
                                        </div>
                                        <button type="button" className="buy_btn">
                                            구매하기
                                        </button>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="img_box">
                                        <img src="/assets/images/dummy/review_03.jpeg" alt="" />
                                    </div>
                                    <p className="name">
                                        JBL의 Flip6 블루투스 스피커 리뷰
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            최근 친구들과 여행을 다니다보니 블루투스 스피커가 꼭 필요할 거 같아 JBL의 Flip6 구입했습니다.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                </li>
                                            </ul>
                                            <span>99+</span>
                                        </div>
                                        <button type="button" className="buy_btn">
                                            구매하기
                                        </button>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="img_box">
                                        <img src="/assets/images/dummy/review_04.png" alt="" />
                                    </div>
                                    <p className="name">
                                        TOWNSEND LABS L22
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            안녕하세요! 미래지향적 마이크(?) 타운센드 L22 리뷰 써봅니다.
                                            플러그인을 통해 다양한 유명 마이크를 모델링 하여 유사하게 사용할 수 있습니다.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                </li>
                                            </ul>
                                            <span>99+</span>
                                        </div>
                                        <button type="button" className="buy_btn">
                                            구매하기
                                        </button>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="img_box">
                                        <img src="/assets/images/dummy/review_05.png" alt="" />
                                    </div>
                                    <p className="name">
                                        RME Babyface Pro
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            국민 오인페 Babyface 리뷰입니다. 저는 탑라이너로 멜로디 메이킹 및 가이드 작업을 많이 하고있습니다.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                </li>
                                            </ul>
                                            <span>99+</span>
                                        </div>
                                        <button type="button" className="buy_btn">
                                            구매하기
                                        </button>
                                    </div>
                                </li>
                                <li className="list">
                                    <div className="img_box">
                                        <img src="/assets/images/dummy/review_06.jpeg" alt="" />
                                    </div>
                                    <p className="name">
                                        Novation 런치패드프로 리뷰 입니다.
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            유튜브보고 재밌어보여서 구입한 노베이션 런치패드프로 리뷰입니다.
                                            런치패드에 대한 지식 없이 무지성 구매했는데요. 구입한지 두 달이 지났지만
                                            여전히 어렵습니다.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                </li>
                                            </ul>
                                            <span>99+</span>
                                        </div>
                                        <button type="button" className="buy_btn">
                                            구매하기
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <div className="big_box">
                                <div className="img_box">
                                    <img src="/assets/images/dummy/review_07.png" alt="" />
                                </div>
                                <div className="text_box">
                                    <button className="like_toggle_btn white">
                                        <span>9,999</span>
                                    </button>
                                    <div className="profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>99+</span>
                                    </div>
                                    <div className="comment">
                                        <span>
                                            뮤지션들에게 많은 사랑을 받고있는 제네리 8030C 모니터 스피커입니다.
                                        </span>
                                    </div>
                                    <button type="button" className="buy_btn">
                                        구매하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qna">
                        <div className="title_box">
                            <h3>
                                <a href="#" onClick={() => { return false; }}>HOT <span>Q&A</span></a>
                            </h3>
                        </div>
                        <div className="tabs">
                            <div className="tab">
                                질문
                            </div>
                            <div className="tab">
                                답변
                            </div>
                        </div>
                        <div className="tab_contents">
                            <div className="tab_content">
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            스플라이스 외에 어떤 샘플 사용하시나요?
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            음원 사이트 어떤 거 쓰세요?
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            윈도우와 맥 고민 중입니다.
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            유튜브에 배경음악 쓰고 싶은데 저작권은 어떻게 해야할까요?
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            오디션에 참가하고 싶은데 어디서부터 시작해야할까요?
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab_content">
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            스플라이스 샘플의 경우 워낙 많은 사람들이 사용하다보니
                                            저는 샘플 팩을 따로 구입하거나 구글에 'Spilice similar sites' 로 검색하여 다른 샘플 사이트를 디깅하는 편입니다.
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            요즘은 다들 유튜브로 많이 넘어오는 거 같아요.
                                            처음에는 광고 때문에 결제해서 프리미엄 사용하다가
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            저는 맥을 사용하다가 윈도우로 변경했는데요. 안정성과 관리에는 맥이 편했고
                                            플러그인 활용이나 사양 업그레이드 면에서는 윈도우가 좋았습니다.
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            요즘 저작권 상업적으로 사용해도 되는 음원들 많던데 알아보심이..
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            분야가 어떤 분야에요? 포지션에 따라 좀 다를듯 하네요.
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
  
                <div className="review_slide">
                    <div className="title_box">
                        <h3>
                            놓치면 후회하는 <span>베스트 리뷰</span>
                        </h3>
                        <div className="arrow_wrap">
                            <div className="swiper-button-next review"></div>
                            <div className="swiper-button-prev review"></div>
                            <div className="swiper-pagination review"></div>
                        </div>
                    </div>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <ul className="review_list">
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/assets/images/dummy/review_01.png" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    콘덴서 마이크의 전설 노이만 U87
                                                </p>
                                            </div>
                                            <p className="comment">
                                                너무나 유명한 마이크 노이만 U87 리뷰입니다.
                                                현재 잔 고장 없이 3년째 사용하고있습니다. 다른 마이크들도 많이 사용해봤지만 역시 저에게는 U87이 최고의 마이크 같네요.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/assets/images/dummy/review_02.jpeg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Squier Bass 리뷰
                                                </p>
                                            </div>
                                            <p className="comment">
                                                안녕하세요. 취미로 베이스를 연주하고있는 직장인 입니다.
                                                기존에 가지고 있던 펜더 베이스를 처분하고 스콰이어 베이스를
                                                새로 구입하였습니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/assets/images/dummy/review_03.jpeg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    JBL의 Flip6 블루투스 스피커 리뷰
                                                </p>
                                            </div>
                                            <p className="comment">
                                                최근 친구들과 여행을 다니다보니 블루투스 스피커가 꼭 필요할 거 같아 JBL의 Flip6 구입했습니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="swiper-slide">
                                <ul className="review_list">
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/assets/images/dummy/review_04.png" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    TOWNSEND LABS L22
                                                </p>
                                            </div>
                                            <p className="comment">
                                                안녕하세요! 미래지향적 마이크(?) 타운센드 L22 리뷰 써봅니다.
                                                플러그인을 통해 다양한 유명 마이크를 모델링 하여 유사하게 사용할 수 있습니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/assets/images/dummy/review_05.png" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    RME Babyface Pro
                                                </p>
                                            </div>
                                            <p className="comment">
                                                국민 오인페 Babyface 리뷰입니다. 저는 탑라이너로 멜로디 메이킹 및 가이드 작업을 많이 하고있습니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/assets/images/dummy/review_06.jpeg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Novation 런치패드프로 리뷰 입니다.
                                                </p>
                                            </div>
                                            <p className="comment">
                                                유튜브보고 재밌어보여서 구입한 노베이션 런치패드프로 리뷰입니다.
                                                런치패드에 대한 지식 없이 무지성 구매했는데요. 구입한지 두 달이 지났지만
                                                여전히 어렵습니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  
            <section className="middle_slide">
                <div className="fadeflow">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/assets/images/dummy/trand_01.png" alt=""/>
                                </div>
                                <div className="text_box">
                                    <h3>
                                        캔드릭 라마와 루이비통, <br/>
                                        래퍼와 패션브랜드의 만남
                                    </h3>
                                    <p>
                                        파리 패션위크에서 루이비통(Louis Vuitton)이 2023 S/S 남성복 컬렉션에서 선보인 캔드릭 라마의 무대를 느껴보세요.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/assets/images/dummy/trand_02.jpeg" alt=""/>
                                </div>
                                <div className="text_box">
                                    <h3>
                                        About Time <br/>
                                        이달의 추천 앨범
                                    </h3>
                                    <p>
                                        시간을 거슬러 추천되는 음원과 신규 음원의 소식을 확인하세요.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/assets/images/dummy/trand_03.png" alt="" />
                                </div>
                                <div className="text_box">
                                    <h3>
                                        THE AIR HOUSE <br/>
                                        6월에 이어 10월 21일 개최
                                    </h3>
                                    <p>
                                        2박 3일간 자연속에서 펼쳐지는 음악페스티벌 'THE AIR HOUSE'가 개최됩니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="arrow_wrap">
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
                <div className="coverflow">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/assets/images/dummy/trand_01.png" alt="slide 1" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/assets/images/dummy/trand_02.jpeg" alt="slide 1" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/assets/images/dummy/trand_03.png" alt="slide 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  
            <section className="bottom_section">
                <div className="wrap_inner">
                    <div className="request_box">
                        <div className="title_box">
                            <h3>
                                <a href="#" onClick={() => { return false; }}>진행 중 의뢰</a>
                            </h3>
                        </div>
                        <ul className="depth">
                        <li className="list">
                                <span className="text">
                                    MR 제작 부탁드립니다
                                </span>
                                <span className="num">
                                    50,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    남자 발라드 보컬 가이드 작업
                                </span>
                                <span className="num">
                                    150,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    유튜브에 사용할 BGM 제작 요청
                                </span>
                                <span className="num">
                                    30,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    K-POP 걸그룹 보컬 가이드
                                </span>
                                <span className="num">
                                    200,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    커버용 MR 제작
                                </span>
                                <span className="num">
                                    30,000원
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="survey_box">
                        <div className="title_box">
                            <h3>
                                <a href="">설문조사</a>
                            </h3>
                            <div className="arrow_wrap">
                                <div className="swiper-button-next sec"></div>
                                <div className="swiper-button-prev sec"></div>
                                <div className="swiper-pagination sec"></div>
                            </div>
                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img className="pc_only" src="/assets/images/dummy/survey_img01.jpg" alt=""/>
                                    <img className="mb_only" src="/assets/images/dummy/survey_img_mb01.jpg" alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <img className="pc_only" src="/assets/images/dummy/survey_img02.jpg" alt=""/>
                                    <img className="mb_only" src="/assets/images/dummy/survey_img_mb02.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/* END: Page Layout */}

        {/* <!-- 파일등록 완료 모달창 --> */}
        <div className="modal_wrap message_modal popup_modal" style={{display:"none"}}>
            <div className="modal_box_wrap">
                <div className="modal_box">
                    <p className="comment"><img src="/assets/images/main/survey_img_1.png" alt="" /></p>
                </div>
                <button type="button" className="close_btn">닫기</button>
                <div className="check_box check_area">
                    <input type="checkbox" id="dontshow" />
                    <label htmlFor="dontshow">
                        <span className="check_box_img"></span>
                        <span className="check_box_text">오늘 하루 그만보기</span>
                    </label>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Main;
  