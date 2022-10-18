import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

import Comment from '../../components/feed/comment';
import "@/assets/css/components/detail_page.css";

function Main() {
    const navigate = useNavigate();
    const param = useParams();
    const [feedContent, setFeedContent] = useState([]);
    const [feedSub, setFeedSub] = useState([]);
    
    //피드 상세
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/feed/feedView", {
            params: {
                "idx" : param.idx
            }
        })
        .then(function (response) {
            setFeedContent(response.data.response.detail);
            setFeedSub(response.data.response.file);
        });
    }, [])

    /**파일 확장자 추출 */
    function getExtension(fileName) {
        var fileLength = fileName.length;
        var lastDot = fileName.lastIndexOf('.');
        var fileExtension = fileName.substring(lastDot+1, fileLength);
        return fileExtension;
    }
    
    return (
        <>
        <section id="wrap_content" className="detail_page">
            <div className="wrap_inner">
                <div className="top_area">
                    <div className="inner">
                        {feedContent.map((cntt) => {
                            return (
                        <div className="profile_box" key={cntt.idx}>
                            <div className="profile_img">
                                <img src="/assets/images/icon/icon_profile_default.svg" alt="프로필 사진"/>
                            </div>
                            <div>
                                <p className="nickname">{cntt.mem_nickname}</p>
                                <p className="gray_text">{cntt.created_at}</p>
                            </div>
                        </div>
                                )
                            })
                        }
                        <div className="share_wrap">
                            <button type="button" className="share_btn"><span>공유하기</span></button>

                            {/* <!-- 공유하기 버튼 클릭시 나오는 박스 --> */}
                            <div className="share_box" style={{display: "none"}}>
                                <button type="button">
                                    <img src="/assets/images/icon/signUp_facebook.svg" alt="페이스북 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/assets/images/icon/signUp_kakao.svg" alt="카카오톡 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/assets/images/icon/signUp_naver.svg" alt="네이버 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/assets/images/icon/icon_insta_color.svg" alt="인스타그램 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/assets/images/icon/icon_link_share.svg" alt="클립보드 복사 아이콘"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="content_area">
                    <div className="inner">
                        {feedContent.map((cntt) => {
                            const extension = getExtension(cntt.feed_source);
                                return (
                                    <div key={cntt.idx}>
                                        <div className="title">
                                            <p className="mark_daily">일상</p>
                                        </div>
                                        
                                        {extension == "mp4" ?
                                        <div className="content play_box vedio">
                                            <video preload="auto" src={`https://beatsomeone-aws.prefinc.kr${cntt.file_url}${cntt.feed_source}`} controls controlsList="nodownload" style={{maxWidth : '740px'}}></video>
                                        </div>
                                        :
                                        <div className="content content_img">
                                            <img src={`https://beatsomeone-aws.prefinc.kr${cntt.file_url}${cntt.feed_source}`} alt="" style={{maxWidth : '740px'}}/>
                                        </div>
                                        }
                                        <div className="text_box" style={{whiteSpace:"pre-wrap", wordBreak: "break-all"}}>
                                            {cntt.wr_content}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {feedSub.map((cntt) => {
                            const extension = getExtension(cntt.feed_source);
                                return (
                                    <div key={cntt.file_no}>
                                        {extension == "mp4" ?
                                        <div className="content content_img">
                                            <video preload="auto" src={`https://beatsomeone-aws.prefinc.kr${cntt.file_url}${cntt.feed_source}`} controls controlsList="nodownload" style={{maxWidth : '740px'}}></video>
                                        </div>
                                        :
                                        <div className="content content_img">
                                            <img src={`https://beatsomeone-aws.prefinc.kr${cntt.file_url}${cntt.feed_source}`} alt="" style={{maxWidth : '740px'}}/>
                                        </div>
                                        }
                                        <div className="text_box" style={{whiteSpace:"pre-wrap", wordBreak: "break-all"}}>
                                            {cntt.wr_content}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="text_box">
                            개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이
                            출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다. 개시글 내용이 출력됩니다.개시글 내용이
                            출력됩니다.개시글
                            내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이
                            출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다. 개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이
                            출력됩니다.개시글
                            내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이 출력됩니다.개시글 내용이
                            출력됩니다.
                        </div>
                        <div className="content content_img">
                            <img src="/assets/images/dummy/album_img_01.jpg" alt=""/>
                        </div>
                        <div className="content play_box video">
                            <div className="video_wrap">
                                <video src=""></video>
                            </div>
                            <div className="play_btn_wrap">
                                <button type="button" className="play_btn">재생버튼</button>
                                <p className="play_time">4:16</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <!-- 페이지네이션 1페이지당 댓글 10개씩 출력 --> */}
                <Comment idx={param.idx}/>
            </div>
        </section>
        </>
    );
}

export default Main;
