import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../../components/body/pagination';

function Comment(idx) {
    const navigate = useNavigate();
    const [feedContent, setFeedContent] = useState([]);
    const [writerIdx, setWriterIdx] = useState(0);
    const user = useSelector((state) => {return state.isLogin});
    const user_idx = useSelector((state) => {return state.idx});
    const [commentUpdate, setCommentUpdate] = useState(false);

    //피드 상세
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/feed/feedView", {
            params: {
                "idx" : idx.idx
            }
        })
        .then(function (response) {
            setFeedContent(response.data.response.detail);
            setWriterIdx(response.data.response.detail[0].mem_id);
        });
    }, [commentUpdate])

    //피드 삭제
    const feed_delete = () => {
        if(user == null){
            $(".conDelete_modal").fadeOut(200);
            $(".plzSignin_modal").fadeIn(200);
            return false;
        }

        if(user_idx != writerIdx){
            $(".conDelete_modal").fadeOut(200);
            $(".plzSignin_modal").fadeIn(200);
            return false;
        }

        axios.delete("https://beats-admin.codeidea.io/api/v1/feed/feedDelete", {
            params: {
                "idx" : idx.idx
            }
        })
        .then(function (response) {
            console.log(response);
            if(response.data.code == 0){
                $(".conDelete_modal").fadeOut(200);
                $(".conDeleteC_modal").fadeIn(200);              
            }else{
                alert("삭제중 오류가 발생하였습니다.");
                location.href="/feed/feed_list";
            }
        });
    }

    // 모달 닫기 스크립트------
    const modalWrap = document.querySelectorAll('.modal_wrap');
    modalWrap.forEach((item, idx) => {
        const closeBtn = item.querySelectorAll('.close_btn');

        if(item.id == "integratedButton" || item.id == "feed_add_login" || item.id == "feed_content_delete"){
        }else{
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal_wrap')) {
                    $(item).fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                };
            });
        }

        closeBtn.forEach((items, i) => {
            items.addEventListener('click', () => {
                $(item).fadeOut(200);
                $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
            });
        });
    });

    //메인으로 가기
    const backMain = () => {
        $(".conDeleteC_modal").fadeOut(200);
        navigate("/feed/feed_list");
    }

    //최상위 댓글 작성
    const [feedComment, setFeedComment] = useState("");
    const first_comment_write = () => {
        if(user == null){
            $(".plzSignin_modal").fadeIn(200);
            return false;
        }

        if(feedComment == ""){
            alert("댓글을 작성해주세요.");
            return false;
        }

        axios.post("https://beats-admin.codeidea.io/api/v1/comment/commentAdd", {
            "mem_id": user_idx,
            "wr_idx": idx.idx,
            "cm_main": 1,
            "cm_content": feedComment,
            "wr_type": "feed"
        })
        .then(function (response) {
            if(response.data.code == 0){
                setFeedComment("");      
                setCommentUpdate(true);
            }else{
                alert("등록중 오류가 발생하였습니다.");
                console.log(response);
            }
        });
    }

    const onEnterPress = (e) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          first_comment_write();
        }
    }

    //페이징
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    //댓글 목록
    const [commentList, setCommentList] = useState([]);
    const [commentTotal, setCommentTotal] = useState(1);
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/comment/getCommentList", {
            params: {
                "wr_idx" : idx.idx,
                "wr_type" : "feed",
                "limit" : limit,
                "page" : page
            }
        })
        .then(function (response) {
            console.log(response);
            setCommentList(response.data.response);
            setCommentUpdate(false);
            setCommentTotal(response.data.total);
        });
    }, [commentUpdate, page])
    
    return (
        <>
        <div className="comment_area">
            <div className="inner">
                <div className="top_box">
                    {feedContent.map((cntt) => {
                    return (
                    <div className="mark_wrap" key={cntt.idx}>
                        <button type="button" className="like_toggle_btn mark">
                            <span>{cntt.wr_bit}</span>
                        </button>
                        {/* <div className="lesten_num mark"><span>99개</span></div> */}
                        <div className="profile_wrap mark">
                            <ul>
                                <li>
                                    <img src="/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                </li>
                                <li>
                                    <img src="/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                </li>
                                <li>
                                    <img src="/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                </li>
                            </ul>
                            <span>{cntt.wr_comment}</span>
                        </div>
                    </div>
                    )
                    }) }
                    <div className="btn_wrap">
                        <Link to={"/feed/feed_list"}>
                        <div className="btn basic_btn_gray list_link">목록</div>
                        </Link>
                        {writerIdx == user_idx ?
                        <div className="group">
                            <button type="button" className="btn basic_btn_gray delete" onClick={() => $(".conDelete_modal").fadeIn(200)}>삭제</button>
                            <button type="button" className="btn basic_btn_black edit">수정</button>
                        </div>
                        : null}
                    </div>
                </div>
                    
                <div className="comment_list">
                    {feedContent.map((cntt) => (
                    <div className="num_text" key={cntt.idx}>
                        총 <b>{cntt.wr_comment}개</b>의 댓글이 있습니다.
                    </div>
                    ))}
                    <div className="comment_write">
                        <div className="profile_img">
                            <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                        </div>
                        <div className="white_wrap">
                            <textarea name="" id="first_comment_wr" cols="30" rows="10" value={feedComment} placeholder="댓글을 입력해주세요." onChange={(e) => setFeedComment(e.target.value)} onKeyDown={(e) => {onEnterPress(e)}}></textarea>
                            <button type="button" onClick={() => {first_comment_write()}}>작성</button>
                        </div>
                    </div>
                    
                    <div className="comment_item">
                        
                        {commentList.map((comment) => {
                            let singo_style = {};
                            let singo_cntt = comment.cm_content;
                            if(comment.cm_open == "secret"){
                                singo_style = {color: "#ACACAC"};
                                singo_cntt = "[관리자의 의해 비공개 처리된 댓글입니다.]";
                            }

                            if(comment.cm_depth == 1){
                                return (
                                    <div key={comment.idx}>
                                        <div className="wrapper">
                                            <div className="profile_img">
                                                <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                                            </div>
                                            <div className="comment_right">
                                                <div className="top">
                                                    <span className="nickname">{comment.mem_nickname}</span>
                                                    <p className="time gray_text">{comment.created_at}</p>
                                                    <button type="button" className="report">신고</button>
                                                </div>
                                                <div className="comment" style={singo_style}>
                                                    {singo_cntt}
                                                </div>
                                                <div className="bottom">
                                                    <button type="button" className="like_toggle_btn "><span>
                                                            9,999
                                                        </span></button>
                                                    <button type="button" className="gray_text reply_btn">답글달기</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment_write reply">
                                            <div className="profile_img">
                                                <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                                            </div>
                                            <div className="white_wrap">
                                                <textarea name="" id="" cols="30" rows="10"
                                                    placeholder="댓글을 입력해주세요."></textarea>
                                                <button type="button">작성</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else {
                                return (
                                    <div className="comment_item" key={comment.idx}>
                                        <div className="wrapper">
                                            <div className="profile_img">
                                                <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                                            </div>
                                            <div className="comment_right">
                                                <div className="top">
                                                    <span className="nickname">{comment.mem_nickname}</span>
                                                    <p className="time gray_text">{comment.created_at}</p>
                                                    <button type="button" className="report">신고</button>
                                                </div>
                                                <div className="comment" style={singo_style}>
                                                    <p className="user_tag">사용자 닉네임</p>
                                                    {singo_cntt}
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
                                    </div>
                                )
                            }
                        
                        }) }
                        
                    </div>
                    {/* <!-- 비공개처리 글 private클래스 붙여주세요 --> */}
                    {/* <div className="comment_item private">
                        <div className="wrapper">
                            <div className="profile_img">
                                <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                            </div>
                            <div className="comment_right">
                                <div className="top">
                                    <span className="nickname">사용자 닉네임 표시</span>
                                    <p className="time gray_text">13시간 전</p>
                                    <button type="button" className="report">신고</button>
                                </div>
                                <div className="comment">
                                    [관리자의 의해 비공개 처리된 댓글입니다.]
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <!-- 페이지네이션 --> */}
            <div className="pagination_wrap">
                <Pagination 
                    total={commentTotal}
                    limit={limit}
                    page={page}
                    setPage={setPage}/>
            </div>
        </div>

        <div className="modal_wrap message_modal conDelete_modal">
            <div className="modal_box question">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    컨텐츠를 삭제하시겠습니까?
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red_border cancel_btn close_btn">
                        아니오
                    </button>
                    <button type="button" className="basic_btn_red confirm_btn" onClick={() => {feed_delete()}}>
                        네
                    </button>
                </div>
            </div>
        </div>

        <div className="modal_wrap message_modal conDeleteC_modal" id='feed_content_delete'>
            <div className="modal_box done">
            <button className="x_btn" onClick={() => {backMain()}}></button>
                <p className="comment">
                    컨텐츠 삭제가 완료되었습니다.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn" onClick={() => {backMain()}}>
                        확인
                    </button>
                </div>
            </div>
        </div>

        <div className="modal_wrap message_modal plzSignin_modal">
            <div className="modal_box alert">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    로그인이 필요한 서비스입니다.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn close_btn" >
                        확인
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Comment;
