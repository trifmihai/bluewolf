"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.ts
  document.addEventListener("DOMContentLoaded", function() {
    const cmsImages = document.querySelectorAll(".image_projects");
    cmsImages.forEach(function(img) {
      img.setAttribute(
        "sizes",
        //'(max-width: 479px) 44vw, (max-width: 767px) 47vw, (max-width: 991px) 46vw, (max-width: 1919px) 40vw, 520px'
        "(max-width: 479px) 95vw, (max-width: 767px) 90vw, (max-width: 1023px) 48vw, (max-width: 1440px) 48vw, (max-width: 1919px) 48vw, 50vw"
      );
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const cmsImages = document.querySelectorAll(".image_gallery");
    cmsImages.forEach(function(img) {
      img.setAttribute(
        "sizes",
        //'(max-width: 479px) 44vw, (max-width: 767px) 47vw, (max-width: 991px) 46vw, (max-width: 1919px) 40vw, 520px'
        "(max-width: 479px) 95vw, (max-width: 567px) 92vw, (max-width: 767px) 90vw, (max-width: 1023px) 33vw, (max-width: 1440px) 33vw, (max-width: 1919px) 33vw,  33vw"
      );
    });
  });
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
