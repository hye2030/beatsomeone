import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {loginUser} from '@/stores/userSlice';
import NaverLogin from "../social/naver_login";
import GoogleLogins from "../social/google_login";
import KakaoLogin from "../social/kakao_login";
import FbLogin from "../social/fb_login";
import TwitLogin from "../social/twitter_login";
import AppleLogin from "../social/apple_login";
import { isModal } from "../../components/header/recoil";

const LoginJoin = () => {
    const currentType = useRecoilValue(isModal);
    const ModalHandler = useSetRecoilState(isModal);
    
    //로그인 관련
    const [useremail, setUseremail] = useState("");
    const [next_check, next_setCheck] =  useState(false);
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const emailCheck = (useremail) => {
        if(emailRegEx.test(useremail) == true){
            document.getElementById('login_email_validate').classList.remove('error');
            document.getElementById("login_warning").textContent="";
            next_setCheck(true);
        }else{
            document.getElementById('login_email_validate').classList.add('error');
            document.getElementById("login_warning").textContent="이메일 형식에 맞춰 입력해주세요.";
            next_setCheck(false);
        }
    }

    const NextButton = () => {
        if(next_check == true){
            axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/joinCheck", {
                params: {
                    sns: "email",
                    emailId: useremail
                }
            })
            .then(function (response) {
                if(response.data.response == 3){
                    $('.route_modal.signIn').fadeOut(200);
                    $('.signIn_modal').fadeIn(200);
                }else if(response.data.response == 0){
                    document.getElementById('login_email_validate').classList.add('error');
                    document.getElementById("login_warning").textContent="입력하신 아이디 정보를 찾을 수 없습니다.";
                    return false;
                }else if(response.data.response == 1){
                    $('.route_modal.signIn').fadeOut(200);
                    $('.signIn_modal').fadeIn(200);
                    // $('.route_modal.signIn').fadeOut(200);
                    // $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    // navigate("/signinup/integrated_signup_guide", {state : {sign_id : useremail} });
                }else if(response.data.response == 4){
                    document.getElementById('login_email_validate').classList.add('error');
                    document.getElementById("login_warning").textContent="입력하신 아이디 정보를 찾을 수 없습니다.";
                    return false;
                }
            });
        }
    }

    const LoginPage = () => {
        if(pwd == ""){
            document.getElementById("LoginPwErr").textContent="비밀번호를 입력해주세요.";
            return false;
        }

        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/login", {
            sns: "email",
            emailId: useremail,
            password: pwd
        })
        .then(function (response) {
            if(response.data.code == "0"){
                if(response.data.response.class == "1"){
                    $('.signIn_modal').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                    localStorage.setItem("sign_id", useremail);
                    localStorage.setItem("sns", "email");
                    navigate("/signinup/integrated_signup_guide", {state : {sign_id : useremail} });
                }else{
                    dispatch(loginUser(response.data));
                    localStorage.setItem("sns", "email");
                    localStorage.setItem("snsKey", "");
                    localStorage.setItem("emailId", response.data.response.email);
                    localStorage.setItem("emailIdx", response.data.response.idx);
                    localStorage.setItem("is_login", response.data._token);
                    localStorage.setItem("last_login", "email");
                    localStorage.setItem("nickname", response.data.response.nickName);

                    $('.signIn_modal').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    navigate("/");
                }
            }else if(response.data.code == "301"){
                console.log("아이디 또는 비밀번호가 누락되었습니다.");
                document.getElementById("LoginPwErr").textContent="비밀번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.";
            }else if(response.data.code == "302"){
                console.log("비밀번호가 일치하지 않습니다.");
                document.getElementById("LoginPwErr").textContent="비밀번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.";
            }else if(response.data.code == "303"){
                console.log("존재하지 않는 EMAIL 입니다.");
                document.getElementById("LoginPwErr").textContent="비밀번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.";
            }
        });
    }

    //회원가입 관련
    const [join_useremail, join_setUseremail] = useState("");
    const [join_next_check, join_next_setCheck] =  useState(false);

    const join_emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const join_emailCheck = (join_useremail) => {
        if(emailRegEx.test(join_useremail) == true){
            document.getElementById('email_validate').classList.remove('error');
            document.getElementById("warning").textContent="";
            join_next_setCheck(true);
        }else{
            document.getElementById('email_validate').classList.add('error');
            document.getElementById("warning").textContent="이메일 형식에 맞춰 입력해주세요.";
            join_next_setCheck(false);
        }
    }

    const joinButton = () => {
        if(join_useremail == ""){
            document.getElementById('email_validate').classList.add('error');
            document.getElementById("warning").textContent="이메일 형식에 맞춰 입력해주세요.";
        }

        if(join_next_check == true){
            axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/joinCheck", {
                params: {
                    sns: "email",
                    emailId: join_useremail
                }
            })
            .then(function (response) {
                if(response.data.response == 3){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    
                    $("#localSNSImg").html('');
                    $("#localSNSId").text("이메일 가입 ("+join_useremail+")");
                    $("#alreadyJoinModal").fadeIn(200);
                    // document.getElementById('email_validate').classList.add('error');
                    // document.getElementById("warning").textContent="이미 가입된 계정입니다.";
                    return false;
                }else if(response.data.response == 1){
                    document.getElementById("warning").textContent="통합회원가입 대상입니다.";
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                }else if(response.data.response == 0){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                    localStorage.setItem("sign_id", join_useremail);
                    localStorage.setItem("sns", "email");
                    navigate('/signinup/sign_up');
                }else if(response.data.response == 4){
                    document.getElementById('email_validate').classList.add('error');
                    document.getElementById("warning").textContent="입력하신 아이디 정보를 찾을 수 없습니다.";
                    return false;
                }
            });
        }
    }

    //최근 로그인 정보
    let last_login = "N"
    if (localStorage.getItem("last_login") === null) {
        last_login = "N";
    }else{
        if(localStorage.getItem("last_login") == "email"){
            last_login = "N";
        }else{
            last_login = localStorage.getItem("last_login");
        }
    }

    //input 값 리셋, 닫기창 로드
    useEffect(() => {
        $("#login_email").val("");
        $("#sign_email").val("");

        const modalWrap = document.querySelectorAll('.modal_wrap');
        modalWrap.forEach((item, idx) => {
            const closeBtn = item.querySelectorAll('.close_btn');

            if(item.id == "integratedButton" || item.id == "feed_add_login" || item.id == "feed_content_delete"){

            }else{
                item.addEventListener('click', (e) => {
                    if (e.target.classList.contains('modal_wrap')) {
                        $(item).fadeOut(200);
                        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    };
                });
            }

            closeBtn.forEach((items, i) => {
                items.addEventListener('click', () => {
                    $(item).fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                });
            });
        });
    }, [])
    
    //로그인 시도했으나 가입정보 없을때_SNS회원
    const [navernm, setNavernm] = useState("");
    const nonSNS = () => {
        if(localStorage.getItem("sns") == "naver"){
            location.href='/signinup/sign_up?name='+navernm;
        }else{
            navigate('/signinup/sign_up');
            $("#noSnsModal").fadeOut(200);
            $('.route_modal.signIn').fadeOut(200);
            $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
        }
    }

    window.nonSNSNaver = function (data){
        $("#noSnsModal").fadeIn(200);
        setNavernm(data);
    }

    //회원가입으로 시도했을시 이미 회원가입 계정으로 등록된 상태일 경우
    const alreadySNS = () => {
        ModalHandler("login");
        $('.route_modal.signIn').fadeIn(200);
        $("#alreadyJoinModal").fadeOut(200);
    }

    window.alreadySNSNaver = function (naverLogin){
        if(currentType == "join"){
            $('.route_modal.signIn').fadeOut(200);

            $("#localSNSImg").html('<div className="icon_box"><img src="/assets/images/icon/signUp_naver.svg"alt="" /></div>');
            $("#localSNSId").text("SNS 가입 ("+naverLogin.user.email+")");
            $("#alreadyJoinModal").fadeIn(200);
        }else{
            axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/login", {
                sns: "naver",
                snsKey: naverLogin.user.id
            })
            .then(function (responseLogin) {
                if(responseLogin.data.code == "0"){
                    localStorage.setItem("emailId", responseLogin.data.response.email);
                    localStorage.setItem("is_login", responseLogin.data._token);
                    localStorage.setItem("last_login", "naver");
                    localStorage.setItem("emailIdx", responseLogin.data.response.idx);
                    localStorage.setItem("nickname", responseLogin.data.response.nickName);

                    dispatch(loginUser({
                        "response": {
                                "nickName": responseLogin.data.response.nickName,
                                "email": naverLogin.user.id,
                                "idx": responseLogin.data.response.idx
                        }
                    }));

                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    navigate("/");
                }
            });
        }
    }

    //기존회원이었다가 신규회원으로 가입해서 기존 아이디가 N처리 된 경우
    window.ignoreSNSNaver = function (){
        $('.route_modal.signIn').fadeOut(200);
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
        alert("신규회원으로 가입한 아이디로 로그인해주세요.");
        navigate("/");
    }

    useEffect(() => {
        setUseremail("");
        join_setUseremail("");
    }, [currentType]);

    return (
        <>
        <div className="modal_wrap big_modal route_modal signIn">
            <div className="modal_box">
                <button className="x_btn close_btn"></button>
                <div className="wrap">
                    {currentType == "login" ?
                    <h3 className="title">
                        로그인
                    </h3>
                    :
                    <>
                    <h3 className="title">
                        통합회원가입
                    </h3>
                    <div className="logo_wrap">
                        <div className="beat_some"></div>
                        <div className="icon_x"></div>
                        <div className="by_beats"></div>
                    </div>
                    </>
                    }

                    <div className="btn_wrap">
                        {currentType == "login" ?
                        <>
                        {
                            { 
                            N : "",
                            facebook: <><FbLogin value="new"/><div className="dividing_line"></div></>,
                            twitter: <><TwitLogin value="new"/><div className="dividing_line"></div></>,
                            google: <><GoogleLogins value="new"/><div className="dividing_line"></div></>,
                            apple: <><AppleLogin value="new"/><div className="dividing_line"></div></>,
                            naver: <><NaverLogin value="new"/><div className="dividing_line"></div></>,
                            kakao : <><KakaoLogin value="new"/><div className="dividing_line"></div></>,
                            }[last_login]
                        }
                        {/* <button type="button" className="signIn_btn newly google">Continue with Google</button>
                        <div className="dividing_line"></div>  */}
                        </>  
                        : null}
                        <div className="btn_area">
                            {currentType == "login" && last_login == "facebook" ? "" : 
                            <FbLogin />
                            }
                            {currentType == "login" && last_login == "twitter" ? "" : 
                            <TwitLogin />
                            }
                            {currentType == "login" && last_login == "google" ? "" : 
                            <GoogleLogins />
                            }
                            {currentType == "login" && last_login == "apple" ? "" : 
                            <AppleLogin />
                            }
                            {currentType == "login" && last_login == "naver" ? "" : 
                            <NaverLogin/>
                            }
                            {currentType == "login" && last_login == "kakao" ? "" : 
                            <KakaoLogin />
                            }
                            {/* <a href={KAKAO_AUTH_URL} style={{marginBottom:"calc(100vw * (10 / 1300))"}}><button type="button" className="signIn_btn kakaotalk">
                                Continue with kakaotalk
                            </button></a> */}
                            <button type="button" className="signIn_btn soundcloud" onClick={() => alert("준비중입니다.")}>
                                Continue with Soundcloud
                            </button>
                        </div>
                        <div className="dividing_line"></div>
                        <form>
                            <fieldset>
                                {currentType == "login" ?
                                <>
                                <legend hidden>이메일 로그인</legend>
                                <div className="input_wrap" id="login_email_validate">
                                    <input type="text" className="emInput" placeholder="Email address" id="login_email" onChange={(e)=>{setUseremail(e.target.value); emailCheck(e.target.value)}} value={useremail || ""}/>
                                </div>
                                <p className="error_txt" id="login_warning"></p>
                                <p className="ex_txt">ex. beatsomeone@beatsomone.com</p>
                                <button type="button" className="full_btn continue_btn" onClick={() => {NextButton()}}>
                                    로그인
                                </button>
                                </>
                                : 
                                <>
                                <legend hidden>이메일 회원가입</legend>
                                <div className="input_wrap" id="email_validate">
                                    <input type="text" className="emInput" placeholder="Email address" id="sign_email" onChange={(e)=>{join_setUseremail(e.target.value);  join_emailCheck(e.target.value)}} value={join_useremail || ""}/>
                                </div>
                                <p className="error_txt" id="warning"></p>
                                {/* <p className="error_txt">이메일 형식에 맞춰 입력해주세요.</p>
                                <p className="error_txt">입력하신 ID 정보를 찾을 수 없습니다.</p> */}
                                <p className="ex_txt">ex. beatsomeone@beatsomone.com</p>
                                
                                {/* <!-- 값이 입력되긴 전에는 버튼 상태가 disabled 입니다  --> */}
                                <button type="button" className="full_btn continue_btn" onClick={()=>{joinButton()}}>
                                    다음
                                </button>
                                </>
                                }
                            </fieldset>
                        </form>
                    </div>
                    {currentType == "login" ?
                    <div className="link_wrap">
                        <a href="#" onClick={()=>{return false;}} className="link reset_pw">
                            비밀번호 재설정
                        </a>
                        <span></span>
                        <a href="#" onClick={()=>{return false;}} className="link sign_up">
                            회원가입
                        </a>
                    </div>
                    : null}
                </div>
            </div>
        </div>

        <div className="modal_wrap big_modal signIn_modal">
            <div className="modal_box">
                <button className="x_btn close_btn"></button>
                <h3 className="title">
                    비밀번호
                </h3>
                <form>
                    <fieldset>
                        <legend hidden>로그인</legend>
                        <div className="input_wrap">
                            <input type="password" placeholder="Password" onChange={(e) => {setPwd(e.target.value);}}/>

                            <div className="alert_box wrap_box">
                                영문, 숫자, 특수문자( !@#$%^&* ‘) 중 2가지 이상 조합 6자이상 16자 이하 사용 가능
                                <button type="button" className="close_button">삭제버튼</button>
                            </div>
                        </div>
                        <p className="error_txt" id="LoginPwErr">
                        </p>
                        <button type="button" className="full_btn signIn_btn" onClick={() => {LoginPage()}}>
                            로그인
                        </button>
                    </fieldset>
                </form>
                <button type="button" className="link_btn reset_pw">
                    비밀번호를 잊어버리셨나요?
                </button>
            </div>
        </div>

        <div className="modal_wrap message_modal noSnsModal" id="noSnsModal">
            <div className="modal_box question">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    해당 SNS 계정으로 가입된 정보가 없습니다. <br/>
                    회원가입 하시겠습니까?
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red_border cancel_btn close_btn">
                        아니오
                    </button>
                    <button type="button" className="basic_btn_red confirm_btn" onClick={() => nonSNS()}>
                        네
                    </button>
                </div>
            </div>
        </div>

        <div className="modal_wrap message_modal aleadyJoin_modal" id="alreadyJoinModal">
            <div className="modal_box alert">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    이미 가입된 계정입니다.
                    <br/>
                    로그인하여 이용해주세요.
                </p>
                {/* <!-- 이미 가입된 계정- sns 가입 계정인 경우--> */}
                <div className="email_info">
                    <div id="localSNSImg">
                        <div className="icon_box">
                            <img src="/assets/images/icon/signUp_twitter.svg" alt="" />
                        </div>
                    </div>
                    <p className="text_box" id="localSNSId">
                        SNS 가입 (sns@sns.com)
                    </p>
                </div>
                {/* <!-- 이미 가입된 계정- 이메일 가입일 경우 --> */}
                {/* <div class="email_info">
                    <p class="text_box">
                    이메일 가입 (email@email.com)
                    </p>
                </div> */}
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn" onClick={() => {alreadySNS()}}>
                        로그인
                    </button>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default LoginJoin;
  