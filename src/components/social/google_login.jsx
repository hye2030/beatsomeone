import { useEffect, useRef } from 'react'
import jwt_decode from "jwt-decode";

const GoogleLogin = () => {

    function handleCallbackResponse(response){
        console.log(jwt_decode(response.credential));
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "22479064603-9fu0fm4ke7l12c6h2r5tdrl84a6ld91v.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        // google.accounts.id.renderButton(
        //     document.getElementById("signInDiv"),
        //     {theme:"outline", 
        //     size:"small",}
        // )
    }, []);

    const onGoogleLibraryLoad = () => {
        google.accounts.id.initialize({
            client_id: "22479064603-9fu0fm4ke7l12c6h2r5tdrl84a6ld91v.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.prompt();
    };

    return (
        <>
            <div id="signInDiv"></div>
            <button type="button" className="signIn_btn google" onClick={onGoogleLibraryLoad}>
                Continue with Google
            </button>
        </>
    )
}

export default GoogleLogin