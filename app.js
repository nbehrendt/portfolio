//first tab has active index
var activeIndex = 0;
var imgCnt = 0;

//Navigation slider
$('.navTable td').click(function () {

    $($('.navTable td')[activeIndex]).removeClass('active');
    $($('.container')[activeIndex]).removeClass('active');

    var idx = $(this).index();

    $(this).addClass('active');

    $('.slider').css('margin-left', (20 * idx + '%'));

    activeIndex = idx;

    setTimeout(function () {
        $($('.container')[idx]).addClass('active');
    }, 250);

    $('.innerCarousel').css('margin-left', '0%');

    $('.activeImg').removeClass('activeImg');
    $('.first').addClass('activeImg').removeClass('hideImg');

});

//Mobile menu

var $mobileMenuToggle = $('.js-mobile-menu-toggle');

$mobileMenuToggle.click(function(){
  $('.mobile-nav').toggleClass('mobile-show');
  $('.container').toggleClass('hidden');
  $('.navTable').toggleClass('hidden');
});


//Examples carousel
var count = 0;
var marginLeft = 0;
$('.left').click(function () {
    var len = $('.active').find('.example').length;
    if (count === 0) {
        count = len;
    }
    count--;

    marginLeft = count * 100;
    $('.innerCarousel').css('margin-left', -marginLeft + '%');
    $('.xmg').removeClass('active');
    $('exampleImage').children().first().addClass('active');
});

$('.right').click(function () {
    var len = $('.active').find('.example').length;
    if (count === len - 1) {
        count = -1;
    }
    count++;

    marginLeft = count * 100;
    $('.innerCarousel').css('margin-left', -marginLeft + '%');
    $('.activeImg').removeClass('activeImg');
    $('.first').addClass('activeImg').removeClass('hideImg');
    return imgCnt = 0;
});



//Images scroller

$('.up').click(function () {
    var id = $(this).parent().parent().attr('id');
    var imgLen = $('#' + id + '').find($('.xmg')).length;
    if (imgCnt === 0) {
        return
    }
    $('.activeImg').addClass('hideImg').removeClass('activeImg')
        .prev().addClass('activeImg').removeClass('hideImg');
    imgCnt--;
})

$('.down').click(function () {
    var id = $(this).parent().parent().attr('id');
    var imgLen = $('#' + id + '').find($('.xmg')).length;
    if (imgCnt === imgLen - 1) {
        return
    }
    $('.activeImg').addClass('hideImg').removeClass('activeImg')
        .next().addClass('activeImg').removeClass('hideImg');
    imgCnt++;
})
