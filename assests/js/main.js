/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,
    // slidesPerView:'auto',
    // maxwidth: 'fit-content',
    centeredSlides: true,
    // width: '10px',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        speed: 400,
        effect: "slide",
        pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",    
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      },
  });
  /*=============== SWIPER PRODUCTS ===============*/
  
  var swiperProducts = new Swiper(".new__container", {
      spaceBetween: 24,
      loop: true,
      // centeredSlides: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          speed: 400,
          effect: "slide",
          pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",    
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
    });

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

tabs.forEach(tab => {
  tab.addEventListener('click',() => {
    const target = document.querySelector(tab.dataset.target);
    // console.log(target)
    tabContents.forEach((tabcontent)=>{
      tabcontent.classList.remove('active-tab');
    });

    target.classList.add('active-tab');

    tabs.forEach((tab)=>{
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  })
})
