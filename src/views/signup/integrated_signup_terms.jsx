import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

import "@/assets/css/components/signinup.css";
import Terms from "../../components/body/terms";

function Main() {
    const location = useLocation();
    const navigate = useNavigate();

    let sign_id = "";
    let chkEmail = "";
    let snsKey = "";
    if(location.state != null){
        sign_id = location.state.sign_id;
        snsKey = "";
        chkEmail = location.state.sign_id;
    }

    if(!(localStorage.getItem("sns") == "email")){
        sign_id = localStorage.getItem("snsKey");
        snsKey = localStorage.getItem("snsKey");
        chkEmail = localStorage.getItem("sign_id");
    }

    useEffect(() => {
        //모달창 닫기 commonjs에서 따옴
        const modalWrap = document.querySelectorAll('.modal_wrap');
        modalWrap.forEach((item, idx) => {
            const closeBtn = item.querySelectorAll('.close_btn');

            if(item.id == "integratedButton"){

            }else{
                item.addEventListener('click', (e) => {
                    if (e.target.classList.contains('modal_wrap')) {
                        $(item).fadeOut(200);
                    };
                });
            }

            closeBtn.forEach((items, i) => {
                items.addEventListener('click', () => {
                    $(item).fadeOut(200);
                });
            });
        });
    }, []);

    /**약관동의 */
    const data = [
        {id: "default2", title: '선택 1'},
        {id: "default3", title: '선택 2'},
        {id: "default4", title: '선택 3'},
        {id: "default5", title: '선택 4'},
        {id: "default6", title: '선택 5'},
        {id: "default7", title: '선택 6'}
      ];
    
    const [checkItems, setCheckItems] = useState([]);

    useEffect(() => {
        const check_init = ["default2", "default3", "default4", "default5", "default6", "default7"];
        setCheckItems(check_init);
    }, []);

    const handleSingleCheck = (checked, id) => {
    if (checked) {
        setCheckItems(prev => [...prev, id]);
    } else {
        setCheckItems(checkItems.filter((el) => el !== id));
    }
    };

    const handleAllCheck = (checked) => {
        if(checked) {
            const idArray = [];
            data.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            setCheckItems([]);
        }
    }
    checkItems.sort();

    /**약관들 */
    var marketingYN = "N";
    const [terms, setTerms] = useState(["TE010100"]);
    const termClick = (termcode) => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/getTerms", {
            params: {
                termsType: [termcode]
            }
        })
        .then(function (response) {
            setTerms(response.data.response);
            $('#termsModal').fadeIn(200);
            $('.btn_modal').click(function () {
                $(this).closest('.modal_bg').fadeOut(200);
            })
        });
    }

    const confirmLoginType = () => {
        if(sign_id == ""){
            alert("회원 아이디가 존재하지 않습니다. 다시 로그인해주세요.");
            return false;
        }

        if(checkItems[0] != "default2"){
            document.getElementById("term_error").textContent="이용약관(필수)에 모두 동의해 주세요.";
            //alert("통합계정 가입에 동의해주세요");
            return false;
        }
        if(checkItems[1] != "default3"){
            document.getElementById("term_error").textContent="이용약관(필수)에 모두 동의해 주세요.";
            //alert("만 14세 이상에 동의해주세요");
            return false;
        }
        if(checkItems[2] != "default4"){
            document.getElementById("term_error").textContent="이용약관(필수)에 모두 동의해 주세요.";
            //alert("이용약관에 동의해주세요");
            return false;
        }
        if(checkItems[3] != "default5"){
            document.getElementById("term_error").textContent="이용약관(필수)에 모두 동의해 주세요.";
            //alert("개인정보 수집 및 이용동의에 동의해주세요");
            return false;
        }
        if(checkItems[4] != "default6"){
            document.getElementById("term_error").textContent="이용약관(필수)에 모두 동의해 주세요.";
            //alert("위치정보서비스 이용동의에 동의해주세요");
            return false;
        }
        
        checkItems.forEach((n) => {  
            if(n == "default7"){
                marketingYN = "Y"
            }
        });

        document.getElementById("term_error").textContent="";
        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/join", {
            existing_yn: "Y",
            sns: localStorage.getItem("sns"),
            snsKey: snsKey,
            marketingConsent: marketingYN,
            emailId: chkEmail
        })
        .then(function (response) {
            if(response.data.response == 1){
                navigate("/signinup/integrated_signup_complete");
                //("#integratedButton").fadeIn(200);
            }else{
                alert("통합회원 전환이 완료되지 않았습니다. 다시 확인해주세요.");
                location.href="/";
            }
        });
    }

    const cancelLoginType = () => {
        $(".memberChangeCancel").fadeIn(200);
    }

    return (
        <>
        <div id="wrap_content" className="signUp_page integrated integrated_terms">
            <div className="wrap_inner">
                <div className="scroll_wrap">
                    <h3 className="title">
                        통합회원가입
                    </h3>
                    <div className="logo_wrap">
                        <div className="beat_some"></div>
                        <div className="icon_x"></div>
                        <div className="by_beats"></div>
                    </div>
                    <p>한 번의 가입으로! 하나의 ID로! <br />
                        BEAT SOMEONE 브랜드의 모든 서비스를 이용하자.
                    </p>
                    <div className="descrip_box center">
                        <p>회원님께서 가입하신 계정이 통합회원으로 전환됩니다.</p>
                        <dl>
                            {
                                { 
                                email : <><dt>회원 ID :</dt><dd>{chkEmail}</dd></>,
                                twitter: <><dd><span className="sns_logo"><img src="/assets/images/icon/signUp_twitter.svg" alt="페이스북 아이콘" /></span>{chkEmail}</dd></>,
                                google: <><dd><span className="sns_logo"><img src="/assets/images/icon/signUp_google.svg" alt="페이스북 아이콘" /></span>{chkEmail}</dd></>,
                                apple: <><dd><span className="sns_logo"><img src="/assets/images/icon/signUp_apple.svg" alt="페이스북 아이콘" /></span>{chkEmail}</dd></>,
                                naver: <><dd><span className="sns_logo"><img src="/assets/images/icon/signUp_naver.svg" alt="페이스북 아이콘" /></span>{chkEmail}</dd></>,
                                kakao : <><dd><span className="sns_logo"><img src="/assets/images/icon/signUp_kakao.svg" alt="페이스북 아이콘" /></span>{chkEmail}</dd></>,
                                }[localStorage.getItem("sns")]
                            }
                        </dl>
                    </div>
                    <div className="terms_area">
                        <p>아래의 약관동의를 통해 기존 가입하셨던 ID로 통합회원 전환하여 이용하실 수 있습니다.</p>
                        <div className="terms_box">
                            <ul>
                                <li className="check_box all">
                                    <input type="checkbox" id="default1" onChange={(e) => handleAllCheck(e.target.checked)} checked={checkItems.length === data.length ? true : false}/>
                                    <label htmlFor="default1">
                                        <span className="check_box_img"></span>
                                        <span className="check_box_text">전체 동의</span>
                                    </label>
                                </li>
                                <li className="check_box">
                                    <input type="checkbox" id="default2" onChange={(e) => handleSingleCheck(e.target.checked, "default2")} checked={checkItems.includes("default2") ? true : false}/>
                                    <label htmlFor="default2">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span className="essential">(필수)</span>
                                        통합계정 가입 동의
                                    </span>
                                </li>
                                <li className="check_box">
                                    <input type="checkbox" id="default3" onChange={(e) => handleSingleCheck(e.target.checked, "default3")} checked={checkItems.includes("default3") ? true : false}/>
                                    <label htmlFor="default3">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span className="essential">(필수)</span>
                                        만 14세 이상입니다.
                                    </span>
                                </li>
                                <li className="check_box arrow service">
                                    <input type="checkbox" id="default4" onChange={(e) => handleSingleCheck(e.target.checked, "default4")} checked={checkItems.includes("default4") ? true : false}/>
                                    <label htmlFor="default4">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text" onClick={()=>{termClick("TE010100")}}>
                                        <span className="essential">(필수)</span>
                                        이용약관
                                    </span>
                                </li>
                                <li className="check_box arrow user">
                                    <input type="checkbox" id="default5" onChange={(e) => handleSingleCheck(e.target.checked, "default5")} checked={checkItems.includes("default5") ? true : false}/>
                                    <label htmlFor="default5">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text" onClick={()=>{termClick("TE010200")}}>
                                        <span className="essential">(필수)</span>
                                        개인정보 수집 및 이용동의
                                    </span>
                                </li>
                                <li className="check_box arrow location">
                                    <input type="checkbox" id="default6" onChange={(e) => handleSingleCheck(e.target.checked, "default6")} checked={checkItems.includes("default6") ? true : false}/>
                                    <label htmlFor="default6">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text" onClick={()=>{termClick("TE010400")}}>
                                        <span className="essential">(필수)</span>
                                        위치정보서비스 이용동의
                                    </span>
                                </li>
                                <li className="check_box arrow marketing">
                                    <input type="checkbox" id="default7" onChange={(e) => handleSingleCheck(e.target.checked, "default7")} checked={checkItems.includes("default7") ? true : false}/>
                                    <label htmlFor="default7">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text" onClick={()=>{termClick("TE010300")}}>
                                        <span>(선택)</span>
                                        마케팅 정보 수신동의
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="error_txt" id='term_error'></p>
                </div>
                <div className="btn_group">
                    <button type="button" className="btn_apply basic_btn_black_border" onClick={() => {cancelLoginType()}}>취소</button>
                    <button type="button" className="btn_apply basic_btn_red" onClick={()=> confirmLoginType()}>확인</button>
                </div>
            </div>
        </div>

        <Terms terms={terms} />

        <div className="modal_wrap message_modal memberChangeCancel">
            <div className="modal_box question">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                통합회원 전환을 취소하겠습니까?
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red_border cancel_btn close_btn">
                        아니오
                    </button>
                    <button type="button" className="basic_btn_red confirm_btn "onClick={() => navigate("/")}>
                        네
                    </button>
                </div>
            </div>
        </div>

        <div className="modal_wrap message_modal memberChangeDone" id="integratedButton" >
            <div className="modal_box done">
                <p className="comment">
                    통합회원으로 회원전환이 완료되었습니다.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn" onClick={() => navigate("/")}>
                        확인
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
