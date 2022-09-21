import { useEffect, useRef } from 'react'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleCallbackResponse(data){
        const credential = jwt_decode(data.credential);
        console.log(credential);

        localStorage.setItem("sign_id", credential.email);
        localStorage.setItem("sns", "google");
        localStorage.setItem("snsKey", credential.sub);
        
        axios.get("https://beats-admin.codeidea.io/api/v1/member/joinCheck", {
            params: {
                emailId: credential.email,
                sns : "google",
                snsKey: credential.sub
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
                        snsKey: credential.sub
                    })
                    .then(function (response) {
                        if(response.data.code == "0"){
                            localStorage.setItem("emailId", response.data.response.email);
                            localStorage.setItem("is_login", response.data._token);

                            dispatch(loginUser({
                                "response": {
                                    "name": response.data.response.name,
                                    "email": credential.sub
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

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "22479064603-9fu0fm4ke7l12c6h2r5tdrl84a6ld91v.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        // google.accounts.id.renderButton(
        //     document.getElementById("signInDiv"),
        //     {theme:"outline", 
        //     size:"small",}
        // )
    }, []);

    const onGoogleLibraryLoad = () => {
        google.accounts.id.initialize({
            client_id: "22479064603-9fu0fm4ke7l12c6h2r5tdrl84a6ld91v.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.prompt();
    };

    return (
        <>
            <div id="signInDiv"></div>
            <button type="button" className="signIn_btn google" onClick={onGoogleLibraryLoad}>
                Continue with Google
            </button>
        </>
    )
}

export default GoogleLogin