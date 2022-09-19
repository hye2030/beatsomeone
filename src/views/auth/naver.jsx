import React, { useEffect } from "react";
import axios from 'axios';

function Main() {
      const { naver } = window
	const NAVER_CLIENT_ID = "7zMZQ1ATkf_uVtuhDMQO"
	const NAVER_CALLBACK_URL = "http://localhost:3000/auth/naver"

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
                        //localStorage.setItem("emailId", id);
                        window.close();
                        window.opener.parent.location.reload();
                  } else {
                        console.log("callback 처리에 실패하였습니다.");
                  }
            });
      });
}

export default Main;
