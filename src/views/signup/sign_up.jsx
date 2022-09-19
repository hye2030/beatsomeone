import { useState, useEffect } from "react";
import axios from 'axios';
import "@/assets/css/components/signinup.css";
import Terms from "../../components/body/terms";

function Main() {
    const [IdValue,setIdValue] = useState(null);
    if (localStorage.getItem("sign_id") === null) {
        alert("아이디 정보가 없습니다.");
        location.href = "/";
    }else{
        useEffect( ()=>{
            setIdValue(localStorage.getItem("sign_id"));
        }, []);
    }

    const [usualEmail, setUsualEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [checkpwd, setCheckpwd] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');
    const [UserNation, setUserNation] = useState('');
    const [pwd_next, setPwd_next] = useState(false);
    var marketingYN = "N";

    const pwRegEx = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{6,16}$/;
    const pwCheck = (pwd) => {
        if(pwd.match(pwRegEx)===null) {
            console.log('비밀번호 형식을 확인해주세요');
            document.getElementById("pwd_err").textContent="6~16글자 사이의 비밀번호를 입력해주세요.";
            document.getElementById("pwd_complete").textContent="";
            setPwd_next(false);
            return;
        }else{ 
            console.log('비밀번호 형식이 맞아요');
            document.getElementById("pwd_complete").textContent="사용 가능한 비밀번호입니다.";
            document.getElementById("pwd_err").textContent="";
            setPwd_next(true);
        }
    }
    const pwConfirm = (checkpwd) => {
        if(pwd === checkpwd){
            document.getElementById("pwd_confirm_err").textContent="";
        }else{
            document.getElementById("pwd_confirm_err").textContent="비밀번호가 일치하지 않습니다.";
        }
    }

    const [nation, setNation] = useState([]);
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/member/nationality", )
        .then(function (response) {
            setNation(response.data.response);
        });
    }, []);

    const emailAlert = () => {
        
    }

    /**약관동의 */
    const data = [
        {id: "default2", title: '선택 1'},
        {id: "default3", title: '선택 2'},
        {id: "default4", title: '선택 3'},
        {id: "default5", title: '선택 4'},
        {id: "default6", title: '선택 5'}
      ];
    
    const [checkItems, setCheckItems] = useState([]);

    useEffect(() => {
        const check_init = ["default2", "default3", "default4", "default5", "default6"];
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

    /**회원가입 버튼 */
    const confirm_btn= () => {
        if(pwd == ""){
            alert("비밀번호를 입력해주세요.");
            return false;
        }
        if(pwd_next == false){
            alert("비밀번호를 확인해주세요.");
            return false;
        }
        if(pwd != checkpwd){
            alert("비밀번호가 일치하지 않습니다");
            return false;
        }
        if(name == ""){
            alert("이름을 입력해주세요.");
            return false;
        }
        if(nickname == ""){
            alert("닉네임을 입력해주세요.");
            return false;
        }
        if(phone == ""){
            alert("휴대폰번호를 입력해주세요.");
            return false;
        }
        if(UserNation == ""){
            alert("국가를 선택해주세요.");
            return false;
        }

        if(checkItems[0] != "default2"){
            alert("통합계정 가입에 동의해주세요");
            return false;
        }
        if(checkItems[1] != "default3"){
            alert("만 14세 이상에 동의해주세요");
            return false;
        }
        if(checkItems[2] != "default4"){
            alert("이용약관에 동의해주세요");
            return false;
        }
        if(checkItems[3] != "default5"){
            alert("개인정보 수집 및 이용동의에 동의해주세요");
            return false;
        }
        
        checkItems.forEach((n) => {  
            if(n == "default6"){
                marketingYN = "Y"
            }
        });

        $('.signupC_modal').fadeIn(200);

        // axios.put("https://beats-admin.codeidea.io/api/v1/member/join", {
        //     existing_yn: "N",
        //     sns: "email",
        //     emailId: IdValue,
        //     password: pwd,
        //     signSite: "beatsomeone",
        //     email: usualEmail,
        //     name: name,
        //     memNickname: nickname,
        //     nationality: UserNation,
        //     phoneNumber: phone,
        //     marketingConsent: marketingYN
        // })
        // .then(function (response) {
        // });
    }

    $('.signupC_modal .confirm_btn').click(() => {
        $('.signupC_modal').fadeOut(200);
        $('.route_modal.signIn').fadeIn(200);
    });
    const modalWrap = document.querySelectorAll('.modal_wrap');
    modalWrap.forEach((item, idx) => {
        const closeBtn = item.querySelectorAll('.close_btn');

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal_wrap')) {
                $(item).fadeOut(200);
                $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
            };
        });

        closeBtn.forEach((items, i) => {
            items.addEventListener('click', () => {
                $(item).fadeOut(200);
                $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
            });
        });
    });

    /**약관들 */
    const [terms, setTerms] = useState(["TE010100"]);
    const termClick = (termcode) => {
        axios.get("https://beats-admin.codeidea.io/api/v1/getTerms", {
            params: {
                termsType: [termcode]
            }
        })
        .then(function (response) {
            setTerms(response.data.response);
        });
    }

    return (
        <>
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
                                        <input type="text" id="emInput" value={IdValue || ''} readOnly />
                                    </div>
                                    <div className="input_wrap">
                                        <input type="text" id="offen_em" placeholder="(선택)자주 사용하는 이메일 주소" onChange={(e)=>{setUsualEmail(e.target.value);document.getElementById('offen_em').parentNode.lastChild.style.display = 'none';}} onFocus={(e)=>{document.getElementById('offen_em').parentNode.lastChild.style.display = 'block'}} />
                                        <div className="alert_box wrap_box" style={{display:'none'}}>
                                            ID(email)가 아닌 다른 Email로 정보 수신을 원하실 경우 입력해 주세요.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- 비밀번호 --> */}
                                <div className="input_box password">
                                    <div className="input_wrap">
                                        <input type="password" id="pw_input" placeholder="비밀번호를 입력해 주세요" onChange={(e)=>{setPwd(e.target.value); pwCheck(e.target.value); document.getElementById('pw_input').parentNode.lastChild.style.display = 'none';}} onFocus={(e)=>{document.getElementById('pw_input').parentNode.lastChild.style.display = 'block'}} />
                                        <div className="alert_box wrap_box" style={{display:'none'}}>
                                            영문, 숫자, 특수문자( !@#$%^&* ‘) 중 2가지 이상 조합 6자이상 16자 이하 사용 가능
                                        </div>
                                    </div>
                                    <p className="error_txt" id="pwd_err">
                                    </p>
                                    <p className="complete_txt" id="pwd_complete">
                                    </p>
                                    <div className="input_wrap">
                                        <input type="password" id="pw_input" placeholder="비밀번호를 한번 더 입력해 주세요." onChange={(e)=>{setCheckpwd(e.target.value); pwConfirm(e.target.value)}} />
                                    </div>
                                    <p className="error_txt" id="pwd_confirm_err">
                                    </p>
                                </div>
                                {/* <!-- 이름 및 별명 --> */}
                                <div className="input_box name">
                                    <div className="input_wrap">
                                        <input type="text" id="name" placeholder="(필수)이름 입력" onChange={(e)=>{setName(e.target.value); document.getElementById('name').parentNode.lastChild.style.display = 'none';}} onFocus={(e)=>{document.getElementById('name').parentNode.lastChild.style.display = 'block'}}/>
                                        <div className="alert_box" style={{display:'none'}}>
                                            본명 기재 권장 / 한글 기준 2자 이상
                                        </div>
                                    </div>
                                    <div className="input_wrap nickname">
                                        <input type="text" id="nickname" placeholder="(필수)닉네임 입력" onChange={(e)=>{setNickname(e.target.value); document.getElementById('nickname').parentNode.lastChild.style.display = 'none';}} onFocus={(e)=>{document.getElementById('nickname').parentNode.lastChild.style.display = 'block'}}/>
                                        <div className="alert_box wrap_box down" style={{display:'none'}}>
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
                                            <input type="text" id="phone_num" placeholder="(필수) 휴대폰 번호 입력" onChange={(e)=>{setPhone(e.target.value);}} />
                                        </div>
                                    </div>
                                    <p className="error_txt">
                                        닉네임은 최소 2글자 이상 입력해주세요.
                                    </p>
                                    <div className="select_box_wrap">
                                        <button type="button" onClick={() => { return false; }} className="select_title">(필수)
                                            국가선택</button>
                                        <ul>
                                            {nation.map(nations => {
                                                return (
                                                    <li key={nations.codeIndex} className="select_list" data-codename={nations.codeName}  onClick={(e) => { setUserNation(e.target.dataset.codename)}}>{nations.codeValue}</li>
                                                )
                                            })}
                                        </ul>
                                        <div className="alert_box" style={{display:'none'}}>
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
                                        <input type="checkbox" id="default1" onChange={(e) => handleAllCheck(e.target.checked)} checked={checkItems.length === data.length ? true : false} />
                                        <label htmlFor="default1">
                                            <span className="check_box_img"></span>
                                            <span className="check_box_text">전체 동의</span>
                                        </label>
                                    </div>
                                    <ul className="check_list">
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="default2" onChange={(e) => handleSingleCheck(e.target.checked, "default2")} checked={checkItems.includes("default2") ? true : false} />
                                                <label htmlFor="default2">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p>
                                                <span className="red">(필수)</span>통합계정 가입 동의
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="default3" onChange={(e) => handleSingleCheck(e.target.checked, "default3")} checked={checkItems.includes("default3") ? true : false} />
                                                <label htmlFor="default3">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p>
                                                <span className="red">(필수)</span>만 14세 이상입니다.
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="default4" onChange={(e) => handleSingleCheck(e.target.checked, "default4")} checked={checkItems.includes("default4") ? true : false} />
                                                <label htmlFor="default4">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p className="open_pop term" onClick={()=>{termClick("TE010100")}}>
                                                <span className="red">(필수)</span>이용약관
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="default5" onChange={(e) => handleSingleCheck(e.target.checked, "default5")} checked={checkItems.includes("default5") ? true : false} />
                                                <label htmlFor="default5">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p className="open_pop term" onClick={()=>{termClick("TE010200")}}>
                                                <span className="red">(필수)</span>개인정보수집 및 이용동의
                                            </p>
                                        </li>
                                        <li className="list">
                                            <div className="check_box">
                                                <input type="checkbox" id="default6" onChange={(e) => handleSingleCheck(e.target.checked, "default6")} checked={checkItems.includes("default6") ? true : false} />
                                                <label htmlFor="default6">
                                                    <span className="check_box_img"></span>
                                                </label>
                                            </div>
                                            <p className="open_pop term" onClick={()=>{termClick("TE010300")}}>
                                                <span>(선택)</span>마케팅 정보 수신 동의
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="last_comment">
                                    회원가입 시, 통합 계정으로 비트썸원이 제공하는 서비스를 모두 이용하실 수 있습니다.
                                </p>
                                <button type="button" className="complete_btn full_btn" onClick={()=>{confirm_btn()}}>
                                    완료
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
        </div>

        <Terms terms={terms} />
        <div className="modal_wrap message_modal signupC_modal">
            <div className="modal_box done">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    <span>BEAT SOMEONE</span> 회원가입이 완료되었습니다.
                    <br />
                    로그인 후 서비스를 이용해주세요.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn close_btn">
                        로그인
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
