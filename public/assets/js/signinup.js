$(document).ready(function(){

    // body 스크롤 막음
    function scrollOff() {
        $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function (e) {
            e.stopPropagation();
        });
    };
    // body 스크롤 풀기
    function scrollOn() {
        $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
    };

    // 이메일 유효성 검사 스크립트----------------------
    const eMail = {
        input : $('.signUp_route_page #emInput'),
        warning : $('.signUp_route_page .error_txt'),
        btn : $('.signUp_route_page .continue_btn')
    }

    eMail.input.keyup((e)=>{
        const emailVal = $("#emInput").val();
        if(emailVal != ""){
            validEmail(e.target);
        }else{
            eMail.warning.css('display','none');
            eMail.btn.attr('disabled', true);
        };
    });

    function validEmail(obj){
        if(validEmailCHeck(obj)==false){
            eMail.warning.css('display','block');
            eMail.btn.attr('disabled', true);
        }else{
            eMail.warning.css('display','none');
            eMail.btn.attr('disabled', false);
        };
    }

    function validEmailCHeck(obj){
        const emailChk = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
        return (obj.value.match(emailChk)!=null);
    }

    // 휴면회원 해제 모달
    $('.dormant_page .clear_btn').click(function(){
        $('.dormantClear_modal').fadeIn(200);
        scrollOff();
    });

    // 비밀번호 재설정 완료 모달
    $('.pwResetting_page.pw .next_btn').click(function(){
        $('.pwResettingC_modal').fadeIn(200);
        scrollOff();
    });

    // 회원가입 완료 모달
    $('.signUp_page .complete_btn').click(function(){
        $('.signupC_modal').fadeIn(200);
        scrollOff();
    });

    // 이용약관 모달
    const termBtn = {
        one : $('.open_pop.unit'),
        two : $('.open_pop.term'),
        three : $('.open_pop.policy')
    };

    const termModal = {
        one : $('.unitTerms_modal'),
        two : $('.terms_modal'),
        three : $('.policy_modal')
    };

    termBtn.one.click(function(){
        termModal.one.fadeIn(200);
        scrollOff();
    });

    termBtn.two.click(function(){
        termModal.two.fadeIn(200);
        scrollOff();
    });

    termBtn.three.click(function(){
        termModal.three.fadeIn(200);
        scrollOff();
    });
});