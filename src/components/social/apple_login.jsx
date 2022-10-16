import { useEffect, useRef } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '@/stores/userSlice';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isModal } from "../../components/header/recoil";

const AppleLogin = (e) => {
    const appleRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentType = useRecoilValue(isModal);

    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);

    AppleID.auth.init({
        clientId : 'com.beatsomeone.codeidea.io.beatsomeone',
        scope : 'email',
        redirectURI: 'https://beatsomeone-aws.codeidea.io',
        state : toString(array[0]),
        usePopup: true
    });

    document.addEventListener('AppleIDSignInOnSuccess', (data) => {
        const credential = jwt_decode(data.detail.authorization.id_token);

        localStorage.setItem("sign_id", credential.email);
        localStorage.setItem("sns", "apple");
        localStorage.setItem("snsKey", credential.sub);
        axios.get("https://beats-admin.codeidea.io/api/v1/member/joinCheck", {
            params: {
                emailId: credential.email,
                sns : "apple",
                snsKey: credential.sub
            }
        })
        .then(function (response) {
            if(response.data.code == 0){
                if(response.data.response == 0){
                    // $('.route_modal.signIn').fadeOut(200);
                    // $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    $("#noSnsModal").fadeIn(200);
                    // navigate('/signinup/sign_up');
                }else if(response.data.response == 1){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    navigate('/signinup/integrated_signup_guide');
                }else if(response.data.response == 3){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                    if(currentType == "join"){
                        $("#localSNSImg").html('<div className="icon_box"><img src="/assets/images/icon/signUp_apple.svg"alt="" /></div>');
                        $("#localSNSId").text("SNS 가입 ("+credential.email+")");
                        $("#alreadyJoinModal").fadeIn(200);
                        return false;
                    }

                    axios.put("https://beats-admin.codeidea.io/api/v1/member/login", {
                        sns: "apple",
                        snsKey: credential.sub
                    })
                    .then(function (responseLogin) {
                        if(responseLogin.data.code == "0"){
                            localStorage.setItem("emailId", responseLogin.data.response.email);
                            localStorage.setItem("is_login", responseLogin.data._token);
                            localStorage.setItem("last_login", "apple");

                            dispatch(loginUser({
                                "response": {
                                    "name": responseLogin.data.response.name,
                                    "email": credential.sub
                                }
                            }));

                            $('.signIn_modal').fadeOut(200);
                            $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                            navigate("/");
                        }
                    });
                }else if(response.data.response == 4){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    alert("신규회원으로 가입한 아이디로 로그인해주세요.");
                    navigate("/");
                }
            }else{
                navigate("/");
            }
        })
    });

    //애플로 로그인 실패 시.
    document.addEventListener('AppleIDSignInOnFailure', (error) => {
        navigate("/");
    });

    const handleAppleLogin = () => {
		appleRef.current.children[0].click();
	}

    return (
        <>
            <div ref={appleRef} id="appleid-signin" data-color="black" data-border="true" data-type="sign in" style={{display:"none"}}></div>
            {/* <button type="button" className="signIn_btn apple" onClick={handleAppleLogin}> */}
            <button type="button" className={e.value == "new"? "signIn_btn apple newly" : "signIn_btn apple"} onClick={handleAppleLogin}>
                Continue with Apple
            </button>
        </>
    )
}

export default AppleLogin