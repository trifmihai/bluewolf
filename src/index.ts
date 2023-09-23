document.addEventListener('DOMContentLoaded', function () {
  // Select all CMS images with a specific class
  const cmsImages = document.querySelectorAll('.image_projects');

  cmsImages.forEach(function (img) {
    // Add/Override the sizes attribute
    img.setAttribute(
      'sizes',
      //'(max-width: 479px) 44vw, (max-width: 767px) 47vw, (max-width: 991px) 46vw, (max-width: 1919px) 40vw, 520px'
      '(max-width: 479px) 95vw, (max-width: 767px) 90vw, (max-width: 1023px) 48vw, (max-width: 1440px) 48vw, (max-width: 1919px) 48vw, 50vw'
    );

    // Optionally, you can also set/override the srcset attribute here
    // img.setAttribute('srcset', '...');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all CMS images with a specific class
  const cmsImages = document.querySelectorAll('.image_gallery');

  cmsImages.forEach(function (img) {
    // Add/Override the sizes attribute
    img.setAttribute(
      'sizes',
      //'(max-width: 479px) 44vw, (max-width: 767px) 47vw, (max-width: 991px) 46vw, (max-width: 1919px) 40vw, 520px'
      '(max-width: 479px) 95vw, (max-width: 567px) 92vw, (max-width: 767px) 90vw, (max-width: 1023px) 33vw, (max-width: 1440px) 33vw, (max-width: 1919px) 33vw,  33vw'
    );

    // Optionally, you can also set/override the srcset attribute here
    // img.setAttribute('srcset', '...');
  });
});
