

$(function() {
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

    let st = setInterval(() => {
        currdeg = currdeg + 36;
        carousel.css("transform", "rotateY(" + currdeg + "deg)");
    }, 3000);

    $('.item').hover(function() {
        clearInterval(st);
    }, function () {
        st = setInterval(() => {
            currdeg = currdeg + 36;
            carousel.css("transform", "rotateY(" + currdeg + "deg)");
        }, 3000);
        // $(this).css('width', '100%');
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
}); 

