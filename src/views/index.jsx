import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

import MainVideoUrl from "@/assets/video/[BS_MA_01] main video.mp4";
import "@/assets/css/components/main.css";
import TopBanner from "../components/body/topbanner";
import MainPopup from '../components/body/mainpopup';
import MainFeed from "../components/body/mainfeed"
import MainFeedMobile from "../components/body/mainfeedMobile"

function Main() {
    const navigate = useNavigate();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);

        // jQuery("link[rel=stylesheet][href*='/src/assets/css/components/list.css']").remove();

    }, []);

    //진행중인 의뢰
    // const [reqing, setReqing] = useState(1);
    // let cnt = 1;
    // useEffect(() => {
    //     setInterval(() => {
    //         if(cnt == 1){
    //             setReqing(2);
    //             cnt = 2;
    //         }else{
    //             setReqing(1);
    //             cnt = 1;
    //         }
    //     }, 3000);
    // }, []);

    //상단 배너
    const [banners, setbanners] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL + "/api/v1/bannerList", {
            params: {
                bannerCode: "A001",
                lang: localStorage.getItem("language")
            }
        })
        .then(function (response) {
            setbanners(response.data.response.data);
        });
    }, [localStorage.getItem("language")]);

    /**모바일 헤더용 */
    if ($('.hamburger').hasClass('active')) {
        $('.hamburger').removeClass('active');
        $(".header_mb .side_menu").removeClass('active');
        $(".header_mb .side_bg").fadeOut(500);
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    }

    return (
      <>
        {/* BEGIN: Page Layout */}
        <div id="wrap_content" className="main_page">
            <div className="top_deco"></div>
            <section className={banners.length > 0 ? 'content_section' :"content_section no_banner"}>
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
                                지금, 당장 <br className="mobile_layout" />글로벌 뮤지션에{"\u00A0"}
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
                    {/* <!-- 모바일 리스트 슬라이드 --> */}
                    <MainFeedMobile/>
                    
                    {/* <!-- 피씨 및 테블릿 --> */}
                    <ul className="content">
                        {/* <!-- 자작곡 - self, 커버곡 - cover, 일상 - daily --> */}
                        <MainFeed />
                        {/* <li className="list_item cover">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_02.png" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                최근에 JBL 파티 박스가 도착하여 테스트해 봤습니다.
                                사운드도 좋고
                                마이크 성능도 기대 이상이라 놀러 가서 지인들이랑 놀기 정말 좋겠네요.
                                마이크는 건전지로 사용하고 무선이라
                                정말 걸어 다니는 노래방입니다ㅎㅎ
                            </div>
                        </li>
                        <li className="list_item daily">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_03.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                특이한 마이크인 타운센드 L22로 녹음하고 왔습니다.
                                일단 마이크 자체가 굉장히 이쁘고
                                플러그인을 사용해 마이크 프리셋을 자유롭게 사용할 수 있습니다.
                                실제로 설정을 바꿀 때마다 느낌이 많이 달라지더라고요
                                성능도 준수하고
                                굉장히 흥미로운 마이크였습니다.
                            </div>
                        </li>
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_04.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                매일 집에서 혼자 찍다가
                                듀엣곡을 하게 되어 스튜디오 빌려서 커버 영상 찍고 왔어요
                                완성되면 영상도 공유할게요
                            </div>
                        </li>
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_05.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                트랙패드 당근으로 구입했는데
                                설정만 하다가 다시 팔게 생겼어요
                                트랙패드 잘 아시는 분 있나요?
                            </div>
                        </li>
                        <li className="list_item cover">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_06.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                최근 작업한 OST 보컬 녹음 받고 왔어요
                                일반 스튜디오는 아니고 제작사 내부에 있는 스튜디오인데
                                굉장히 깔끔하게 잘되어 있었습니다.
                                부스도 굉장히 넓어
                                라이브 녹음도 가능해 보였습니다.
                            </div>
                        </li>
                        <li className="list_item daily">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_07.png" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                Lose Control – JJ Lin
                                카페에서 샤잠 돌려서 찾음
                                알고보니 샹치 OST ㅋㅋㅋㅋ
                                샹치 봤는데 왜 처음 들었지?
                            </div>
                        </li>
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_08.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                톤 스튜디에서 보컬 녹음함
                                깔끔하고 좋은거랑
                                특히 기사님 손이 엄청 빠름
                                다음에는 A룸에서 해봐야지
                            </div>
                        </li>
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_09.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                집에서 간단한 녹음 할려고
                                오디언트 iD4구입했어요
                                저가형 오인페 중에는
                                오디언트 프리앰프가 좋다고해서 장만했습니다
                                막귀라 차이는 잘 못느끼지만
                                손쉽게 사용할 수 있어서 좋네요
                            </div>
                        </li>
                        <li className="list_item cover">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_10_1.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                노이만 만들던 사람들이 만들었다는
                                Microtech Gefell M940 구입했습니다.
                                컴팩트하고 이쁘게 생겼는데
                                갖출 건 다 갖췄습니다.
                                굉장히 마음에 드네요
                            </div>
                        </li>
                        <li className="list_item daily">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_11.jpeg" alt="이미지" />
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
                                55:55 가져와야 되는데 케이블 잘못 챙겨서
                                작업 못하고 이야기만 하다 왔네요
                                다들 케이블 꼭 잘 챙기세요~
                            </div>
                        </li>
                        <li className="list_item self">
                            <div className="img_wrap">
                                <div className="img">
                                    <img src="/assets/images/dummy/main_feed_12.jpeg" alt="이미지" />
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
                                                        <img src="/assets/images/dummy/profile_04.jpg" alt=""/>
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
                                VTG라고 장비 악세사리 구입하던 곳인데
                                삼청동 쪽에 오프라인 스튜디오가 있더라고요
                                이번에 기타랑 보컬 녹음하고 왔는데
                                기사님이 굉장히 친절하게 잘해주시네요
                            </div>
                        </li> */}
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
                        <div className="swiper-container" style={{height : '280px', overflow : 'hidden'}}>
                            <div className="swiper-wrapper">
                                <div className='swiper-slide'>
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
                                <div className='swiper-slide'>
                                    <ul className="depth swiper-slide">
                                        <li className="list">
                                            <span className="text">
                                                저작권 프리 BGM 제작 의뢰합니다.
                                            </span>
                                            <span className="num">
                                                50,000원
                                            </span>
                                        </li>
                                        <li className="list">
                                            <span className="text">
                                                광고용 트랩 비트 구합니다
                                            </span>
                                            <span className="num">
                                                300,000원
                                            </span>
                                        </li>
                                        <li className="list">
                                            <span className="text">
                                                커버용 MR 제작 요청
                                            </span>
                                            <span className="num">
                                                40,000원
                                            </span>
                                        </li>
                                        <li className="list">
                                            <span className="text">
                                                피아노 연주곡 제작
                                            </span>
                                            <span className="num">
                                                70,000원
                                            </span>
                                        </li>
                                        <li className="list">
                                            <span className="text">
                                                교육용 연주곡 제작 의뢰
                                            </span>
                                            <span className="num">
                                                50,000원
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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

        <MainPopup />
      </>
    );
  }
  
  export default Main;
  