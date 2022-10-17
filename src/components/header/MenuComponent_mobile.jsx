import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isModal } from "../../components/header/recoil";

function MenuComponenet({users}) {
    let _menu = [];
    users.map(user => {
        _menu.push(user.menuValue);
    })

    const user = useSelector((state) => {return state});
    const user_nick = useSelector((state) => {return state.name});
    const navigate = useNavigate();
    const ModalHandler = useSetRecoilState(isModal);

    const user_idx = useSelector((state) => {return state.idx});
    let bybeat_url = "";
    if(user_idx != 0){
        bybeat_url = "https://bybeats-aws.codeidea.io/login?emailId="+localStorage.getItem("emailId")+"&sns="+localStorage.getItem("sns")+"&snsKey="+localStorage.getItem("snsKey")+"&_token="+localStorage.getItem("is_login")+"&last_login="+localStorage.getItem("sns")+"&nickname="+localStorage.getItem("nickname")+"&idx="+localStorage.getItem("idx");
    }

    return (
        <>
        <div className="link_wrap">
            <a href="#" onClick={() => {navigate('/')}} className="link">
                BEAT SOMEONE
            </a>
            {user_idx == 0 ? 
            <a href="https://bybeats-aws.codeidea.io" className="link" target="_blank">
                BYBEATS
            </a>
            :
            <a href={bybeat_url} className="link" target="_blank">
                BYBEATS
            </a>
            }
        </div>
        {user.isLogin ? 
        <div className="profile_box">
            <div className="img_box">
                <img src="/assets/images/icon/icon_user-circle.svg" alt="" />
            </div>
            <div className="text_area">
                <p className="nickname">
                    NICKNAME
                </p>
                <a href="mypage/my_request_song.html" className="info_btn">
                    {user_nick}님
                </a>
            </div>
        </div> 
        : 
        <div className="sign_inup">
            <a href="#" onClick={() => { ModalHandler("login") }} className="link sign_in">
                {_menu[7]}
            </a>
            <a href="#" onClick={() => { ModalHandler("join") }} className="link sign_in">
                {_menu[8]}
            </a>
        </div>}

        <ul className="accordion">
            <li className="list">
                <div>
                    <div className="title main_link">
                        {_menu[0]}
                    </div>
                    <ul className="sec_depth">
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list', {state : {type : ""} } )}} className="link feedLink">
                                - {_menu[9]}
                            </a>
                        </li>
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list', {state : {type : "self"} } )}} className="link feedLink">
                                - {_menu[10]}
                            </a>
                        </li>
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list', {state : {type : "cover"} } )}} className="link feedLink">
                                - {_menu[11]}
                            </a>
                        </li>
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list', {state : {type : "daily"} } )}} className="link feedLink">
                                - {_menu[12]}
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="list">
                <a href="#" onClick={() => { alert("서비스 준비중입니다"); }} className="link main_link">
                    {_menu[1]}
                </a>
            </li>
            <li className="list">
                <div>
                    <div className="title main_link" onClick={() => { alert("서비스 준비중입니다"); }}>
                        {_menu[13]}
                    </div>
                    <ul className="sec_depth">
                        <li className="list">
                            <a href="#" className="link active">
                                - {_menu[13]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="#" className="link">
                                - {_menu[14]}
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="list">
                <a onClick={() => { alert("서비스 준비중입니다"); }} className="link main_link">
                    {_menu[3]}
                </a>
            </li>
            <li className="list">
                <a onClick={() => { alert("서비스 준비중입니다"); }} className="link main_link">
                    {_menu[4]}
                </a>
            </li>
            <li className="list">
                <a onClick={() => {navigate("/mypage/event");}} className="link main_link">
                    {_menu[16]}
                </a>
            </li>
            <li className="list">
                <a onClick={() => {navigate("/common/notice_list");}} className="link main_link">
                    {_menu[15]}
                </a>
            </li>
        </ul>
        </>
    )
}

export default MenuComponenet;
