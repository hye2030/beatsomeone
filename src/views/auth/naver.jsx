import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {loginUser} from '@/stores/userSlice';

function Main() {
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const { naver } = window
	const NAVER_CLIENT_ID = "7zMZQ1ATkf_uVtuhDMQO"
	const NAVER_CALLBACK_URL = "https://beatsomeone.codeidea.io/auth/naver"

	const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,      
            isPopup: true
      })
      naverLogin.init();

      window.addEventListener('load', function () {
            naverLogin.getLoginStatus(function (status) {
                  if (status) {
                        var id			= naverLogin.user.getId();
                        var nm			= naverLogin.user.getName();
                        var gender		= naverLogin.user.getGender();
                        var birthday	= naverLogin.user.getBirthday();
                        var email		= naverLogin.user.getEmail();
                        
                        var isRequire = true;
                        if(nm == 'undefined' || nm == null || nm == '') {
                              alert('이름은 필수 정보입니다. 정보제공을 동의해주세요.');
                              isRequire = false;
                        } else if(email == 'undefined' || email == null || email == '') {
                              alert('이메일은 필수 정보입니다. 정보제공을 동의해주세요.');
                              isRequire = false;
                        }
                        
                        
                        if(isRequire == false) {
                              naverLogin.reprompt(); // 필수정보를 얻지 못 했을 때 다시 정보제공 동의 화면으로 이동
                              return;	
                        }
                        
                        console.log(naverLogin.user);

                        localStorage.setItem("sign_id", naverLogin.user.email);
                        localStorage.setItem("sns", "naver");
                        localStorage.setItem("snsKey", naverLogin.user.id);
                        axios.get("https://beats-admin.codeidea.io/api/v1/member/joinCheck", {
                              params: {
                              emailId: naverLogin.user.email,
                              sns : "naver",
                              snsKey: naverLogin.user.id
                              }
                        })
                        .then(function (response) {
                              if(response.data.code == 0){
                                    if(response.data.response == 0){
                                          $('.route_modal.signIn').fadeOut(200);
                                          $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                                          window.close();
                                          window.opener.parent.location.href='/signinup/sign_up';
                                    }else if(response.data.response == 1){
                                          $('.route_modal.signIn').fadeOut(200);
                                          $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                                          window.close();
                                          window.opener.parent.location.href='/signinup/integrated_signup_guide';
                                    }else if(response.data.response == 3){
                                          $('.route_modal.signIn').fadeOut(200);
                                          $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                                          axios.put("https://beats-admin.codeidea.io/api/v1/member/login", {
                                                sns: "naver",
                                                snsKey: naverLogin.user.id
                                          })
                                          .then(function (responseLogin) {
                                                if(responseLogin.data.code == "0"){
                                                      localStorage.setItem("emailId", responseLogin.data.response.email);
                                                      localStorage.setItem("is_login", responseLogin.data._token);

                                                      dispatch(loginUser({
                                                            "response": {
                                                                  "name": responseLogin.data.response.name,
                                                                  "email": naverLogin.user.id
                                                            }
                                                      }));

                                                      $('.signIn_modal').fadeOut(200);
                                                      $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                                                      window.close();
                                                      window.opener.parent.location.href='/';
                                                }
                                          });
                                    }
                              }else{
                              location.href = "/";
                              }
                        })

                        // window.close();
                  } else {
                        console.log("callback 처리에 실패하였습니다.");
                        //window.opener.parent.location.reload();
                  }
            });
      });
}

export default Main;
