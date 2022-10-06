import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "@/assets/css/components/content_add.css";

function Main() {
    const navigate = useNavigate();

    /**최상단 이미지 처리 및 미리보기 */
    const [fileImage, setFileImage] = useState("");
    const [files, setFiles] = useState("")
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        setFiles(e.target.files);
        document.getElementById("main_file_txt").textContent=""+e.target.files[0].name;
    };
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
        setFiles("");
        document.getElementById("main_file_txt").textContent="이미지 및 영상선택";
    };

    /**일상 추가용 */
    const [addDaily, setAddDaily] = useState([]);
    const [nextId, setNextId] = useState(5);

    const handleClick = () => {
        const newList = addDaily.concat({
            id: nextId
        });
        setNextId(nextId+1);
        setAddDaily(newList);
    }
    const handleDelete = id => {
        const newList = addDaily.filter(daily => daily.id !== id);
        setAddDaily(newList);
    };

    /**이미지 추가용 */
    const [myImage, setMyImage] = useState([]);
    const [myImagePreview, setMyImagePreview] = useState([]);
    const handleImage = (e, index) => {
        let cur_file = e.target.files[0];
        const filesInArr = Array.from(e.target.files);
        const previewArr = [window.URL.createObjectURL(cur_file)];
        console.log(index);

        const nowImageURLList =[...myImage];
        nowImageURLList.push(filesInArr);
        setMyImage(nowImageURLList);
    }

    const submitClick = async (e) => {
        e.preventDefault();
        e.persist();

        // console.log(myImage);
        console.log(e.target.main_img);
    }

    const dailyList = addDaily.map((daily, index) => 
        <div className="add_content" style={{display: "block"}} key={daily.id}>
            <div className="img_add_line" onClick={() => console.log(index)}>
                <input type="text" placeholder="이미지 및 영상선택" className="add_input" readOnly />
                <label htmlFor="file" className="add_btn"> 추가 </label>
                <input type="file" id="file" accept="image/*" name="sub_file[]" onChange={(e) => {handleImage(e, index);}} />
            </div>
            <div className="textarea_wrap">
                <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea>
                <span className="list_delete_icon" onClick={() => handleDelete(daily.id)}>
                    <img src="/assets/images/icon/icon_delete_cover.svg" alt="" />
                </span>
            </div>
        </div>
    );

    return (
        <>
        <form onSubmit={(e) => submitClick(e)} encType="multipart/form-data">
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
                    <label htmlFor="image" className="add_input" id="main_file_txt">이미지 및 영상선택</label>
                    <input type="file" id="image" accept="image/*" name="main_file" onChange={saveFileImage}/>
                    </div>
                    {/* <!-- 이미지 추가 했을 때 --> */}
                    {fileImage && (
                    <div className="add_file_box">
                        <div className="cover_img">
                            <img src={fileImage} alt="" />
                        </div>
                        <span className="close_icon" onClick={() => deleteFileImage()}>
                            <img src="/assets/images/icon/icon_close_white.svg" alt="" />
                        </span>
                    </div>
                    )}
                    <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea>
                    {/* <!-- 영상 추가 했을 때 --> */}
                    {/* <div className="add_file_box">
                        <div className="cover_img">
                            <img src="/assets/images/dummy/video_img.jpg" alt="" />
                        </div>
                        <span className="close_icon">
                            <img src="/assets/images/icon/icon_close_white.svg" alt="" />
                        </span>
                        <div className="video_area">
                            <span className="play_icon">
                            <img src="/assets/images/icon/icon_play_02.svg" alt="" />
                            </span>
                            <span className="time">4:16</span>
                        </div>
                    </div>
                    <textarea placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea> */}
                </div>
                
                {/*일상 선택했을 경우 추가되는 컨텐츠*/}
                {dailyList}

                <div className="btn_wrap">
                    <p className="gray_text">
                    + 선택 시 내용과 이미지 및 영상 등록 영역이 추가됩니다.
                    </p>
                    <button type="button" className="plus_btn" onClick={handleClick}>
                    <span>
                        <img src="/assets/images/icon/icon_plus_gray.svg" alt="" />
                    </span>
                    </button>
                </div>

                <div className="button_wrap">
                    <button className="basic_btn_red_border cancel_btn" onClick={() => {navigate("/feed/feed_list")}}>취소</button>
                    <button className="basic_btn_red confirm_btn" type="submit">등록</button>
                </div>
                </section>
            </div>
        </div>
        </form>
        </>
    );
}

export default Main;
