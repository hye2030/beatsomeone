import { useEffect, useRef } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

const GoogleLogins = (e) => {
    const clientId = "1057096607214-53sfrnp2rssjudd6pmb9ha3m8dildh2l.apps.googleusercontent.com";
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        
        axios.get("https://beats-admin.codeidea.io/api/v1/member/joinCheck", {
            params: {
                emailId: res.profileObj.email,
                sns : "google",
                snsKey: res.profileObj.googleId
            }
        })
        .then(function (response) {
            if(response.data.code == 0){
                if(response.data.response == 0){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    navigate('/signinup/sign_up');
                }else if(response.data.response == 1){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                    navigate('/signinup/integrated_signup_guide');
                }else if(response.data.response == 3){
                    $('.route_modal.signIn').fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                    axios.put("https://beats-admin.codeidea.io/api/v1/member/login", {
                        sns: "google",
                        snsKey: res.profileObj.googleId
                    })
                    .then(function (response) {
                        if(response.data.code == "0"){
                            localStorage.setItem("emailId", response.data.response.email);
                            localStorage.setItem("is_login", response.data._token);
                            localStorage.setItem("last_login", "google");

                            dispatch(loginUser({
                                "response": {
                                    "name": response.data.response.name,
                                    "email": res.profileObj.googleId
                                }
                            }));

                            $('.signIn_modal').fadeOut(200);
                            $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                            navigate("/");
                        }
                    });
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