// gnb
const DEPTH_BG_H = 280;

// bg 속도
const BG_IN = 180;
const BG_OUT = 220;

// depth2 메뉴 속도
const MENU_IN = 340;
const MENU_OUT = 160;

// 딜레이도 각각 가능
const BG_DELAY = 0;
const MENU_DELAY = 80;

$(".gnb").mouseenter(function () {
  $(".depth2_bg")
    .stop(true, true)
    .delay(BG_DELAY)
    .css({ opacity: 1 })
    .animate({ height: DEPTH_BG_H }, BG_IN);

  $(this).find(".depth2")
    .stop(true, true)
    .delay(MENU_DELAY)
    .fadeIn(MENU_IN);
});

$("#header").mouseleave(function () {
  $(".depth2")
    .stop(true, true)
    .fadeOut(MENU_OUT);

  $(".depth2_bg")
    .stop(true, true)
    .animate({ height: 0 }, BG_OUT, function () {
      $(this).css({ opacity: 0 });
    });
});

//mgnb
const btnMenu = document.querySelector(".btn_menu");
const mgnbWrap = document.querySelector(".mgnb_wrap");
const mgnbClose = document.querySelector(".mgnb_close");

function openMenu(){
  mgnbWrap.classList.add("active");
  document.body.classList.add("menu-lock");
}

function closeMenu(){
  mgnbWrap.classList.remove("active");
  document.body.classList.remove("menu-lock");
}

if(btnMenu){
  btnMenu.addEventListener("click", openMenu);
}

if(mgnbClose){
  mgnbClose.addEventListener("click", closeMenu);
}

/* 배경 클릭 시 닫기 */
if(mgnbWrap){
  mgnbWrap.addEventListener("click", (e)=>{
    if(e.target === mgnbWrap){
      closeMenu();
    }
  });
}

document.querySelectorAll(".mgnb > li > a").forEach((a)=>{
  a.addEventListener("click", (e)=>{
    const li = a.closest("li");
    const depth2 = li.querySelector(":scope > .depth2");
    if(!depth2) return;

    e.preventDefault();

    // 하나만 열리게(원하면 유지)
    document.querySelectorAll(".mgnb > li.open").forEach(other=>{
      if(other !== li) other.classList.remove("open");
    });

    li.classList.toggle("open");
  });
});

document.querySelectorAll(".mgnb > li > a").forEach((a) => {
  a.addEventListener("click", (e) => {
    const li = a.closest("li");
    const depth2 = li.querySelector(":scope > .depth2");
    if (!depth2) return;

    e.preventDefault();

    document.querySelectorAll(".mgnb > li.open").forEach(other => {
      if (other !== li) other.classList.remove("open");
    });

    li.classList.toggle("open");
  });
});


//gotop
const goTopBtn = document.querySelector(".gotop");
const visualSection = document.querySelector(".visual");

if (goTopBtn && visualSection) {
  const updateGoTop = () => {
    const visualBottom = visualSection.offsetTop + visualSection.offsetHeight;
    goTopBtn.classList.toggle("show", window.scrollY > visualBottom - 100);
  };

  window.addEventListener("scroll", updateGoTop);
  window.addEventListener("load", updateGoTop); 

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// best_top 구간에서 색 반전
const bestTop = document.querySelector(".best_top");

function updateGoTopInvert() {
  if (!bestTop) return;

  const btnY = window.scrollY + window.innerHeight - 40 - 40; 
  // (bottom 40px + 버튼 반지름 40px) => 버튼 중심 y

  const top = bestTop.offsetTop;
  const bottom = top + bestTop.offsetHeight;

  document.body.classList.toggle("invert-gotop", btnY >= top && btnY <= bottom);
}

window.addEventListener("scroll", updateGoTopInvert);
window.addEventListener("load", updateGoTopInvert);