import { useState } from "react";

function Main() {
    const [userpw, setUserpw] = useState("");
    const [next_check, next_setCheck] =  useState(false);

    const pwRegEx = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{6,16}$/
    const pwCheck = (userpw) => {
        document.getElementById('pwTip').style.display = "block";
        
        if(userpw.match(pwRegEx)===null) {
            console.log('비밀번호 형식을 확인해주세요');
            return;
        }else{ 
            console.log('비밀번호 형식이 맞아요');
        }
    }

    return (
        <div className="modal_wrap big_modal signIn_modal">
            <div className="modal_box">
                <button className="x_btn close_btn"></button>
                <h3 className="title">
                    비밀번호
                </h3>
                <form>
                    <fieldset>
                        <legend hidden>로그인</legend>
                        <div className="input_wrap">
                            <input type="password" placeholder="Password" onChange={(e)=>{setUserpw(e.target.value); pwCheck(e.target.value)}}/>

                            <div className="alert_box wrap_box" style={{display:'none'}} id="pwTip">
                                영문, 숫자, 특수문자( !@#$%^&* ‘) 중 2가지 이상 조합 6자이상 16자 이하 사용 가능
                                <button type="button" className="close_button">삭제버튼</button>
                            </div>
                        </div>
                        <p className="error_txt"></p>
                        {/* <p className="error_txt">
                            비밀번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.
                        </p>
                        <p className="error_txt">
                            비밀번호를 입력해주세요.
                        </p> */}
                        <button type="button" className="full_btn signIn_btn" >
                            로그인
                        </button>
                    </fieldset>
                </form>
                <button type="button" className="link_btn reset_pw">
                    비밀번호를 잊어버리셨나요?
                </button>
            </div>
        </div>
    );
  }
  
  export default Main;
  