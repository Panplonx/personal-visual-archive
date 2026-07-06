(function () {
  "use strict";

  var archiveGrid = document.querySelector("[data-archive-grid]");

  if (!archiveGrid) {
    return;
  }

  var cards = Array.from(archiveGrid.querySelectorAll(".archive-card"));
  var filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  var viewButtons = Array.from(document.querySelectorAll("[data-view]"));
  var orderButtons = Array.from(document.querySelectorAll("[data-order]"));
  var status = document.querySelector("#archive-status");
  var activeFilter = "all";
  var activeView = "grid";
  var activeOrder = "index";

  function setPressed(buttons, activeButton) {
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button === activeButton));
    });
  }

  function visibleCards() {
    return cards.filter(function (card) {
      return !card.hidden;
    });
  }

  function updateStatus() {
    if (!status) {
      return;
    }

    var filterName = activeFilter === "all" ? "ALL" : activeFilter.replace("-", " ").toUpperCase();
    var orderName = activeOrder === "index" ? "INDEX ORDER" : "MIXED ORDER";

    status.textContent =
      "SHOWING " +
      String(visibleCards().length).padStart(2, "0") +
      " / 12 · " +
      filterName +
      " · " +
      activeView.toUpperCase() +
      " · " +
      orderName;
  }

  function applyFilter() {
    cards.forEach(function (card) {
      card.hidden = activeFilter !== "all" && card.dataset.category !== activeFilter;
    });

    updateStatus();
  }

  function restoreIndexOrder() {
    cards
      .slice()
      .sort(function (a, b) {
        return Number(a.dataset.index) - Number(b.dataset.index);
      })
      .forEach(function (card) {
        archiveGrid.appendChild(card);
      });

    activeOrder = "index";
    updateStatus();
  }

  function mixOrder() {
    var currentOrder = Array.from(archiveGrid.querySelectorAll(".archive-card"));
    var visible = currentOrder.filter(function (card) {
      return !card.hidden;
    });
    var shuffled = visible.slice();

    for (var index = shuffled.length - 1; index > 0; index -= 1) {
      var randomIndex = Math.floor(Math.random() * (index + 1));
      var temporaryCard = shuffled[index];
      shuffled[index] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryCard;
    }

    if (
      shuffled.length > 1 &&
      shuffled.every(function (card, cardIndex) {
        return card === visible[cardIndex];
      })
    ) {
      shuffled.push(shuffled.shift());
    }

    var visibleIndex = 0;
    var mixedOrder = currentOrder.map(function (card) {
      if (card.hidden) {
        return card;
      }

      var mixedCard = shuffled[visibleIndex];
      visibleIndex += 1;
      return mixedCard;
    });

    mixedOrder.forEach(function (card) {
      archiveGrid.appendChild(card);
    });

    activeOrder = "mix";
    updateStatus();
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeFilter = button.dataset.filter;
      setPressed(filterButtons, button);
      applyFilter();
    });
  });

  viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeView = button.dataset.view;
      archiveGrid.classList.toggle("archive-grid--list", activeView === "list");
      setPressed(viewButtons, button);
      updateStatus();
    });
  });

  orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.dataset.order === "index") {
        restoreIndexOrder();
      } else {
        mixOrder();
      }

      setPressed(orderButtons, button);
    });
  });
})();
