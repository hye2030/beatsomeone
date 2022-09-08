import { useState } from "react";

function Main(menu) {
    console.log(menu);
    return (
        <>
            <li className="list hasSec">
                <a href="#" onClick={() => { return false; }} className="link">
                    {menu.value[0]}
                    <div className="bubble_box">
                        <div className="rolling">
                            <ul className="depth">
                                <li className="list">
                                {menu.value[11]}
                                </li>
                                <li className="list">
                                {menu.value[12]}
                                </li>
                                <li className="list">
                                {menu.value[13]}
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
                <ul className="sec_depth">
                    <li className="list">
                        <a href="feed/feed_list.html" className="link">
                        {menu.value[10]}
                        </a>
                    </li>
                    <li className="list">
                        <a href="feed/feed_list.html" className="link">
                        {menu.value[11]}
                        </a>
                    </li>
                    <li className="list">
                        <a href="feed/feed_list.html" className="link">
                        {menu.value[12]}
                        </a>
                    </li>
                    <li className="list">
                        <a href="feed/feed_list.html" className="link">
                        {menu.value[13]}
                        </a>
                    </li>
                </ul>
            </li>
            <li className="list">
                <a href="#" onClick={() => { return false; }} className="link">
                {menu.value[1]}
                </a>
            </li>
            <li className="list">
                <a href="#" onClick={() => { return false; }} className="link">
                {menu.value[2]}
                </a>
                <ul className="sec_depth">
                    <li className="list">
                        <a href="feed/feed_list.html" className="link">
                        {menu.value[14]}
                        </a>
                    </li>
                    <li className="list">
                        <a href="feed/feed_list.html" className="link">
                        {menu.value[15]}
                        </a>
                    </li>
                </ul>
            </li>
            <li className="list">
                <a href="trend/trend_list.html" className="link">
                {menu.value[3]}
                </a>
            </li>
            <li className="list">
                <a href="../review/prd_list.html" className="link">
                {menu.value[4]}
                </a>
            </li>
            <li className="list">
                <a href="../mypage/event.html" className="link">
                {menu.value[16]}
                </a>
            </li>
            <li className="list">
                <a href="./common/notice_list.html" className="link">
                {menu.value[15]}
                </a>
            </li>
        </>
    );
}

export default Main;
