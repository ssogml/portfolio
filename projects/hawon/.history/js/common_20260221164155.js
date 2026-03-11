/* gnb */
/* $(".gnb>li").mouseenter(function () {
    $(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().slideDown();
});

$(".gnb>li").mouseleave(function () {
    $(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().slideUp();
}); */

const DEPTH_BG_H = 280;

$(".gnb").mouseenter(function () {
  $(".depth2_bg")
    .stop(true, true)
    .css({ opacity: 1 })
    .animate({ height: DEPTH_BG_H }, 200);

  $(this).find(".depth2")
    .stop(true, true)
    .delay(40)
    .fadeIn(240);
});

$("#header").mouseleave(function () {
  $(this).find(".depth2").stop(true,true).fadeOut(180);

  $(".depth2_bg")
    .stop(true, true)
    .animate({ height: 0 }, 180, function () {
      $(this).css({ opacity: 0 });
    });
});