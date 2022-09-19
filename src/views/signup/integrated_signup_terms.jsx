import "@/assets/css/components/signinup.css";

function Main() {
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
                            <dt>회원 ID :</dt>
                            <dd>abc123@emial.com</dd>
                            {/* <!-- sns가입 이메일 일때 -->
                            <!-- <dd>
                                <span className="sns_logo">
                                    <img src="../../images/icon/signUp_facebook.svg" alt="페이스북 아이콘">
                                </span> 
                                abc123@emial.com
                            </dd> --> */}
                        </dl>
                    </div>
                    <div className="terms_area">
                        <p>아래의 약관동의를 통해 기존 가입하셨던 ID로 통합회원 전환하여 이용하실 수 있습니다.</p>
                        <div className="terms_box">
                            <ul>
                                <li className="check_box all">
                                    <input type="checkbox" id="default1" defaultChecked/>
                                    <label htmlFor="default1">
                                        <span className="check_box_img"></span>
                                        <span className="check_box_text">전체 동의</span>
                                    </label>
                                </li>
                                <li className="check_box">
                                    <input type="checkbox" id="default2" defaultChecked/>
                                    <label htmlFor="default2">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span className="essential">(필수)</span>
                                        통합계정 가입 동의
                                    </span>
                                </li>
                                <li className="check_box">
                                    <input type="checkbox" id="default3" defaultChecked/>
                                    <label htmlFor="default3">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span className="essential">(필수)</span>
                                        만 14세 이상입니다.
                                    </span>
                                </li>
                                <li className="check_box arrow service">
                                    <input type="checkbox" id="default4" defaultChecked/>
                                    <label htmlFor="default4">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span className="essential">(필수)</span>
                                        이용약관
                                    </span>
                                </li>
                                <li className="check_box arrow user">
                                    <input type="checkbox" id="default5" defaultChecked/>
                                    <label htmlFor="default5">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span className="essential">(필수)</span>
                                        개인정보 수집 및 이용동의
                                    </span>
                                </li>
                                <li className="check_box arrow location">
                                    <input type="checkbox" id="default6" defaultChecked/>
                                    <label htmlFor="default6">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span className="essential">(필수)</span>
                                        위치정보서비스 이용동의
                                    </span>
                                </li>
                                <li className="check_box arrow marketing">
                                    <input type="checkbox" id="default7" defaultChecked/>
                                    <label htmlFor="default7">
                                        <span className="check_box_img"></span>
                                    </label>
                                    <span className="check_box_text">
                                        <span>(선택)</span>
                                        마케팅 정보 수신동의
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="error_txt">이용약관(필수)에 모두 동의해 주세요.</p>
                </div>
                <div className="btn_group">
                    <button type="button" className="btn_apply basic_btn_black_border">취소</button>
                    <button type="button" className="btn_apply basic_btn_red"
                        onClick={()=> location.href ='/signinup/integrated_signup_complete'}>확인</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
