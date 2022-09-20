import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import BybeatsLogoUrl from "@/assets/images/icon/icon_bybeats_logotext.svg";
import BeatsomeoneLogoUrl from "@/assets/images/icon/icon_beatsomeone_logotext.svg";
import LangComponent from "./Lang_header";
import LangComponentM from "./Lang_header_mobile";

import { useDispatch } from 'react-redux';
import {loginUser} from '@/stores/userSlice';

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
    
    useEffect(() => {
        const apiCall = async () => {
            const response = await axios.get('https://beats-admin.codeidea.io/api/v1/lang');
            for(let i=0;i<response.data.response.data.length;i++)
            {
                let result = "";
                let style_result = "";
                if(response.data.response.data[i].langCode == "kr"){
                    result = response.data.response.data[i].langValue
                    if(click_lang == "kr"){
                        style_result = "active";
                    }
                }else if(response.data.response.data[i].langCode == "en"){
                    result = response.data.response.data[i].langValue
                    if(click_lang == "en"){
                        style_result = "active";
                    }
                }else if(response.data.response.data[i].langCode == "jp"){
                    result = response.data.response.data[i].langValue
                    if(click_lang == "jp"){
                        style_result = "active";
                    }
                }else if(response.data.response.data[i].langCode == "ch"){
                    result = response.data.response.data[i].langValue
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
        localStorage.setItem("language", click_lang);
        // LangComponent(click_lang);
      }, [click_lang])

    const langList = lang.map((langElement, i) => (
        <li className={langElement.style} key={langElement.idx} onClick={()=>{select_lang(langElement.langcode)}}>{langElement.language}</li>
    ));

    /**로그인 유지 */
    const dispatch = useDispatch();
    useEffect(() => {
        axios.put("https://beats-admin.codeidea.io/api/v1/member/loginCheck", {
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
                        "name": "길동",
                        "email": localStorage.getItem("emailId"),
                    }
                }));
            }
        });
    }, [])

    const navigate = useNavigate();

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
                    <LangComponent value={click_lang}/>
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
