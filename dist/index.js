"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.ts
  $(".projects-gallery_component.is-projects").each(function(index) {
    const totalSlides = $(this).find(".swiper-slide.is-slider-projects").length;
    $(".swiper-number-total").text(totalSlides);
    const swiper = new Swiper($(this).find(".swiper.is-slider-projects")[0], {
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      breakpoints: {
        // when window width is >=
        991: {
          slidesPerView: 2,
          allowTouchMove: false,
          slideToClickedSlide: false
        }
      },
      speed: 400,
      loop: true,
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0]
      }
    });
    swiper.on("slideChange", function(e) {
      const slideNumber = e.realIndex + 1;
      $(".swiper-number-current").text(slideNumber);
    });
  });
  $(".projects-gallery_component.is-gallery").each(function(index) {
    const totalSlides = $(this).find(".swiper-slide.is-slider-gallery").length;
    $(".swiper-number-total").text(totalSlides);
    const swiper = new Swiper($(this).find(".swiper.is-slider-gallery")[0], {
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      breakpoints: {
        // when window width is >=
        991: {
          slidesPerView: 3,
          grabCursor: true,
          allowTouchMove: true,
          slideToClickedSlide: false
        }
      },
      speed: 400,
      loop: true,
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0]
      }
    });
    swiper.on("slideChange", function(e) {
      const slideNumber = e.realIndex + 1;
      $(".swiper-number-current").text(slideNumber);
    });
  });
})();
//# sourceMappingURL=index.js.map
