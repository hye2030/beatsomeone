import "@/assets/css/components/event.css";

function Main() {
    return (
        <>
        <div id="wrap_content" className="event_detail_wrap">
            <div className="wrap_inner">
                <div className="event_detail_section">
                <section className="banner">
                    <div className="inner">
                    <div className="banner_text">
                        <h2>
                        지금, 당장 글로벌 <br />
                        뮤지션에 도전하세요.
                        </h2>
                        <p>
                        비트썸원이 모든 것을 도와드립니다, 한 번의 음원<br />
                        등록으로 빠르고 정확한 판매와 정산을 경험하세요.
                        </p>
                    </div>
                    <div className="banner_image">
                        <img src="/src/assets/images/dummy/banner_img_02.jpg" alt="banner" />
                    </div>
                    </div>
                </section>
                <section className="top_section">
                    <article className="nav">
                    <span>HOME</span>
                    <span className="arrow_icon"><img src="/src/assets/images/icon/icon_arrow_right_black.svg" alt="화살표 아이콘" /></span>
                    <span>MY PAGE</span>
                    <span className="arrow_icon"><img src="/src/assets/images/icon/icon_arrow_right_black.svg" alt="화살표 아이콘" /></span>
                    <div className="select_big_wrap">
                        {/* <!-- 버튼 클릭시 active 클래스 추가 -->
                        <!-- <div className="select_box_wrap_gray active"> --> */}
                        <div className="select_box_wrap gray">
                        <button className="select_title active">이벤트</button>
                        <ul>
                            <li className="select_list">이벤트</li>
                            <li className="select_list">이벤트</li>
                            <li className="select_list">이벤트</li>
                        </ul>
                        </div>
                    </div>
                    </article>
                </section>

                {/* <!-- 이벤트 컨텐츠 --> */}
                <section className="event_content_wrap">
                    <h3 className="event_title">Event 상세</h3>
                    <p className="event_name">
                    <span className="category">[진행중]</span>이벤트 컨텐츠 제목 표기
                    영역으로 사용
                    </p>

                    {/* <!-- 종료된 이벤트일 경우 -->
                    <!-- <p className="event_name end"><span className="category">[종료]</span>이벤트 컨텐츠 제목 표기 영역으로 사용</p> --> */}

                    <div className="content_inner">
                    <p className="event_date">
                        이벤트 기간 :
                        <span className="date">2022.07.12 ~ 2022.07.18</span>
                    </p>
                    <div className="event_img_wrap">
                        <div className="event_img">
                        <img src="/src/assets/images/dummy/cover_img_11.jpg" alt="" />
                        </div>
                        {/* <!-- 종료된 이벤트일 경우 -->
                        <!-- <div className="end_cover">
                                            <p className="end_text">종료된 이벤트</p>
                                        </div> --> */}
                    </div>
                    <p className="content">이벤트 내용이 출력됩니다.</p>
                    {/* <!-- 종료된 이벤트일 경우 -->
                    <!-- <p className="content end">이벤트 내용이 출력됩니다.</p> --> */}
                    </div>

                    <div className="event_btn">
                    <button type="button" className="basic_btn_red" onClick={() => { location.href='/event'; }}>
                        이벤트 목록으로
                    </button>
                    </div>
                </section>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
