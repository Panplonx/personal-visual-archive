(function () {
  "use strict";

  var preview = document.querySelector("[data-index-preview]");
  var indexList = document.querySelector(".project-index");

  if (!preview || !indexList) {
    return;
  }

  var previewImage = preview.querySelector("img");
  var previewId = preview.querySelector("[data-preview-id]");
  var previewTitle = preview.querySelector("[data-preview-title]");
  var links = Array.from(indexList.querySelectorAll("a[data-preview]"));

  if (!previewImage || !previewId || !previewTitle || links.length === 0) {
    return;
  }

  var defaultLink = links[0];

  function showPreview(link) {
    previewImage.src = link.dataset.preview;
    previewId.textContent = link.dataset.id;
    previewTitle.textContent = link.dataset.title;
  }

  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      showPreview(link);
    });

    link.addEventListener("focus", function () {
      showPreview(link);
    });
  });

  indexList.addEventListener("mouseleave", function () {
    showPreview(defaultLink);
  });

  indexList.addEventListener("focusout", function (event) {
    if (!indexList.contains(event.relatedTarget)) {
      showPreview(defaultLink);
    }
  });

  showPreview(defaultLink);
})();
