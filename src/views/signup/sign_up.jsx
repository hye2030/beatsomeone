import { useState, useEffect } from "react";
import axios from 'axios';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import "@/assets/css/components/signinup.css";
import Terms from "../../components/body/terms"
import { isModal } from "../../components/header/recoil";;

function Main() {
    const [IdValue,setIdValue] = useState(null);
    useEffect(() => {
        if (localStorage.getItem("sign_id") === null) {
            alert("아이디 정보가 없습니다.");
            location.href = "/";
        }else{
            setIdValue(localStorage.getItem("sign_id"));
        }
    }, [localStorage.getItem("sign_id")]);

    const [existingEmailId, setExistingEmailId] = useState('');
    useEffect(() => {
        if (localStorage.getItem("existingEmailId") === null) {
        }else{
            if(localStorage.getItem("existingEmailId") == ""){
                setExistingEmailId("");
            }else{
                setExistingEmailId(localStorage.getItem("existingEmailId"));
            }
        }
    }, [localStorage.getItem("existingEmailId")]);

    const [usualEmail, setUsualEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [checkpwd, setCheckpwd] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [nicknameNext, setNicknameNext] = useState(false);
    const [phone, setPhone] = useState('');
    const [UserNation, setUserNation] = useState('');
    const [pwd_next, setPwd_next] = useState(false);
    const [certified, setCertified] = useState('');
    const [random, setRandom] = useState("000000")
    const [certifiedNext, setCertifiedNext] = useState(false);
    var marketingYN = "N";

    const pwRegEx = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{6,16}$/;
    const pwCheck = (pwd) => {
        if(pwd.match(pwRegEx)===null) {
            // console.log('비밀번호 형식을 확인해주세요');
            document.getElementById('pwd_err').classList.add('error_txt');
            document.getElementById('pwd_err').classList.remove('complete_txt');
            document.getElementById("pwd_err").textContent="비밀번호 입력조건에 맞지 않습니다.";
            setPwd_next(false);
            return;
        }else{ 
            // console.log('비밀번호 형식이 맞아요');
            document.getElementById('pwd_err').classList.add('complete_txt');
            document.getElementById('pwd_err').classList.remove('error_txt');
            document.getElementById("pwd_err").textContent="사용 가능한 비밀번호입니다.";
            setPwd_next(true);
        }
    }
    const pwConfirm = (checkpwd) => {
        if(pwd === checkpwd){
            document.getElementById("pwd_confirm_err").textContent="";
        }else{
            document.getElementById("pwd_confirm_err").textContent="입력한 비밀번호를 확인해주세요.";
        }
    }

    const nicknameConfirm = () => {
        if(nickname == ""){
            document.getElementById("nickname_confirm_err").textContent="닉네임을 입력해주세요.";
            document.getElementById("nickname_confirm_complete").textContent="";
            return false;
        }else{
            if(nickname.length < 2){
                document.getElementById("nickname_confirm_err").textContent="닉네임은 최소 2자 이상 입력해주세요.";
                document.getElementById("nickname_confirm_complete").textContent="";
                return false;
            }
            axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/nickNameCheck", {
                params: {
                    nickName: nickname
                }
            })
            .then(function (response) {
                if(response.data.code == 1){
                    setNicknameNext(true);
                    document.getElementById("nickname_confirm_err").textContent="";
                    document.getElementById("nickname_confirm_complete").textContent="사용 가능합니다.";
                }else{
                    setNicknameNext(false);
                    document.getElementById("nickname_confirm_err").textContent="이미 사용 중인 닉네임입니다.";
                    document.getElementById("nickname_confirm_complete").textContent="";
                }
            });
        }
    }

    const [nation, setNation] = useState([]);
    const [nationTel, setNationTel] = useState("국번");
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/nationality", )
        .then(function (response) {
            setNation(response.data.response);
        });
    }, []);

    /**인증번호 받기 */
    const phonehandlePress = (e) => {
        const phoneregex = /^[0-9\b ]{0,13}$/;
        if (phoneregex.test(e.target.value)) {
          setPhone(e.target.value);
        }
    }

    const sendSMS = () => {
        if(phone == ""){
            alert("휴대폰 번호를 입력해주세요.");
            return false;
        }

        const rand = String(Math.floor(Math.random()*1000000)).padStart(6, "0");
        setRandom(rand);
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/sms/send_one_message", {
                params: {
                    to: phone,
                    smsNumber: rand
                }
            })
            .then(function (response) {
                if(response.data.resultCode == "SUCCESS"){
                    document.getElementById('phone_confirm_err').classList.add('complete_txt');
                    document.getElementById('phone_confirm_err').classList.remove('error_txt');
                    document.getElementById("phone_confirm_err").textContent="인증번호가 발송되었습니다.";
                }else{
                    document.getElementById('phone_confirm_err').classList.add('error_txt');
                    document.getElementById('phone_confirm_err').classList.remove('complete_txt');
                    document.getElementById("phone_confirm_err").textContent="인증번호가 미발송되었습니다. 다시 확인해주세요.";
                }
            });
    }

    const certifiedButton = () => {
        if(random == "000000"){
            alert("인증번호 받기를 눌러주세요");
            return false;
        }

        if(random === certified){
            document.getElementById('phone_confirm_err').classList.add('complete_txt');
            document.getElementById('phone_confirm_err').classList.remove('error_txt');
            document.getElementById("phone_confirm_err").textContent="인증이 완료되었습니다.";
            
            document.getElementById('re_chkNum').disabled = true;
            document.getElementById('chkNum_btn').disabled = true;
            document.getElementById('certifiacte_input').disabled = true;
            setCertifiedNext(true);
        }else{
            document.getElementById('phone_confirm_err').classList.add('error_txt');
            document.getElementById('phone_confirm_err').classList.remove('complete_txt');
            document.getElementById("phone_confirm_err").textContent="인증번호를 다시 확인해주세요.";
            setCertifiedNext(false);
        }
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

    /**국가선택 텍스트용 변수 */
    const [nationTxt, setNationTxt] = useState("(필수) 국가선택");

    /**회원가입 버튼 */
    const ModalHandler = useSetRecoilState(isModal);
    const confirm_btn= () => {
        if(localStorage.getItem("sns") == "email"){
            if(pwd == ""){
                document.getElementById('pwd_err').classList.add('error_txt');
                document.getElementById('pwd_err').classList.remove('complete_txt');
                document.getElementById("pwd_err").textContent="비밀번호를 입력해주세요.";
                $("#pw_input").focus();
                return false;
            }
            if(pwd_next == false){
                document.getElementById('pwd_err').classList.add('error_txt');
                document.getElementById('pwd_err').classList.remove('complete_txt');
                document.getElementById("pwd_err").textContent="비밀번호 입력조건에 맞지 않습니다.";
                $("#pw_input").focus();
                return false;
            }
            if(pwd != checkpwd){
                document.getElementById("pwd_confirm_err").textContent="입력한 비밀번호를 확인해주세요.";
                $("#pw_input_chk").focus();
                return false;
            }
        }
        if(name == ""){
            document.getElementById("name_confirm_err").textContent="이름을 입력해주세요.";
            $("#name").focus();
            return false;
        }
        const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g; //한글
        let name_length = 2;
        if(regExp.test(name)){
            name_length = 2;
        }else{
            name_length = 4;
        }
        
        if(name.length < name_length){
            document.getElementById("name_confirm_err").textContent="이름은 최소 "+name_length+"자 이상 입력해주세요.";
            $("#name").focus();
            return false;
        }else{
            document.getElementById("name_confirm_err").textContent="";
        }

        if(nickname == ""){
            document.getElementById("nickname_confirm_err").textContent="닉네임을 입력해주세요.";
            $("#nickname").focus();
            return false;
        }
        if(nicknameNext == false){
            document.getElementById("nickname_confirm_err").textContent="닉네임 확인을 해주세요.";
            $("#nickname").focus();
            return false;
        }
        if(UserNation == "KR"){
            if(phone == ""){
                document.getElementById("phonenum_confirm_err").textContent="휴대폰번호를 입력해주세요.";
                $("#phone_num").focus();
                return false;
            }else{
                document.getElementById("phonenum_confirm_err").textContent="";
            }
        }
        if(UserNation == ""){
            document.getElementById("nation_confirm_err").textContent="거주 국가를 선택해주세요.";
            $("#nation_confirm_err").focus();
            return false;
        }else{
            document.getElementById("nation_confirm_err").textContent="";
        }
        if(UserNation == "KR"){
            if(certifiedNext == false){
                alert("인증번호를 확인해주세요.");
                return false;
            }
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

        // $('.signupC_modal').fadeIn(200);
        // console.log("sns: "+ localStorage.getItem("sns"));
        // console.log("snsKey: "+ localStorage.getItem("snsKey"));
        
        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/join", {
            existing_yn: "N",
            sns: localStorage.getItem("sns"),
            snsKey: localStorage.getItem("snsKey"),
            emailId: IdValue,
            password: pwd,
            signSite: "beatsomeone",
            email: usualEmail,
            name: name,
            memNickname: nickname,
            nationality: UserNation,
            phoneNumber: phone,
            marketingConsent: marketingYN,
            existingEmailId: existingEmailId
        })
        .then(function (response) {
            document.getElementById('signupC').disabled = true;
            $('.signupC_modal').fadeIn(200);
        }).catch(error => {
            alert("에러가 발생했습니다. 관리자에게 문의해주세요.");
            return false;
        })
    }

    const directLogin = () => {
        document.getElementById('signupC').disabled = true;
        ModalHandler("login");
        $('.signupC_modal').fadeOut(200);
        
        $('.route_modal.signIn').fadeIn(200);
    }
    // $('.signupC_modal .confirm_btn').click(() => {
    //     document.getElementById('signupC').disabled = true;
    //     ModalHandler("login");
    //     $('.signupC_modal').fadeOut(200);
        
    //     $("#login_email").val("");
    //     $('.route_modal.signIn').fadeIn(200);
    // });
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
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/getTerms", {
            params: {
                termsType: [termcode]
            }
        })
        .then(function (response) {
            setTerms(response.data.response);
            $('.terms_modal').fadeIn(200);
            $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
                e.stopPropagation();
            });
        });
    }

    /**클릭 테스트 */
    $(".SignAlert").css("display", "none");
    const clickTest = (e) => {
        $(".SignAlert").css("display", "none");
        e.target.parentNode.lastChild.style.display = "block";
    }

    /**모바일 헤더용 */
    if ($('.hamburger').hasClass('active')) {
        $('.hamburger').removeClass('active');
        $(".header_mb .side_menu").removeClass('active');
        $(".header_mb .side_bg").fadeOut(500);
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    }

    useEffect(() => {
        if(localStorage.getItem("sns") == "naver"){
            const params = new URLSearchParams(location.search);
            let name_param = (params.get("name"));
            setName(name_param);
        }
    }, []);

    return (
        <>
        <div id="wrap_content" className="signUp_page">
            <div className="top_deco"></div>

            {/* <!-- 메인컨텐츠 --> */}
            <section className="content_section">
                <div className="wrap_inner">
                    <h3 className="title" onClick={() => {aa()}}>
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
                                        <input type="text" id="offen_em" placeholder="(선택)자주 사용하는 이메일 주소" onChange={(e)=>{setUsualEmail(e.target.value);}} onFocus={(e)=>{document.getElementById('offen_em').parentNode.lastChild.style.display = 'none'; clickTest(e)}} />
                                        <div className="alert_box wrap_box SignAlert">
                                            ID(email)가 아닌 다른 Email로 정보 수신을 원하실 경우 입력해 주세요.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- 비밀번호 --> */}
                                {localStorage.getItem("sns") == "email" ? 
                                <div className="input_box password">
                                    <div className="input_wrap">
                                        <input type="password" id="pw_input" placeholder="비밀번호를 입력해 주세요" onChange={(e)=>{setPwd(e.target.value); pwCheck(e.target.value); }} onFocus={(e)=>{document.getElementById('pw_input').parentNode.lastChild.style.display = 'none'; clickTest(e)}} />
                                        <div className="alert_box wrap_box SignAlert">
                                            영문, 숫자, 특수문자( !@#$%^&* ‘) 중 2가지 이상 조합 6자이상 16자 이하 사용 가능
                                        </div>
                                    </div>
                                    <p className="" id="pwd_err" style={{marginBottom: "10px"}}>
                                    </p>
                                    {/* <p className="error_txt" id="pwd_err">
                                    </p>
                                    <p className="complete_txt" id="pwd_complete">
                                    </p> */}
                                    <div className="input_wrap">
                                        <input type="password" id="pw_input_chk" placeholder="비밀번호를 한번 더 입력해 주세요." onChange={(e)=>{setCheckpwd(e.target.value); pwConfirm(e.target.value)}} />
                                    </div>
                                    <p className="error_txt" id="pwd_confirm_err">
                                    </p>
                                </div>
                                : ""}
                                {/* <!-- 이름 및 별명 --> */}
                                <div className="input_box name">
                                    <div className="input_wrap">
                                        <input type="text" id="name" placeholder="(필수)이름 입력" value={name} onChange={(e)=>{setName(e.target.value); }} onFocus={(e)=>{document.getElementById('name').parentNode.lastChild.style.display = 'none'; clickTest(e)}}/>
                                        <div className="alert_box SignAlert">
                                            본명 기재 권장 / 한글 기준 2자 이상
                                        </div>
                                    </div>
                                    <p className="error_txt" id="name_confirm_err">
                                    </p>
                                    <div className="input_wrap nickname">
                                        <input type="text" id="nickname" placeholder="(필수)닉네임 입력" onChange={(e)=>{setNickname(e.target.value); }} onFocus={(e)=>{document.getElementById('nickname').parentNode.lastChild.style.display = 'none';clickTest(e)}}/>
                                        <div className="alert_box wrap_box down SignAlert">
                                            대소문자, 숫자, 한글, 특수문자, 이모지, 중국어, 일본어 허용 / 한글 기준 2~20자 / 영어 기준 2~40자
                                        </div>
                                    </div>
                                    <button type="button" className="basic_btn_red_border nicknameChk_btn" onClick={()=>{nicknameConfirm()}}>
                                        확인
                                    </button>
                                    <p className="error_txt" id="nickname_confirm_err">
                                    </p>
                                    <p className="complete_txt" id="nickname_confirm_complete">
                                    </p>
                                </div>
                                {/* <!-- 휴대폰번호 --> */}
                                <div className="input_box num">
                                    <div className="select_box_wrap country">
                                        <button type="button" onClick={(e) => { document.getElementById("nation_alert").style.display = "none"; clickTest(e) }} className="select_title">{nationTxt}</button>
                                        <ul>
                                            <li className="select_list" onClick={(e) => { setUserNation(""); setNationTel("국번"); }}>(필수)
                                            국가선택</li>
                                            {nation.map(nations => {
                                                return (
                                                    <li key={nations.codeIndex} className="select_list" data-codename={nations.codeName}  onClick={(e) => { setUserNation(nations.codeValue); setNationTel(nations.telNo); setNationTxt(nations.codeName) }}>
                                                        <span className="flag"><img src="" alt=""/></span>{nations.codeName}</li>
                                                )
                                            })}
                                        </ul>
                                        <div className="alert_box SignAlert" id="nation_alert">
                                            거주국가 기준으로 선택 권장
                                        </div>
                                    </div>

                                    {/* 국기 추가 마크업 ==> country클래스와 <span class="flag"><img src="" alt=""></span> 추가되었습니다 */}
                                    {/* <div className="select_box_wrap gray country">
                                        <button type="button" onclick="return false;" className="select_title">(필수)
                                            국가선택</button>
                                        <ul>
                                            <li className="select_list">
                                                <span className="flag"><img src="" alt=""/></span> 옵션1</li>
                                            <li className="select_list"><span className="flag"><img src="" alt=""/></span> 옵션1</li>
                                            <li className="select_list"><span className="flag"><img src="" alt=""/></span> 옵션1</li>
                                        </ul>
                                    </div> */}
                                    <p className="error_txt" id="nation_confirm_err">
                                    </p>

                                    <div className="num_wrap">
                                        <div className="select_box_wrap disabled" style={{width:"100px"}}>
                                            <button type="button" onClick={() => { return false; }} className="select_title" id="no_box">{nationTel}</button>
                                            {/* <ul>
                                                <li className="select_list">{nationTel}</li>
                                            </ul> */}
                                        </div>
                                        <div className="input_wrap phone_num">
                                            <input type="text" id="phone_num" placeholder={UserNation == "KR" ? "(필수) 휴대폰 번호 입력" : "(선택) 휴대폰 번호 입력"} onChange={phonehandlePress} value={phone} />
                                        </div>
                                    </div>
                                    <p className="error_txt" id="phonenum_confirm_err">
                                    </p>
                                    {
                                        (function() {
                                            if (UserNation == "KR"){
                                                return (
                                                    <>
                                                    {random=="000000"? 
                                                    <button type="button" className="basic_btn_red_border getNum_btn" onClick={() => {sendSMS();}}>
                                                        인증번호 받기
                                                    </button>
                                                    :
                                                    <button type="button" className="basic_btn_red_border getNum_btn" id="re_chkNum" onClick={() => {sendSMS();}}>
                                                        재전송
                                                    </button>
                                                    }
                                                    <div className="input_wrap" style={{width:"100%"}}>
                                                        <input type="text" placeholder="인증번호 입력" id="certifiacte_input" onChange={(e)=>{setCertified(e.target.value);}} />
                                                    </div>
                                                    <p className="" id="phone_confirm_err">
                                                    </p>
                                                    <button type="button" className="basic_btn_black chkNum_btn" id="chkNum_btn" onClick={() => {certifiedButton();}}>
                                                        인증하기
                                                    </button>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
                                    
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
                                <button type="button" className="complete_btn full_btn" id="signupC" onClick={()=>{confirm_btn()}}>
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
                    <button type="button" className="basic_btn_red confirm_btn" onClick={() => {directLogin()}}>
                        로그인
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
