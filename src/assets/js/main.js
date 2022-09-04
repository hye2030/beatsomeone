$(document).ready(function(){

    function slideJs(){
        // 메인슬라이드
        const swiperMain = new Swiper('.main_slide .swiper-container', {
            loop:true,
            speed: 500,
            autoplay:{
                delay : 5000,
                disableOnInteraction : false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        
        // 커버플로우 슬라이드
        const coverFlow = new Swiper( '.coverflow .swiper-container', {
            effect: 'coverflow',
            loop: true,
            loopedSlides: 3,
            centeredSlides: true,
            coverflowEffect:{
                rotate: 0,
                depth:300,
                slideShadows: false,
                stretch: 100,
            },
        });
        
        // 페이드플로우 슬라이드
        const fadeFlow = new Swiper('.fadeflow .swiper-container', {
            effect:'fade',
            loop:true,
            loopedSlides: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    
        coverFlow.controller.control = fadeFlow;
        fadeFlow.controller.control = coverFlow;

        // 하단슬라이드
        const swiperBottom = new Swiper('.bottom_section .swiper-container', {
            speed: 500,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination.sec",
                type: "fraction",
            },
            navigation: {
                nextEl: '.swiper-button-next.sec',
                prevEl: '.swiper-button-prev.sec',
            },
        });

        // 모바일 컨텐츠 슬라이드
        const contentSlide = new Swiper('.content_slide', {
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 500,
            pagination: {
                el: ".swiper-pagination.con",
            },
        });

        // 모바일 리뷰 슬라이드
        const reviewSlide = new Swiper('.review_slide .swiper-container', {
            speed: 500,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination.review",
                type: "fraction",
            },
            navigation: {
                nextEl: '.swiper-button-next.review',
                prevEl: '.swiper-button-prev.review',
            },
        });
    };
    slideJs();

    function changeColor(){
        const slideBottom = $('.check_line').offset().top;
        const listText = $('.list_item:nth-child(1) .list_text').offset().top;
        console.log(slideBottom - listText);

        if(listText > slideBottom){
            $('.content .list_item:nth-child(1) .list_text').css({
                'color' : '#222',
                'text-shadow' : 'none'
            });
            $('.content .list_item:nth-child(2) .list_text').css({
                'color' : '#222',
                'text-shadow' : 'none'
            });
            $('.content .list_item:nth-child(3) .list_text').css({
                'color' : '#222',
                'text-shadow' : 'none'
            });
            $('.content .list_item:nth-child(4) .list_text').css({
                'color' : '#222',
                'text-shadow' : 'none'
            });
        }else{
            $('.content .list_item:nth-child(1) .list_text').css({
                'color' : '#fff',
                'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
            });
            $('.content .list_item:nth-child(2) .list_text').css({
                'color' : '#fff',
                'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
            });
            $('.content .list_item:nth-child(3) .list_text').css({
                'color' : '#fff',
                'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
            });
            $('.content .list_item:nth-child(4) .list_text').css({
                'color' : '#fff',
                'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
            });
        };

        $(window).resize(function(){
            const slideBottom = $('.check_line').offset().top;
            const listText = $('.list_item:nth-child(1) .list_text').offset().top;
            if(listText > slideBottom){
                $('.content .list_item:nth-child(1) .list_text').css({
                    'color' : '#222',
                    'text-shadow' : 'none'
                });
                $('.content .list_item:nth-child(2) .list_text').css({
                    'color' : '#222',
                    'text-shadow' : 'none'
                });
                $('.content .list_item:nth-child(3) .list_text').css({
                    'color' : '#222',
                    'text-shadow' : 'none'
                });
                $('.content .list_item:nth-child(4) .list_text').css({
                    'color' : '#222',
                    'text-shadow' : 'none'
                });
            }else{
                $('.content .list_item:nth-child(1) .list_text').css({
                    'color' : '#fff',
                    'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
                });
                $('.content .list_item:nth-child(2) .list_text').css({
                    'color' : '#fff',
                    'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
                });
                $('.content .list_item:nth-child(3) .list_text').css({
                    'color' : '#fff',
                    'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
                });
                $('.content .list_item:nth-child(4) .list_text').css({
                    'color' : '#fff',
                    'text-shadow' : '-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000'
                });
            };
        });
        
    };
    changeColor();

    // q&a 텝
    function tabJs(){

        $('.equipment_info .tab_content').hide();
        $('.equipment_info .tab_content').eq(0).show();
        $('.equipment_info .tab').eq(0).addClass("active");
        
        $('.equipment_info .tab').click(function(){
            let idx = $(this).index();
            console.log(idx);
            $('.equipment_info .tab').removeClass("active");
            $(this).addClass("active");
            $('.equipment_info .tab_content').hide();
            $('.equipment_info .tab_content').eq(idx).show();
        });

    }
    tabJs();

    $('.equipment_info .small_box .list').on('mouseover', function(){
        $(this).addClass('active');
    });

    $('.equipment_info .small_box .list').on('mouseout', function(){
        $(this).removeClass('active');
    });
});