import "@/assets/css/components/content_add.css";

function add_daily(){
    return (
        <div className="add_content" style={{display: "block"}}>
            <div className="img_add_line">
            <input type="text" placeholder="이미지 및 영상선택" className="add_input" />
            <label htmlFor="file" className="add_btn"> 추가 </label>
            <input type="file" id="file" />
            </div>
            <div className="textarea_wrap">
            <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea>
            <span className="list_delete_icon">
                <img src="/src/assets/images/icon/icon_delete_cover.svg" alt="" />
            </span>
            </div>
        </div>
    )
}

function Main() {
    return (
        <>
        <div id="wrap_content" className="content_add_wrap">
            <div className="wrap_inner">
                <section className="feed_add_section">
                <h2>컨텐츠 등록</h2>
                <div className="content_select">
                    <div className="select_box_wrap">
                    {/* <!-- 0. 기본 --> */}
                    <button className="select_title">일상</button>
                    <ul>
                        <li className="select_list song">자작곡</li>
                        <li className="select_list song">커버곡</li>
                        <li className="select_list daily">일상</li>
                    </ul>
                    </div>
                </div>
                {/* <!-- 컨텐츠 시작 --> */}
                <div className="content">
                    <div className="img_add_line">
                    {/* <input type="text" placeholder="이미지 및 영상선택" className="add_input" /> */}
                    {/* 이미지 선택됐을때 gray 클래스를 추가해주시면 됩니다! */}
                    {/* <input type="text" value="file.jpg" className="add_input gray" readonly /> */}
                    <label htmlFor="image" className="add_input">이미지 및 영상선택</label>
                    <input type="file" id="image" />
                    </div>
                    {/* <!-- 이미지 추가 했을 때 --> */}
                    <div className="add_file_box">
                    <div className="cover_img">
                        <img src="/src/assets/images/dummy/cover_img_03.jpg" alt="" />
                    </div>
                    <span className="close_icon">
                        <img src="/src/assets/images/icon/icon_close_white.svg" alt="" />
                    </span>
                    </div>
                    <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea>
                    {/* <!-- 영상 추가 했을 때 --> */}
                    {/* <div className="add_file_box">
                        <div className="cover_img">
                            <img src="/src/assets/images/dummy/video_img.jpg" alt="" />
                        </div>
                        <span className="close_icon">
                            <img src="/src/assets/images/icon/icon_close_white.svg" alt="" />
                        </span>
                        <div className="video_area">
                            <span className="play_icon">
                            <img src="/src/assets/images/icon/icon_play_02.svg" alt="" />
                            </span>
                            <span className="time">4:16</span>
                        </div>
                    </div>
                    <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea> */}
                </div>
                {/* <!-- 일상 선택했을 경우 추가되는 컨텐츠 --> */}
                <div className="add_content" style={{display: "block"}}>
                    <div className="img_add_line">
                    <input type="text" placeholder="이미지 및 영상선택" className="add_input" />
                    <label htmlFor="file" className="add_btn"> 추가 </label>
                    <input type="file" id="file" />
                    </div>
                    <div className="textarea_wrap">
                    <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea>
                    <span className="list_delete_icon">
                        <img src="/src/assets/images/icon/icon_delete_cover.svg" alt="" />
                    </span>
                    </div>
                </div>

                <div className="btn_wrap">
                    <p className="gray_text">
                    + 선택 시 내용과 이미지 및 영상 등록 영역이 추가됩니다.
                    </p>
                    <button type="button" className="plus_btn">
                    <span>
                        <img src="/src/assets/images/icon/icon_plus_gray.svg" alt="" />
                    </span>
                    </button>
                </div>

                <div className="button_wrap">
                    <button className="basic_btn_red_border cancel_btn">취소</button>
                    <button className="basic_btn_red confirm_btn">등록</button>
                </div>
                </section>
            </div>
        </div>
        </>
    );
}

export default Main;
