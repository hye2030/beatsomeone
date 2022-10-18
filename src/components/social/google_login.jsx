import { useEffect, useRef } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '@/stores/userSlice';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isModal } from "../../components/header/recoil";

const GoogleLogins = (e) => {
    const clientId = "1057096607214-53sfrnp2rssjudd6pmb9ha3m8dildh2l.apps.googleusercontent.com";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentType = useRecoilValue(isModal);

    function handleCallbackResponse(data){
    }

    //실 1057096607214-53sfrnp2rssjudd6pmb9ha3m8dildh2l.apps.googleusercontent.com
    //테 22479064603-9fu0fm4ke7l12c6h2r5tdrl84a6ld91v.apps.googleusercontent.com
    
    // useEffect(() => {
    //     google.accounts.id.initialize({
    //         client_id: "1057096607214-53sfrnp2rssjudd6pmb9ha3m8dildh2l.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     });

    //     google.accounts.id.renderButton(
    //         document.getElementById("signInDiv"),
    //         {theme:"outline", 
    //         width: "100px",
    //         size:"L",
    //         locale:"en",
    //         text:"continue_with",
    //         logo_alignment:"center"}
    //     )
    // }, []);

    // const onGoogleLibraryLoad = () => {
    //     google.accounts.id.initialize({
    //         client_id: "1057096607214-53sfrnp2rssjudd6pmb9ha3m8dildh2l.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     });

    //     google.accounts.id.prompt();
    // };


    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id: clientId,
                scope: "email"
            })
        };

        gapi.load('client:auth2', start);
    }, [])

    const onSuccess = (res) => {
        localStorage.setItem("sign_id", res.profileObj.email);
        localStorage.setItem("sns", "google");
        localStorage.setItem("snsKey", res.profileObj.googleId);
        
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/joinCheck", {
            params: {
                emailId: res.profileObj.email,
                sns : "google",
                snsKey: res.profileObj.googleId
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
                        $("#localSNSImg").html('<div className="icon_box"><img src="/assets/images/icon/signUp_google.svg"alt="" /></div>');
                        $("#localSNSId").text("SNS 가입 ("+res.profileObj.email+")");
                        $("#alreadyJoinModal").fadeIn(200);
                        return false;
                    }

                    axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/login", {
                        sns: "google",
                        snsKey: res.profileObj.googleId
                    })
                    .then(function (response) {
                        if(response.data.code == "0"){
                            localStorage.setItem("emailId", response.data.response.email);
                            localStorage.setItem("is_login", response.data._token);
                            localStorage.setItem("last_login", "google");
                            localStorage.setItem("emailIdx", response.data.response.idx);
                            localStorage.setItem("nickname", response.data.response.nickName);

                            dispatch(loginUser({
                                "response": {
                                    "nickName": response.data.response.nickName,
                                    "email": res.profileObj.googleId,
                                    "idx": response.data.response.idx
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
                location.href = "/";
            }
        })
    }

    const onFailure = (res) => {
        // console.log(res);
        // alert("구글로그인에 실패하였습니다. 다시 시도해주세요.");
        return false;
    }

    return (
        <>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                coockiePolicy={'single_host_origin'}
                render={(renderProps) => (
                    // <button type="button" className="signIn_btn google" onClick={renderProps.onClick}>
                    <button type="button" className={e.value == "new"? "signIn_btn google newly" : "signIn_btn google"} onClick={renderProps.onClick}>
                        Continue with Google
                    </button>
                )}
            />
            {/* <div id="signInDiv"></div> */}
            {/* <button type="button" className="signIn_btn google" onClick={onGoogleLibraryLoad}>
                Continue with Google
            </button> */}
        </>
    )
}

export default GoogleLogins