import "@/assets/css/components/detail_page.css";

function Main() {
    return (
        <>
        <section id="wrap_content" className="detail_page">
            <div className="wrap_inner">
                <div className="top_area">
                    <div className="inner">
                        <div className="profile_box">
                            <div className="profile_img">
                                <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                            </div>
                            <div>
                                <p className="nickname">사용자 닉네임 표시</p>
                                <p className="gray_text">13시간 전</p>
                            </div>
                        </div>
                        <div className="share_wrap">
                            <button type="button" className="share_btn"><span>공유하기</span></button>

                            {/* <!-- 공유하기 버튼 클릭시 나오는 박스 --> */}
                            <div className="share_box">
                                <button type="button">
                                    <img src="/src/assets/images/icon/signUp_facebook.svg" alt="페이스북 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/src/assets/images/icon/signUp_kakao.svg" alt="카카오톡 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/src/assets/images/icon/signUp_naver.svg" alt="네이버 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/src/assets/images/icon/icon_insta_color.svg" alt="인스타그램 로고"/>
                                </button>
                                <button type="button">
                                    <img src="/src/assets/images/icon/icon_link_share.svg" alt="클립보드 복사 아이콘"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content_area">
                    <div className="inner">
                        <div className="title">
                            <p className="mark_daily">일상</p>
                        </div>
                        
                        <div className="text_box">
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
                            <img src="/src/assets/images/dummy/album_img_01.jpg" alt=""/>
                        </div>
                        <div className="content play_box video">
                            <div className="video_wrap">
                                <video src=""></video>
                            </div>
                            <div className="play_btn_wrap">
                                <button type="button" className="play_btn">재생버튼</button>
                                <p className="play_time">4:16</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 페이지네이션 1페이지당 댓글 10개씩 출력 --> */}
                <div className="comment_area">
                    <div className="inner">
                        <div className="top_box">
                            <div className="mark_wrap">
                                <button type="button" className="like_toggle_btn mark">
                                    <span>9,999</span>
                                </button>
                                <div className="lesten_num mark"><span>99개</span></div>
                                <div className="profile_wrap mark">
                                    <ul>
                                        <li>
                                            <img src="/src/assets/images/dummy/profile_01.jpg" alt="프로필 이미지1" />
                                        </li>
                                        <li>
                                            <img src="/src/assets/images/dummy/profile_02.jpg" alt="프로필 이미지1" />
                                        </li>
                                        <li>
                                            <img src="/src/assets/images/dummy/profile_03.jpg" alt="프로필 이미지1" />
                                        </li>
                                    </ul>
                                    <span>99+</span>
                                </div>
                            </div>
                            <div className="btn_wrap">
                                <a href="" className="btn basic_btn_gray list_link">목록</a>
                                <div className="group">
                                    <button type="button" className="btn basic_btn_gray delete">삭제</button>
                                    <button type="button" className="btn basic_btn_black edit">수정</button>
                                </div>
                            </div>
                        </div>
                        <div className="comment_list">
                            <div className="num_text">
                                총 <b>999개</b>의 댓글이 있습니다.
                            </div>
                            <div className="comment_write">
                                <div className="profile_img">
                                    <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
                                </div>
                                <div className="white_wrap">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="댓글을 입력해주세요."></textarea>
                                    <button type="button">작성</button>
                                </div>
                            </div>
                            <div className="comment_item">
                                <div className="wrapper">
                                    <div className="profile_img">
                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                            <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                            <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                            <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                            <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                                        <img src="/src/assets/images/dummy/profile_04.jpg" alt="프로필 사진"/>
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
                            <img src="/src/assets/images/icon/icon_arrow_18px.svg" alt="화살표 아이콘" />
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
                            <img src="/src/assets/images/icon/icon_arrow_18px.svg" alt="화살표 아이콘" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Main;
