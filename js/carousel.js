

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
        $(this).css('transform') + $(this).css('transform','scale(1.1)');
    }, function () {
        st = setInterval(() => {
            currdeg = currdeg + 36;
            carousel.css("transform", "rotateY(" + currdeg + "deg)");
        }, 3000);
        // $(this).css('width', '100%');
    });

    /* bulb 영역 */
    $('.bulb').show({}, 3000, 'pulsate');
});

