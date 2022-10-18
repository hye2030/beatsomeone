import { useEffect, useRef } from 'react'
import TwitterLogin from "react-twitter-login";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '@/stores/userSlice';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isModal } from "../../components/header/recoil";

import {authentication} from '../../stores/firebase-config'
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const TwitLogin = (e) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentType = useRecoilValue(isModal);
    
    /*const twitterRef = useRef()
    const authHandler = (err, data) => {
        console.log(err, data);
    };
    const handleTwitterLogin = () => {
		twitterRef.current.children[0].click()
	}
    const TwitterButton = (props) => {
        return (
            <>
            <TwitterLogin
                authCallback={authHandler}
                consumerKey="7gKUNXGvYdh5DAudSHe4irrWU"
                consumerSecret="HD0Sq36b9sITt9AkiwRB89Y6Dz6A3NrsFOzdKzzcrxtorApFcF"
                callbackUrl="https://beatsomeone.codeidea.io"
                ref={twitterRef} id="twitterIdLogin" children = {props.children}
                />
            </>
        )
    }*/

    const login = () => {
        const provider = new TwitterAuthProvider();

        signInWithPopup(authentication, provider)
        .then((result) => {
            const credential = TwitterAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const secret = credential.secret;

            // The signed-in user info.
            const user = result.user;

            localStorage.setItem("sign_id", result.user.reloadUserInfo.providerUserInfo[0].email);
            localStorage.setItem("sns", "twitter");
            localStorage.setItem("snsKey", result.user.reloadUserInfo.providerUserInfo[0].rawId);
            axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/joinCheck", {
                params: {
                    emailId: result.user.reloadUserInfo.providerUserInfo[0].email,
                    sns : "twitter",
                    snsKey: result.user.reloadUserInfo.providerUserInfo[0].rawId
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
                            $("#localSNSImg").html('<div className="icon_box"><img src="/assets/images/icon/signUp_twitter.svg"alt="" /></div>');
                            $("#localSNSId").text("SNS 가입 ("+result.user.reloadUserInfo.providerUserInfo[0].email+")");
                            $("#alreadyJoinModal").fadeIn(200);
                            return false;
                        }

                        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/login", {
                            sns: "twitter",
                            snsKey: result.user.reloadUserInfo.providerUserInfo[0].rawId
                        })
                        .then(function (responseLogin) {
                            if(responseLogin.data.code == "0"){
                                localStorage.setItem("emailId", responseLogin.data.response.email);
                                localStorage.setItem("is_login", responseLogin.data._token);
                                localStorage.setItem("last_login", "twitter");
                                localStorage.setItem("emailIdx", responseLogin.data.response.idx);
                                localStorage.setItem("nickname", responseLogin.data.response.nickName);

                                dispatch(loginUser({
                                    "response": {
                                        "nickName": responseLogin.data.response.nickName,
                                        "email": result.user.reloadUserInfo.providerUserInfo[0].rawId,
                                        "idx": responseLogin.data.response.idx
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
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = TwitterAuthProvider.credentialFromError(error);
            navigate("/");
        });
    }

    return (
        <>
        {/* <TwitterButton>
            <button type="button" className="signIn_btn twitter" style={{marginBottom : "calc(100vw * (10 / 1300))"}}>
                Continue with twitter
            </button>
        </TwitterButton> */}
        {/* <button type="button" className="signIn_btn twitter" onClick={() => {login()}}> */}
        <button type="button" className={e.value == "new"? "signIn_btn twitter newly" : "signIn_btn twitter"} onClick={() => {login()}}>
            Continue with twitter
        </button>
        </>
    )
}

export default TwitLogin