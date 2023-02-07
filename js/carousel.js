
/* carousel 영역 */
$(function() {
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
    }, 1000);

    $('.item').hover(function() {
        clearInterval(st);
        // $(this).css('width', '103%');
    }, function () {
        st = setInterval(() => {
            currdeg = currdeg + 36;
            carousel.css("transform", "rotateY(" + currdeg + "deg)");
        }, 1000);
        // $(this).css('width', '100%');
    });
});