import axios from 'axios';
import { useEffect, useState } from "react";
import MenuComponenet from "./MenuComponenet";

function Main(prop){
    let _menu = [];
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/menuList", {
            params: {
            site: "bs",
            lang : prop.value
            }
        })
        .then(function (response) {
            setUsers(response.data.response.data)
            // for(let i=0; i<response.data.response.data.length; i++){
            //     _menu.push(response.data.response.data[i].menuValue);
            // }
        }).catch(function (error) {
            // 오류발생시 실행
        }).then(function() {
            // 항상 실행
        });
    }, [prop.value])
    //console.log(users);

    return (
        <MenuComponenet users={users} />
        // <>
        // <div className="left_side">
        //         <h1 className="logo">
        //             <a href="/" className="link"></a>
        //         </h1>
        //         <ul className="gnb">
        //             <li className="list hasSec">
        //                 <a href="#" onClick={() => { return false; }} className="link">
        //                     피드
        //                     <div className="bubble_box">
        //                         <div className="rolling">
        //                             <ul className="depth">
        //                                 <li className="list">
        //                                 피드
        //                                 </li>
        //                                 <li className="list">
        //                                 피드
        //                                 </li>
        //                                 <li className="list">
        //                                 피드
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </a>
        //                 <ul className="sec_depth">
        //                     <li className="list">
        //                         <a href="feed/feed_list.html" className="link">
        //                         피드
        //                         </a>
        //                     </li>
        //                     <li className="list">
        //                         <a href="feed/feed_list.html" className="link">
        //                         ㄹㄴ
        //                         </a>
        //                     </li>
        //                     <li className="list">
        //                         <a href="feed/feed_list.html" className="link">
        //                         ㄹㄴㅇ
        //                         </a>
        //                     </li>
        //                     <li className="list">
        //                         <a href="feed/feed_list.html" className="link">
        //                         ㅇㄹㄴ
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li className="list">
        //                 <a href="#" onClick={() => { return false; }} className="link">
        //                 ㄹㄴ
        //                 </a>
        //             </li>
        //             <li className="list">
        //                 <a href="#" onClick={() => { return false; }} className="link">
        //                 ㄹㄴ
        //                 </a>
        //                 <ul className="sec_depth">
        //                     <li className="list">
        //                         <a href="feed/feed_list.html" className="link">
        //                         ㄹㄴㅇ
        //                         </a>
        //                     </li>
        //                     <li className="list">
        //                         <a href="feed/feed_list.html" className="link">
        //                         ㄹㄴㅇ
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li className="list">
        //                 <a href="trend/trend_list.html" className="link">
        //                 ㅇㄴㄹ
        //                 </a>
        //             </li>
        //             <li className="list">
        //                 <a href="../review/prd_list.html" className="link">
        //                 ㄹㄴㅇ
        //                 </a>
        //             </li>
        //             <li className="list">
        //                 <a href="../mypage/event.html" className="link">
        //                 ㄴㅇㄹ
        //                 </a>
        //             </li>
        //             <li className="list">
        //                 <a href="./common/notice_list.html" className="link">
        //                 ㄹㄴㅇ
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="right_side">
        //         <ul className="user">
        //             <li className="list sign_in" id="sign_in">
        //                 <a href="#" onClick={() => { return false; }} className="link">
        //                 ㄹㄴㅇ
        //                 </a>
        //             </li>
        //             <li className="list sign_up">
        //                 <a href="#" onClick={() => { return false; }} className="link">
        //                 Zsdf
        //                 </a>
        //             </li>
        //         </ul>
        //         {/*<div className="user_nav">
        //             <div className="img_box"></div>
        //             <span className="user_name">NickName</span>
        //             <ul className="user_menu">
        //                 <li className="list">
        //                     <a href="#" onClick={() => { return false; }} className="link">
        //                         마이페이지
        //                     </a>
        //                 </li>
        //                 <li className="list">
        //                     <a href="#" onClick={() => { return false; }} className="link">
        //                         개인정보 관리
        //                     </a>
        //                 </li>
        //                 <li className="list logout">
        //                     <a href="#" onClick={() => { return false; }} className="link">
        //                         로그아웃
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>*/}
        //     </div>
        // </>
    );
}

export default Main;
