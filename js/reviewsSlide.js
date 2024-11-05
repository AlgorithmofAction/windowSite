const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slide-next, .reviews-slide-next-mobile',
    // nextEl: '.reviews-slide-next-mobile',
    prevEl: '.reviews-slide-prev, .reviews-slide-prev-mobile',
    // prevEl: '.reviews-slide-prev-mobile',
  },
});