import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '@/stores/userSlice';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isModal } from "../../components/header/recoil";

const {Kakao} = window;

const KakaoLogin = (e) => {
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentType = useRecoilValue(isModal);

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

                    let apiUrl = "/api/v1/member/joinCheck";
                    if(currentType == "join"){
                        apiUrl = "/api/v1/member/joinEmailCheck";
                    }

                    axios.get(import.meta.env.VITE_REACT_APP_API_URL + apiUrl, {
                        params: {
                            emailId: data.data.kakao_account.email,
                            sns : "kakao",
                            snsKey: data.data.id
                        }
                    })
                    .then(function (response) {
                        if(response.data.code == 0){
                            if(response.data.response == 0){
                                // $('.route_modal.signIn').fadeOut(200);
                                // $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                                if(currentType != "join"){
                                    $("#noSnsModal").fadeIn(200);
                                }else{
                                    $('.route_modal.signIn').fadeOut(200);
                                    navigate('/signinup/sign_up'); 
                                }
                                //navigate('/signinup/sign_up');
                            }else if(response.data.response == 1){
                                $('.route_modal.signIn').fadeOut(200);
                                $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                                navigate('/signinup/integrated_signup_guide');
                            }else if(response.data.response == 3){
                                $('.route_modal.signIn').fadeOut(200);
                                $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                                if(currentType == "join"){
                                    $("#localSNSImg").html('<div className="icon_box"><img src="/assets/images/icon/signUp_'+response.data.channel+'.svg"alt="" /></div>');
                                    $("#localSNSId").text("SNS ?????? ("+data.data.kakao_account.email+")");
                                    $("#alreadyJoinModal").fadeIn(200);
                                    return false;
                                }

                                axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/login", {
                                    sns: "kakao",
                                    snsKey: data.data.id
                                })
                                .then(function (response) {
                                    if(response.data.code == "0"){
                                        localStorage.setItem("emailId", response.data.response.email);
                                        localStorage.setItem("is_login", response.data._token);
                                        localStorage.setItem("last_login", "kakao");
                                        localStorage.setItem("emailIdx", response.data.response.idx);
                                        localStorage.setItem("nickname", response.data.response.nickName);

                                        dispatch(loginUser({
                                            "response": {
                                                "nickName": response.data.response.nickName,
                                                "email": data.data.id,
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
                                alert("?????????????????? ????????? ???????????? ?????????????????????.");
                                navigate("/");
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
            {/* <button type="button" className="signIn_btn kakaotalk" onClick={kakaoLoginClickHandler}> */}
            <button type="button" className={e.value == "new"? "signIn_btn kakaotalk newly" : "signIn_btn kakaotalk"} onClick={kakaoLoginClickHandler}>
                Continue with kakaotalk
            </button>
        </>
    )
}

export default KakaoLogin