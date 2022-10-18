import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import {loginUser} from '@/stores/userSlice';

function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let emailId = params.get("emailId");
        let sns = params.get("sns");
        let snsKey = params.get("snsKey");
        let _token = params.get("_token");
        let last_login = params.get("last_login");
        let nickname = params.get("nickname");
        let idx = params.get("idx");

        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/member/joinCheck", {
            params: {
                emailId: emailId,
                sns : sns,
                snsKey: snsKey
            }
        })
        .then(function (response) {
            if(response.data.code == 0){
                if(response.data.response == 3){
                    dispatch(loginUser({
                        "code": 0,
                        "message": "로그인 유지 확인",
                        "response": {
                            "name": nickname,
                            "email": emailId,
                            "idx": idx,
                        }
                    }));
                    localStorage.setItem("sns", sns);
                    localStorage.setItem("snsKey", snsKey);
                    localStorage.setItem("emailId", emailId);
                    localStorage.setItem("is_login", _token);
                    localStorage.setItem("last_login", last_login);
                    localStorage.setItem("name", nickname);
                    localStorage.setItem("nickname", nickname);
                    localStorage.setItem("idx", idx);
            
                    navigate("/");
                }else{
                    alert("아이디 확인이 않습니다. 다시 로그인해주세요.");
                    location.href="/";
                }
            }else{
                alert("아이디 확인이 않습니다. 다시 로그인해주세요.");
                location.href="/";
            }
        })
    }, [])

    return (
        <></>
    );
  }
  
  export default Main;
  