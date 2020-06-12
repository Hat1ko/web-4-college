let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let translateWidth = 0;
let slideInterval = 4000;
let navBtnId = 0;
let switchInterval = setInterval(nextSlide, slideInterval);

export function addFunctionForSlider() {
    $('#viewport').hover(function () {
        clearInterval(switchInterval);
    }, function () {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
    $('.slide-nav-btn').click(function () {
        navBtnId = $(this).index();
        $('.slide-nav-btn').css({backgroundColor: "#fff"});
        $(this).css({backgroundColor: "#000"});
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
}

function nextSlide() {
    if (slideNow == slideCount || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
    $('.slide-nav-btn').css({backgroundColor: "#fff"});
    let idButton = "#btn" + slideNow;
    $(idButton).css({backgroundColor: "#000000"});
}
