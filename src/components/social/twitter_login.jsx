import { useEffect, useRef } from 'react'
import axios from 'axios';

const TwitLogin = () => {
    
    

    const login = () => {
        console.log(22);
        axios.get("https://cors.sh/https://api.twitter.com/oauth/authorize ",
        {
            headers: {
                'Authorization': 'OAuth oauth_consumer_key="7gKUNXGvYdh5DAudSHe4irrWU", oauth_nonce="31313123", oauth_signature="oauth_signature", oauth_signature_method="HMAC-SHA1", oauth_timestamp="3123213", oauth_version="1.0"'
            },
            params: {
                'ouath_callback': 'https://beatsomeone.codeidea.io'
            }
        }).then((data) => {
            console.log(data);
        });
      }
      

    return (
        <>
        <button type="button" className="signIn_btn twitter" onClick={() => {login()}}>
                Continue with twitter
            </button>
        </>
    )
}

export default TwitLogin