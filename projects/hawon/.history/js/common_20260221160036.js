/* gnb */
/* $(".gnb>li").mouseenter(function () {
    $(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().slideDown();
});

$(".gnb>li").mouseleave(function () {
    $(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().slideUp();
}); */

const DEPTH_BG_H = 280; // ✅ 원하는 높이(줄이고 싶으면 160~180)

$(".gnb").mouseenter(function () {
  $(".depth2_bg").stop(true,true).animate({ height: DEPTH_BG_H }, 240);
  $(this).find(".depth2").stop(true,true).delay(40).fadeIn(180);
});

$("#header").mouseleave(function () {
  $(this).find(".depth2").stop(true,true).fadeOut(180);
  $(".depth2_bg").stop(true,true).animate({ height: 0 }, 180);
});