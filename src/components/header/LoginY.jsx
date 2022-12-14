import { useDispatch, useSelector } from 'react-redux';
import {clearUser} from '@/stores/userSlice';
import { useLocation, useNavigate, Link } from 'react-router-dom';

function LoginY({value}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user_nick = useSelector((state) => {return state.name});
    const logoutButton = () => {
        dispatch(clearUser());
        localStorage.setItem("sns", "");
        localStorage.setItem("snsKey", "");
        localStorage.setItem("emailId", "");
        localStorage.setItem("is_login", "");
        localStorage.setItem("nickname", "");
        localStorage.setItem("emailIdx", "");
        navigate("/");
    }

    return (
        <div className="user_nav">
            <div className="img_box"></div>
            <span className="user_name">{user_nick}</span>
            <ul className="user_menu">
                <li className="list">
                    <a href="#" onClick={() => { alert("서비스 준비중입니다"); }} className="link">
                        {value[6]}
                    </a>
                </li>
                <li className="list">
                    <a href="#" onClick={() => { alert("서비스 준비중입니다"); }} className="link">
                        개인정보 관리
                    </a>
                </li>
                <li className="list logout">
                    <a href="#" onClick={() => { logoutButton(); }} className="link">
                        로그아웃
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default LoginY;
