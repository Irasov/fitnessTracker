const btnMonth = document.querySelector(".tariff__btn_month");
const btnYear = document.querySelector(".tariff__btn_yaer"); 
const month = document.querySelector(".plans-tariff_month");
const year = document.querySelector(".plans-tariff_year");

if(btnMonth) {
  btnMonth.addEventListener("click", function(a){
    btnMonth.classList.toggle("_active");
    btnYear.classList.toggle("_active");
    month.classList.toggle("_active");
    year.classList.toggle("_active");
  });
}

if(btnYear) {
  btnYear.addEventListener("click", function(a){
    btnYear.classList.toggle("_active");
    btnMonth.classList.toggle("_active");
    year.classList.toggle("_active");
    month.classList.toggle("_active");
  });
}

const menu = document.querySelector(".menu");
const iconMenu = document.querySelector(".header__icon");
if(iconMenu) {
  iconMenu.addEventListener("click", function(a){
    document.body.classList.toggle("_lock");
    menu.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

const swiper = new Swiper('.slider-about', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-customer__next',
      prevEl: '.slider-customer__prev',
    },
    slidesPerView: 'auto',
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
      0: {
        
      },
      991.98: {

      },
      1230: {

      },
    },
  });
