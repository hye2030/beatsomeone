import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function Comment(idx) {
    const navigate = useNavigate();
    const [feedContent, setFeedContent] = useState([]);
    const [writerIdx, setWriterIdx] = useState(0);
    const user = useSelector((state) => {return state.isLogin});
    const user_idx = useSelector((state) => {return state.idx});

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
    }, [])

    //피드 삭제
    const feed_delete = () => {
        if(user == false){
            $(".conDelete_modal").fadeOut(200);
            $(".conRegisterC_modal").fadeIn(200);
            return false;
        }

        if(user_idx != writerIdx){
            $(".conDelete_modal").fadeOut(200);
            $(".conRegisterC_modal").fadeIn(200);
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
                    <div className="num_text">
                        총 <b>999개</b>의 댓글이 있습니다.
                    </div>
                    <div className="comment_write">
                        <div className="profile_img">
                            <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                        </div>
                        <div className="white_wrap">
                            <textarea name="" id="" cols="30" rows="10" placeholder="댓글을 입력해주세요."></textarea>
                            <button type="button">작성</button>
                        </div>
                    </div>
                    <div className="comment_item">
                        <div className="wrapper">
                            <div className="profile_img">
                                <img src="/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                            </div>
                            <div className="comment_right">
                                <div className="top">
                                    <span className="nickname">사용자 닉네임 표시</span>
                                    <p className="time gray_text">13시간 전</p>
                                </div>
                                <div className="comment">
                                    댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이
                                    표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                    댓글
                                    내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                </div>
                                <div className="bottom">
                                    <button type="button" className="like_toggle_btn active"><span>
                                            9,999
                                        </span></button>
                                    <button type="button" className="gray_text reply_btn">답글달기</button>
                                </div>
                                <div className="edit_btn_group">
                                    <div className="edit_group">
                                        <button type="button" className="edit_btn">수정</button>
                                        <button type="button" className="delete_btn">삭제</button>
                                    </div>
                                    <div className="done_group">
                                        <button type="button" className="done_btn">완료</button>
                                        <button type="button" className="cancel_btn">취소</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 답글 달기 --> */}
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
                    <div className="comment_item">
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
                                    댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이
                                    표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                    댓글
                                    내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                </div>
                                <div className="bottom">
                                    <button type="button" className="like_toggle_btn"><span>9,999</span> </button>
                                    <button type="button" className="gray_text reply_btn cancel">답글취소</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 답글 달기 --> */}
                        <div className="comment_write reply on">
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
                    <div className="comment_item">
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
                                    댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이
                                    표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                    댓글
                                    내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                </div>
                                <div className="bottom">
                                    <button type="button" className="like_toggle_btn"><span>
                                            9,999
                                        </span></button>
                                    <button type="button" className="gray_text reply_btn">답글달기</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 답글 달기 --> */}
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
                        {/* <!-- 대댓글 --> */}
                        <div className="comment_item">
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
                                        <p className="user_tag">사용자 닉네임</p>
                                        댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글
                                        내용이
                                        표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이
                                        표기됩니다.
                                        댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                    </div>
                                    <div className="bottom">
                                        <button type="button" className="like_toggle_btn"><span>
                                                9,999
                                            </span></button>
                                        <button type="button" className="gray_text reply_btn cancel">답글취소</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 답글 달기 --> */}
                            <div className="comment_write reply on">
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
                        {/* <!-- 대댓글 -->
                        <!-- 수정 버튼을 누르면 edit 클래스 붙여주세요 --> */}
                        <div className="comment_item edit">
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
                                        <p className="user_tag">사용자 닉네임</p>
                                        댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글
                                        내용이
                                        표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이
                                        표기됩니다.
                                        댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.
                                    </div>
                                    <div className="edit_comment">
                                        <p className="user_tag">사용자 닉네임</p>
                                        <textarea name=""
                                            id="" defaultValue="댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다.댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다."></textarea>
                                    </div>
                                    <div className="bottom">
                                        <button type="button" className="like_toggle_btn"><span>
                                                9,999
                                            </span></button>
                                        <button type="button" className="gray_text reply_btn">답글달기</button>
                                    </div>
                                    <div className="edit_btn_group">
                                        <div className="edit_group">
                                            <button type="button" className="edit_btn">수정</button>
                                            <button type="button" className="delete_btn">삭제</button>
                                        </div>
                                        <div className="done_group">
                                            <button type="button" className="done_btn">완료</button>
                                            <button type="button" className="cancel_btn">취소</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 답글 달기 --> */}
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
                    </div>
                    {/* <!-- 비공개처리 글 private클래스 붙여주세요 --> */}
                    <div className="comment_item private">
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
                    </div>
                </div>
            </div>
            {/* <!-- 페이지네이션 --> */}
            <div className="pagination_wrap">
                <button type="button" className="prev_next_btn prev">
                    <img src="/assets/images/icon/icon_arrow_18px.svg" alt="화살표 아이콘" />
                </button>
                <div className="pagination_list">
                    <button type="button" className="active">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button">4</button>
                    <button type="button">5</button>
                    <p>...</p>
                </div>
                <button type="button" className="prev_next_btn">
                    <img src="/assets/images/icon/icon_arrow_18px.svg" alt="화살표 아이콘" />
                </button>
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
