import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginN from './LoginN';
import LoginY from './LoginY';

function MenuComponenet({users}) {
    let _menu = [];
    users.map(user => {
        _menu.push(user.menuValue);
    })

    const user = useSelector((state) => {return state});
    const navigate = useNavigate();

    return (
        <>
        <div className="left_side">
            <h1 className="logo">
                <a href="#" onClick={() => {navigate('/')}} className="link"></a>
            </h1>
            <ul className="gnb">
                <li className="list hasSec">
                    <a href="#" onClick={() => { return false; }} className="link">
                        {_menu[0]}
                        <div className="bubble_box">
                            <div className="rolling">
                                <ul className="depth">
                                    <li className="list">
                                    {_menu[10]}
                                    </li>
                                    <li className="list">
                                    {_menu[11]}
                                    </li>
                                    <li className="list">
                                    {_menu[12]}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                    <ul className="sec_depth">
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list')}} className="link">
                            {_menu[9]}
                            </a>
                        </li>
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list')}} className="link">
                            {_menu[10]}
                            </a>
                        </li>
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list')}} className="link">
                            {_menu[11]}
                            </a>
                        </li>
                        <li className="list">
                            <a onClick={() => {navigate('/feed/feed_list')}} className="link">
                            {_menu[12]}
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="list">
                    <a href="#" onClick={() => { return false; }} className="link">
                    {_menu[1]}
                    </a>
                </li>
                <li className="list hasSec">
                    <a href="#" onClick={() => { return false; }} className="link">
                    {_menu[13]}
                    </a>
                    <ul className="sec_depth">
                        <li className="list">
                            <a href="#" className="link">
                            {_menu[13]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="#" className="link">
                            {_menu[14]}
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="list">
                    <a href="trend/trend_list.html" className="link">
                    {_menu[3]}
                    </a>
                </li>
                <li className="list">
                    <a href="../review/prd_list.html" className="link">
                    {_menu[4]}
                    </a>
                </li>
                <li className="list">
                    <a onClick={() => {navigate('/mypage/event')}} className="link">
                    {_menu[16]}
                    </a>
                </li>
                <li className="list">
                    <a onClick={() => {navigate('/common/notice_list')}} className="link">
                    {_menu[15]}
                    </a>
                </li>
            </ul>
        </div>
        <div className="right_side">
            {user.isLogin ? <LoginY value={_menu} /> : <LoginN value={_menu} />}
        </div>
        </>
    )
}

export default MenuComponenet;
