import axios from 'axios';
import jwt_decode from "jwt-decode";

const {FB} = window;

const FbLogin = () => {
    const FbLoginClickHandler = () => {
        FB.login(function(response) {
            if (response.status === 'connected') {
              // Logged into your webpage and Facebook.
              console.log(response);
              afterlogin(); 
            } else {
              // The person is not logged into your webpage or we are unable to tell. 
            }
        });
    }

    function afterlogin() {
        FB.api('/me', function(response) {
            console.log(response);
        });
      }

    return (
        <>
            <button type="button" className="signIn_btn facebook" onClick={FbLoginClickHandler}>
                Continue with Facebook
            </button>
        </>
    )
}

export default FbLogin