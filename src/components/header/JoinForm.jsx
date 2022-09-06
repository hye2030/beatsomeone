import { useState } from "react";

function Main() {
    const [useremail, setUseremail] = useState("");
    const [next_check, next_setCheck] =  useState(false);

    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const emailCheck = (useremail) => {
        if(emailRegEx.test(useremail) == true){
            document.getElementById('email_validate').classList.remove('error');
            document.getElementById("warning").textContent="";
            next_setCheck(true);
        }else{
            document.getElementById('email_validate').classList.add('error');
            document.getElementById("warning").textContent="이메일 형식에 맞춰 입력해주세요.";
            next_setCheck(false);
        }
    }

    const joinButton = () => {
        if(next_check == true){
            localStorage.setItem("sign_id", useremail);
            location.href = '/signinup/sign_up';
        }
    }

    return (
        <div className="modal_wrap big_modal route_modal signUp">
            <div className="modal_box">
                <button className="x_btn close_btn"></button>
                <div className="wrap">
                    <h3 className="title">
                        통합회원가입
                    </h3>
                    <div className="logo_wrap">
                        <div className="beat_some"></div>
                        <div className="icon_x"></div>
                        <div className="by_beats"></div>
                    </div>
                    <div className="btn_wrap">
                        <div className="btn_area">
                            <button type="button" className="signIn_btn facebook">
                                Continue with Facebook
                            </button>
                            <button type="button" className="signIn_btn twitter">
                                Continue with twitter
                            </button>
                            <button type="button" className="signIn_btn google">
                                Continue with Google
                            </button>
                            <button type="button" className="signIn_btn apple">
                                Continue with Apple
                            </button>
                            <button type="button" className="signIn_btn naver">
                                Continue with Naver
                            </button>
                            <button type="button" className="signIn_btn kakaotalk">
                                Continue with kakaotalk
                            </button>
                            <button type="button" className="signIn_btn soundcloud">
                                Continue with Soundcloud
                            </button>
                        </div>
                        <div className="dividing_line"></div>
                        <form>
                            <fieldset>
                                <legend hidden>이메일 회원가입</legend>
                                <div className="input_wrap" id="email_validate">
                                    <input type="text" className="emInput" placeholder="Email address" id="sign_email" onChange={(e)=>{setUseremail(e.target.value); emailCheck(e.target.value)}} />
                                </div>
                                <p className="error_txt" id="warning"></p>
                                {/* <p className="error_txt">이메일 형식에 맞춰 입력해주세요.</p>
                                <p className="error_txt">입력하신 ID 정보를 찾을 수 없습니다.</p> */}
                                <p className="ex_txt">ex. beatsomeone@beatsomone.com</p>
                                
                                {/* <!-- 값이 입력되긴 전에는 버튼 상태가 disabled 입니다  --> */}
                                <button type="button" className="full_btn continue_btn" onClick={()=>{joinButton()}}>
                                    다음
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
