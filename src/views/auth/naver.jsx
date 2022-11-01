import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {loginUser} from '@/stores/userSlice';

function Main() {
      const navigate = useNavigate();
      const dispatch = useDispatch();

      const { naver } = window
	const NAVER_CLIENT_ID = "kFIwy52wpxbG8D95tVEu"
	const NAVER_CALLBACK_URL = "https://beatsomeone.com/auth/naver"
      
      const url = decodeURIComponent(location.href);
      let param = url.substring(url.indexOf('?')+1, url.length);
      param = param.split("#");
      let currentType = param[0].split("=")[1];

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

                        localStorage.setItem("sign_id", naverLogin.user.email);
                        localStorage.setItem("sns", "naver");
                        localStorage.setItem("snsKey", naverLogin.user.id);

                        let apiUrl = "/api/v1/member/joinCheck";
                        if(currentType == "join"){
                              apiUrl = "/api/v1/member/joinEmailCheck";
                        }

                        axios.get(import.meta.env.VITE_REACT_APP_API_URL + apiUrl, {
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
                                          window.opener.nonSNSNaver(nm, currentType);
                                          //window.opener.parent.location.href='/signinup/sign_up?name='+nm;
                                    }else if(response.data.response == 1){
                                          $('.route_modal.signIn').fadeOut(200);
                                          $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                                          window.close();
                                          window.opener.parent.location.href='/signinup/integrated_signup_guide';
                                    }else if(response.data.response == 3){
                                          $('.route_modal.signIn').fadeOut(200);
                                          $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                                          window.close();
                                          window.opener.alreadySNSNaver(naverLogin, response);
                                          return false;

                                          // axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/login", {
                                          //       sns: "naver",
                                          //       snsKey: naverLogin.user.id
                                          // })
                                          // .then(function (responseLogin) {
                                          //       if(responseLogin.data.code == "0"){
                                          //             localStorage.setItem("emailId", responseLogin.data.response.email);
                                          //             localStorage.setItem("is_login", responseLogin.data._token);
                                          //             localStorage.setItem("last_login", "naver");

                                          //             dispatch(loginUser({
                                          //                   "response": {
                                          //                         "name": responseLogin.data.response.name,
                                          //                         "email": naverLogin.user.id
                                          //                   }
                                          //             }));

                                          //             $('.signIn_modal').fadeOut(200);
                                          //             $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                                          //             window.close();
                                          //             window.opener.parent.location.href='/';
                                          //       }
                                          // });
                                    }else if(response.data.response == 4){
                                          $('.route_modal.signIn').fadeOut(200);
                                          $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                                          window.close();
                                          window.opener.ignoreSNSNaver();
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
