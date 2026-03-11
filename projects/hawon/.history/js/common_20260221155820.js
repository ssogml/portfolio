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
  $(this).find(".depth2").stop(true,true).fadeIn(200);
  $(".depth2_bg").stop(true,true).animate({ height: DEPTH_BG_H }, 220);
});

$("#header").mouseleave(function () {
  $(this).find(".depth2").stop(true,true).fadeOut(200);
  $(".depth2_bg").stop(true,true).animate({ height: 0 }, 200);
});