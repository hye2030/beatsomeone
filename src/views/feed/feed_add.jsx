// import "@/assets/css/components/content_add.css";

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
                {/* <!-- <input type="text" placeholder="이미지 및 영상선택" className="add_input" /> -->
                <!-- 이미지 선택됐을때 gray 클래스를 추가해주시면 됩니다! -->
                <!-- <input type="text" value="file.jpg" className="add_input gray" readonly /> --> */}
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
                <div className="add_file_box">
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
                <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea>
            </div>
            {/* <!-- 일상 선택했을 경우 추가되는 컨텐츠 --> */}
            <div className="add_content">
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

            {/* <!-- 자작곡 , 커버곡 선택했을 경우 추가되는 컨텐츠 --> */}

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

            {/* <!-- 커버곡 및 자작곡을 선택했을 경우 추가되는 컨텐츠--> */}
            <div className="song_content">
                <div className="upload_btn_wrap">
                <label htmlFor="music_file" className="file_btn">음원 파일 선택</label>
                <input type="file" id="music_file" />
                <button className="basic_btn_black">Bybeats에서 가져오기</button>
                </div>
                {/* <!-- 드래그 박스는 모바일에서 사라집니다. --> */}
                <div className="upload_box">
                <span className="upload_icon">
                    <img src="/src/assets/images/icon/icon_file_add.svg" alt="" />
                </span>
                <p className="upload_text">
                    혹은 음원 파일을 여기로 끌어 놓으세요!
                </p>
                </div>
                {/* <!-- 파일을 추가했을 경우 --> */}
                <div className="upload_box file">
                <p className="file_name">
                    file.mp3
                    <span className="delete_icon">
                    <img src="/src/assets/images/icon/icon_delete.svg" alt="" />
                    </span>
                </p>
                <p className="file_name">
                    file.mp3
                    <span className="delete_icon">
                    <img src="/src/assets/images/icon/icon_delete.svg" alt="" />
                    </span>
                </p>
                <p className="file_name">
                    file.mp3
                    <span className="delete_icon">
                    <img src="/src/assets/images/icon/icon_delete.svg" alt="" />
                    </span>
                </p>
                <p className="file_name">
                    file.mp3
                    <span className="delete_icon">
                    <img src="/src/assets/images/icon/icon_delete.svg" alt="" />
                    </span>
                </p>
                <p className="file_name">
                    file.mp3
                    <span className="delete_icon">
                    <img src="/src/assets/images/icon/icon_delete.svg" alt="" />
                    </span>
                </p>
                </div>
            </div>

            {/* <!-- 자작곡, 커버곡 일때만 노출 --> */}
            <ul className="notice_text_wrap">
                <li className="notice_text">
                * byBeats 회원의 경우 계정 연동 후 앨범에 등록된 음원에 한해
                음원 등록이 가능합니다.
                </li>
                <li className="notice_text">
                * 음원 파일은 mp3, **, *** 확장자를 가진 파일만 등록 가능합니다.
                </li>
                <li className="notice_text">
                * 음원 파일은 최대 5개까지 등록이 가능하고 용량은 개당 000MB
                까지 등록 가능합니다.
                </li>
                <li className="notice_text">
                * Drag & Drop 방식으로 음원 파일 직접 등록이 가능합니다.
                </li>
            </ul>

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
