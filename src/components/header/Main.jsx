import { useEffect, useState } from "react";
import axios from 'axios';

import BybeatsLogoUrl from "@/assets/images/icon/icon_bybeats_logotext.svg";
import BeatsomeoneLogoUrl from "@/assets/images/icon/icon_beatsomeone_logotext.svg";
import LangComponent from "./Lang_header";

function Main() {
    /**언어 API용 변수*/
    const _idx = [];
    const _lang = [];
    const _langstyle = [];
    const _langcode =[];
    const[lang, setLang] = useState([]);
    const langValue = [];
    const setLangValue = (i) => {
        langValue.push({
            idx : _idx[i],
            language : _lang[i],
            style : _langstyle[i],
            langcode : _langcode[i]
        })
    }
    const[click_lang, setClick_lang]  = useState("kr");
    const select_lang = (select) => {
        setClick_lang(select);
    }
    
    /**메뉴 API용 변수*/
    const[menu, setMenu] = useState([]);
    const _menu = [];
    
    useEffect(() => {
        const apiCall = async () => {
            const response = await axios.get('https://beats-admin.codeidea.io/api/v1/lang');
            for(let i=0;i<response.data.response.data.length;i++)
            {
                let result = "";
                let style_result = "";
                if(response.data.response.data[i].langCode == "kr"){
                    result = "한국어"
                    if(click_lang == "kr"){
                        style_result = "active";
                    }
                }else if(response.data.response.data[i].langCode == "en"){
                    result = "English"
                    if(click_lang == "en"){
                        style_result = "active";
                    }
                }else if(response.data.response.data[i].langCode == "jp"){
                    result = "日本"
                    if(click_lang == "jp"){
                        style_result = "active";
                    }
                }else if(response.data.response.data[i].langCode == "ch"){
                    result = "中文"
                    if(click_lang == "ch"){
                        style_result = "active";
                    }
                }

                _idx.push(response.data.response.data[i].idx);
                _lang.push(result);
                _langstyle.push(style_result);
                _langcode.push(response.data.response.data[i].langCode);
                setLangValue(i);
            }
            setLang(langValue);
        };
        apiCall();

        axios.get("https://beats-admin.codeidea.io/api/v1/menuList", {
            params: {
            site: "bs",
            lang : click_lang
            }
        })
        .then(function (response) {
            // console.log(response.data.response.data);
            for(let i=0; i<response.data.response.data.length; i++){
                _menu.push(response.data.response.data[i].menuValue);
            }
            setMenu(menu.concat(_menu));
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
      }, [click_lang])

    const langList = lang.map((langElement, i) => (
        <li className={langElement.style} key={langElement.idx} onClick={()=>{select_lang(langElement.langcode)}}>{langElement.language}</li>
    ));

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
                                {langList}
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
                                    {menu[0]}
                                    <div className="bubble_box">
                                        <div className="rolling">
                                            <ul className="depth">
                                                <li className="list">
                                                {menu[11]}
                                                </li>
                                                <li className="list">
                                                {menu[12]}
                                                </li>
                                                <li className="list">
                                                {menu[13]}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <ul className="sec_depth">
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        {menu[10]}
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        {menu[11]}
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        {menu[12]}
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        {menu[13]}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="list">
                                <a href="#" onClick={() => { return false; }} className="link">
                                {menu[1]}
                                </a>
                            </li>
                            <li className="list">
                                <a href="#" onClick={() => { return false; }} className="link">
                                {menu[2]}
                                </a>
                                <ul className="sec_depth">
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        {menu[14]}
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                        {menu[15]}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="list">
                                <a href="trend/trend_list.html" className="link">
                                {menu[3]}
                                </a>
                            </li>
                            <li className="list">
                                <a href="../review/prd_list.html" className="link">
                                {menu[4]}
                                </a>
                            </li>
                            <li className="list">
                                <a href="../mypage/event.html" className="link">
                                {menu[16]}
                                </a>
                            </li>
                            <li className="list">
                                <a href="./common/notice_list.html" className="link">
                                {menu[15]}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right_side">
                        <ul className="user">
                            <li className="list sign_in">
                                <a href="#" onClick={() => { return false; }} className="link">
                                {menu[7]}
                                </a>
                            </li>
                            <li className="list sign_up">
                                <a href="#" onClick={() => { return false; }} className="link">
                                {menu[8]}
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

        {/* <!-- 하단 네비 --> */}
        <ul className="bottom_nav">
            <li className="list home active">
                <a href="index.html" className="link">
                    <div className="icon_box"></div>
                    <span>홈</span>
                </a>
            </li>
            <li className="list communication">
                <a href="#" onClick={() => {return false;}} className="link">
                    <div className="icon_box"></div>
                    <span>커뮤니티</span>
                </a>
            </li>
            <li className="list event">
                <a href="mypage/event.html" className="link">
                    <div className="icon_box"></div>
                    <span>이벤트</span>
                </a>
            </li>
            <li className="list mypage">
                <a href="mypage/my_request_song.html" className="link">
                    <div className="icon_box"></div>
                    <span>마이페이지</span>
                </a>
            </li>
        </ul>

        {/* <!-- 모바일 헤더 --> */}
        <header className="header_mb">
            <div className="inner">
                {/* <!-- <a href="javascript:history.back();" className="goBack_btn"></a> --> */}
                <h1 className="logo">
                    <a href="index.html" className="link"></a>
                </h1>
                <div className="hamburger">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* <!-- <div className="page_title">
                    검색
                </div> --> */}
            </div>
            <div className="side_menu">
                <div className="opacity_effect">
                    <div className="top_area">
                        <div className="language_wrap">
                            <button className="language_btn">
                                Language
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
                        <a href="#" onClick={() => {return false;}} className="link search_btn"></a>
                    </div>
                    <div className="link_wrap">
                        <a href="#" onClick={() => {return false;}} className="link">
                            BEAT SOMEONE
                        </a>
                        <a href="#" onClick={() => {return false;}} className="link">
                            BYBEATS
                        </a>
                    </div>
                    {/* <!-- 로그인전 --> */}
                    <div className="sign_inup">
                        <a href="#" onClick={() => {return false;}} className="link">
                            로그인
                        </a>
                        <a href="#" onClick={() => {return false;}} className="link">
                            회원가입
                        </a>
                    </div>
                    {/* <!-- 로그인 후 -->
                    <!-- <div className="profile_box">
                        <div className="img_box">
                            <img src="../images/icon/icon_user-circle.svg" alt="">
                        </div>
                        <div className="text_area">
                            <p className="nickname">
                                NICKNAME
                            </p>
                            <a href="mypage/my_request_song.html" claclassNamess="info_btn">
                                김비트님
                            </a>
                        </div>
                    </div> --> */}
                    <ul className="accordion">
                        <li className="list">
                            <div>
                                <div className="title main_link">
                                    피드
                                </div>
                                <ul className="sec_depth">
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link active">
                                             - 전체
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                            - 자작곡
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                            - 커버곡
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="feed/feed_list.html" className="link">
                                            - 일상
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="list">
                            <a href="#" onClick={() => {return false;}} className="link main_link">
                                음원제작 의뢰
                            </a>
                        </li>
                        <li className="list">
                            <div>
                                <div className="title main_link">
                                    질문/답변
                                </div>
                                <ul className="sec_depth">
                                    <li className="list">
                                        <a href="#" className="link active">
                                            - 질문/답변
                                        </a>
                                    </li>
                                    <li className="list">
                                        <a href="#" className="link">
                                            - 명예의 전당
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="list">
                            <a href="trend/trend_list.html" onClick={() => {return false;}} className="link main_link">
                                트렌드
                            </a>
                        </li>
                        <li className="list">
                            <a href="review/prd_list.html" onClick={() => {return false;}} className="link main_link">
                                제품 리뷰
                            </a>
                        </li>
                        <li className="list">
                            <a href="mypage/event.html" onClick={() => {return false;}} className="link main_link">
                                이벤트
                            </a>
                        </li>
                        <li className="list">
                            <a href="./common/notice_list.html" className="link main_link">
                                공지사항
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="side_bg"></div>
        </header>
      {/* END: Header */}
    </>
    );
}

export default Main;
