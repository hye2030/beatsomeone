import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isModal } from "../../components/header/recoil";
import { useEffect } from 'react'

function LoginN({value}) {
    useEffect(() => {
		$('.sign_in').click(() => {
            $('.route_modal.signIn').fadeIn(200);
            $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
                e.stopPropagation();
            });
            $("#login_email").val("");
        });
        $('.sign_up').click(() => {
            $("#sign_email").val("");
            $('.route_modal.signIn').fadeOut(200);
            $('.route_modal.signUp').fadeIn(200);
            $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
                e.stopPropagation();
            });
        });
	}, [])

    const ModalHandler = useSetRecoilState(isModal);
    
    return (
        <>
        <ul className="user">
            <li className="list sign_in" id="sign_in">
                <a href="#!" onClick={() => { ModalHandler("login") }} className="link">
                {value[7]}
                </a>
            </li>
            <li className="list sign_in">
                <a href="#!" onClick={() => { ModalHandler("join"); localStorage.setItem("existingEmailId", ""); }} className="link">
                {value[8]}
                </a>
            </li>
        </ul>
        </>
    )
}

export default LoginN;
