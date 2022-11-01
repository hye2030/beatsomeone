import { useEffect, useRef } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { isModal } from "../../components/header/recoil";

const NaverLogin = (e) => {
	const currentType = useRecoilValue(isModal);
    
    const naverRef = useRef()
    const { naver } = window
	/**테스트 */
	// const NAVER_CLIENT_ID = "M2HPrcC5GH0M80IoRpTw"
	// const NAVER_CALLBACK_URL = "http://localhost:3000/auth/naver?currentType="+currentType;
	/**실서버 */
	const NAVER_CLIENT_ID = "kFIwy52wpxbG8D95tVEu"
	const NAVER_CALLBACK_URL = "https://beatsomeone.com/auth/naver?currentType="+currentType;

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: NAVER_CLIENT_ID,
			callbackUrl: NAVER_CALLBACK_URL,      
			isPopup: true,
            loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()
	}
   
	const userAccessToken = () => {
			window.location.href.includes('access_token') && getToken()
	}
	
	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0]
	}

	useEffect(() => {
		initializeNaverLogin()
		// userAccessToken()
	}, [currentType])

    const handleNaverLogin = () => {
		naverRef.current.children[0].click()
	}

    return (
        <>
            <div ref={naverRef} id="naverIdLogin" style={{display:"none"}}></div>
            {/* <button type="button" className="signIn_btn naver" onClick={handleNaverLogin} > */}
			<button type="button" className={e.value == "new"? "signIn_btn naver newly" : "signIn_btn naver"} onClick={handleNaverLogin} >
                Continue with Naver
            </button>
        </>
    )
}

export default NaverLogin