import { useState } from "react";
import "@/assets/css/components/signinup.css";

function Main() {

    return (
        <div id="wrap_content" className="signUp_page">
            <div className="top_deco"></div>

            {/* <!-- 메인컨텐츠 --> */}
            <section className="content_section">
                <div className="wrap_inner">
                    <h3 className="title">
                        통합회원가입
                    </h3>
                    <div className="logo_wrap">
                        <div className="beat_some"></div>
                        <div className="icon_x"></div>
                        <div className="by_beats"></div>
                    </div>
                    <div className="input_container">
                        <form>
                            <fieldset>
                                <legend hidden>회원가입</legend>
                                {/* <!-- 이메일 --> */}
                                <div className="input_box email">
                                    <div className="input_wrap">
                                        <input type="text" id="emInput" value="urchoco@naver.com" readOnly />
                                        <div className="alert_box wrap_box">
                                            ID(email)가 아닌 다른 Email로 정보 수신을 원하실 경우 입력해 주세요.
                                        </div>
                                    </div>
                                    <div className="input_wrap">
                                        <input type="text" id="offen_em" placeholder="(선택)자주 사용하는 이메일 주소" />
                                    </div>
                                </div>
                                {/* <!-- 비밀번호 --> */}
                                <div className="input_box password">
                                    <div className="input_wrap">
                                        <input type="password" id="pw_input" placeholder="비밀번호를 입력해 주세요" />
                                        <div className="alert_box wrap_box">
                                            영문, 숫자, 특수문자( !@#$%^&* ‘) 중 2가지 이상 조합 6자이상 16자 이하 사용 가능
                                        </div>
                                    </div>
                                    <div className="input_wrap">
                                        <input type="password" id="pw_input" placeholder="비밀번호를 한번 더 입력해 주세요." />
                                    </div>
                                    <p className="error_txt">
                                        비밀번호가 잂치하지 않습니다.
                                    </p>
                                    <p className="complete_txt">
                                        사용 가능한 비밀번호입니다.
                                    </p>
                                    <p className="error_txt">
                                        6~18글자 사이의 비밀번호를 입력해 주세요.
                                    </p>
                                </div>
                                {/* <!-- 이름 및 별명 --> */}
                                <div className="input_box name">
                                    <div className="input_wrap">
                                        <input type="text" id="name" placeholder="(필수)이름 입력" />
                                        <div className="alert_box">
                                            본명 기재 권장 / 한글 기준 2자 이상
                                        </div>
                                    </div>
                                    <div className="input_wrap nickname">
                                        <input type="text" id="" placeholder="(필수)닉네임 입력" />
                                        <div className="alert_box wrap_box down">
                                            대소문자, 숫자, 한글, 특수문자, 이모지, 중국어, 일본어 허용 / 한글 기준 2~20자 / 영어 기준 2~40자
                                        </div>
                                    </div>
                                    <button type="button" className="basic_btn_red_border nicknameChk_btn">
                                        확인
                                    </button>
                                    <p className="error_txt">
                                        이미 사용중인 닉네임입니다.
                                    </p>
                                    <p className="error_txt">
                                        닉네임은 최소 2글자 이상 입력해주세요.
                                    </p>
                                    <p className="complete_txt">
                                        사용 가능한 닉네임입니다.
                                    </p>
                                </div>
                                {/* <!-- 휴대폰번호 --> */}
                                <div className="input_box num">
                                    <div className="num_wrap">
                                        <div className="select_box_wrap">
                                            <button type="button" onClick={() => { return false; }} className="select_title">+82</button>
                                            <ul>
                                                <li className="select_list">옵션1</li>
                                                <li className="select_list">옵션1</li>
                                                <li className="select_list">옵션1</li>
                                            </ul>
                                        </div>
                                        <div className="input_wrap phone_num">
                                            <input type="text" id="phone_num" placeholder="(필수) 휴대폰 번호 입력" />
                                        </div>
                                    </div>
                                    <p className="error_txt">
                                        닉네임은 최소 2글자 이상 입력해주세요.
                                    </p>
                                    <div className="select_box_wrap">
                                        <button type="button" onClick={() => { return false; }} className="select_title">(필수)
                                            국가선택</button>
                                        <ul>
                                            <li className="select_list">옵션1</li>
                                            <li className="select_list">옵션1</li>
                                            <li className="select_list">옵션1</li>
                                        </ul>
                                        <div className="alert_box">
                                            거주국가 기준으로 선택 권장
                                        </div>
                                    </div>
                                    <button type="button" className="basic_btn_red_border getNum_btn">
                                        인증번호 받기
                                    </button>
                                    <div className="input_wrap">
                                        <input type="text" placeholder="인증번호 입력" />
                                    </div>
                                    <p className="error_txt">
                                        인증번호가 일치하지 않습니다. 다시 시도해주세요.
                                    </p>
                                    <p className="complete_txt">
                                        인증이 완료되었습니다.
                                    </p>
                                    <button type="button" className="basic_btn_black chkNum_btn">
                                        인증하기
                                    </button>
                                </div>
                                {/* <!-- 동의 --> */}
                                <div className="agree_box">
                                    <div className="check_box top">
                                        <input type="checkbox" id="all_check" defaultChecked/>
                                        <label htmlFor="all_check">
                                            <span className="check_box_img"></span>
                                            <span className="check_box_text">전체 동의</span>
                                        </label>
                                    </div>
                                    <ul className="check_list">
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="check_1" defaultChecked/>
                                                <label htmlFor="check_1">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p>
                                                <span className="red">(필수)</span>통합계정 가입 동의
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="check_2" defaultChecked/>
                                                <label htmlFor="check_2">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p>
                                                <span className="red">(필수)</span>만 14세 이상입니다.
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="check_3" defaultChecked/>
                                                <label htmlFor="check_3">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p className="open_pop term">
                                                <span className="red">(필수)</span>이용약관
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="check_4" defaultChecked/>
                                                <label htmlFor="check_4">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p className="open_pop policy">
                                                <span className="red">(필수)</span>개인정보수집 및 이용동의
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="check_5" defaultChecked/>
                                                <label htmlFor="check_5">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p className="open_pop term">
                                                <span>(선택)</span>마케팅 정보 수신 동의
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="last_comment">
                                    회원가입 시, 통합 계정으로 비트썸원이 제공하는 서비스를 모두 이용하실 수 있습니다.
                                </p>
                                <button type="button" className="complete_btn full_btn">
                                    완료
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
