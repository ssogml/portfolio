AOS.init({
    duration: 1500,
    once: true,
});

/* visual */
const visual_list = new Swiper(".visual_list", {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }
});

function updatePageNumberClass() {
    const startNum = document.querySelector('.page-number.start');
    const endNum = document.querySelector('.page-number.end');
    const totalSlides = visual_list.slides.length;
    const currentIndex = visual_list.realIndex + 1;

    startNum.classList.toggle('active', currentIndex === 1);
    endNum.classList.toggle('active', currentIndex === totalSlides);
}

visual_list.on("slideChange", updatePageNumberClass);
updatePageNumberClass();

/* best */
const btns = document.querySelectorAll(".best_btn button");
const ginsengTxt = document.querySelector(".ginseng_txt");
const dongquaiTxt = document.querySelector(".dongquai_txt");
const ginsengImg = document.querySelector(".best_img .ginseng");
const dongquaiImg = document.querySelector(".best_img .dongquai");

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        // 버튼 active 조정
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // 인삼 버튼인 경우
        if (index === 0) {
            ginsengTxt.classList.add("active");
            ginsengImg.classList.add("active");

            dongquaiTxt.classList.remove("active");
            dongquaiImg.classList.remove("active");
        }

        // 당귀 버튼인 경우
        if (index === 1) {
            dongquaiTxt.classList.add("active");
            dongquaiImg.classList.add("active");

            ginsengTxt.classList.remove("active");
            ginsengImg.classList.remove("active");
        }
    });
});

const textLinks = document.querySelectorAll('.prd_name a');
const productImgs = document.querySelectorAll('.prd_img');

const bgSrc = [
    'image/main/backblur.png',
];

textLinks.forEach((link, idx) => {
  const bgImg = productImgs[idx].querySelector('.hover_bg');

  link.addEventListener('mouseenter', () => {
    bgImg.style.opacity = 1;
  });

  link.addEventListener('mouseleave', () => {
    bgImg.style.opacity = 0;
  });
});

/* event */
const event_list = new Swiper(".event_list", {
    slidesPerView: 1.5,
    loop: true,
    centeredSlides: true,
    spaceBetween: 50,
    breakpoints: {
        850: {
            slidesPerView: 1.3,
            spaceBetween: 30,
        },
        0: {
            slidesPerView: 1.1,
            spaceBetween: 15,
        },
    },
});

/* community */
const reviewbtns = document.querySelectorAll(".review_btn button");
const reviewImg1 = document.querySelector(".review_img1");
const reviewImg2 = document.querySelector(".review_img2");
const reviewImg3 = document.querySelector(".review_img3");

reviewbtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        reviewbtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (index === 0) {
            reviewImg1.classList.add("active");

            reviewImg2.classList.remove("active");
            reviewImg3.classList.remove("active");
        }

        if (index === 1) {
            reviewImg2.classList.add("active");

            reviewImg1.classList.remove("active");
            reviewImg3.classList.remove("active");
        }

        if (index === 2) {
            reviewImg3.classList.add("active");

            reviewImg1.classList.remove("active");
            reviewImg2.classList.remove("active");
        }
    });
});