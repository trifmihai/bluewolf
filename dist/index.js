"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.ts
  document.addEventListener("click", function(event) {
    if (!(event.target instanceof Element) || !event.target.closest(".image_gallery"))
      return;
    const thumbnail = event.target.closest(".image_gallery");
    if (!thumbnail)
      return;
    const { currentSrc } = thumbnail;
    setTimeout(function() {
      const lightboxImage = document.querySelector(".w-lightbox-image");
      if (!lightboxImage)
        return;
      lightboxImage.setAttribute("src", currentSrc);
    }, 300);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const cmsImages = document.querySelectorAll(".image_projects");
    cmsImages.forEach(function(img) {
      img.setAttribute(
        "sizes",
        "(max-width: 479px) 95vw, (max-width: 767px) 90vw, (max-width: 1023px) 48vw, (max-width: 1440px) 48vw, (max-width: 1921px) 48vw, 50vw"
      );
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const cmsImages = document.querySelectorAll(".image_gallery");
    cmsImages.forEach(function(img) {
      img.setAttribute(
        "sizes",
        "(max-width: 479px) 95vw, (max-width: 567px) 92vw, (max-width: 767px) 90vw, (max-width: 1023px) 33vw, (max-width: 1440px) 33vw, (max-width: 1921px) 33vw,  33vw"
      );
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".slider-gallery_numbers");
    if (container && container.innerHTML) {
      container.innerHTML = container.innerHTML.replace(/—/g, "of");
    }
  });
  document.querySelectorAll(".projects-gallery_component.is-projects").forEach(function(element) {
    const totalSlides = element.querySelectorAll(".swiper-slide.is-slider-projects").length;
    const swiperNumberTotal = document.querySelector(".swiper-number-total");
    if (swiperNumberTotal !== null) {
      swiperNumberTotal.textContent = totalSlides.toString();
    }
    const swiper = new Swiper(element.querySelector(".swiper.is-slider-projects"), {
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      slideRole: "listitem",
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
        nextEl: element.querySelector(".swiper-next"),
        prevEl: element.querySelector(".swiper-prev")
      }
    });
    swiper.on("slideChange", function(e) {
      const slideNumber = e.realIndex + 1;
      const swiperNumberCurrent = document.querySelector(".swiper-number-current");
      if (swiperNumberCurrent !== null) {
        swiperNumberCurrent.textContent = slideNumber.toString();
      }
    });
  });
  document.querySelectorAll(".swiper-slide.is-slider-projects").forEach(function(slide) {
    slide.setAttribute("role", "listitem");
  });
  document.querySelectorAll(".projects-gallery_component.is-gallery").forEach(function(element) {
    const totalSlides = element.querySelectorAll(".swiper-slide.is-slider-gallery").length;
    const swiperNumberTotal = document.querySelector(".swiper-number-total");
    if (swiperNumberTotal !== null) {
      swiperNumberTotal.textContent = totalSlides.toString();
    }
    const swiper = new Swiper(element.querySelector(".swiper.is-slider-gallery"), {
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      slideRole: "listitem",
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
        nextEl: element.querySelector(".swiper-next"),
        prevEl: element.querySelector(".swiper-prev")
      }
    });
    swiper.on("slideChange", function(e) {
      const slideNumber = e.realIndex + 1;
      const swiperNumberCurrent = document.querySelector(".swiper-number-current");
      if (swiperNumberCurrent !== null) {
        swiperNumberCurrent.textContent = slideNumber.toString();
      }
    });
  });
  document.querySelectorAll(".swiper-slide.is-slider-gallery").forEach(function(slide) {
    slide.setAttribute("role", "listitem");
  });
})();
//# sourceMappingURL=index.js.map
