/******************************
  SWIPER HOMEPAGE 
* ***************************/
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


/**************************************
 *  SWIPER ROOMS AND SUITES PAGE 
 * 
 * ***********************************/
const swiper2 = new Swiper(".room_types", {
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


// rooms and suites slider for bed and bath
const swiper3 = new Swiper(".feature__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,


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
//  *********************************/

// flatpickr("input[type=datetime-local]", {});

// $(function () {
//   $(".date-picker").datepicker({
//     dateFormat: "D, d M",
//   });
// });

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


/************** search tbutton ************** */
const btnSearch = document.querySelector('.Btn__search__top');
const inputForButton = document.querySelector('input.search__btn__top');
const searchForm = document.querySelector('.search__top__')
let searchActive = false;

btnSearch.addEventListener('click', (e)=> {
  e.preventDefault();
  if(inputForButton.classList.contains("hide")){
    console.log('button is hide');
    inputForButton.classList.add('show');
    inputForButton.classList.remove('hide');
    
    inputForButton.click();
    searchActive = true;

  }
})

// btnSearch.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(searchActive);
//   if(searchActive && inputForButton.classList.contains("show")) {
//     console.log('search is active and ');
//     searchActive = false;
//     inputForButton.classList.remove('show');
//     inputForButton.classList.add('hide');
//   }
// })



document.addEventListener('click', (e) => {
  if(searchActive && !btnSearch.contains(e.target) && !searchForm.contains(e.target)) {
    inputForButton.classList.remove('show');
    inputForButton.classList.add('hide');
    searchActive = false;
    inputForButton.value= '';
  }
})