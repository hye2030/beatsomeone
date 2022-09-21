import { useEffect, useRef } from 'react'

const NaverLogin = () => {
    
    const naverRef = useRef()
    const { naver } = window
	const NAVER_CLIENT_ID = "7zMZQ1ATkf_uVtuhDMQO"
	const NAVER_CALLBACK_URL = "http://localhost:3000/auth/naver"

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
	}, [])

    const handleNaverLogin = () => {
		naverRef.current.children[0].click()
	}

    return (
        <>
            <div ref={naverRef} id="naverIdLogin" style={{display:"none"}}></div>
            <button type="button" className="signIn_btn naver" onClick={handleNaverLogin} >
                Continue with Naver
            </button>
        </>
    )
}

export default NaverLogin