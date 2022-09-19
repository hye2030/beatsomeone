import axios from 'axios';

const {Kakao} = window;

const KakaoLogin = () => {
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
                    console.log(data);
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