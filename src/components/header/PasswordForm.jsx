function Main() {
    return (
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
                            <input type="password" placeholder="Password" />

                            <div className="alert_box wrap_box">
                                영문, 숫자, 특수문자( !@#$%^&* ‘) 중 2가지 이상 조합 6자이상 16자 이하 사용 가능
                                <button type="button" className="close_button">삭제버튼</button>
                            </div>
                        </div>
                        <p className="error_txt">
                            비밀번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.
                        </p>
                        <p className="error_txt">
                            비밀번호를 입력해주세요.
                        </p>
                        <button type="button" className="full_btn signIn_btn">
                            로그인
                        </button>
                    </fieldset>
                </form>
                <button type="button" className="link_btn reset_pw">
                    비밀번호를 잊어버리셨나요?
                </button>
            </div>
        </div>
    );
  }
  
  export default Main;
  