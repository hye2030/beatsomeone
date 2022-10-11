import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "@/assets/css/components/content_add.css";

function Main() {
    const navigate = useNavigate();
    const param = useParams();
    const user = useSelector((state) => {return state.isLogin});
    const user_idx = useSelector((state) => {return state.idx});

    /**최상단 이미지 처리 및 미리보기 */
    const [fileImage, setFileImage] = useState("");
    const [files, setFiles] = useState("")
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        setFiles(e.target.files);
        document.getElementById("main_file_txt").textContent=""+e.target.files[0].name;
    };

    /**최상단 컨텐츠 구분 및 내용 */
    const [contentType, setContentType] = useState("daily");
    const [contentTxt, setContentTxt] = useState([]);

    /**일상 추가용 */
    const [addDaily, setAddDaily] = useState([]);
    const [nextId, setNextId] = useState(1);

    const handleClick = () => {
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
    const handleAddImages = (e, index) => {
        let reader = new FileReader()

        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);

            let copiedItems = [...img];
            copiedItems[index] = e.target.files[0];

            setImg(copiedItems);
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

    /**피드 내용 불러오기 */
    const [ editImg, setEditImg ] = useState([])  
    useEffect(() => {
        axios.get("https://beats-admin.codeidea.io/api/v1/feed/feedView", {
            params: {
                "idx" : param.idx
            }
        })
        .then(function (response) {
            const main_data = response.data.response.detail[0];
            setContentTxt(main_data.wr_content);
            setFileImage("https://beatsomeone.codeidea.io"+main_data.file_url+main_data.feed_source);

            const sub_data = response.data.response.file;
            setEditImg(sub_data);

            // const newList = []
            // for(i = 0; i<sub_data.length; i++){
            //     sub_img_url.push("https://beatsomeone.codeidea.io"+sub_data[i].file_url+sub_data[i].feed_source);
            //     setNextId((prev) => prev + 1);
            //     newList.push({id: i+1});
            // }
            // setAddDaily(newList);
            // setImg(sub_img_url);
            // setPreviewImg(sub_img_url);
        });
    }, [])

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
        frm.append("feed_idx", param.idx);
        if(files[0] == undefined){
        }else{
            frm.append("main_file", files[0]);
        }
        if(img.length == 0){
        }else{
            img.map((value) =>{
                frm.append("sub_file[]", value);
            });
        }
        // frm.append("wr_type", contentType);
        for(var i = 0; i < cntt.length; i++) {
            frm.append("feed_content[]", cntt[i].value);
        }
        for(var i = 0; i < delete_file_idx.length; i++) {
            frm.append("file_idx[]", delete_file_idx[i]);
        }

        axios.post("https://beats-admin.codeidea.io/api/v1/feed/feedUpdate", frm,
            {
                headers : {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
        .then(function (response) {
            console.log(response);
            if(response.data.code == 0){
                $(".conRegisterC_modal").fadeIn(200);                
            }else{
                alert("등록중 오류가 발생하였습니다.");
                //location.href="/feed/feed_list";
            }
        });
    }
    
    const dailyList = addDaily.map((daily, index) => 
        <div className="add_content" style={{display: "block"}} key={daily.id}>
            <div className="img_add_line" id={`daily_input_id${index}`}>
                <input type="text" placeholder="이미지 및 영상선택" className="add_input" readOnly />
                <label htmlFor={`file_${index}`} className="add_btn"> 추가</label>
                <input type="file" id={`file_${index}`} accept="image/*" name="sub_file[]" onChange={(e) => handleAddImages(e, index)} />
            </div>
            {img.filter((el, id) => id == index).map((el, id) => (
            <div className="add_file_box" key={id}>
                <div className="cover_img">
                    <img src={previewImg[index]}/>
                </div>
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

    let delete_file_idx = [];
    const delete_sub = (source, idx) => {
        document.getElementById(source).style.display = "none";
        delete_file_idx.push(idx);
    }

    return (
        <>
        <div id="wrap_content" className="content_add_wrap">
            <div className="wrap_inner">
                <section className="feed_add_section">
                <h2>컨텐츠 수정</h2>
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

                <div className="content">
                    <div className="img_add_line">
                    <label htmlFor="image" className="add_input" id="main_file_txt">이미지 및 영상선택</label>
                    <input type="file" id="image" accept="image/*" onChange={saveFileImage}/>
                    </div>
                    {/* <!-- 이미지 추가 했을 때 --> */}
                    {fileImage && (
                    <div className="add_file_box">
                        <div className="cover_img">
                            <img src={fileImage} alt="" />
                        </div>
                    </div>
                    )}
                    <textarea placeholder="내용 입력 (5,000 글자)" name="content[]" className="content_area" value={contentTxt} onChange={(e) => setContentTxt(e.target.value)}></textarea>

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
                {editImg.map((edit) => {
                    return (
                        <div className="add_content" style={{display: "block"}} key={edit.feed_source} id={edit.feed_source}>
                            <div className="add_file_box" >
                                <div className="cover_img">
                                    <img src={`https://beatsomeone.codeidea.io${edit.file_url}${edit.feed_source}`}/>
                                </div>
                            </div>
                            <div className="textarea_wrap">
                                <textarea name="content[]" placeholder="내용 입력 (5,000 글자)" className="content_area" defaultValue={edit.wr_content}></textarea>
                                <span className="list_delete_icon" onClick={() => {delete_sub(edit.feed_source, edit.idx)}}>
                                    <img src="/assets/images/icon/icon_delete_cover.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    )
                })}
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
                    <button className="basic_btn_red confirm_btn" type="submit" onClick={() => {submitBtn();}}>수정</button>
                </div>
                </section>
            </div>
        </div>

        <div className="modal_wrap message_modal conRegisterC_modal" style={{display: "none"}}>
            <div className="modal_box done">
                <button className="x_btn" onClick={() => {backMain()}}></button>
                <p className="comment">
                    컨텐츠 수정이 완료되었습니다.
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
