import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "@/assets/css/components/content_add.css";

function Main() {
    const navigate = useNavigate();
    const user = useSelector((state) => {return state.isLogin});
    const user_idx = useSelector((state) => {return state.idx});

    /**파일 확장자 추출 */
    function getExtension(fileName) {
        var fileLength = fileName.length;
        var lastDot = fileName.lastIndexOf('.');
        var fileExtension = fileName.substring(lastDot+1, fileLength);
        return fileExtension;
    }

    /**최상단 이미지 처리 및 미리보기 */
    const [fileImage, setFileImage] = useState("");
    const [files, setFiles] = useState("");
    const [mainExtension, setMainExtension] = useState("");
    const saveFileImage = (e) => {
        setMainExtension(getExtension(e.target.files[0].name));
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

    /**최상단 컨텐츠 구분 및 내용 */
    const [contentType, setContentType] = useState("daily");
    const [contentTxt, setContentTxt] = useState([]);

    /**일상 추가용 */
    const [addDaily, setAddDaily] = useState([]);
    const [nextId, setNextId] = useState(1);

    const handleClick = () => {
        if(files == ""){
            alert("이미지를 등록해주세요.");
            return false;
        }
        if(contentTxt == ""){
            alert("내용을 입력해주세요.");
            return false;
        }
        if(addDaily.length != img.length){
            alert("이미지를 등록해주세요.");
            return false;
        }

        const newList = addDaily.concat({
            id: nextId
        });
        setNextId(nextId+1);
        setAddDaily(newList);
    }
    const handleDelete = (id, index) => {
        const newList = addDaily.filter(daily => daily.id !== id);
        setAddDaily(newList);

        document.getElementById("file_"+index).value = "";
        let copiedItems = [...img];
        copiedItems.splice(index);
        setImg(copiedItems);
    };

    /**이미지 추가용 */
    const [ img, setImg ] = useState([])
    const [ previewImg, setPreviewImg ] = useState([])
    const [ subExtension, setSubExtension ] = useState([])  
    const handleAddImages = (e, index) => {
        let reader = new FileReader()

        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);

            let copiedItems = [...img];
            copiedItems[index] = e.target.files[0];

            setImg(copiedItems);

            let copiedItems2 = [...subExtension];
            copiedItems2[index] = getExtension(e.target.files[0].name);
            setSubExtension(copiedItems2);
        }

        reader.onloadend = () => {
            const previewImgUrl = reader.result;

            if(previewImgUrl) {
                let copiedItems = [...previewImg];
                copiedItems[index] = previewImgUrl;

                setPreviewImg(copiedItems);
            }
        }
    };

    const handleDeleteImage = (index) => {
        document.getElementById("file_"+index).value = "";

        let copiedItems = [...img];
        copiedItems.splice(index);

        setImg(copiedItems);
    };

    const submitBtn = () => {
        const cntt = document.getElementsByName('content[]');
        const sub = document.getElementsByName('sub_file[]');

        let next = false;

        if(user == true){
            next = true;
        }else{
            next = false;
        }
        if(next == false){
            $(".plzSignin_modal").fadeIn(200);
            return false;
        }

        if(cntt.length !== 0) {
            for(var i = 0; i < cntt.length; i++) {
                if(cntt[i].value == "") {
                    next = false;
                }else{
                    next = true;
                }
            }
        }
        if(next == false){
            alert("내용을 입력해주세요");
            return false;
        }

        if(sub.length !== 0) {
            for(var i = 0; i < sub.length; i++) {
                if(sub[i].value == "") {
                    next = false;
                }else{
                    next = true;
                }
            }
        }
        if(next == false){
            alert("이미지를 등록해주세요");
            return false;
        }

        var frm = new FormData();
        frm.append("content_cnt", (files.length + img.length));
        frm.append("mem_id", user_idx);
        frm.append("main_file", files[0]);
        if(img.length == 0){
            frm.append("sub_file[]", null);
        }else{
            img.map((value) =>{
                frm.append("sub_file[]", value);
            });
        }
        frm.append("wr_type", contentType);
        for(var i = 0; i < cntt.length; i++) {
            frm.append("feed_content[]", cntt[i].value);
        }

        axios.post(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/feed/feedFileUpdate", frm,
            {
                headers : {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
        .then(function (response) {
            if(response.data.code == 0){
                $(".conRegisterC_modal").fadeIn(200);                
            }else{
                alert("등록중 오류가 발생하였습니다.");
                location.href="/feed/feed_list";
            }
        });
    }
    
    const dailyList = addDaily.map((daily, index) => 
        <div className="add_content" style={{display: "block"}} key={daily.id}>
            <div className="img_add_line" id={`daily_input_id${index}`}>
                <input type="text" placeholder="이미지 및 영상선택" className="add_input" readOnly />
                <label htmlFor={`file_${index}`} className="add_btn"> 추가 </label>
                <input type="file" id={`file_${index}`} accept="image/jpg, image/png, image/jpeg, image/svg, video/mp4" name="sub_file[]" onChange={(e) => handleAddImages(e, index)} />
            </div>
            {img.filter((el, id) => id == index).map((el, id) => (
            <div className="add_file_box" key={id}>
                {(subExtension[index] == "mp4") || (subExtension[index] == "mov") ?
                <video preload="metadata" src={`${previewImg[index]}#t=0.5`}></video>
                :
                <div className="cover_img">
                    <img src={previewImg[index]}/>
                </div>
                }
                <span className="close_icon" onClick={() => handleDeleteImage(index)}>
                    <img src="/assets/images/icon/icon_close_white.svg" alt="" />
                </span>
            </div>
            ))}
            <div className="textarea_wrap">
                <textarea name="content[]" placeholder="내용 입력 (5,000 글자)" className="content_area"></textarea>
                <span className="list_delete_icon" onClick={() => handleDelete(daily.id, index)}>
                    <img src="/assets/images/icon/icon_delete_cover.svg" alt="" />
                </span>
            </div>
        </div>
    );

    const backMain = () => {
        $(".conRegisterC_modal").fadeOut(200);
        navigate("/feed/feed_list");
    }

    const aa = () => {
        console.log(subExtension);
    }

    return (
        <>
        <div id="wrap_content" className="content_add_wrap">
            <div className="wrap_inner">
                <section className="feed_add_section">
                <h2 onClick={() => {aa()}}>컨텐츠 등록</h2>
                <div className="content_select">
                    <div className="select_box_wrap">
                    {/* <!-- 0. 기본 --> */}
                    <button className="select_title">일상</button>
                    <ul>
                        {/* <li className="select_list song">자작곡</li>
                        <li className="select_list song">커버곡</li> */}
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
                    <input type="file" id="image" accept="image/jpg, image/png, image/jpeg, image/svg, video/mp4" name="sub_file[]" onChange={saveFileImage}/>
                    </div>
                    {/* <!-- 이미지 추가 했을 때 --> */}
                    {fileImage && (
                    <div className="add_file_box">
                        <div className="cover_img">
                            {(mainExtension == "mp4") || (mainExtension == "mov") ?
                            <video preload="metadata" src={`${fileImage}#t=0.5`}></video>
                            :
                            <img src={fileImage} alt="" />
                            }
                        </div>
                        <span className="close_icon" onClick={() => deleteFileImage()}>
                            <img src="/assets/images/icon/icon_close_white.svg" alt="" />
                        </span>
                    </div>
                    )}
                    <textarea placeholder="내용 입력 (5,000 글자)" name="content[]" className="content_area" onChange={(e) => setContentTxt(e.target.value)}></textarea>
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
                    <button className="basic_btn_red confirm_btn" type="submit" onClick={() => {submitBtn();}}>등록</button>
                </div>
                </section>
            </div>
        </div>

        <div className="modal_wrap message_modal conRegisterC_modal" style={{display: "none"}}>
            <div className="modal_box done">
                <button className="x_btn" onClick={() => {backMain()}}></button>
                <p className="comment">
                    컨텐츠 등록이 완료되었습니다.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn close_btn" onClick={() => {backMain()}}>
                        확인
                    </button>
                </div>
            </div>
        </div>

        <div className="modal_wrap message_modal plzSignin_modal" id="feed_add_login" style={{display: "none"}}>
            <div className="modal_box alert">
            <button className="x_btn" onClick={() => {backMain()}}></button>
                <p className="comment">
                    로그인이 필요한 서비스입니다.
                </p>
                <div className="button_wrap">
                    <button type="button" className="basic_btn_red confirm_btn close_btn" onClick={() => {backMain()}}>
                        확인
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Main;
