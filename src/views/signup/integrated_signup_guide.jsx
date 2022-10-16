import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

import { isModal } from "../../components/header/recoil";
import "@/assets/css/components/signinup.css";

function Main() {
    const location = useLocation();
    const navigate = useNavigate();
    const ModalHandler = useSetRecoilState(isModal);

    let sign_id = "";
    let chkEmail = "";
    if(location.state != null){
        sign_id = location.state.sign_id;
        chkEmail = location.state.sign_id;
    }

    if(!(localStorage.getItem("sns") == "email")){
        sign_id = localStorage.getItem("sign_id");
        chkEmail = localStorage.getItem("sign_id");
    }


    let created_result = "";
    let nick_result = "";
    const [nickname, setNickname] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/memberBriefData", {
            params: {
                emailId: chkEmail
            }
        })
        .then(function (response) {
            nick_result = response.data.response.memNickname;
            created_result = response.data.response.createdAt;

            if(nick_result.length > 2){
                nick_result = nick_result.replace(/(?<=.{2})./gi, "*");
            }else{
                nick_result = nick_result.replace(/(?<=.{1})./gi, "*");
            }
            setNickname(nick_result);
            setCreatedAt(created_result);
        });

        //모달창 닫기 commonjs에서 갖고옴
        const modalWrap = document.querySelectorAll('.modal_wrap');
        modalWrap.forEach((item, idx) => {
            const closeBtn = item.querySelectorAll('.close_btn');

            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal_wrap')) {
                    $(item).fadeOut(200);
                };
            });

            closeBtn.forEach((items, i) => {
                items.addEventListener('click', () => {
                    $(item).fadeOut(200);
                });
            });
        });
    }, []);

    const changeType = () => {
        if(sign_id == ""){
            alert("회원 아이디가 존재하지 않습니다. 다시 로그인해주세요.");
            return false;
        }else{
            navigate("/signinup/integrated_signup_terms", {state : {sign_id : sign_id} });
        }
    }
    
    const newJoin = () => {
        $(".newSignup").fadeIn(200);
        localStorage.setItem("existingEmailId", sign_id);
    }

    const newJoin_comfirm = () => {
        ModalHandler("join");
        $('.route_modal.signIn').fadeIn(200);
    }
    
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
                            <dd>{chkEmail}</dd>
                        </dl>
                        <dl>
                            <dt>닉네임 :</dt>
                            <dd>{nickname}</dd>
                        </dl>
                        <dl>
                            <dt>최초 가입일 :</dt>
                            <dd>{createdAt}</dd>
                        </dl>
                    </div>
                    <button type="button" className="btn_apply basic_btn_red"
                        onClick={()=> changeType()}>가입된 ID로 통합회원 전환</button>
                </div>

                <button type="button" className="btn_apply basic_btn_red_border"
                    onClick={()=> newJoin()}>건너 뛰고 신규회원으로 가입</button>

                <p className="descrip_txt">*비트썸원의 기존 회원의 경우 별도 가입 절차 없이 회원통합 절차를 통해 서비스 이용이 가능합니다.</p>
            </div>
        </div>
        
        <div className="modal_wrap message_modal newSignup">
            <div className="modal_box question">
            <button className="x_btn close_btn"></button>
                <p className="small_comment">
                    <b>
                        기존 계정이 있으신 경우 회원전환으로 <br/>
                        통합회원 가입을 진행해주세요.<br/>
                    </b>
                    <br/>
                    가입절차 없이 포인트 통합과 비트썸원의 브랜드의 모든 서비스를 이용하실 수 있습니다. <br/>  
                    그래도 신규회원으로 가입하시곘어요?
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red_border close_btn">
                        취소
                    </button>
                    <button type="button" className="basic_btn_red " onClick={() => {newJoin_comfirm()}}>
                        확인
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
