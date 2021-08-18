let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  initialSlide: 0,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    1024: {
      spaceBetween: 30,
      slidesPerGroup: 3
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});



