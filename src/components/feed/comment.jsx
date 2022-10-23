import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../../components/body/pagination';
import Replycomment from './Replycomment';

function Comment(idx) {
    const navigate = useNavigate();
    const [feedContent, setFeedContent] = useState([]);
    const [writerIdx, setWriterIdx] = useState(0);
    const user = useSelector((state) => {return state.isLogin});
    const user_idx = useSelector((state) => {return state.idx});
    const [commentUpdate, setCommentUpdate] = useState(false);
    const [like, setLike] =useState(false);
    const [likeCnt, setLikeCnt] =useState(0);

    //피드 상세
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL + "/api/v1/feed/feedView", {
            params: {
                "idx" : idx.idx,
                "mem_id" : user_idx
            }
        })
        .then(function (response) {
            setFeedContent(response.data.response.detail);
            setWriterIdx(response.data.response.detail[0].mem_id);
            if(response.data.response.detail[0].like_status >= 1){
                setLike(true);
            }else{
                setLike(false);
            }
            setLikeCnt(response.data.response.detail[0].wr_bit);
        });
    }, [commentUpdate, user_idx])

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

        axios.delete(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/feed/feedDelete", {
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

        axios.post(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/comment/commentAdd", {
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

    const onEnterPress_child = (e, comment_idx, comment_idx2, cm_depth) => {
        if(e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          child_comment_write(comment_idx, comment_idx2, cm_depth)
        }
    }

    //댓글 페이징
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    //댓글 목록
    const [commentList, setCommentList] = useState([]);
    const [commentTotal, setCommentTotal] = useState(1);
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/comment/getCommentList", {
            params: {
                "wr_idx" : idx.idx,
                "wr_type" : "feed",
                "limit" : limit,
                "page" : page,
                "mem_id" : user_idx
            }
        })
        .then(function (response) {
            setCommentList(response.data.response);
            setCommentUpdate(false);
            setCommentTotal(response.data.total);
        });
    }, [commentUpdate, page, user_idx])
    
    // 답글달기
    const childForm = (e, idx) => {
        if (document.getElementById("child_reply_"+idx).classList.contains('on')) {
            document.getElementById("child_reply_"+idx).classList.remove('on');
            e.target.classList.remove("cancel");
            e.target.innerText = "답글달기";
        }else{
            document.getElementById("child_reply_"+idx).classList.add('on');
            e.target.classList.add("cancel");
            e.target.innerText = "답글취소";
        }
    }

    //하위 댓글 달기
    const child_comment_write = (cm_idx, dir_cm_idx, cm_depth) => {
        if(user == null){
            $(".plzSignin_modal").fadeIn(200);
            return false;
        }

        if(document.getElementById('child_comment_wr_'+dir_cm_idx).value == ""){
            alert("댓글을 작성해주세요.");
            return false;
        }

        axios.post(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/comment/commentAdd", {
            "mem_id": user_idx,
            "wr_idx": idx.idx,
            "cm_idx": cm_idx,
            "dir_cm_idx": dir_cm_idx,
            "cm_main": 2,
            "cm_content": document.getElementById('child_comment_wr_'+dir_cm_idx).value,
            "wr_type": "feed",
            "cm_depth": cm_depth+1
        })
        .then(function (response) {
            if(response.data.code == 0){   
                setCommentUpdate(true);
            }else{
                alert("등록중 오류가 발생하였습니다.");
                console.log(response);
            }
        });
    }

    //댓글 수정
    const commentEditDesign = (idx) => {
        if (document.getElementById("edit_idx_"+idx).classList.contains('edit')) {
            document.getElementById("edit_idx_"+idx).classList.remove('edit');
        }else{
            document.getElementById("edit_idx_"+idx).classList.add('edit');
            document.getElementById('edit_comment_'+idx).defaultValue ="dadas";
        }
    }
    const commentEdit = (idx) => {
        if(user == null){
            $(".plzSignin_modal").fadeIn(200);
            return false;
        }

        if(document.getElementById('edit_comment_'+idx).value == ""){
            alert("댓글을 작성해주세요.");
            return false;
        }

        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/comment/commentUpdate", {
            "cm_idx": idx,
            "cm_content": document.getElementById('edit_comment_'+idx).value
        })
        .then(function (response) {
            if(response.data.code == 0){   
                document.getElementById("edit_idx_"+idx).classList.remove('edit');
                setCommentUpdate(true);
            }else{
                alert("수정중 오류가 발생하였습니다.");
                console.log(response);
            }
        });
    }

    //댓글 삭제
    const [commentDelIdx, setCommentDelIdx] = useState(0);
    const commentDeletePop = (idx) => {
        $(".commentDelete_modal").fadeIn(200);
        setCommentDelIdx(idx);
    }
    const commentDelete = () => {
        if(commentDelIdx == 0){
            alert("댓글을 다시 선택해주세요.");
            return false;
        }

        axios.put(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/comment/commentDelete", {
            "cm_idx": commentDelIdx
        })
        .then(function (response) {
            if(response.data.code == 0){   
                setCommentUpdate(true);
                $(".commentDelete_modal").fadeOut(200);
                $(".commentDeleteC_modal").fadeIn(200);
            }else{
                alert("등록중 오류가 발생하였습니다.");
                console.log(response);
            }
        });
    }

    //피드에 대한 좋아요
    const feedLike = () => {
        if(user === null || user === false){
            return false;
        }

        if(like){
            axios.delete(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/beatDelete", {
                params: {
                    mem_id: user_idx,
                    service_name: "feed",
                    service_idx: idx.idx
                }
            })
            .then(function (response) {
                setLike(false);
                setLikeCnt((prev) => prev - 1);
            });
        }else{
            axios.post(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/beatAdd", {
                mem_id: user_idx,
                service_name: "feed",
                service_idx: idx.idx
            })
            .then(function (response) {
                setLike(true);
                setLikeCnt((prev) => prev + 1);
            });
        }
    }

    //댓글에 대한 좋아요 기능
    const toggleLike = (e, idx) => {
        if(user === null || user === false){
            return false;
        }

        let bit_cnt = parseInt(document.getElementById('bit_cnt_'+idx).textContent);
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
            document.getElementById('bit_cnt_'+idx).textContent = bit_cnt - 1;
            axios.delete(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/beatDelete", {
                params: {
                    mem_id: user_idx,
                    service_name: "comment",
                    service_idx: idx
                }
            })
            .then(function (response) {
            });
        }else{
            e.target.classList.add("active");
            document.getElementById('bit_cnt_'+idx).textContent = bit_cnt + 1;
            axios.post(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/beatAdd", {
                mem_id: user_idx,
                service_name: "comment",
                service_idx: idx
            })
            .then(function (response) {
            });
        }
    }

    // 유저 입력 값을 넣을 변수
    const [checkItemContent, setCheckItemContent] = useState('');
    // 줄 수를 계산해서 저장할 변수
    const [textareaHeight, setTextareaHeight] = useState(0);
    // 사용자 입력 값이 변경될 때마다 checkItemContent에 저장하고
    // 엔터('\n') 개수를 세서 textareaHeight에 저장
    const checkItemChangeHandler = (event) => {
        setTextareaHeight(event.target.value.split('\n').length - 1);
        setCheckItemContent(event.target.value);
    }
    
    return (
        <>
        <div className="comment_area">
            <div className="inner">
                <div className="top_box">
                    {feedContent.map((cntt) => {

                        let comment_cnt = cntt.wr_comment;
                        let comment_profile = "";
                        if(cntt.wr_comment == 0){
                            comment_profile = "<li><img src='/assets/images/icon/Message_circle.svg' alt='프로필 이미지1' style='filter: invert(22%);' /></li>";
                        }else if(cntt.wr_comment == 1){
                            comment_profile = "<li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li>";
                        }else if(cntt.wr_comment == 2){
                            comment_profile = "<li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li><li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li>";
                        }else if(cntt.wr_comment == 3){
                            comment_profile = "<li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li><li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li><li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li>";
                        }else if(cntt.wr_comment > 3){
                            comment_profile = "<li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li><li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li><li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li>";
                        }else if(cntt.wr_comment >= 100){
                            comment_cnt = "99+"
                            comment_profile = "<li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li><li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li><li><img src='/assets/images/icon/icon_profile_default.svg' alt='프로필 이미지1' /></li>";
                        }
                    return (
                    <div className="mark_wrap" key={cntt.idx}>
                        <button type="button" className={like==false ? "like_toggle_btn mark" : "like_toggle_btn mark active"} onClick={() => {feedLike()}}>
                            <span>{likeCnt}</span>
                        </button>
                        {/* <div className="lesten_num mark"><span>99개</span></div> */}
                        <div className="profile_wrap mark">
                            <ul dangerouslySetInnerHTML={ {__html: comment_profile} }>
                            </ul>
                            <span>{comment_cnt}</span>
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
                            <Link to={`/feed/feed_edit/${idx.idx}`}>
                            <button type="button" className="btn basic_btn_black edit">수정</button>
                            </Link>
                        </div>
                        : null}
                    </div>
                </div>
                    
                {(user == true) ?
                <div className="comment_list">
                    {feedContent.map((cntt) => (
                    <div className="num_text" key={cntt.idx}>
                        총 <b>{cntt.wr_comment}개</b>의 댓글이 있습니다.
                    </div>
                    ))}
                    <div className="comment_write">
                        <div className="profile_img">
                            <img src="/assets/images/icon/icon_profile_default.svg" alt="프로필 사진"/>
                        </div>
                        <div className="white_wrap">
                            <textarea name="" id="first_comment_wr" cols="30" rows="10" value={feedComment} placeholder="댓글을 입력해주세요." onChange={(e) => setFeedComment(e.target.value)} onKeyDown={(e) => {onEnterPress(e)}} style={{overflow:"hidden"}}></textarea>
                            <button type="button" onClick={() => {first_comment_write()}}>작성</button>
                        </div>
                    </div>
                    
                    <div className="comment_item">
                        
                        {commentList.map((comment) => {
                            let singo_style = {};
                            let comment_del_style = {};
                            let singo_cntt = comment.cm_content;
                            if(comment.cm_open == "secret"){
                                singo_style = {color: "#ACACAC"};
                                singo_cntt = "[관리자의 의해 비공개 처리된 댓글입니다.]";
                            }
                            if(comment.del_status == "Y"){
                                singo_style = {color: "#ACACAC"};
                                comment_del_style = {display: "none"};
                                singo_cntt = "[삭제된 댓글입니다.]";
                            }

                            let like_active = "";
                            if(comment.like_status >= 1){
                                like_active = "active";
                            }else{
                                like_active = "";
                            }

                            if(comment.cm_depth == 1){
                                return (
                                    <div id={`edit_idx_${comment.idx}`} className="" key={comment.idx}>
                                        <div className="wrapper">
                                            <div className="profile_img">
                                                <img src="/assets/images/icon/icon_profile_default.svg" alt="프로필 사진"/>
                                            </div>
                                            <div className="comment_right">
                                                <div className="top">
                                                    <span className="nickname">{comment.mem_nickname}</span>
                                                    <p className="time gray_text">{comment.created_at}</p>
                                                    {/* <button type="button" className="report">신고</button> */}
                                                </div>
                                                <div className="comment" style={singo_style}>
                                                    {singo_cntt}
                                                </div>
                                                <div className="edit_comment">
                                                    <textarea name="" id={`edit_comment_${comment.idx}`} defaultValue={comment.cm_content}></textarea>
                                                </div>
                                                <div className="bottom">
                                                    <button type="button" className={`like_toggle_btn ${like_active}`} onClick={(e) => {toggleLike(e, comment.idx)}}>
                                                        <span id={`bit_cnt_${comment.idx}`}>
                                                            {comment.cm_bit}
                                                        </span></button>
                                                    <button type="button" className="gray_text reply_btn" onClick={(e) => {childForm(e, comment.idx); setTextareaHeight(0);}}>답글달기</button>
                                                </div>
                                                {user_idx == comment.mem_id ? 
                                                <div className="edit_btn_group" style={comment_del_style}>
                                                    <div className="edit_group">
                                                        <button type="button" className="edit_btn" onClick={() => {commentEditDesign(comment.idx)}}>수정</button>
                                                        <button type="button" className="delete_btn" onClick={() => {commentDeletePop(comment.idx)}}>삭제</button>
                                                    </div>
                                                    <div className="done_group">
                                                        <button type="button" className="done_btn" onClick={() => {commentEdit(comment.idx)}}>완료</button>
                                                        <button type="button" className="cancel_btn" onClick={() => {commentEditDesign(comment.idx)}}>취소</button>
                                                    </div>
                                                </div>
                                                : null}
                                            </div>
                                        </div>

                                        <div className="comment_write reply" id={`child_reply_${comment.idx}`}>
                                            <div className="profile_img">
                                                <img src="/assets/images/icon/icon_profile_default.svg" alt="프로필 사진"/>
                                            </div>
                                            <div className="white_wrap" style={{height: ((textareaHeight + 1) * 38) + 'px'}} >
                                                <textarea name="" id={`child_comment_wr_${comment.idx}`} cols="30" rows="10"
                                                    placeholder="댓글을 입력해주세요." value={undefined} onChange={checkItemChangeHandler} style={{overflow:"hidden"}} onKeyDown={(e) => {onEnterPress_child(e, comment.idx, comment.idx, comment.cm_depth)}}></textarea>
                                                <button type="button" onClick={() => {child_comment_write(comment.idx, comment.idx, comment.cm_depth)}}>작성</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else if(comment.cm_depth >= 2){
                                return (
                                    <div id={`edit_idx_${comment.idx}`} className="comment_item" key={comment.idx}>
                                        <div className="wrapper">
                                            <div className="profile_img">
                                                <img src="/assets/images/icon/icon_profile_default.svg" alt="프로필 사진"/>
                                            </div>
                                            <div className="comment_right">
                                                <div className="top">
                                                    <span className="nickname">{comment.mem_nickname}</span>
                                                    <p className="time gray_text">{comment.created_at}</p>
                                                    {/* <button type="button" className="report">신고</button> */}
                                                </div>
                                                <div className="comment" style={singo_style}>
                                                    <p className="user_tag">{comment.dir_nickname}</p>
                                                    {singo_cntt}
                                                </div>
                                                <div className="edit_comment">
                                                    <p className="user_tag">{comment.dir_nickname}</p>
                                                    <textarea name="" id={`edit_comment_${comment.idx}`} defaultValue={comment.cm_content}></textarea>
                                                </div>
                                                <div className="bottom">
                                                    <button type="button" className={`like_toggle_btn ${like_active}`} onClick={(e) => {toggleLike(e, comment.idx)}}>
                                                        <span id={`bit_cnt_${comment.idx}`}>
                                                        {comment.cm_bit}
                                                        </span></button>
                                                    {/* <button type="button" className="gray_text reply_btn " onClick={(e) => {childForm(e, comment.idx); setTextareaHeight(0);setCheckItemContent("");}}>답글달기</button> */}
                                                </div>
                                                {user_idx == comment.mem_id ? 
                                                <div className="edit_btn_group" style={comment_del_style}>
                                                    <div className="edit_group">
                                                        <button type="button" className="edit_btn" onClick={() => {commentEditDesign(comment.idx)}}>수정</button>
                                                        <button type="button" className="delete_btn" onClick={() => {commentDeletePop(comment.idx)}}>삭제</button>
                                                    </div>
                                                    <div className="done_group">
                                                        <button type="button" className="done_btn" onClick={() => {commentEdit(comment.idx)}}>완료</button>
                                                        <button type="button" className="cancel_btn" onClick={() => {commentEditDesign(comment.idx)}}>취소</button>
                                                    </div>
                                                </div>
                                                : null}
                                            </div>
                                        </div>
                                        <div className="comment_write reply" id={`child_reply_${comment.idx}`}>
                                            <div className="profile_img">
                                                <img src="/assets/images/icon/icon_profile_default.svg" alt="프로필 사진"/>
                                            </div>
                                            <div className="white_wrap" style={{height: ((textareaHeight + 1) * 38) + 'px'}}>
                                                <textarea name="" id={`child_comment_wr_${comment.idx}`} cols="30" rows="10"
                                                    placeholder="댓글을 입력해주세요." value={checkItemContent} onChange={checkItemChangeHandler} style={{overflow:"hidden"}}></textarea>
                                                <button type="button" onClick={() => {child_comment_write(comment.cm_idx, comment.idx, comment.cm_depth)}}>작성</button>
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
                : null}
            </div>
            {/* <!-- 페이지네이션 --> */}
            {(user == true) ?
            <div className="pagination_wrap">
                <Pagination 
                    total={commentTotal}
                    limit={limit}
                    page={page}
                    setPage={setPage}/>
            </div>
            : null}
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

        <div className="modal_wrap message_modal commentDelete_modal">
            <div className="modal_box question">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    댓글을 삭제하시겠습니까?
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red_border cancel_btn close_btn">
                        아니오
                    </button>
                    <button type="button" className="basic_btn_red confirm_btn" onClick={() => {commentDelete()}}>
                        네
                    </button>
                </div>
            </div>
        </div>

        <div className="modal_wrap message_modal commentDeleteC_modal">
            <div className="modal_box done">
            <button className="x_btn close_btn"></button>
                <p className="comment">
                    댓글이 삭제되었습니다.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn close_btn">
                        확인
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Comment;
