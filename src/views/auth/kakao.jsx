import React, { useEffect } from "react";
import axios from 'axios';

function Main() {
    useEffect(()=> {
        let params = new URL(document.location.toString()).searchParams;
        let code = params.get("code"); // 인가코드 받는 부분
        let grant_type = "authorization_code";
        let client_id = "b3235f231e956673855f84ed2cbc5cf2";
    
        axios.post("https://kauth.kakao.com/oauth/token", {
            grant_type: {grant_type},
            client_id: {client_id},
            redirect_uri: "http://localhost:3000/auth/kakao",
            code: {code}
        },
        {headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }}).then((res) => {
          console.log(res)
          //작업 처리 할것임
      })
      }, [])
    
      return <div>빈페이지빈페이지빈페이지빈페이지빈페이지빈페이지빈페이지빈페이지</div>;
}

export default Main;
