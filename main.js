/******************************
  SWIPER HOMEPAGE 
* ***************************/
const swiper = new Swiper(".rooms__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,    
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 40,    
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,    
    }
  },
 

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
  slidesPerView: 4,
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


// rooms and suites slider for bed and bath
const swiper4 = new Swiper(".room_single_slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,


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


/******  datepicker  ******/
$(document).ready(function () {
 
  $(function () {
      $(".date-picker").
      datepicker();
  });
}) 


/********************************
 * 
 * MOBILE NAVIGATION
 * 
 ********************************/
//get hamburger button'

const hamButton = document.querySelector('.hamburger');
  
//get nav links class
const navigationLinks = document.querySelector('.nav__link__prime');

hamButton.addEventListener('click', () => {
  // e.preventDefault();

  if(navigationLinks.classList.contains('mobile__nav__links')) {
    navigationLinks.classList.add('mobile__nav__links');
  }

  else  {
    navigationLinks.classList.remove('mobile__nav__links');
    console.log('navigation button was clicked');
  }
})




/********* get today's date ********* */
const today = new Date();

const month = String(today.getMonth() + 1 ).padStart(2,'0');
const day = String(today.getDay()).padStart(2, '0');
const year = today.getFullYear();

const formattedDate = `${month}/${day}/${year}`;

console.log(formattedDate);

if(document.querySelector('.date__input__')) {
  document.querySelector('.date__input__').placeholder = formattedDate;
}


console.log(today);






function setLayout() {
  // const screenSize = window.innerWidth; 
  const navigationLinks = document.querySelector('.nav__link__prime');
  let clicker = false; 
  // if(navigationLinks) {

  function handleInteraction(event) {
    if(clicker && !navigationLinks.contains(event.target)) {
      // console.log('click or tought detected');
      navigationLinks.classList.remove('active');
      // console.log('active class removed');
      clicker = false;
    }
  }

  if (navigationLinks.classList.contains('active')) {
    navigationLinks.classList.remove('active');   
    clicker = false;

    window.removeEventListener('click', handleInteraction);
    window.removeEventListener('touchstart', handleInteraction);
  }
  else {
    navigationLinks.classList.add('active');
    clicker = true;
    // console.log('active class is added');

    setTimeout(() => {
      window.addEventListener('click', handleInteraction);
      window.addEventListener('touchstart', handleInteraction);
    }, 0);

    }
} 



/************* ADD OR REMOVE CLASS DEPENDING ON DEVICE WIDTH *********** */
function toggleClassOnWidth() {
  const element = document.querySelector('.nav_links.nav__link__prime');
  const mobileClass = 'mobile__nav__links';

  const mobileWidth = 768;

  if(window.innerWidth <= mobileWidth) {
    //if device width is smallers tha 768px;
    element.classList.add(mobileClass);
  }

  else {
    //if device width is greater thatn 768 
    element.classList.remove(mobileClass);
  }

}

//run this function on page load
toggleClassOnWidth();

//run on windows resize
window.addEventListener('resize', toggleClassOnWidth());


/**************** button default behavior 
 *  ************* */
let buttonsAll = document.querySelectorAll('button');
buttonsAll.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
  })
});