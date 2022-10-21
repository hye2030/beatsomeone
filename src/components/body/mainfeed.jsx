import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function MainFeed() {
    const user_idx = useSelector((state) => {return state.idx});
    const [feedList, setFeedList] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL +"/api/v1/feed/feedList", {
            params: {
                sorting : 1,
                mem_id: user_idx,
                page: 1,
                limit: 12
            }
        })
        .then(function (response) {
            console.log(response.data.response);
            setFeedList(response.data.response);
        });
    }, [user_idx])

    /**파일 확장자 추출 */
    function getExtension(fileName) {
        var fileLength = fileName.length;
        var lastDot = fileName.lastIndexOf('.');
        var fileExtension = fileName.substring(lastDot+1, fileLength);
        return fileExtension;
    }

    return (
        <>
        {feedList.map((list) => {
            let feed_type = ""
            if(list.wr_type == "자작곡"){
                feed_type = "title category_mark_self shadow";
            }else if(list.wr_type == "커버곡"){
                feed_type = "title category_mark_cover shadow";
            }else if(list.wr_type == "일상"){
                feed_type = "title category_mark_daily shadow";
            }

            const extension = getExtension(list.feed_source);
            
            let like_active = "";
            if(list.like_status >= 1){
                like_active = "active";
            }else{
                like_active = "";
            }

            return (
            <li className="list_item daily" key={list.idx}>
                <div className="img_wrap">
                    {extension == "mp4" ?
                    <div className="img">
                        <video preload="metadata" src={`${import.meta.env.VITE_REACT_APP_BEAT_SOMEONE_URL}${list.file_url}${list.feed_source}#t=0.5`}></video>
                    </div>
                    :
                    <div className="img">
                        <img src={`${import.meta.env.VITE_REACT_APP_BEAT_SOMEONE_URL}${list.file_url}${list.feed_source}`} alt="이미지" />
                    </div>
                    }
                    <div className="text_box">
                        <div className="text_wrap">
                            <ul>
                                <li className="like">
                                    <button className={`like_toggle_btn white ${like_active}`}>
                                        <span>{list.wr_bit}</span>
                                    </button>
                                </li>

                                <li className="comment">
                                    <div className="profile_wrap">
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

                                        <span>{list.wr_comment}</span>
                                    </div>
                                    <div className="nick_name">
                                        <div className="profile_img">
                                            <img src="/assets/images/icon/icon_profile_default.svg" alt=""/>
                                        </div>
                                        <p>
                                            {list.mem_nickname}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="list_text">
                    {list.wr_content}
                </div>
            </li>
            )}
        )}
        </>
    )
}

export default MainFeed;
