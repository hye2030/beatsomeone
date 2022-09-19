import "@/assets/css/components/signinup.css";

function Main() {
    return (
        <>
        <div id="wrap_content" className="signUp_page integrated">
            <div className="wrap_inner">
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

                <div className="descrip_box">
                    <p className="check_txt">회원님은 이미 비트썸원 회원으로 가입되어 있습니다.</p>
                    <div className="dl_group">
                        <dl>
                            <dt>회원 ID :</dt>
                            <dd>abc123@emial.com</dd>
                        </dl>
                        <dl>
                            <dt>닉네임 :</dt>
                            <dd>비트썸*</dd>
                        </dl>
                        <dl>
                            <dt>최초 가입일 :</dt>
                            <dd>2000년 00월 00일</dd>
                        </dl>
                    </div>
                    <button type="button" className="btn_apply basic_btn_red"
                        onClick={()=> location.href ='/signinup/integrated_signup_terms'}>가입된 ID로 통합회원 전환</button>
                </div>

                <button type="button" className="btn_apply basic_btn_red_border"
                    onClick={()=> location.href ='/signinup/sign_up'}>건너 뛰고 신규회원으로 가입</button>

                <p className="descrip_txt">*비트썸원의 기존 회원의 경우 별도 가입 절차 없이 회원통합 절차를 통해 서비스 이용이 가능합니다.</p>
            </div>
        </div>
        </>
    );
}

export default Main;
