function Main() {
    return (
        <div className="modal_wrap big_modal route_modal signIn">
            <div className="modal_box">
                <button className="x_btn close_btn"></button>
                <div className="wrap">
                    <h3 className="title">
                        로그인
                    </h3>
                    <div className="btn_wrap">
                        <button type="button" className="signIn_btn newly google">Continue with Google</button>
                        <div className="dividing_line"></div>   
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
                                <legend hidden>이메일 로그인</legend>
                                <div className="input_wrap">
                                    <input type="text" className="emInput" placeholder="Email address" />
                                </div>
                                <p className="error_txt">올바른 이메일을 입력해 주세요.</p>
                                <p className="ex_txt">ex. beatsomeone@beatsomone.com</p>
                                <button type="button" className="full_btn continue_btn">
                                    로그인
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <div className="link_wrap">
                        <a href="#" onClick={()=>{return false;}} className="link reset_pw">
                            비밀번호 재설정
                        </a>
                        <span></span>
                        <a href="#" onClick={()=>{return false;}} className="link sign_up">
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Main;
  