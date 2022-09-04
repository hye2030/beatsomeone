$(function() {
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

    // ----------피드 - 컨텐츠 등록 페이지 js
    // 추가하기 버튼 클릭 시 생기는 리스트
    const PlusBtn = document.querySelector('.content_add_wrap .plus_btn');
    const addContent = document.querySelector('.content_add_wrap .add_content')

    PlusBtn.addEventListener("click" , function() {
        addContent.classList.add("show");
    });


    // 자작곡 , 커버곡일때만 음원 등록하는 섹션 보이게끔 처리
    $('.feed_add_section .select_list').click(function() {
        if($(this).hasClass('song')) {
            $('.song_content').show();
        } else {
            $('.song_content').hide();
        }
    })
    
    // 리스트 안에 삭제버튼 클릭 시 리스트 삭제
    $('.content_add_wrap .list_delete_icon').click(function() {
        $('.content_add_wrap .add_content').removeClass('show');
    });


    // -----------리뷰 - 리뷰 등록 페이지 js
    // 별점 추가 누르면 텍스트 하이드 처리
    $('.content_add_wrap .add_star').click(function() {
        $(this).hide();
    })

    // 리뷰 이미지 삭제 버튼 클릭시 리스트 삭제
    $('.review_delete_icon').click(function() {
        $(this).parents('.review_list').hide();
    });

    // 컨텐츠 등록 모달
    $('.content_add_wrap .confirm_btn').click(function(){
        $('.conRegister_modal').fadeIn(200);
        scrollOff();
    });

    $('.content_add_wrap .register_btn').click(function(){
        $('.reviewRegister_modal').fadeIn(200);
        scrollOff();
    });

    $('.content_add_wrap .confirm_btn').click(function(){
        $('.conRegister_modal').fadeIn(200);
        scrollOff();
    });

    $('.reviewRegister_modal .confirm_btn').click(function(){
        $('.reviewRegister_modal').fadeOut(200);
        $('.conRegisterC_modal').fadeIn(200);
    });

    $('.conRegister_modal .confirm_btn').click(function(){
        $('.conRegister_modal').fadeOut(200);
        $('.conRegisterC_modal').fadeIn(200);
    });

    // 컨텐츠 등록취소 모달
    $('.content_add_wrap .cancel_btn').click(function(){
        $('.registerCancel_modal').fadeIn(200);
        scrollOff();
    });

    $('.registerCancel_modal .confirm_btn').click(function(){
        window.history.back();
    });



});