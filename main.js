const swiper = new Swiper(".rooms__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/**********************************
 *  FLATPICKER
 *********************************/

flatpickr("input[type=datetime-local]", {});

/**************************************
 *  HEADER NAVIGATION POSITION FIXED
 * ***********************************/

window.addEventListener("scroll", function () {
  var menu = document.getElementById("navigation__main");
  if (this.window.scrollY > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
});
