const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');


document.querySelector('.faq-accordion').addEventListener('click', (event) => {
   if (event.target.closest('.faq-accordion__item')) {
      event.target.closest('.faq-accordion__item')
         .classList.toggle('faq-accordion__item--active');
   }
});

document.querySelector('.btn-burger').addEventListener('click', () => {
   const header = document.querySelector('.section-header');

   header.classList.toggle('section-header--active-nav');

   if (header.classList.contains('section-header--active-nav')) {
      hideScroll();
   } else {
      showScroll();
   }
});

const hideScroll = () => {
   const scrollWidth = `${getScrollbarWidth()}px`;

   document.body.style.paddingRight = scrollWidth;
   document.body.style.overflow = 'hidden';

   mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
   document.body.style.paddingRight = '';
   document.body.style.overflow = 'visible';

   document.getElementById('main-navigation').style.paddingRight = '';
};

const resetNav = () => {
   header.classList.remove('section-header--active-nav');
   showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
   const outer = document.createElement('div');

   outer.style.position = 'absolut';
   outer.style.top = '-9999px';
   outer.style.width = '50px'
   outer.style.height = '50px';
   outer.style.overflow = 'scroll';
   outer.style.visibility = 'hidden';

   document.body.appendChild(outer);
   const getScrollBarWidth = outer.offsetWidth - outer.clientWidth;
   document.body.removeChild(outer);

   return getScrollBarWidth;
};

const swiper = new Swiper('.section-hero-image', {
   //Optional parameters
   // direction: 'vertical',
   loop: true,

   //If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   //Navigation arrows
   //navigation: {
   // nextEl: 'swiper-button-next',
   //prevEl: 'swiper-button-prev',
   //},

   //And if need scrollbar
   // scrollbar: {
   //  el: '.swiper-scrollbar',
   //},
});

const swiper2 = new Swiper('.slider-blog-container', {
   //Optional parameters
   // direction: 'vertical',
   loop: true,

   //If we need pagination
   pagination: {
      el: '.section-blog .dots',
      clickable: true,
   },

   //Navigation arrows
   navigation: {
      nextEl: '.slider-blog .swiper-button-next',
      prevEl: '.slider-blog .swiper-button-prev',
   },
});

const swiper3 = new Swiper('.slider-quotes-container', {
   //Optional parameters
   // direction: 'vertical',
   loop: true,

   slidesPerView: 1,

   //If we need pagination
   pagination: {
      el: '.section-quotes .dots',
      clickable: true,
   },
   breakpoints: {
      1024: {
         slidesPerView: 1.5,
      }
   }
});