// Lightbox responsiveness with linking

// Lightbox responsiveness without linking

document.addEventListener('click', function (event) {
  // Ensure event.target is an Element, then check if the clicked element is a thumbnail image
  if (!(event.target instanceof Element) || !event.target.closest('.image_gallery')) return;

  // Now TypeScript knows event.target is an Element, so it's safe to call closest
  const thumbnail = event.target.closest('.image_gallery');
  if (!thumbnail) return; // Exit early if no thumbnail is found

  // Assert thumbnail as HTMLImageElement to access the currentSrc property
  const { currentSrc } = thumbnail as HTMLImageElement;

  // Wait for the lightbox to fully open before applying the attribute
  setTimeout(function () {
    // Find the lightbox media image and set its src attribute to the currentSrc of the thumbnail
    const lightboxImage = document.querySelector('.w-lightbox-image');
    if (!lightboxImage) return; // Exit early if no lightboxImage is found

    lightboxImage.setAttribute('src', currentSrc);
  }, 300); // Adjust the timeout value as necessary based on your lightbox's opening animation duration
});

// Adding proper sizes attribute

document.addEventListener('DOMContentLoaded', function () {
  // Select all CMS images with a specific class
  const cmsImages = document.querySelectorAll('.image_projects');

  cmsImages.forEach(function (img) {
    // Add/ Override the sizes attribute
    img.setAttribute(
      'sizes',
      '(max-width: 479px) 95vw, (max-width: 767px) 90vw, (max-width: 1023px) 48vw, (max-width: 1440px) 48vw, (max-width: 1921px) 48vw, 50vw'
    );
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all CMS images with a specific class
  const cmsImages = document.querySelectorAll('.image_gallery');

  cmsImages.forEach(function (img) {
    // Add/ Override the sizes attribute
    img.setAttribute(
      'sizes',
      '(max-width: 479px) 95vw, (max-width: 567px) 92vw, (max-width: 767px) 90vw, (max-width: 1023px) 33vw, (max-width: 1440px) 33vw, (max-width: 1921px) 33vw,  33vw'
    );
  });
});

// Replacing the "-" with "of"

document.addEventListener('DOMContentLoaded', () => {
  // Get the parent container
  const container = document.querySelector('.slider-gallery_numbers');

  if (container && container.innerHTML) {
    // Replace the dash character with "of"
    container.innerHTML = container.innerHTML.replace(/—/g, 'of');
  }
});

// Swiper code

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let Swiper: any;

document.querySelectorAll('.projects-gallery_component.is-projects').forEach(function (element) {
  const totalSlides = element.querySelectorAll('.swiper-slide.is-slider-projects').length;

  const swiperNumberTotal = document.querySelector('.swiper-number-total');
  if (swiperNumberTotal !== null) {
    swiperNumberTotal.textContent = totalSlides.toString();
  }

  const swiper = new Swiper(element.querySelector('.swiper.is-slider-projects'), {
    slidesPerView: 1,
    spaceBetween: 24,
    allowTouchMove: true,
    slideRole: 'listitem',
    breakpoints: {
      // when window width is >=
      991: {
        slidesPerView: 2,
        allowTouchMove: false,
        slideToClickedSlide: false,
      },
    },
    speed: 400,
    loop: true,
    navigation: {
      nextEl: element.querySelector('.swiper-next'),
      prevEl: element.querySelector('.swiper-prev'),
    },
  });

  swiper.on('slideChange', function (e: { realIndex: number }) {
    const slideNumber = e.realIndex + 1;

    const swiperNumberCurrent = document.querySelector('.swiper-number-current');
    if (swiperNumberCurrent !== null) {
      swiperNumberCurrent.textContent = slideNumber.toString();
    }
  });
});

document.querySelectorAll('.swiper-slide.is-slider-projects').forEach(function (slide) {
  slide.setAttribute('role', 'listitem');
});

document.querySelectorAll('.projects-gallery_component.is-gallery').forEach(function (element) {
  const totalSlides = element.querySelectorAll('.swiper-slide.is-slider-gallery').length;

  const swiperNumberTotal = document.querySelector('.swiper-number-total');
  if (swiperNumberTotal !== null) {
    swiperNumberTotal.textContent = totalSlides.toString();
  }

  const swiper = new Swiper(element.querySelector('.swiper.is-slider-gallery'), {
    slidesPerView: 1,
    spaceBetween: 24,
    allowTouchMove: true,
    slideRole: 'listitem',
    breakpoints: {
      // when window width is >=
      991: {
        slidesPerView: 3,
        grabCursor: true,
        allowTouchMove: true,
        slideToClickedSlide: false,
      },
    },
    speed: 400,
    loop: true,
    navigation: {
      nextEl: element.querySelector('.swiper-next'),
      prevEl: element.querySelector('.swiper-prev'),
    },
  });

  swiper.on('slideChange', function (e: { realIndex: number }) {
    const slideNumber = e.realIndex + 1;

    const swiperNumberCurrent = document.querySelector('.swiper-number-current');
    if (swiperNumberCurrent !== null) {
      swiperNumberCurrent.textContent = slideNumber.toString();
    }
  });
});

document.querySelectorAll('.swiper-slide.is-slider-gallery').forEach(function (slide) {
  slide.setAttribute('role', 'listitem');
});
