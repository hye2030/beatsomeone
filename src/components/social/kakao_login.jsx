import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '@/stores/userSlice';

const {Kakao} = window;

const KakaoLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const kakaoLoginClickHandler = () => {
        Kakao.Auth.login({
            success: function(authObj){
                axios.get("https://kapi.kakao.com/v2/user/me ",
                {
                    headers: {
                        'content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                        'Authorization': 'Bearer '+authObj.access_token
                    }
                }).then((data) => {
                    localStorage.setItem("sign_id", data.data.kakao_account.email);
                    localStorage.setItem("sns", "kakao");
                    localStorage.setItem("snsKey", data.data.id);
                    axios.get("https://beats-admin.codeidea.io/api/v1/member/joinCheck", {
                        params: {
                            emailId: data.data.kakao_account.email,
                            sns : "kakao",
                            snsKey: data.data.id
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
                                console.log(data.data);

                                axios.put("https://beats-admin.codeidea.io/api/v1/member/login", {
                                    sns: "kakao",
                                    snsKey: data.data.id
                                })
                                .then(function (response) {
                                    if(response.data.code == "0"){
                                        localStorage.setItem("emailId", response.data.response.email);
                                        localStorage.setItem("is_login", response.data._token);

                                        dispatch(loginUser({
                                            "response": {
                                                "name": response.data.response.name,
                                                "email": data.data.id
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

                })
            },
            fail: function (err) {
                console.log(err);
            }
        })
    }

    return (
        <>
            <button type="button" className="signIn_btn kakaotalk" onClick={kakaoLoginClickHandler}>
                Continue with kakaotalk
            </button>
        </>
    )
}

export default KakaoLogin