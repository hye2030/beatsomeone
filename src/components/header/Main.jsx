import { useEffect, useState } from "react";
import axios from 'axios';

import BybeatsLogoUrl from "@/assets/images/icon/icon_bybeats_logotext.svg";
import BeatsomeoneLogoUrl from "@/assets/images/icon/icon_beatsomeone_logotext.svg";

function Main() {
    const[lang, setLang] = useState();
    useEffect(() => {
        const apiCall = async () => {
            const response = await axios.get('https://beats-admin.codeidea.io/api/v1/lang');
            //console.log(response.data.response.data);
            
            for(let i=0;i<response.data.response.data.length;i++)
            {
                console.log(response.data.response.data[i].idx);
                console.log(response.data.response.data[i].langValue);
            }
        };
        apiCall();
      }, [])

  return (
    <>
      {/* BEGIN: Header */}
        <header className="header_pc">
            <div className="header_top">
                <div className="inner">
                    <div className="tabs">
                        <a href="" className="tab">
                            <img
                                alt="바이비트 로고"
                                className="w-6"
                                src={BybeatsLogoUrl}
                            />
                        </a>
                        <a href="" className="tab active">
                            <img
                                alt="비트썸원 로고"
                                className="w-6"
                                src={BeatsomeoneLogoUrl}
                            />
                        </a>
                    </div>
                    <div className="right_side">
                        <div className="search_wrap">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <button className="search_btn" onClick={() => { location.href='search/search.html'; }}></button>
                        </div>
                        <div className="language_wrap">
                            <button className="language_btn">
                                language
                            </button>
                            <ul className="language_list">
                                <li className="active">
                                    한국어
                                </li>
                                <li>
                                    English
                                </li>
                                <li>
                                    日本
                                </li>
                                <li>
                                    中文
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_bottom">
                <div className="inner">
                    <div className="left_side">
                        <h1 className="logo">
                            <a href="/" className="link"></a>
                        </h1>
                        <ul className="gnb">
                            <li className="list hasSec">
                                <a href="#" onClick={() => { return false; }} className="link">
                                    피드
                                    <div className="bubble_box">
                                        <div className="rolling">
                                            <ul className="depth">
                                                <li className="list">
                                                    자작곡
                                                </li>
                                                <li className="list">
                                                    커버곡
                                                </li>
                                                <li className="list">
                                                    일상
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <ul className="sec_depth">
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                            전체
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                            자작곡
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                            커버곡
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                            일상
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="list">
                                <a href="#" onClick={() => { return false; }} className="link">
                                    음원제작 의뢰
                                </a>
                            </li>
                            <li className="list">
                                <a href="#" onClick={() => { return false; }} className="link">
                                    질문/답변
                                </a>
                                <ul className="sec_depth">
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        질문/답변
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        명예의 전당
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="list">
                                <a href="trend/trend_list.html" className="link">
                                    트렌드
                                </a>
                            </li>
                            <li className="list">
                                <a href="../review/prd_list.html" className="link">
                                    제품 리뷰
                                </a>
                            </li>
                            <li className="list">
                                <a href="../mypage/event.html" className="link">
                                    이벤트
                                </a>
                            </li>
                            <li className="list">
                                <a href="./common/notice_list.html" className="link">
                                    공지사항
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right_side">
                        <ul className="user">
                            <li className="list sign_in">
                                <a href="#" onClick={() => { return false; }} className="link">
                                    로그인
                                </a>
                            </li>
                            <li className="list sign_up">
                                <a href="#" onClick={() => { return false; }} className="link">
                                    회원가입
                                </a>
                            </li>
                        </ul>
                        {/*<div className="user_nav">
                            <div className="img_box"></div>
                            <span className="user_name">NickName</span>
                            <ul className="user_menu">
                                <li className="list">
                                    <a href="#" onClick={() => { return false; }} className="link">
                                        마이페이지
                                    </a>
                                </li>
                                <li className="list">
                                    <a href="#" onClick={() => { return false; }} className="link">
                                        개인정보 관리
                                    </a>
                                </li>
                                <li className="list logout">
                                    <a href="#" onClick={() => { return false; }} className="link">
                                        로그아웃
                                    </a>
                                </li>
                            </ul>
                        </div>*/}
                    </div>
                </div>
            </div>

        </header>
      {/* END: Header */}
    </>
  );
}

export default Main;
