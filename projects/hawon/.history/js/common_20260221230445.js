// gnb
const DEPTH_BG_H = 280;

// ✅ bg 속도
const BG_IN = 180;
const BG_OUT = 220;

// ✅ depth2 메뉴 속도
const MENU_IN = 340;
const MENU_OUT = 160;

// ✅ 딜레이도 각각 가능
const BG_DELAY = 0;
const MENU_DELAY = 80;

$(".gnb").mouseenter(function () {
  // depth2_bg 먼저/빠르게/느리게 원하는대로
  $(".depth2_bg")
    .stop(true, true)
    .delay(BG_DELAY)
    .css({ opacity: 1 })
    .animate({ height: DEPTH_BG_H }, BG_IN);

  // depth2 메뉴는 별도로 (더 늦게 뜨게 가능)
  $(this).find(".depth2")
    .stop(true, true)
    .delay(MENU_DELAY)
    .fadeIn(MENU_IN);
});

$("#header").mouseleave(function () {
  // 메뉴 먼저 닫고
  $(".depth2")
    .stop(true, true)
    .fadeOut(MENU_OUT);

  // 배경은 좀 더 천천히 닫기 (혹은 반대로)
  $(".depth2_bg")
    .stop(true, true)
    .animate({ height: 0 }, BG_OUT, function () {
      $(this).css({ opacity: 0 });
    });
});

//gotop
const goTopBtn = document.querySelector(".gotop");
const visualSection = document.querySelector(".visual");

if (goTopBtn && visualSection) {

  window.addEventListener("scroll", () => {

    const visualBottom =
      visualSection.offsetTop + visualSection.offsetHeight;

    if (window.scrollY > visualBottom - 100) {
      goTopBtn.classList.add("show");
    } else {
      goTopBtn.classList.remove("show");
    }

  });

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}

const bestTop = document.querySelector(".best_top");

if (bestTop) {

  const observer = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("invert-gotop", entry.isIntersecting);
    },
    {
      threshold: 0.2   // 20% 보이면 발동 (원하면 조절 가능)
    }
  );

  observer.observe(bestTop);
}