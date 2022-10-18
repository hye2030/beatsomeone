import axios from 'axios';
import jwt_decode from "jwt-decode";

const {FB} = window;

const FbLogin = () => {

    const FbLoginClickHandler = () => {
        FB.login(function(response) {
            if (response.status === 'connected') {
              // Logged into your webpage and Facebook.
            //   console.log(response);
              afterlogin(); 
            } else {
              // The person is not logged into your webpage or we are unable to tell. 
            }
        }, {scope: 'email'});
    }

    function afterlogin() {
        FB.api('/me', 'get', {fields: 'name,email'}, function(data) {
            localStorage.setItem("sign_id", data.email);
            localStorage.setItem("sns", "facebook");
            localStorage.setItem("snsKey", data.id);
            axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/joinCheck", {
                params: {
                    emailId: data.email,
                    sns : "facebook",
                    snsKey: data.id
                }
            })
            .then(function (response) {
                if(response.data.code == 0){
                    if(response.data.response == 0){
                        // $('.route_modal.signIn').fadeOut(200);
                        // $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                        $("#noSnsModal").fadeIn(200);
                        //navigate('/signinup/sign_up');
                    }else if(response.data.response == 1){
                        $('.route_modal.signIn').fadeOut(200);
                        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                        navigate('/signinup/integrated_signup_guide');
                    }else if(response.data.response == 3){
                        $('.route_modal.signIn').fadeOut(200);
                        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');

                        if(currentType == "join"){
                            $("#localSNSImg").html('<div className="icon_box"><img src="/assets/images/icon/signUp_facebook.svg"alt="" /></div>');
                            $("#localSNSId").text("SNS 가입 ("+data.email+")");
                            $("#alreadyJoinModal").fadeIn(200);
                            return false;
                        }

                        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/login", {
                            sns: "facebook",
                            snsKey: data.id
                        })
                        .then(function (response) {
                            if(response.data.code == "0"){
                                localStorage.setItem("emailId", response.data.response.email);
                                localStorage.setItem("is_login", response.data._token);
                                localStorage.setItem("last_login", "facebook");
                                localStorage.setItem("emailIdx", response.data.response.idx);
                                localStorage.setItem("nickname", response.data.response.nickName);

                                dispatch(loginUser({
                                    "response": {
                                        "nickName": response.data.response.nickName,
                                        "email": data.id,
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
        });
      }

    return (
        <>
            {/* <button type="button" className="signIn_btn facebook" onClick={FbLoginClickHandler}> */}
            <button type="button" className="signIn_btn facebook" onClick={() => alert("준비중입니다.")}>
                Continue with Facebook
            </button>
        </>
    )
}

export default FbLogin