$(function () {
    //haeder color
    $(window).scroll(function () {
        var curr = $(window).scrollTop()
        if (curr > 0) {
            $('.header_top').addClass('hide')
        } else {
            $('.header_top').removeClass('hide')
        }
    })




    //header search_area 클릭시
    $('.search_txt').click(function () {
        $(".search_content").removeClass('hide');
    });
    $('.close_btn').click(function () {
        $(".search_content").addClass('hide');
    })


    //sc_product tab
    $(".sc_product .tab li").click(function () {

        var target = $(this).data('target');

        $(this).addClass('on').siblings().removeClass('on')
        $(target).addClass('on').siblings().removeClass('on')
    })

    //.box 후버
    $(".sc_product .tab_wrap li").hover(function () {
        $(this).children(".footer").addClass('on');
    }, function () {
        $(this).children(".footer").removeClass('on');
    })

    $(".sc_solution .tab_wrap li").hover(function () {
        $(this).children(".footer").addClass('on');
    }, function () {
        $(this).children(".footer").removeClass('on');
    })


    //sc_care tab
    $(".sc_care .tab li").click(function () {
       
        var target = $(this).data('target');

        $(this).addClass('on').siblings().removeClass('on')
        $(target).addClass('on').siblings().removeClass('on')
    })


    //sc_solution tab
     $(".sc_solution .tab li").click(function () {
        
        var target = $(this).data('target');

        $(this).addClass('on').siblings().removeClass('on')
        $(target).addClass('on').siblings().removeClass('on')
    })




    //.box 후버
    $(".sc_care .tab_wrap li").hover(function () {
        $(this).children(".footer").addClass('on');
    }, function () {
        $(this).children(".footer").removeClass('on');
    })



    // slide
    var idx;
    var visual_slide = new Swiper(".visual_slide", {

        slidesPerView: 'auto',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        centeredSlides: true,
        

        pagination: {
            el: '.swiper-pagination',
                  clickable: true,
              renderBullet: function (index, className) {
                idx = index++;
                (index < 10) ? idx = '0'+index : idx = index; 

                return '<span class="' + className + '">' + (idx) + '</span>';
              },
          },
      
    });

    var solution_slide1 = new Swiper(".solution_slide1", {

        slidesPerView: 'auto',

        loop: true,

        pagination: {
            el: '.swiper-pagination',
                  clickable: true,
              renderBullet: function (index, className) {
                idx = index++;
                (index < 10) ? idx = '0'+index : idx = index; 

                return '<span class="' + className + '">' + (idx) + '</span>';
              },
          },
    });

    var solution_slide2 = new Swiper(".solution_slide2", {

        slidesPerView: 'auto',

        loop: true,


        pagination: {
            el: '.swiper-pagination',
                  clickable: true,
              renderBullet: function (index, className) {
                idx = index++;
                (index < 10) ? idx = '0'+index : idx = index; 

                return '<span class="' + className + '">' + (idx) + '</span>';
              },
          },
    });

    var solution_slide3 = new Swiper(".solution_slide3", {

        slidesPerView: 'auto',

        loop: true,

        pagination: {
            el: '.swiper-pagination',
                  clickable: true,
              renderBullet: function (index, className) {
                idx = index++;
                (index < 10) ? idx = '0'+index : idx = index; 

                return '<span class="' + className + '">' + (idx) + '</span>';
              },
          },
    });

    var media_slide = new Swiper(".media_slide", {

        slidesPerView: 'auto',
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 10,
            slideShadows: false,
          },
        speed: 1000,
        loop: true,
        autoplay: true,
        centeredSlides: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + "</span>";
        }}
    });

    var sns_slide = new Swiper(".sns_slide", {

        slidesPerView: 5,
        loop: true,


        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });



    //sc_membership arrow
    $('.membership > li').hover(function () {

        var positionLeft = $(this).position().left;
        var w = $(this).outerWidth();

        $('.curr_bar').addClass('on').css({
            left: positionLeft,
            width: w
        })
        $(this).children('img').css({
            opacity: 1
        })

    }, function () {
        $('.curr_bar').removeClass('on')
        $(this).children('img').css({
            opacity: 0.3
        })
    })

    $('.right').hover(function () {
        gsap.to('.arrow', {
            x: 8,
            duration: 0
        })
    }, function () {
        gsap.to('.arrow', {
            x: 0,
            duration: 0
        })
    })


    $('.media_slide a').hover(function () {
        gsap.to('.media_slide a::after', {
            x: 8,
            duration: 0
        })
    }, function () {
        gsap.to('.media_slide a::after', {
            x: 0,
            duration: 0
        })
    })



    //.consulting_box
    $(".plus").click(function () {
        var hasOn = $(".side_btn").hasClass("on")
        console.log(hasOn)
        if (hasOn) {
            $(".side_btn").removeClass("on");
            motion.reverse()
            $(".plus").attr("src", "./img/consulting_more.png");

        } else {
            $(".side_btn").addClass("on");
            motion.play()
            $(".plus").attr("src", "./img/close.png");
        }
    });



    const motion = gsap.timeline({
        defaults:{
            duration: 0.6
        }
    })
    motion.addLabel('m1')
        .to('.btn_wrap li:nth-child(4)',{y: -60,},'m1')
         .to('.btn_wrap li:nth-child(3)', { y: -120}, 'm1')
        .to('.btn_wrap li:nth-child(2)', { y: -180,},'m1')
        .to('.btn_wrap li:nth-child(1)', { y: -240,},'m1')
        motion.pause()


        $('.play .img').click(function(){
           gsap.to('circle', 3,{
            ease: 'none',
            strokeDashoffset: 0,
            onComplete:function(){
                $('.play').hide()
                $('.sc_video .video .player').show()
                $('.sc_video iframe').attr("src",'https://www.youtube.com/embed/koFmbG9yDrc?autoplay=1&mute=0');
            }
           })
        })


        // card
        var scrollOn = false;
        $(window).scroll(function(){
            var curr = $(this).scrollTop();
            solution = $('.sc_solution').offset().top - $(window).height(); 

            $(document).on("click", '.card .close_btn', function () {
                $('.card').removeClass('on')
                scrollOn = true;
                
              });

            if(curr >= solution && scrollOn === false){
                $('.card').addClass('on')
            } else {

            }
        })
        $(window).trigger('scroll');

       

})