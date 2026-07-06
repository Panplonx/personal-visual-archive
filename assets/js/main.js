(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var mobileNavigation = window.matchMedia("(max-width: 767px)");
  var siteHeaders = Array.from(document.querySelectorAll(".site-header"));
  var images = document.querySelectorAll("img");

  siteHeaders.forEach(function (header, index) {
    var navigation = header.querySelector(".site-nav");

    if (!navigation) {
      return;
    }

    if (!navigation.id) {
      navigation.id = "site-navigation-" + String(index + 1);
    }

    var toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.type = "button";
    toggle.textContent = "MENU";
    toggle.setAttribute("aria-controls", navigation.id);
    toggle.setAttribute("aria-expanded", "false");
    header.insertBefore(toggle, navigation);

    function isExpanded() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    function setExpanded(expanded, returnFocus) {
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.textContent = expanded ? "CLOSE" : "MENU";
      navigation.hidden = mobileNavigation.matches && !expanded;

      if (returnFocus) {
        toggle.focus();
      }
    }

    toggle.addEventListener("click", function () {
      setExpanded(!isExpanded(), false);
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setExpanded(false, false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isExpanded()) {
        setExpanded(false, true);
      }
    });

    mobileNavigation.addEventListener("change", function () {
      setExpanded(false, false);
    });

    setExpanded(false, false);
  });

  images.forEach(function (image) {
    image.addEventListener("error", function () {
      image.closest(".archive-card__image, .visual-tile")?.classList.add("is-image-missing");
    });
  });
})();
