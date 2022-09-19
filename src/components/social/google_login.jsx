import { useEffect, useRef } from 'react'
import jwt_decode from "jwt-decode";

const GoogleLogin = () => {
    
    const googleRef = useRef();

    function handleCallbackResponse(response){
        console.log(jwt_decode(response.credential));
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "22479064603-9fu0fm4ke7l12c6h2r5tdrl84a6ld91v.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline", size:"large"}
        )
    }, []);

    const handleNaverLogin = () => {
		googleRef.current.click();
        console.log(googleRef.current.children[0].children[1].src);
	}

    return (
        <>
            <div ref={googleRef} id="signInDiv"></div>
            <button type="button" className="signIn_btn google" onClick={handleNaverLogin}>
                Continue with Google
            </button>
        </>
    )
}

export default GoogleLogin