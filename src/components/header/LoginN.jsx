function LoginN({value}) {

    return (
        <>
        <ul className="user">
            <li className="list sign_in" id="sign_in">
                <a href="#" onClick={() => { return false; }} className="link">
                {value[7]}
                </a>
            </li>
            <li className="list sign_up">
                <a href="#" onClick={() => { return false; }} className="link">
                {value[8]}
                </a>
            </li>
        </ul>
        </>
    )
}

export default LoginN;
