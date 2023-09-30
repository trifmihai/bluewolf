"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.ts
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".slider-gallery_numbers");
    if (container && container.innerHTML) {
      container.innerHTML = container.innerHTML.replace(/—/g, "of");
    }
  });
})();
//# sourceMappingURL=index.js.map
