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

const header = document.querySelector("#header");

$("#header .gnb").on("mouseenter", function () {
  header.classList.add("is-open");
});

$("#header").on("mouseleave", function () {
  header.classList.remove("is-open");
});