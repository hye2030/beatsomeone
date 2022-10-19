import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function Main() {
    const navigate  = useNavigate();
    const param = useParams();
    const [notice, setNotice] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/noticeView", {
            params: {
                "idx" : param.idx
            }
        })
        .then(function (response) {
            setNotice(response.data.response);
        });
    }, [])

    return (
        <>
        <div id="wrap_content" className="notice">
            <section className="banner">
                {/* <div className="inner"> */}
                    {/* <!-- 임시 이미지 입니다 --> */}
                    {/* <!-- <div className="banner_text">
                        <h2>지금, 당장 글로벌 <br>
                            뮤지션에 도전하세요.
                        </h2>
                        <p>비트썸원이 모든 것을 도와드립니다, 한 번의 음원<br>
                            등록으로 빠르고 정확한 판매와 정산을 경험하세요.</p>
                    </div>
                    <div className="banner_image">
                        <img src="/assets/images/dummy/banner_img_02.jpg" alt="banner" />
                    </div> --> */}
                    <img src="/assets/images/dummy/notice_banner.png" alt="banner" />
                {/* </div> */}
            </section>
            <div className="wrap_inner">

                <section className="">
                    <h2 className="title_text">공지사항</h2>

                    {notice.map(({ idx, wr_title, wr_content, created_at }) => (
                    <div className="list_wrap" key={idx}>
                        <div className="title_box">
                            <p className="list_title">{wr_title}</p>
                            <p className="date">{created_at}</p>
                        </div>
                        <div className="content_box" dangerouslySetInnerHTML={ {__html: wr_content} }>
                        </div>
                    </div>
                    ))}

                    <a className="link_btn basic_btn_red" onClick={() => navigate("/common/notice_list")}>목록</a>
                </section>

            </div>
        </div>
        </>
    );
}

export default Main;
