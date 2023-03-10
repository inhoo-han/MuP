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
        if(scroll_top < 320){
            $("#curtain").stop().animate({
                top: -(scroll_top)*3
            },1000);
        }
        /* 작은 커튼 */
        if(scroll_top < 1800) {
            $('.curtain_front').show('blind', 1000);
        } else{
            $('.curtain_front').hide('blind', 500);
        }
        /* tMenu_form */
        if(scroll_top < 300){
            $('#tMenu_form').hide('blind', 500);
            $('h1').show('blind', 1000);
        } else if(scroll_top < 1800) {
            $('#tMenu_form').show('blind', 1000);
            $('h1').hide('blind', 500);
        } else{
            $('#tMenu_form').hide('blind', 500);
            $('h1').hide('blind', 500);
        }

        /* 퀵메뉴 */
        if(scroll_top > 1100) {
            $('#quickMenu').show('blind', 100);
        } else{
            $('#quickMenu').hide();
        }
        if(scroll_top > 2100 && scroll_top < 3100){
            $('#quickMenu').css({
                border: '3px solid #333'
            });
            $('#quickMenu').find('span').css({
                color: '#333'
            });
        }else{
            $('#quickMenu').css({
                border: '3px solid #fff'
            });
            $('#quickMenu').find('span').css({
                color: '#fff'
            });
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
            $('.next').stop().trigger('click');
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

    /* * * 이미지 확대 함수 * * */
    $.fn.imgExpand = function () {
        $(this).find('img').hover(function() {
            $(this).addClass('imgExpand')
            $(this).css('transition', 'transform 1s')
        }, function() {
            $(this).removeClass('imgExpand')
        });
        return this
    }

    /* 이미지확대 활용 */
    $('.item').imgExpand();
    $('#ticketSpecialBox').imgExpand();
    $('.comReview').imgExpand();
    $('#ticketBox').imgExpand();
    $('.whatsHotList>div').imgExpand();
    $('.choiceRank>div').imgExpand();


    /* * * * * #ticket영역 * * * * */
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

    /* * * * * #community영역 * * * * */

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

