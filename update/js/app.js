$(document).ready(function(){

  // Open content slides on box clicks

  var $colorBlock = $('.color-block');
  var $slide = $('.slide');

  $('.close-slide').on('mouseup', function(){
    $slide.addClass('hidden');
    $colorBlock.css('display', 'inline-block');
    $('body').css('overflow', 'scroll');
    $(this).parent().children('.slide-content').removeClass('active');
  });

  $colorBlock.on('mouseup', function(){
    $background.css('background', originalBG);
    $name.css('color', '#000');
    var $boxID = $(this).attr('id');
    $('#' + $boxID + '-slide').removeClass('hidden');
    $colorBlock.css('display', 'none');
    $('body').css('overflow', 'hidden');
  });    // end box click events

  // Change background color on square hover

  var $background = $('html, body');
  var $name = $('.name')
  var originalBG = $background.css('backgroundColor');

  $colorBlock.hover(
    function(){
      var currentBG = $(this).css('backgroundColor');
      $name.css('color', '#F7F0F5');
      $(this).css('border-color', '#F7F0F5');
      $background.css('background', currentBG);
    },
    function() {
      $name.css('color', '#000');
      $(this).css('border-color', 'rgba(0,0,0,0)');
      $background.css('background', originalBG);
    }
  ) // end background

  // Slide Controls

  var $next = $('.next');
  var $prev = $('.prev');
  var idx = 0;

  $next.on('mouseup', function(e) {

    var context = '#' + $(this).parent().parent().attr('id');
    var $slideContent = $(context + ' .slide-content');
    var $activeSlide = $(context + ' .slide-content.active');
    e.stopPropagation();
    if ($slideContent.hasClass('active') === false) $slideContent.first().addClass('active');
    $activeSlide.removeClass('active').next('.slide-content').addClass('active');
    if ($slideContent.hasClass('active') === false) $slideContent.first().addClass('active');
    $slideContent.scrollTop(0);
  });

  $prev.on('mouseup', function(e) {

    var context = '#' + $(this).parent().parent().attr('id');
    var $slideContent = $(context + ' .slide-content');
    var $activeSlide = $(context + ' .slide-content.active');
    e.stopPropagation();
    if ($slideContent.hasClass('active') === false) $slideContent.first().addClass('active');
    $activeSlide.removeClass('active').prev('.slide-content').addClass('active');
    if ($slideContent.hasClass('active') === false) $slideContent.last().addClass('active');
    $slideContent.scrollTop(0);
  });

}); // end document ready
