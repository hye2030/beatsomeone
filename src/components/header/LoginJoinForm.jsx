import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {loginUser} from '@/stores/userSlice';
import NaverLogin from "../social/naver_login";
import GoogleLogin from "../social/google_login";
import KakaoLogin from "../social/kakao_login";
import FbLogin from "../social/fb_login";
import { isModal } from "../../components/header/recoil";

const LoginJoin = () => {
    const currentType = useRecoilValue(isModal);
    
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

    //아이디가 존재하는지 확인하고 패스워드 모달띄우기
    const NextButton = () => {
        if(next_check == true){
            $('.route_modal.signIn').fadeOut(200);
            $('.signIn_modal').fadeIn(200);
        }
    }

    const LoginPage = () => {
        if(pwd == ""){
            document.getElementById("LoginPwErr").textContent="비밀번호를 입력해주세요.";
            return false;
        }

        axios.put("https://beats-admin.codeidea.io/api/v1/member/login", {
            sns: "email",
            emailId: useremail,
            password: pwd
        })
        .then(function (response) {
            if(response.data.code == "0"){
                dispatch(loginUser(response.data));
                localStorage.setItem("sns", "email");
                localStorage.setItem("snsKey", "");
                localStorage.setItem("emailId", response.data.response.email);
                localStorage.setItem("is_login", response.data._token);

                $('.signIn_modal').fadeOut(200);
                $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                navigate("/");
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
            $('.route_modal.signUp').fadeOut(200);
            $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

            localStorage.setItem("sign_id", join_useremail);
            navigate('/signinup/sign_up');
        }
    }

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
                        <button type="button" className="signIn_btn newly google">Continue with Google</button>
                        <div className="dividing_line"></div> 
                        </>  
                        : null}
                        <div className="btn_area">
                            <FbLogin />
                            <button type="button" className="signIn_btn twitter">
                                Continue with twitter
                            </button>
                            <GoogleLogin />
                            <button type="button" className="signIn_btn apple">
                                Continue with Apple
                            </button>
                            <NaverLogin/>
                            <KakaoLogin />
                            {/* <a href={KAKAO_AUTH_URL} style={{marginBottom:"calc(100vw * (10 / 1300))"}}><button type="button" className="signIn_btn kakaotalk">
                                Continue with kakaotalk
                            </button></a> */}
                            <button type="button" className="signIn_btn soundcloud">
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
                                    <input type="text" className="emInput" placeholder="Email address" onChange={(e)=>{setUseremail(e.target.value); emailCheck(e.target.value)}} />
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
                                    <input type="text" className="emInput" placeholder="Email address" id="sign_email" onChange={(e)=>{join_setUseremail(e.target.value);  join_emailCheck(e.target.value)}}/>
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
        </>
    );
  }
  
  export default LoginJoin;
  