// 답글달기
const replayBtn = document.querySelectorAll('.reply_btn');

replayBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
        var item = btn.closest('.wrapper');
        item.nextElementSibling.classList.toggle('on');

        btn.classList.toggle('cancel');

        if (btn.classList.contains('cancel')) {
            btn.innerText = '답글취소';
        } else {
            btn.innerText = '답글달기';
        }
    });
});

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

    // 컨텐츠 삭제 모달
    $('.comment_area .delete').click(function(){
        $('.conDelete_modal').fadeIn(200);
        scrollOff();
    });

    $('.conDelete_modal .confirm_btn').click(function(){
        $('.conDelete_modal').fadeOut(200);
        $('.conDeleteC_modal').fadeIn(200);
    });

    // 댓글 삭제 모달
    $('.edit_btn_group .delete_btn').click(function(){
        $('.commentDelete_modal').fadeIn(200);
        scrollOff();
    });

    $('.commentDelete_modal .confirm_btn').click(function(){
        $('.commentDelete_modal').fadeOut(200);
        $('.commentDeleteC_modal').fadeIn(200);
    });

    // 신고하기 모달
    $('.comment_item .report').click(function(){
        $('.declaration_modal').fadeIn(200);
        scrollOff();
    });
});