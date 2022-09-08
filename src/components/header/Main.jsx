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
            console.log(response.data.response.data);
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
                            <LangComponent value={menu}></LangComponent>
                            
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
      {/* END: Header */}
    </>
    );
}

export default Main;
