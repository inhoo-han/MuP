$(function() {
    /* a tag delay 영역*/
    // $('a').click(function(evt){
    //     let link = $(this).attr("href");
    //     setTimeout(function() {
    //         window.location.href = link;
    //     }, 5000);
    // });
    // function delay (URL) {
    //     URL = $(this).attr("href");
    //     setTimeout( function() { window.location = URL }, 500 );
    // }

    /* curtain 영역 */
    let scroll_top;
    $(window).scroll(function(){
        scroll_top=$(window).scrollTop();
        console.log(scroll_top)
        /* 큰 커튼 */
        if(scroll_top>10 && scroll_top < 320){
            $("#curtain").stop().animate({
                top: -(scroll_top)*3
            },1000);
        }
        /* 작은 커틐 */
        if(scroll_top < 1200) {
            $('.curtain_front').show('blind', 1000);
        } else{
            $('.curtain_front').hide('blind', 1000);
        }

    })

    /* carousel 영역 */
    let carousel = $(".carousel");
    let carousel_item = $(".carousel-item");
    let currdeg = 0;

    $(".next").click(function() {
        currdeg = currdeg + 36;
        carousel.css("transform", "rotateY(" + currdeg + "deg)");
    });

    $(".prev").click(function() {
        currdeg = currdeg - 36;
        carousel.css("transform", "rotateY(" + currdeg + "deg)");
    });

    let nowst;
    function moveNowShowing (){
        // nowst = setInterval(() => {
        //     currdeg = currdeg + 36;
        //     carousel.css("transform", "rotateY(" + currdeg + "deg)");
        // }, 3000);
        nowst = setInterval(function() {
            $('.next').trigger('click');
        }, 3000);
    };
    moveNowShowing();
    $('.item').hover(function() {
        clearInterval(nowst);
    }, function () {
        moveNowShowing();
    });

    /* bulb 영역 */
    $('.bulb').show({}, 3000, 'pulsate');

    /* 이미지 확대 함수 */
    $.fn.imgExpand = function () {
        $(this).find('img').hover(function() {
            $(this).addClass('imgExpand')
            $(this).css('transition', 'transform 1s')
        }, function() {
            $(this).removeClass('imgExpand')
        });
        return this
    }

    /* * * 슬라이드 영역 * * */
    $('.item').imgExpand();

    /* * * * * #ticket영역 * * * * */
    $('#ticketBox').imgExpand();
    $('.ticketSaleBox').hover(function() {
        $(this).find('.ticketText').css({
            'background-color': 'inherit',
            'box-shadow': 'none',
            color: '#fff',
            transition: 'background-color 1s, box-shadow 2s'
        })
    }, function() {
        $(this).find('.ticketText').css({
            'background-color': '#fff',
            'box-shadow': '30px 30px 30px #fff, -30px 30px 30px #fff',
            color: 'inherit'
        });
    });
    $('#ticketSpecialBox').imgExpand();

    /* * * * * #community영역 * * * * */
    $('.comReview').imgExpand();


    /* * * * * #topic영역 * * * * */
    let topicSW = false;
    $('#topicTicket').click(function() {
        topicSW = !topicSW;
        if(topicSW){
            $(this).find('#topicTicketA').css('transform', 'rotate(-10deg) scale(1.1, 1.1)');
            $(this).find('#topicTicketB').css({
                transform: 'rotate(45deg) scale(0.7,0.7) translate(500px, 0px)',
                opacity: 0
            });
            $(this).find('.topicHover').css('opacity', 0);
            $(this).find('.topicTitle').css('opacity', 1);
            $(this).find('.topicText').css('opacity', 1);
        } else{
            $(this).find('#topicTicketA').css('transform', 'rotate(0deg) scale(1,1)');
            $(this).find('#topicTicketB').css({
                transform: 'rotate(0deg) scale(1,1)',
                opacity: 1
            });
            $(this).find('.topicHover').css('opacity', 1);
            $(this).find('.topicTitle').css('opacity', 0);
            $(this).find('.topicText').css('opacity', 0);
        } 
    });

    /* * * * * login.html영역 * * * * */
    let Rsw = false;
    $('.lg_login_joinUs').click(function() {
        Rsw = !Rsw;
        if(Rsw){
            $('#lg_resister').delay(1000).animate({
                left: '66.66%'
            },1000);
            $('.lg_image_title_resister').show(1000);
            $('.lg_image_title_login').hide();
            $('#lg_login').find('.bar').animate({
                height: '100%'
            },1000);
        } else{
            $('#lg_resister').animate({
                left: '33.33%'
            },1000);
            $('.lg_image_title_resister').hide();
            $('.lg_image_title_login').show(1000);
            $('#lg_login').find('.bar').delay(1000).animate({
                height: '0%'
            },1000);
        }
    });
    $('.lg_close').click(function() {
        $('.lg_login_joinUs').trigger('click');
    });
    let tCsw = false;
    $('.lg_rs_btn_telCheck').click(function() {
        if(tCsw){
            $('.btn_telCheck.lg_confirm').hide();
        } else{
            $('.btn_telCheck.lg_confirm').show();
        }
    });
}); 

