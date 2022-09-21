import { useDispatch } from 'react-redux';
import {clearUser} from '@/stores/userSlice';

function LoginY({value}) {
    const dispatch = useDispatch();
    const logoutButton = () => {
        dispatch(clearUser());
        localStorage.setItem("sns", "");
        localStorage.setItem("snsKey", "");
        localStorage.setItem("emailId", "");
        localStorage.setItem("is_login", "");
    }

    return (
        <div className="user_nav">
            <div className="img_box"></div>
            <span className="user_name">NickName</span>
            <ul className="user_menu">
                <li className="list">
                    <a href="#" onClick={() => { return false; }} className="link">
                        {value[6]}
                    </a>
                </li>
                <li className="list">
                    <a href="#" onClick={() => { return false; }} className="link">
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