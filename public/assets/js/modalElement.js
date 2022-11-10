class allModal extends HTMLElement {
    constructor() {
        super();
    }

    // 문서의 DOM에 처음 연결될 때 호출
    connectedCallback() {
        this.render();
    }

    // 해당요소가 새로운 문서로 이동 될 때마다 호출 된다.
    adoptCallback() {}

    // 사용자 정의 요소의 속성 중 하나가 추가, 제거 또는 변경될 때 호출
    attributeChangedCallback() {
        this.render();
    }

    // 문서의 DOM에서 연결 해제될 때 호출
    disconnectedCallback() {}

    render() {
        let fileName = document.URL.split("/");
        let file = [fileName[fileName.length - 2], fileName[fileName.length - 1]];
        let fileRoute = ["common", "event", "feed", "mypage", "review", "search", "signinup", "trend", "default"];

        this.innerHTML = `

        <!-- sns 가입된 정보 없음 모달 -->
        <div class="modal_wrap message_modal">
            <div class="modal_box question">
                <p class="comment">
                    해당 SNS 계정으로 가입된 정보가 없습니다. <br>
                    회원가입 하시겠습니까?
                </p>
                <div class="button_wrap">
                    <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                        아니오
                    </button>
                    <button type="button" class="basic_btn_red confirm_btn close_btn">
                        네
                    </button>
                </div>
            </div>
        </div>

        <!-- 통합회원 전환 완료 모달 -->
        <div class="modal_wrap message_modal">
            <div class="modal_box done">
                <p class="comment">
                    통합회원으로 회원전환이 완료되었습니다.
                </p>
                <div class="button_wrap">
                    <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                        아니오
                    </button>
                    <button type="button" class="basic_btn_red confirm_btn close_btn">
                        네
                    </button>
                </div>
            </div>
        </div>

        <!-- 통합회원 전환 취소 모달 -->
        <div class="modal_wrap message_modal"">
            <div class="modal_box question">
                <p class="comment">
                통합회원 전환을 취소하겠습니까?.
                </p>
                <div class="button_wrap">
                    <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                        아니오
                    </button>
                    <button type="button" class="basic_btn_red confirm_btn close_btn">
                        네
                    </button>
                </div>
            </div>
        </div>

        <!-- 이미 가입된 계정 -->
        <div class="modal_wrap message_modal aleadyJoin_modal">
            <div class="modal_box alert">
                <p class="comment">
                    이미 가입된 계정입니다.
                    <br>
                    로그인하여 이용해주세요.
                </p>
                <!-- 이미 가입된 계정- sns 가입 계정인 경우-->
                <div class="email_info">
                    <div class="icon_box">
                        <img src="/src/assets/images/icon/signUp_facebook.svg" alt="">
                    </div>
                    <p class="text_box">
                        SNS 가입 (sns@sns.com)
                    </p>
                </div>
                <!-- 이미 가입된 계정- 이메일 가입일 경우 -->
                <!-- <div class="email_info">
                    <p class="text_box">
                    이메일 가입 (email@email.com)
                    </p>
                </div> -->
                <div class="button_wrap">
                    <button type="button" class="basic_btn_red confirm_btn close_btn">
                        로그인
                    </button>
                </div>
            </div>
        </div>

        <!-- 비밀번호 재설정 모달 2 -->
        <div class="modal_wrap big_modal pwResetting_modal stepTwo">
            <div class="modal_box">
                <button class="x_btn close_btn"></button>
                <h3 class="title">
                    비밀번호 재설정
                </h3>
                <form>
                    <fieldset>
                        <legend hidden>email</legend>
                        <div class="input_wrap">
                            <input type="password" placeholder="New Password">
                        </div>
                        <div class="input_wrap">
                            <input type="password" placeholder="New Password">
                        </div>
                        <p class="error_txt">
                            입력하신 비밀번호가 일치하지 않습니다. 다시 한번 입력해주세요.
                        </p>
                        <p class="error_txt">
                            6~18글자 사이의 새로운 비밀번호를 입력해주세요.
                        </p>
                        <p class="comment">
                            사용 가능한 비밀번호입니다.
                        </p>
                        <button type="button" class="full_btn next_btn">
                            다음
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>

        <!-- 비밀번호 재설정 모달 1 -->
        <div class="modal_wrap big_modal pwResetting_modal stepOne">
            <div class="modal_box">
                <button class="x_btn close_btn"></button>
                <h3 class="title">
                    비밀번호 재설정
                </h3>
                <form>
                    <fieldset>
                        <legend hidden>email</legend>
                        <div class="input_wrap">
                            <input type="text" placeholder="E-mail address">
                        </div>
                        <p class="error_txt">
                            이메일 형식에 맞춰 입력해주세요.
                        </p>
                        <p class="error_txt">
                            해당 메일 주소로 가입된 회원이 존재하지 않습니다. 다른 메일 주소를 입력해주세요.
                        </p>
                        <p class="error_txt">
                            해당 메일 주소로 비밀번호 재설정 메일을 발송했습니다. 수신된 메일을 확인해주세요.
                        </p>
                        <p class="comment">
                            로그인 시 사용한 이메일 주소를 입력하시면 비밀번호 재설정 링크를 전달해드립니다.
                        </p>
                        <button type="button" class="full_btn next_btn">
                            다음
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>

        <!-- 휴면해제 모달 -->
        <div class="modal_wrap big_modal dormant_modal">
            <div class="modal_box">
                <div class="logo_wrap">
                    <div class="beat_some"></div>
                </div>
                <h3 class="title">
                    오랜만에 방문하셨네요 !
                </h3>
                <p class="condition">
                    회원님은 장기 미 접속으로 인해 <span>휴면회원</span> 전환 상태입니다.
                </p>
                <div class="date_info">
                    <div class="one_line">
                        <p>
                            ・ 마지막 접속일
                        </p>
                        <span class="last_date">
                            2020년 10월 5일
                        </span>
                    </div>
                    <div class="one_line">
                        <p>
                            ・ 휴면 전환일
                        </p>
                        <span class="change_date">
                            2021년 10월 5일
                        </span>
                    </div>
                </div>
                <div class="info_box">
                    <div class="one_line">
                        <p>
                            *적용대상
                        </p>
                        <span>
                            홈페이지 로그인 내역기준 1년간 미사용 회원
                        </span>
                    </div>
                    <div class="one_line">
                        <p>
                            *처리방법
                        </p>
                        <span>
                            파기 적용 대상의 회원정보는 서비스 이용 회원정보와 별도 저장,
                            관리되며 접근을 제한함
                        </span>
                    </div>
                </div>
                <span class="line"></span>
                <p class="comment">
                    * 휴면 처리 해제를 원하실 경우 휴면해제하기를 선택해주세요.
                </p>
                <div class="button_wrap">
                    <button type="button" class="basic_btn_red clear_btn">
                        휴면 해제하기
                    </button>
                    <button type="button" class="basic_btn_black_border cancel_btn">
                        취소
                    </button>
                </div>
            </div>
        </div>

        <!-- 로그인 모달 -->
        <div class="modal_wrap big_modal signIn_modal">
            <div class="modal_box">
                <button class="x_btn close_btn"></button>
                <h3 class="title">
                    비밀번호
                </h3>
                <form>
                    <fieldset>
                        <legend hidden>로그인</legend>
                        <div class="input_wrap">
                            <input type="password" placeholder="Password">

                            <div class="alert_box wrap_box">
                                영문, 숫자, 특수문자( !@#$%^&* ‘) 중 2가지 이상 조합 6자이상 16자 이하 사용 가능
                                <button type="button" class="close_button">삭제버튼</button>
                            </div>
                        </div>
                        <p class="error_txt">
                            비밀번호가 일치하지 않습니다. 다시 확인 후 입력해주세요.
                        </p>
                        <p class="error_txt">
                            비밀번호를 입력해주세요.
                        </p>
                        <button type="button" class="full_btn signIn_btn">
                            로그인
                        </button>
                    </fieldset>
                </form>
                <button type="button" class="link_btn reset_pw">
                    비밀번호를 잊어버리셨나요?
                </button>
            </div>
        </div>

        <!-- 회원가입 route 모달 -->
        <div class="modal_wrap big_modal route_modal signUp">
            <div class="modal_box">
                <button class="x_btn close_btn"></button>
                <div class="wrap">
                    <h3 class="title">
                        통합회원가입
                    </h3>
                    <div class="logo_wrap">
                        <div class="beat_some"></div>
                        <div class="icon_x"></div>
                        <div class="by_beats"></div>
                    </div>
                    <div class="btn_wrap">
                        <div class="btn_area">
                            <button type="button" class="signIn_btn facebook">
                                Continue with Facebook
                            </button>
                            <button type="button" class="signIn_btn twitter">
                                Continue with twitter
                            </button>
                            <button type="button" class="signIn_btn google">
                                Continue with Google
                            </button>
                            <button type="button" class="signIn_btn apple">
                                Continue with Apple
                            </button>
                            <button type="button" class="signIn_btn naver">
                                Continue with Naver
                            </button>
                            <button type="button" class="signIn_btn kakaotalk">
                                Continue with kakaotalk
                            </button>
                            <button type="button" class="signIn_btn soundcloud">
                                Continue with Soundcloud
                            </button>
                        </div>
                        <div class="dividing_line"></div>
                        <form>
                            <fieldset>
                                <legend hidden>이메일 회원가입</legend>
                                <div class="input_wrap">
                                    <input type="text" class="emInput" placeholder="Email address">
                                </div>
                                <p class="error_txt">이메일 형식에 맞춰 입력해주세요.</p>
                                <p class="error_txt">입력하신 ID 정보를 찾을 수 없습니다.</p>
                                <p class="ex_txt">ex. beatsomeone@beatsomone.com</p>
                                
                                <!-- 값이 입력되긴 전에는 버튼 상태가 disabled 입니다  -->
                                <button type="button" class="full_btn continue_btn">
                                    다음
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- 로그인 route 모달 -->
        <div class="modal_wrap big_modal route_modal signIn">
            <div class="modal_box">
                <button class="x_btn close_btn"></button>
                <div class="wrap">
                    <h3 class="title">
                        로그인
                    </h3>
                    <div class="btn_wrap">
                        <button type="button" class="signIn_btn newly google">Continue with Google</button>
                        <div class="dividing_line"></div>   
                        <div class="btn_area">
                            <button type="button" class="signIn_btn facebook">
                                Continue with Facebook
                            </button>
                            <button type="button" class="signIn_btn twitter">
                                Continue with twitter
                            </button>
                            <button type="button" class="signIn_btn google">
                                Continue with Google
                            </button>
                            <button type="button" class="signIn_btn apple">
                                Continue with Apple
                            </button>
                            <button type="button" class="signIn_btn naver">
                                Continue with Naver
                            </button>
                            <button type="button" class="signIn_btn kakaotalk">
                                Continue with kakaotalk
                            </button>
                            <button type="button" class="signIn_btn soundcloud">
                                Continue with Soundcloud
                            </button>
                        </div>
                        <div class="dividing_line"></div>
                        <form>
                            <fieldset>
                                <legend hidden>이메일 로그인</legend>
                                <div class="input_wrap">
                                    <input type="text" class="emInput" placeholder="Email address">
                                </div>
                                <p class="error_txt">올바른 이메일을 입력해 주세요.</p>
                                <p class="ex_txt">ex. beatsomeone@beatsomone.com</p>
                                <button type="button" class="full_btn continue_btn">
                                    로그인
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <div class="link_wrap">
                        <a href="#" onclick="return false;" class="link reset_pw">
                            비밀번호 재설정
                        </a>
                        <span></span>
                        <a href="#" onclick="return false;" class="link sign_up">
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </div>

      <!-- 자동 로그아웃 안내 -->
      <div class="modal_wrap message_modal autoOut_modal">
          <div class="modal_box">
              <h3 class="title">
                  자동 로그아웃 안내
              </h3>
              <p class="small_comment">
              장시간 사이트 이용이 없어 회원님의 정보 보호를 위해 자동 로그아웃 
              합니다. 계속 이용하시려면 다시 로그인 하시기 바랍니다.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red_border cancel_btn close_btn sign_in">
                      다시 로그인
                  </button>
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 신규회원가입 모달 -->
      <div class="modal_wrap message_modal autoOut_modal">
          <div class="modal_box">
              <p class="small_comment">
                기존 계정이 있으신 경우 회원전환으로 <br>
                통합회원 가입을 진행해주세요.<br>
                가입절차 없이 포인트 통합과 비트썸원의 브랜드의 모든 서비스를 이용하실 수 있습니다. <br>  
                그래도 신규회원으로 가입하시곘어요?.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red_border close_btn">
                      취소
                  </button>
                  <button type="button" class="basic_btn_red close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 컨텐츠 등록 모달 -->
      <div class="modal_wrap message_modal conRegister_modal">
          <div class="modal_box question">
              <p class="comment">
                  컨텐츠를 등록하시겠습니까?
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                      아니오
                  </button>
                  <button type="button" class="basic_btn_red confirm_btn">
                      네
                  </button>
              </div>
          </div>
      </div>

      <!-- 컨텐츠 등록완료 모달 -->
      <div class="modal_wrap message_modal conRegisterC_modal">
          <div class="modal_box done">
              <p class="comment">
                  컨텐츠 등록이 완료되었습니다.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 컨텐츠 등록 취소 모달 -->
      <div class="modal_wrap message_modal registerCancel_modal">
          <div class="modal_box question">
              <p class="comment">
                  컨텐츠 등록을 취소하고 이전으로 돌아갈까요?
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                      아니오
                  </button>
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      네
                  </button>
              </div>
          </div>
      </div>

      <!-- 컨텐츠 삭제 모달 -->
      <div class="modal_wrap message_modal conDelete_modal">
          <div class="modal_box question">
              <p class="comment">
                  컨텐츠를 삭제하시겠습니까?
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                      아니오
                  </button>
                  <button type="button" class="basic_btn_red confirm_btn">
                      네
                  </button>
              </div>
          </div>
      </div>

      <!-- 컨텐츠 삭제 완료 모달 -->
      <div class="modal_wrap message_modal conDeleteC_modal">
          <div class="modal_box done">
              <p class="comment">
                  컨텐츠 삭제가 완료되었습니다.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 댓글 삭제 모달 -->
      <div class="modal_wrap message_modal commentDelete_modal">
          <div class="modal_box question">
              <p class="comment">
                  댓글을 삭제하시겠습니까?
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                      아니오
                  </button>
                  <button type="button" class="basic_btn_red confirm_btn">
                      네
                  </button>
              </div>
          </div>
      </div>

      <!-- 댓글 삭제 완료 모달 -->
      <div class="modal_wrap message_modal commentDeleteC_modal">
          <div class="modal_box done">
              <p class="comment">
                  댓글이 삭제되었습니다.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 로그인 요청 모달 -->
      <div class="modal_wrap message_modal plzSignin_modal">
          <div class="modal_box alert">
              <p class="comment">
                  로그인이 필요한 서비스입니다.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 신고하기 모달 -->
      <div class="modal_wrap declaration_modal">
          <div class="modal_box">
            <button class="x_btn close_btn"></button>
              <h3 class="modal_title">
                  신고하기
              </h3>
              <div class="content_box target">
                  <p class="title">
                      신고대상
                  </p>
                  <div class="content">
                      <div class="profile_img">
                          <img src="/src/assets/images/dummy/profile_04.jpg" alt="">
                      </div>
                      <div class="text_box">
                          <p class="user_name">
                              사용자 닉네임 표시&ensp;<span class="time">13시간 전</span>
                          </p>
                          <p class="user_text">
                              댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이 표기됩니다. 댓글 내용이
                              표기됩니다.
                          </p>
                      </div>
                  </div>
              </div>
              <div class="content_box reason">
                  <p class="title">
                      신고사유
                  </p>
                  <div class="content">
                      <div class="select_box_wrap">
                          <button type="button" class="select_title">사유 선택</button>
                          <ul>
                              <li class="select_list">스팸, 도배, 홍보 영리적 목적을 포함하고 있습니다.</li>
                              <li class="select_list">욕설, 비방, 혐오, 차별적인 내용을 포함하고 있습니다.</li>
                              <li class="select_list">음란, 청소년 유해적인 내용을 포함하고 있습니다.</li>
                              <li class="select_list">불법 정보를 포함하고 있습니다.</li>
                              <li class="select_list">개인정보 노출, 유포, 거래의 내용을 포함하고 있습니다.</li>
                              <li class="select_list">명예훼손, 사생활침해, 저작권 침해 내용을 포함하고 있습니다.</li>
                              <li class="select_list">불법촬영물 등을 포함하고 있습니다.</li>
                              <li class="select_list">기타</li>
                          </ul>
                      </div>
                      <textarea placeholder="상세사유 입력 (최대 1,500 글자 이내)"></textarea>
                      <button type="button" class="basic_btn_red confirm_btn close_btn">
                          신고하기
                      </button>
                  </div>
              </div>
          </div>
      </div>

      <!-- 휴면해제 완료 모달 -->
      <div class="modal_wrap message_modal dormantClear_modal">
          <div class="modal_box">
                <div class="beat_some"></div>
                <h2 class="title">휴면해제 처리가 완료되었습니다. </h2>
                <p class="comment">
                    <span>회원님의 소중한 정보보호를 위해 ‘개인정보 관리'</span> 에서
                    약관동의 및 비밀번호를 변경 후 이용해주세요 !
                </p>
                <div class="button_wrap">
                    <button type="button" onclick="location.href='${fileRoute.includes(file[0]) ? "../" : ""}mypage/info_change.html'" class="basic_btn_red confirm_btn close_btn">
                        개인정보 변경
                    </button>
                </div>
          </div>
      </div>

      <!-- 비밀번호 재설정 완료 모달 -->
      <div class="modal_wrap message_modal pwResettingC_modal">
          <div class="modal_box done">
              <p class="comment">
                  비밀번호 재설정이 완료되었습니다.
                  <br>
                  다시 로그인 해 주세요.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 회원가입 완료 모달 -->
      <div class="modal_wrap message_modal signupC_modal">
          <div class="modal_box done">
              <p class="comment">
                  <span>BEAT SOMEONE</span> 회원가입이 완료되었습니다.
                  <br>
                  로그인 후 서비스를 이용해주세요.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      로그인
                  </button>
              </div>
          </div>
      </div>

      <!-- 프로필 수정 완료 모달 -->
      <div class="modal_wrap message_modal profileModify_modal">
          <div class="modal_box done">
              <p class="comment">
                  프로필 수정이 완료되었습니다.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 회원정보 수정 완료 모달 -->
      <div class="modal_wrap message_modal infoModify_modal">
          <div class="modal_box done">
              <p class="comment">
                  회원 정보 수정이 완료되었습니다.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 회원가입 중복체크 모달-->
      <div class="modal_wrap message_modal overlapC_modal">
          <div class="modal_box done">
              <p class="comment">
                  회원가입 중복체크 완료
              </p>
              <p class="small_comment">
                  ‘통합회원가입’ 버튼을 클릭하시면
                  <br>
                  통합회원으로 전환됩니다.
              </p>
              <div class="button_wrap">
                  <button type="button" onclick="location.href='membership_complete.html'" class="basic_btn_red confirm_btn close_btn">
                      통합회원가입
                  </button>
              </div>
          </div>
      </div>

      <!-- 회원탈퇴 완료 모달 -->
      <div class="modal_wrap message_modal withdrawalC_modal">
          <div class="modal_box done">
              <p class="comment">
                  회원 탈퇴가 완료되었습니다.
              </p>
              <p class="small_comment">
                  <span class="red">이용권 미해지</span> 혹은 <span class="red">남은 정산금</span>으로 인해
                  <br>
                  정상적인 탈퇴처리가 되지 않는 경우 <span class="bold">고객센터</span> 로
                  <br>
                  문의해 주시기 바랍니다.
              </p>
              <div class="button_wrap">
                  <button type="button" onclick="location.href='../index.html'" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 음원 재발송 모달 -->
      <div class="modal_wrap message_modal soundSend_modal">
          <div class="modal_box done">
              <p class="comment">
                  구매하신 음원이 담긴 메일이 재발송 되었습니다.
                  <br>
                  메일함을 확인해주세요.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 복사 완료 모달 -->
      <div class="modal_wrap message_modal copy_modal">
          <div class="modal_box done">
              <p class="comment">
                  복사가 완료되었습니다.
                  <br>
                  원하는 곳에 붙여넣기 해주세요.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 추천인코드 복사 완료 모달 -->
      <div class="modal_wrap message_modal codeCopy_modal">
          <div class="modal_box done">
              <p class="comment">
                  추천인 코드가 클립보드에 복사되었습니다.
                  <br>
                  원하는 곳에 붙여넣기 해주세요.
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>

      <!-- 리뷰 등록 모달 -->
      <div class="modal_wrap message_modal reviewRegister_modal">
          <div class="modal_box question">
              <p class="comment">
                  입력하신 내용으로 등록 하시겠습니까?
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red_border cancel_btn close_btn">
                      아니오
                  </button>
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      네
                  </button>
              </div>
          </div>
      </div>

      <!-- 통합계정 이용약관 모달 -->
      <div class="modal_wrap big_modal unitTerms_modal">
          <div class="modal_box">
              <div class="top_area">
                  <h3 class="title">
                      통합계정 이용약관
                  </h3>
                  <button type="button" class="close_btn"></button>
              </div>
              <div class="text_area">
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
              </div>
          </div>
      </div>

      <!-- 이용약관 모달 -->
      <div class="modal_wrap big_modal terms_modal">
          <div class="modal_box">
              <div class="top_area">
                  <h3 class="title">
                      이용약관
                  </h3>
                  <button type="button" class="close_btn"></button>
              </div>
              <div class="text_area">
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
              </div>
          </div>
      </div>

      <!-- 개인정보 처리방침 모달 -->
      <div class="modal_wrap big_modal policy_modal">
          <div class="modal_box">
              <div class="top_area">
                  <h3 class="title">
                      개인정보 처리방침
                  </h3>
                  <button type="button" class="close_btn"></button>
              </div>
              <div class="text_area">
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용
                  이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다. 이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관
                  내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.이용 약관 내용 이용 약관 내용입니다.
              </div>
          </div>
      </div>

      <!-- 클립보드 복사 완료 모달 -->
      <div class="modal_wrap message_modal">
          <div class="modal_box done">
              <p class="comment">
                클립보드에 복사되었습니다. <br class="mb_br">
                친구에게 콘텐츠를 공유해보세요!
              </p>
              <div class="button_wrap">
                  <button type="button" class="basic_btn_red confirm_btn close_btn">
                      확인
                  </button>
              </div>
          </div>
      </div>
    `;
    }
}

window.customElements.define("bybeats-modal", allModal);