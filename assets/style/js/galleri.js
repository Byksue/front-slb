var sarana = new Swiper(".slide-sarana", {
  cssMode: true,
  navigation: {
    nextEl: ".sarana-button-next",
    prevEl: ".sarana-button-prev",
  },
  pagination: {
    el: ".sarana-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

var kegiatan = new Swiper(".slide-kegiatan", {
  cssMode: true,
  slidesPerView: 2.5,
  spaceBetween: 10,
  mousewheel: true,
  keyboard: true,
});
