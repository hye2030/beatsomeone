import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function Main() {
    const navigate  = useNavigate();
    const param = useParams();
    const [event, setEvent] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/eventView", {
            params: {
                "idx" : param.idx
            }
        })
        .then(function (response) {
            // console.log(response.data.response);
            setEvent(response.data.response);
        });
    }, [])

    return (
        <>
        <div id="wrap_content" className="event_detail_wrap">
            <div className="wrap_inner">
                <div className="event_detail_section">
                <section className="banner">
                    {/* <div className="inner">
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
                        <img src="/assets/images/dummy/banner_img_02.jpg" alt="banner" />
                    </div>
                    </div> */}
                    <img src="/assets/images/dummy/notice_banner.png" alt="banner" />
                </section>
                <section className="top_section" style={{marginTop:"calc(100vw * (33 / 1300))"}}>
                    <article className="nav">
                    <span>HOME</span>
                    <span className="arrow_icon"><img src="/assets/images/icon/icon_arrow_right_black.svg" alt="화살표 아이콘" /></span>
                    <span>MY PAGE</span>
                    <span className="arrow_icon"><img src="/assets/images/icon/icon_arrow_right_black.svg" alt="화살표 아이콘" /></span>
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
                {event.map((event) => { 
                    return(
                    <section className="event_content_wrap" key={event.idx}>
                        <h3 className="event_title">Event 상세</h3>
                        {event.gubun == 1 ?
                        <p className="event_name" style={{whiteSpace:"pre-wrap", wordBreak:"break-word"}}>
                            <span className="category">[진행중]</span>{event.title}
                        </p>
                        :
                        <p className="event_name end" style={{whiteSpace:"pre-wrap", wordBreak:"break-word"}}><span className="category">[종료]</span>{event.title}</p>
                        }

                        <div className="content_inner">
                            <p className="event_date">
                                이벤트 기간 :
                                <span className="date">{event.fr_event_date} ~ {event.bk_event_date}</span>
                            </p>
                            <div className="event_img_wrap">
                                <div className="event_img">
                                    {/* <img src="/assets/images/dummy/cover_img_11.jpg" alt="" /> */}
                                    <img src={`${import.meta.env.VITE_REACT_APP_BEAT_SOMEONE_URL}/storage/event/${event.event_source}`} alt="" />
                                </div>
                                {event.gubun == 2 ?
                                <div className="end_cover">
                                    <p className="end_text">종료된 이벤트</p>
                                </div>
                                : null}
                            </div>
                            {event.gubun == 1 ?
                            <p className="content" dangerouslySetInnerHTML={ {__html: event.content} } style={{whiteSpace:"pre-wrap", wordBreak:"break-word"}}></p>
                            :
                            <p className="content end" dangerouslySetInnerHTML={ {__html: event.content} } style={{whiteSpace:"pre-wrap", wordBreak:"break-word"}}></p>
                            }
                        </div>

                        <div className="event_btn">
                        <button type="button" className="basic_btn_red" onClick={() => { navigate("/mypage/event") }}>
                            이벤트 목록으로
                        </button>
                        </div>
                    </section>
                    )}
                )}
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
