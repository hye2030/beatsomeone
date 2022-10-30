import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

import BybeatsLogoUrl from "@/assets/images/icon/icon_bybeats_logotext.svg";
import BeatsomeoneLogoUrl from "@/assets/images/icon/icon_beatsomeone_logotext.svg";
import LangComponent from "./Lang_header";
import LangComponentM from "./Lang_header_mobile";

import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '@/stores/userSlice';
import {clearUser} from '@/stores/userSlice';

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
    const[display_lang, setDisplay_lang] = useState("한국어");
    
    useEffect(() => {
        const apiCall = async () => {
            const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL +'/api/v1/lang');
            for(let i=0;i<response.data.response.data.length;i++)
            {
                let result = "";
                let style_result = "";
                if(response.data.response.data[i].langCode == "kr"){
                    result = response.data.response.data[i].langValue
                    if(click_lang == "kr"){
                        style_result = "active";
                        setDisplay_lang(response.data.response.data[i].langValue);
                    }
                }else if(response.data.response.data[i].langCode == "en"){
                    result = response.data.response.data[i].langValue
                    if(click_lang == "en"){
                        style_result = "active";
                        setDisplay_lang(response.data.response.data[i].langValue);
                    }
                }else if(response.data.response.data[i].langCode == "jp"){
                    result = response.data.response.data[i].langValue
                    if(click_lang == "jp"){
                        style_result = "active";
                        setDisplay_lang(response.data.response.data[i].langValue);
                    }
                }else if(response.data.response.data[i].langCode == "ch"){
                    result = response.data.response.data[i].langValue
                    if(click_lang == "ch"){
                        style_result = "active";
                        setDisplay_lang(response.data.response.data[i].langValue);
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
        localStorage.setItem("language", click_lang);
        // LangComponent(click_lang);
      }, [click_lang])

    const langList = lang.map((langElement, i) => (
        <li className={langElement.style} key={langElement.idx} onClick={()=>{select_lang(langElement.langcode)}}>{langElement.language}</li>
    ));

    /**로그인 유지 */
    const dispatch = useDispatch();
    useEffect(() => {
        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/loginCheck", {
            sns: localStorage.getItem("sns"),
            snsKey: localStorage.getItem("snsKey"),
            emailId: localStorage.getItem("emailId"),
            _token: localStorage.getItem("is_login")
        })
        .then(function (response) {
            if(response.data.response == "1"){
                console.log("로그인 확인");
                dispatch(loginUser({
                    "code": 0,
                    "message": "로그인 유지 확인",
                    "response": {
                        "nickName": localStorage.getItem("nickname"),
                        "email": localStorage.getItem("emailId"),
                        "idx": localStorage.getItem("emailIdx")
                    }
                }));
            }else{
                dispatch(clearUser());
                localStorage.setItem("sns", "");
                localStorage.setItem("snsKey", "");
                localStorage.setItem("emailId", "");
                localStorage.setItem("is_login", "");
                localStorage.setItem("nickname", "");
                localStorage.setItem("emailIdx", "");
            }
        });
    }, [])

    const navigate = useNavigate();

    /**언어 번역 라이브러리 */
    const { t }  = useTranslation(['page']);
    
    useEffect(() => {
        if (localStorage.getItem("language") === null) {
            i18n.changeLanguage('ko');
        }else{
            if(localStorage.getItem("language") == "kr"){
                i18n.changeLanguage('ko');
            }else if(localStorage.getItem("language") == "en"){
                i18n.changeLanguage('en');
            }else if(localStorage.getItem("language") == "jp"){
                i18n.changeLanguage('jp');
            }else if(localStorage.getItem("language") == "ch"){
                i18n.changeLanguage('ch');
            }
        } 
    }, [localStorage.getItem("language")])

    /**외부영역 클릭 */
    const searchInputRef = useRef();
    useEffect(() => {
        function handleClickOutside(e){
            if (
                searchInputRef.current &&
                !searchInputRef.current.contains(e.target)
            ) {
                //$('.hamburger').removeClass('active');
                $(".header_mb .side_menu").removeClass('active');
                $(".header_mb .side_bg").fadeOut(500);
                $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchInputRef]);

    //현재 url 받아오기
    const location = useLocation();
    const [nowLocation, setNowLocation] = useState("/");
    const [mHeader, setMHeader] = useState("");
    useEffect(() => {
        setNowLocation(location.pathname);
        if(location.pathname.includes("feed")){
            setMHeader("피드");
        }else if(location.pathname.includes("event")){
            setMHeader("EVENT");
        }else if(location.pathname.includes("notice")){
            setMHeader("공지사항");
        }else if(location.pathname.includes("signinup")){
            setMHeader("회원가입");
        }
    }, [ location ])

    const user_idx = useSelector((state) => {return state.idx});
    let bybeat_url = "";
    if(user_idx != 0){
        bybeat_url = "https://bybeats-aws.prefinc.kr/login?emailId="+localStorage.getItem("emailId")+"&sns="+localStorage.getItem("sns")+"&snsKey="+localStorage.getItem("snsKey")+"&_token="+localStorage.getItem("is_login")+"&last_login="+localStorage.getItem("sns")+"&nickname="+localStorage.getItem("nickname")+"&idx="+localStorage.getItem("emailIdx");
    }

    return (
    <>
      {/* BEGIN: Header */}
        <header className="header_pc">
            <div className="header_top">
                <div className="inner">
                    <div className="tabs">
                        {user_idx == 0 ? 
                        <a href="https://bybeats-aws.prefinc.kr" className="tab" target="_blank">
                            <img
                                alt="바이비트 로고"
                                className="w-6"
                                src={BybeatsLogoUrl}
                            />
                        </a>
                        : 
                        <a href={bybeat_url} className="tab" target="_blank">
                            <img
                                alt="바이비트 로고"
                                className="w-6"
                                src={BybeatsLogoUrl}
                            />
                        </a>
                        }
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
                    <LangComponent value={click_lang}/>
                </div>
            </div>

        </header>

        {/* <!-- 하단 네비 --> */}
        <ul className="bottom_nav">
            <li className="list home active">
                <a onClick={() => {navigate("/")}} className="link">
                    <div className="icon_box"></div>
                    <span>{t('page:홈')}</span>
                </a>
            </li>
            <li className="list communication">
                <a onClick={() => {navigate('/feed/feed_list', {state : {type : ""} } )}} className="link">
                    <div className="icon_box"></div>
                    <span>{t('page:커뮤니티')}</span>
                </a>
            </li>
            <li className="list event">
                <a onClick={() => {navigate("/mypage/event")}} className="link">
                    <div className="icon_box"></div>
                    <span>{t('page:이벤트')}</span>
                </a>
            </li>
            <li className="list mypage">
                <a onClick={() => { alert("서비스 준비중입니다"); }} className="link">
                    <div className="icon_box"></div>
                    <span>{t('page:마이페이지')}</span>
                </a>
            </li>
        </ul>

        {/* <!-- 모바일 헤더 --> */}
        <header className={nowLocation == "/" ? "header_mb" : "header_mb detail_header"}>
            <div className="inner">
                <a onClick={() => navigate(-1)} className="goBack_btn"></a>
                <h1 className="logo" onClick={() => {navigate('/')}}>
                    <a href="index.html" className="link"></a>
                </h1>
                <div className="hamburger">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="page_title">
                {mHeader}
                </div>
            </div>
            <div className="side_menu" ref={searchInputRef}>
                <div className="opacity_effect">
                    <div className="top_area">
                        <div className="language_wrap">
                            <button className="language_btn">
                            </button>
                            <ul className="language_list">
                                {langList}
                            </ul>
                        </div>
                        <a href="#" onClick={() => {return false;}} className="link search_btn"></a>
                    </div>
                    <LangComponentM value={click_lang}/>
                </div>
            </div>
            <div className="side_bg"></div>
        </header>
      {/* END: Header */}
    </>
    );
}

export default Main;
