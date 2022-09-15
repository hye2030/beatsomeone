import React, { useEffect } from "react";
import axios from 'axios';

function Main() {
    useEffect(()=> {
      const token = location.hash.split('=')[1].split('&')[0]; //token 출력

      axios.get("https://openapi.naver.com/v1/nid/me ",
            {
            headers: {
                  'content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                  'Authorization': 'Bearer '+token
            }
            }).then((data) => {
                  console.log(data);
                  //location.replace("/");
            }).catch((err) => {
                  console.log("err");
                  console.log(err.response.headers);
                  console.log(err.response);
            })
      }, [])
}

export default Main;
