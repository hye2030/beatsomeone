import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function MainPopup() {
    const [pChecked, setPChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const checkHandler = ({ target }) => {
        setPChecked(!pChecked);
    };
    
    const HAS_VISITED_BEFORE = localStorage.getItem('hasVisitedBefore');
    useEffect(() => {
        if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
            return;
        }

        if (!HAS_VISITED_BEFORE) {
            setShowModal(true);
        }
    }, [HAS_VISITED_BEFORE])

    const closePopup = () => {
        if(pChecked == true){
            let expires = new Date();
            expires = expires.setHours(expires.getHours() + 24);
            localStorage.setItem('hasVisitedBefore', expires);
            $(".popup_modal").fadeOut(200);
        }else{
            $(".popup_modal").fadeOut(200);
        }
    }

    //모달 닫기
    useEffect(() => {
        const modalWrap = document.querySelectorAll('.modal_wrap');
        modalWrap.forEach((item, idx) => {
            const closeBtn = item.querySelectorAll('.close_btn');


            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal_wrap')) {
                    $(item).fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                };
            });

            closeBtn.forEach((items, i) => {
                items.addEventListener('click', () => {
                    $(item).fadeOut(200);
                    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
                });
            });
        });
    }, []);

    //팝업 리스트
    const [popup, setPopup] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_REACT_APP_API_URL + "/api/v1/getPopup", {
            params: {
                site_type: "beatsomeone"
            }
        })
        .then(function (response) {
            setPopup(response.data.response);
        });
    }, []);

    return (
        <>
        {showModal === true && popup != null ?
        <div className="modal_wrap message_modal popup_modal" style={{display:"block"}}>
            <div className="modal_box_wrap">
                <div className="modal_box">
                    <p className="comment"><img src={`https://beatsomeone.com/storage/popup/${popup.popup_source}`} alt="" /></p>
                </div>
                <button type="button" className="close_btn" onClick={() => {closePopup()}}>닫기</button>
                <div className="check_box check_area">
                    <input type="checkbox" id="dontshow" onChange={(e) => checkHandler(e)} />
                    <label htmlFor="dontshow">
                        <span className="check_box_img"></span>
                        <span className="check_box_text">오늘 하루 그만보기</span>
                    </label>
                </div>
            </div>
        </div>
        : null}
        </>
    )
}

export default MainPopup;
