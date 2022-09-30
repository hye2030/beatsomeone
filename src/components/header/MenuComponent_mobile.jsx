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
    const navigate = useNavigate();
    const ModalHandler = useSetRecoilState(isModal);

    return (
        <>
        <div className="link_wrap">
            <a href="#" onClick={() => {navigate('/')}} className="link">
                BEAT SOMEONE
            </a>
            <a href="#" onClick={() => {return false;}} className="link">
                BYBEATS
            </a>
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
                    김비트님
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
                            <a href="feed/feed_list.html" className="link active">
                                    - {_menu[9]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="feed/feed_list.html" className="link">
                                - {_menu[10]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="feed/feed_list.html" className="link">
                                - {_menu[11]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="feed/feed_list.html" className="link">
                                - {_menu[12]}
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="list">
                <a href="#" onClick={() => {return false;}} className="link main_link">
                    {_menu[1]}
                </a>
            </li>
            <li className="list">
                <div>
                    <div className="title main_link">
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
                <a href="trend/trend_list.html" onClick={() => {return false;}} className="link main_link">
                    {_menu[3]}
                </a>
            </li>
            <li className="list">
                <a href="review/prd_list.html" onClick={() => {return false;}} className="link main_link">
                    {_menu[4]}
                </a>
            </li>
            <li className="list">
                <a href="mypage/event.html" onClick={() => {return false;}} className="link main_link">
                    {_menu[16]}
                </a>
            </li>
            <li className="list">
                <a href="./common/notice_list.html" className="link main_link">
                    {_menu[15]}
                </a>
            </li>
        </ul>
        </>
    )
}

export default MenuComponenet;
