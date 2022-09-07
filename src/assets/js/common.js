$(function () {
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

    //좋아요 버튼
    const likeBtn = document.querySelectorAll('.like_toggle_btn');

    likeBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    // 모달 닫기 스크립트------
    const modalWrap = document.querySelectorAll('.modal_wrap');
    modalWrap.forEach((item, idx) => {
        const closeBtn = item.querySelectorAll('.close_btn');


        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal_wrap')) {
                $(item).fadeOut(200);
                scrollOn();
            };
        });

        closeBtn.forEach((items, i) => {
            items.addEventListener('click', () => {
                $(item).fadeOut(200);
                scrollOn();
            });
        });
    });

    // 체크박스 인터렉션
    $('.check_box>label, .radio_box>label').on({
        'touchstart': function () {
            $(this).addClass('active');
        },
        'touchend': function () {
            $(this).removeClass('active');
        }
    });

    // 셀렉트박스
    function selectBox() {
        const selectBox = $('.select_box_wrap');
        const selectClick = $('.select_list');
        // 셀렉트박스 오픈
        $(document).on('click', '.select_box_wrap', function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open active');
            } else {
                // selectList.hide();
                selectBox.removeClass('open active');
                $(this).addClass('open active');
            };
        });

        // 셀렉트 리스트 클릭
        $(document).on('click', '.select_list', function () {
            const selectData = $(this).html();
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                selectClick.removeClass('selected');
                $(this).addClass('selected');
                $(this).closest('.select_box_wrap').find('.select_title').html(selectData);
                $(this).closest('.select_box_wrap').find('.select_title').addClass('active');
            };
        });

        // 외부 영역 클릭
        $(document).mouseup(function (e) {
            if ($('.select_box_wrap').has(e.target).length === 0) {
                $('.select_box_wrap').removeClass('open active');
            };
        });


    }
    selectBox();


    // 재생 정지버튼
    const playBtn = document.querySelectorAll('.play_btn');

    playBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('stop');
        });
    });

    // 헤더 스크립트--------------------------------------
    function gnbJs() {

        //피드 롤링----------------
        var height = $('.rolling .list').height();
        var num = $('.rolling .list').length;
        var max = height * num;
        var move = 0;
        function rolling() {
            move += height;

            $(".rolling .depth").animate({"top": -move}, 600, function () {
                if(move >= max){
                    $(this).css({"top": "0"});
                    move = 0;
                }
            });

        };
        
        setInterval(rolling, 3000);
        $(".rolling .depth").append($(".rolling .list").first().clone());

        // gnb 호버-------------
        const gnbArea = $('header .gnb .hasSec');
        gnbArea.on('mouseover', function () {
            $('.header_bottom').addClass('active');
        });

        gnbArea.on('mouseout', function () {
            $('.header_bottom').removeClass('active');
        });

        // 스크롤 시 투명---------
        $(window).on('scroll', function () {
            const scroll = document.documentElement.scrollTop;
            // console.log(scroll);

            if (scroll > 150) {
                $("header").addClass('active');
            } else {
                $("header").removeClass('active');
            };
        });

        // 언어선택-------------
        const langBox = $('.language_wrap');
        const langBtn = $('.language_btn');
        const langList = $('.language_list');

        langBtn.click(function () {
            if (langBox.hasClass('open')) {
                langBox.removeClass('open');
                langList.slideUp();
            } else {
                langBox.addClass('open');
                langList.slideDown();
            }
        });

        // 외부 영역 클릭
        $(document).mouseup(function (e) {
            if (langBox.has(e.target).length === 0) {
                langBox.removeClass('open');
                langList.slideUp();
            };
        });

        // 모바일 햄버거---------------------
        $('.hamburger').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(".header_mb .side_menu").removeClass('active');
                $(".header_mb .side_bg").fadeOut(500);
                scrollOn();
            } else {
                $(this).addClass('active');
                $(".header_mb .side_menu").addClass('active');
                $(".header_mb .side_bg").fadeIn(500);
                scrollOff();
            };
        });

        $('.header_mb .accordion>.list .title').click(function () {
            const title = $(this).closest('.list');
            if (title.hasClass('active')) {
                title.removeClass('active');
                title.find('.sec_depth').slideUp(300);
            } else {
                title.addClass('active');
                title.find('.sec_depth').slideDown(300);
            }
        });
    }
    gnbJs();

    function signInUpModal() {

        // 로그인 모달---------------
        $('.sign_in').click(() => {
            $('.route_modal.signIn').fadeIn(200);
            scrollOff();
        });

        // $('.route_modal.signIn .continue_btn').click(function () {
        //     $('.route_modal.signIn').fadeOut(200);
        //     $('.signIn_modal').fadeIn(200);
        // });

        // $('.signIn_modal .signIn_btn').click(() => {
        //     $('.signIn_modal').fadeOut(200);
        //     scrollOn();
        // });

        // 회원가입 모달--------------
        $('.sign_up').click(() => {
            $("#sign_email").val("");
            $('.route_modal.signIn').fadeOut(200);
            $('.route_modal.signUp').fadeIn(200);
            scrollOff();
        });

        // $('.route_modal.signUp .continue_btn').click(function () {
        //     // $('.route_modal.signUp').fadeOut(200);
        //     // $('.signUp_modal').fadeIn(200);
        //     location.href = "signinup/sign_up.html";
        // });

        $('.signUp_modal .complete_btn').click(() => {
            $('.signUp_modal').fadeOut(200);
            $('.signupC_modal').fadeIn(200);
        });

        $('.signupC_modal .confirm_btn').click(() => {
            $('.signupC_modal').fadeOut(200);
            $('.route_modal.signIn').fadeIn(200);
        });

        // 휴면계정 안내 모달----------
        $('.dormant_modal .cancel_btn').click(() => {
            $(".dormant_modal").fadeOut(200);
            $('.route_modal.signIn').fadeIn(200);
        });

        $('.dormant_modal .clear_btn').click(() => {
            $(".dormant_modal").fadeOut(200);
            $(".dormantClear_modal").fadeIn(200);
        });

        // 비밀번호 재설정 모달--------
        $('.reset_pw').click(() => {
            $('.route_modal.signIn').fadeOut(200);
            $('.signIn_modal').fadeOut(200);
            $('.pwResetting_modal.stepOne').fadeIn(200);
        });

        $('.pwResetting_modal.stepOne .next_btn').click(() => {
            $('.pwResetting_modal.stepOne').fadeOut(200);
            $('.pwResetting_modal.stepTwo').fadeIn(200);
        });

        $('.pwResetting_modal.stepTwo .next_btn').click(() => {
            $('.pwResetting_modal.stepTwo').fadeOut(200);
            $('.pwResettingC_modal').fadeIn(200);
        });

        $('.pwResettingC_modal .confirm_btn').click(() => {
            $('.pwResettingC_modal').fadeOut(200);
            $('.route_modal.signIn').fadeIn(200);
        });

        // 이용약관 모달
        const termBtn = {
            one: $('.open_pop.unit'),
            two: $('.open_pop.term'),
            three: $('.open_pop.policy')
        };

        const termModal = {
            one: $('.unitTerms_modal'),
            two: $('.terms_modal'),
            three: $('.policy_modal')
        };

        termBtn.one.click(function () {
            termModal.one.fadeIn(200);
            scrollOff();
        });

        termBtn.two.click(function () {
            termModal.two.fadeIn(200);
            scrollOff();
        });

        termBtn.three.click(function () {
            termModal.three.fadeIn(200);
            scrollOff();
        });

    }
    signInUpModal();


    // 말풍선 닫기
    $('.alert_box .close_button').click(function () {
        $(this).parents('.alert_box').hide();
    });
});