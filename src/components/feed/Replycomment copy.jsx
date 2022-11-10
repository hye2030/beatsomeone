import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function Replycomment({responseTo}) {
    const [commentChild, setCommentChild] = useState([]);
    // console.log(responseTo);
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/comment/getCommentChildList", {
            params: {
                "cm_idx" : responseTo
            }
        })
        .then(function (response) {
            // console.log(response.data.response);
            setCommentChild(response.data.response);
            // console.log(local);
        });
    }, [responseTo])

    return (
        <>
        {commentChild.map(comment => {
            console.log(comment);
            return (
            <div className="comment_item">
                <div className="wrapper">
                    <div className="profile_img">
                        <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                    </div>
                    <div className="comment_right">
                        <div className="top">
                            <span className="nickname">닉넴</span>
                            <p className="time gray_text">1일전</p>
                            <button type="button" className="report">신고</button>
                        </div>
                        <div className="comment">
                            <p className="user_tag">사용자 닉네임</p>
                            내요용ㅇ
                        </div>
                        <div className="bottom">
                            <button type="button" className="like_toggle_btn"><span>
                                    9,999
                                </span></button>
                            <button type="button" className="gray_text reply_btn ">답글달기</button>
                        </div>
                    </div>
                </div>
                <div className="comment_write reply ">
                    <div className="profile_img">
                        <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                    </div>
                    <div className="white_wrap">
                        <textarea name="" id="" cols="30" rows="10"
                            placeholder="댓글을 입력해주세요."></textarea>
                        <button type="button">작성</button>
                    </div>
                </div>
                <Replycomment responseTo={comment.idx}/>
            </div>
            )
        })}
        </>
    )
}

export default Replycomment;
