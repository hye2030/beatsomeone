import { useEffect } from "react";

import MainVideoUrl from "@/assets/video/temporary.mp4";

function Main() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    });

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
                        <div className="main_slide">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="/src/assets/images/dummy/slide_img.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/src/assets/images/dummy/slide_img.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/src/assets/images/dummy/slide_img.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/src/assets/images/dummy/slide_img.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/src/assets/images/dummy/slide_img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="deco"></div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
  
                    <div className="content_mb">
                        <div className="content_slide">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="list_item self">
                                        <div className="img_wrap">
                                            <div className="img">
                                                <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                                        <img src="/src/assets/images/dummy/profile_01.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_02.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_03.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                </ul>
  
                                                                <span>99+</span>
                                                            </div>
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                                <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                                        <img src="/src/assets/images/dummy/profile_01.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_02.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_03.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                </ul>
  
                                                                <span>99+</span>
                                                            </div>
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                                <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                                        <img src="/src/assets/images/dummy/profile_01.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_02.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_03.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                </ul>
  
                                                                <span>99+</span>
                                                            </div>
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                                <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                                        <img src="/src/assets/images/dummy/profile_01.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_02.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                    <li>
                                                                        <img src="/src/assets/images/dummy/profile_03.jpg"
                                                                            alt="프로필 이미지1" />
                                                                    </li>
                                                                </ul>
  
                                                                <span>99+</span>
                                                            </div>
                                                            <div className="nick_name">
                                                                <div className="profile_img">
                                                                    <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                                    <img src="/src/assets/images/dummy/cover_img_01.jpg" alt="이미지" />
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
                                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                        <li>
                                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                                        </li>
                                                    </ul>
  
                                                    <span>99+</span>
                                                </div>
                                                <div className="nick_name">
                                                    <div className="profile_img">
                                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="" />
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
                    <button type="button" className="more_btn">
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
                                        <img src="/src/assets/images/dummy/review_img_01.jpg" alt="" />
                                    </div>
                                    <p className="name">
                                        Product name
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요/src/assets.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                        <img src="/src/assets/images/dummy/review_img_01.jpg" alt="" />
                                    </div>
                                    <p className="name">
                                        Product name
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요/src/assets.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                        <img src="/src/assets/images/dummy/review_img_01.jpg" alt="" />
                                    </div>
                                    <p className="name">
                                        Product name
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요/src/assets.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                        <img src="/src/assets/images/dummy/review_img_01.jpg" alt="" />
                                    </div>
                                    <p className="name">
                                        Product name
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요/src/assets.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                        <img src="/src/assets/images/dummy/review_img_01.jpg" alt="" />
                                    </div>
                                    <p className="name">
                                        Product name
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요/src/assets.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                        <img src="/src/assets/images/dummy/review_img_01.jpg" alt="" />
                                    </div>
                                    <p className="name">
                                        Product name
                                    </p>
                                    <div className="hover_box">
                                        <div className="num_box">
                                            50%
                                        </div>
                                        <div className="text_area">
                                            내용을 입력해주세요. 더미 텍스트 구간 입니다. 내용을 입력해주세요/src/assets.
                                        </div>
                                        <button className="like_toggle_btn white">
                                            <span>9,999</span>
                                        </button>
                                        <div className="profile_wrap">
                                            <ul>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                                </li>
                                                <li>
                                                    <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                    <img src="/src/assets/images/dummy/review_img_02.jpg" alt="" />
                                </div>
                                <div className="text_box">
                                    <button className="like_toggle_btn white">
                                        <span>9,999</span>
                                    </button>
                                    <div className="profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>99+</span>
                                    </div>
                                    <div className="comment">
                                        <span>
                                            내용을 입력해주세요 내용을 입력해주세요 내용을 입력해주세요
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
                                            이 창치 이름 아시는분 있을까요? 이 장치이름 아시는
                                            이 창치 이름 아시는분 있을까요? 이 장치이름 아시는
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            이 창치 이름 아시는분 있을까요? 이 장치이름 아시는
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            이 창치 이름 아시는분 있을까요? 이 장치이름 아시는
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            이 창치 이름 아시는분 있을까요? 이 장치이름 아시는
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            이 창치 이름 아시는분 있을까요? 이 장치이름 아시는
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                            답변
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            답변
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            답변
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            답변
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                            </li>
                                        </ul>
  
                                        <span>999+</span>
                                    </li>
                                </ul>
                                <ul className="depth">
                                    <li className="list">
                                        <span>
                                            답변
                                        </span>
                                    </li>
                                    <li className="list profile_wrap">
                                        <ul>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                            </li>
                                            <li>
                                                <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
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
                                            <img src="/src/assets/images/dummy/review_img_01.jpg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Product_name
                                                </p>
                                            </div>
                                            <p className="comment">
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/src/assets/images/dummy/review_img_01.jpg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Product_name
                                                </p>
                                            </div>
                                            <p className="comment">
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/src/assets/images/dummy/review_img_01.jpg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Product_name
                                                </p>
                                            </div>
                                            <p className="comment">
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
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
                                            <img src="/src/assets/images/dummy/review_img_01.jpg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Product_name
                                                </p>
                                            </div>
                                            <p className="comment">
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/src/assets/images/dummy/review_img_01.jpg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Product_name
                                                </p>
                                            </div>
                                            <p className="comment">
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                            </p>
                                            <button type="button" className="buy_btn">
                                                구매하기
                                            </button>
                                        </div>
                                    </li>
                                    <li className="list">
                                        <div className="img_box">
                                            <img src="/src/assets/images/dummy/review_img_01.jpg" alt=""/>
                                        </div>
                                        <div className="text_box">
                                            <div className="name_box">
                                                <p className="num">
                                                    50%
                                                </p>
                                                <p className="name">
                                                    Product_name
                                                </p>
                                            </div>
                                            <p className="comment">
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
                                                내용을 입력해주세요. 더미텍스트 구간 입니다.
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
                                    <img src="/src/assets/images/main/big_slide_img.png" alt=""/>
                                </div>
                                <div className="text_box">
                                    <h3>
                                        숨겨있는 나만의
                                        <br/>
                                        아티스트를 찾아보세요.
                                    </h3>
                                    <p>
                                        비트썸원이 모든 것을 도와드립니다.
                                        <br/>
                                        한 번의 등록으로 빠르고 정확한 판매와 정산을 경험하세요.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/src/assets/images/main/big_slide_img.png" alt=""/>
                                </div>
                                <div className="text_box">
                                    <h3>
                                        숨겨있는 나만의2
                                        <br/>
                                        아티스트를 찾아보세요.
                                    </h3>
                                    <p>
                                        비트썸원이 모든 것을 도와드립니다.
                                        <br/>
                                        한 번의 등록으로 빠르고 정확한 판매와 정산을 경험하세요.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/src/assets/images/main/big_slide_img.png" alt="" />
                                </div>
                                <div className="text_box">
                                    <h3>
                                        숨겨있는 나만의3
                                        <br/>
                                        아티스트를 찾아보세요.
                                    </h3>
                                    <p>
                                        비트썸원이 모든 것을 도와드립니다.
                                        <br/>
                                        한 번의 등록으로 빠르고 정확한 판매와 정산을 경험하세요.
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
                                    <img src="/src/assets/images/main/slide_img_1.png" alt="slide 1" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/src/assets/images/main/slide_img_2.png" alt="slide 1" />
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img_box">
                                    <img src="/src/assets/images/main/slide_img_3.png" alt="slide 1" />
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
                                    의뢰 컨텐츠 제목 표기 영역으로 사용됩니다.
                                </span>
                                <span className="num">
                                    10,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    의뢰 컨텐츠 제목 표기 영역으로 사용됩니다.
                                </span>
                                <span className="num">
                                    10,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    의뢰 컨텐츠 제목 표기 영역으로 사용됩니다.
                                </span>
                                <span className="num">
                                    10,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    의뢰 컨텐츠 제목 표기 영역으로 사용됩니다.
                                </span>
                                <span className="num">
                                    10,000원
                                </span>
                            </li>
                            <li className="list">
                                <span className="text">
                                    의뢰 컨텐츠 제목 표기 영역으로 사용됩니다.
                                </span>
                                <span className="num">
                                    10,000원
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
                                    <img src="/src/assets/images/main/survey_img_1.png" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="/src/assets/images/main/survey_img_1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/* END: Page Layout */}
      </>
    );
  }
  
  export default Main;
  