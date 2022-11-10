import React, { useEffect } from "react";
import axios from 'axios';

function Main() {
    useEffect(()=> {
        let params = new URL(document.location.toString()).searchParams;
        let code = params.get("code"); // 인가코드 받는 부분
        let grant_type = "authorization_code";
        let client_id = "b3235f231e956673855f84ed2cbc5cf2";

        const formUrlEncoded = x => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')

        axios.post("https://kauth.kakao.com/oauth/token",
            formUrlEncoded({
                "grant_type": "authorization_code",
                "client_id": "b3235f231e956673855f84ed2cbc5cf2",
                "redirect_uri": 'http://localhost:3000/auth/kakao',
                "code": params.get("code"),
            })
            ,
            {
                headers: {
                    'content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                }
            }
        )
        .then((res) => {
            console.log("success");
            console.log(res);
            console.log(res.data.access_token);

            axios.get("https://kapi.kakao.com/v2/user/me ",
                {
                    headers: {
                        'content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                        'Authorization': 'Bearer '+res.data.access_token
                    }
                }
            ).then((data) => {
                console.log(data);
                location.replace("/");
            })
        })
        .catch((err) => {
            console.log("err");
            console.log(err.response.headers);
            console.log(err.response);
        })
    }, [])
}

export default Main;
