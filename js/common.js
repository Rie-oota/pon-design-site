const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("is-scroll");
  } else {
    header.classList.remove("is-scroll");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const drawerButton = document.querySelector('.drawer_button');
  const drawerNav = document.querySelector('.drawer_nav_wrapper');
  const drawerBg = document.querySelector('.drawer_bg');

  drawerButton.addEventListener('click', () => {
    drawerButton.classList.toggle('active');
    drawerNav.classList.toggle('open');


    if (drawerBg.style.display === 'block') {
      drawerBg.style.display = 'none';
    } else {
      drawerBg.style.display = 'block';
    }

    markFooterDirtyAndUpdate();
  });

  drawerBg.addEventListener('click', () => {
    drawerButton.classList.remove('active');
    drawerNav.classList.remove('open');
    drawerBg.style.display = 'none';

    markFooterDirtyAndUpdate();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const worksSwiper = new Swiper(".p-works__slider", {
    loop: true,
    speed: 800,

    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".p-works__slider .swiper-button-next",
      prevEl: ".p-works__slider .swiper-button-prev",
    },

    pagination: {
      el: ".p-works__slider .swiper-pagination",
      clickable: true,
      formatFractionCurrent: function (number) {
        return String(number).padStart(2, "0");
      },
      formatFractionTotal: function (number) {
        return String(number).padStart(2, "0");
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' + currentClass + '"></span>' +
          ' / ' +
          '<span class="' + totalClass + '"></span>'
        );
      },
    },
  });
});

const topBtn = document.querySelector('.c-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    topBtn.classList.add('is-show');
  } else {
    topBtn.classList.remove('is-show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// NEWSページのページネーション
const buttons = document.querySelectorAll(".c-pagination__btn");
const pages = document.querySelectorAll(".p-news__contents--archive");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const page = btn.dataset.page;

    // 全部リセット
    buttons.forEach(b => b.classList.remove("is-active"));
    pages.forEach(p => p.classList.remove("is-active"));

    // 押したものだけON
    btn.classList.add("is-active");
    document.querySelector(`.p-news__contents--archive[data-page="${page}"]`)
      .classList.add("is-active");
  });
});

const contactForm = document.querySelector(".p-contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    console.log("お問い合わせ種別:", formData.get("contact_type"));
    console.log("お名前:", formData.get("name"));
    console.log("会社名:", formData.get("company"));
    console.log("メールアドレス:", formData.get("email"));
    console.log("電話番号:", formData.get("tel"));
    console.log("お問い合わせ内容:", formData.get("message"));
    console.log("PON DESIGNを知ったきっかけ:", formData.get("source"));
  });
}