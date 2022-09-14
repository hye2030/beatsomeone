import { useDispatch, useSelector } from 'react-redux';

function MenuComponenet({users}) {
    let _menu = [];
    users.map(user => {
        _menu.push(user.menuValue);
    })

    const user = useSelector((state) => {return state.user});
    console.log(user);

    return (
        <>
        <div className="left_side">
            <h1 className="logo">
                <a href="/" className="link"></a>
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
                            <a href="feed/feed_list.html" className="link">
                            {_menu[9]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="feed/feed_list.html" className="link">
                            {_menu[10]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="feed/feed_list.html" className="link">
                            {_menu[11]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="feed/feed_list.html" className="link">
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
                            <a href="feed/feed_list.html" className="link">
                            {_menu[13]}
                            </a>
                        </li>
                        <li className="list">
                            <a href="feed/feed_list.html" className="link">
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
                    <a href="../mypage/event.html" className="link">
                    {_menu[16]}
                    </a>
                </li>
                <li className="list">
                    <a href="./common/notice_list.html" className="link">
                    {_menu[15]}
                    </a>
                </li>
            </ul>
        </div>
        <div className="right_side">
            <ul className="user">
                <li className="list sign_in" id="sign_in">
                    <a href="#" onClick={() => { return false; }} className="link">
                    {_menu[7]}
                    </a>
                </li>
                <li className="list sign_up">
                    <a href="#" onClick={() => { return false; }} className="link">
                    {_menu[8]}
                    </a>
                </li>
            </ul>
            {/*<div className="user_nav">
                <div className="img_box"></div>
                <span className="user_name">NickName</span>
                <ul className="user_menu">
                    <li className="list">
                        <a href="#" onClick={() => { return false; }} className="link">
                            마이페이지
                        </a>
                    </li>
                    <li className="list">
                        <a href="#" onClick={() => { return false; }} className="link">
                            개인정보 관리
                        </a>
                    </li>
                    <li className="list logout">
                        <a href="#" onClick={() => { return false; }} className="link">
                            로그아웃
                        </a>
                    </li>
                </ul>
            </div>*/}
        </div>
        </>
    )
}

export default MenuComponenet;
