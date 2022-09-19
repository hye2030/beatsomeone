import "@/assets/css/components/signinup.css";

function Main() {
    return (
        <>
        <div id="wrap_content" className="signUp_page integrated integrated_complete">
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
                        <p className="check_txt">회원약관동의 완료</p>

                        <p>
                            비트썸원 서비스의 약관동의가 정상적으로 처리되었습니다. <br />
                            통합회원으로 전환하신 ID로 로그인하시면 <br />
                            비트썸원의 모든 브랜드 사이트를 이용할 수 있습니다.
                        </p>
                    </div>
                </div>

                <div className="btn_group">
                    <button type="button" className="btn_apply basic_btn_black_border"
                        onClick={() => {location.href='/'}}>메인화면</button>
                    <button type="button" className="btn_apply basic_btn_red">로그인</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
