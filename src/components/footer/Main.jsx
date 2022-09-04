function Main() {
  return (
    <>
      {/* BEGIN: Footer */}
      <footer id="footer">
            <div className="inner">
                <h1 className="logo">
                    <a href="index.html" className="link"></a>
                </h1>
                <div className="right_side">
                    <div className="content_area">
                        <div className="cover">
                            <ul className="foot_gnb">
                                <li className="list">
                                    <a href="#" onClick={() => { return false; }} className="link">
                                        About Beat Someone
                                    </a>
                                </li>
                                <li className="list">
                                    <a href="#" onClick={() => { return false; }} className="link">
                                        이용약관
                                    </a>
                                </li>
                                <li className="list">
                                    <a href="#" onClick={() => { return false; }} className="link">
                                        개인정보 취급방침
                                    </a>
                                </li>
                                <li className="list">
                                    <a href="./common/notice_list.html" className="link">
                                        공지사항
                                    </a>
                                </li>
                                <li className="list">
                                    <a href="#" onClick={() => { return false; }} className="link">
                                        제휴 문의
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <address>
                            <p>
                                본사 : 서울특별시 도봉구 마들로13길 84, 서울창업허브 창동 2층 8로(창동, 창동 아우르네)
                            </p>
                            <p>
                                지점&스튜디오 : 서울특별시 마포구 와우산로3길 16, 203호~205호(상수동, 석진스토리)
                            </p>
                            <p>
                                대표이사: 김용환&ensp;&ensp;사업자등록번호: 112-86-01117&ensp;&ensp;<br
                                    className="mobile_layout"/>통신판매신고번호: 제2019-서울마포-2779호
                            </p>
                            <p>
                                TEL : 070-4323-0000&ensp;&ensp;<br className="mobile_layout"/>EMAIL : support@beatsomeone.com
                            </p>
                        </address>
                        <p className="copyright">
                            Copyright © 2022 BEAT SOMEONE. All rights reserved.
                        </p>
                    </div>
                    <ul className="sns_wrap">
                        <li className="icon_box insta">
                            <a href="https://www.instagram.com/BEAT SOMEONE/ " target="_blank"></a>
                        </li>
                        <li className="icon_box twitter">
                            <a href="https://twitter.com/BEAT SOMEONE1" target="_blank"></a>
                        </li>
                        <li className="icon_box facebook">
                            <a href="https://www.facebook.com/BEAT SOMEONE " target="_blank"></a>
                        </li>
                        <li className="icon_box youtube">
                            <a href="https://www.youtube.com/channel/UCkOZTgnHFgC0Cb04W0AJ1LQ" target="_blank"></a>
                        </li>
                        <li className="icon_box blog">
                            <a href="https://post.naver.com/BEAT SOMEONE" target="_blank"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
      {/* END: Footer */}
    </>
  );
}

export default Main;
