
/******************************
  SWIPER HOMEPAGE 
* ***************************/
const swiper = new Swiper(".rooms__slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

        800: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 4,
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
    slidesPerView: 1,
    spaceBetween: 20,

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
    autoplay:true,
    breakpoints: {
        600: {
            slidesPerView: 3
        },

        800: {
            slidesPerView: 4
        },
        1000: {
            slidesPerView: 4
        }
    },
});


// rooms and suites slider for bed and bath
const swiper3 = new Swiper(".feature__slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        800: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
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

const swiper5 = new Swiper(".testimonial__cards__wrapper", {
     // Optional parameters
     direction: "horizontal",
     loop: true,

     autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
 
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
        },
        1366: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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

//swiper about page testimonials

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
// const btnSearch = document.querySelector('.Btn__search__top');
// const inputForButton = document.querySelector('input.search__btn__top');
// const searchForm = document.querySelector('.search__top__')
// let searchActive = false;

// btnSearch.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (inputForButton.classList.contains("hide")) {
//         console.log('button is hide');
//         inputForButton.classList.add('show');
//         inputForButton.classList.remove('hide');
//         searchForm.classList.add('open')

//         inputForButton.click();
//         searchActive = true;
//     }
// })


// document.addEventListener('click', (e) => {
//     if (searchActive && !btnSearch.contains(e.target) && !searchForm.contains(e.target)) {
//         inputForButton.classList.remove('show');
//         inputForButton.classList.add('hide');
//         searchForm.classList.remove('open')
//         searchActive = false;
//         inputForButton.value = '';
//     }
// })


/******  datepicker  ******/
$(document).ready(function () {

    $(function () {
        $(".date-picker").datepicker();
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
// const navigationLinks = document.querySelector('.nav__link__prime');

// hamButton.addEventListener('touchstart', () => {
//     // e.preventDefault();

//     if (navigationLinks.classList.contains('mobile__nav__links')) {
//         navigationLinks.classList.add('active');
//     }

//     else {
//         navigationLinks.classList.remove('active');
//         console.log('navigation button was clicked');
//     }
// })




/********* get today's date ********* */
const today = new Date();

const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDay()).padStart(2, '0');
const year = today.getFullYear();

const formattedDate = `${month}/${day}/${year}`;

// console.log(formattedDate);

if (document.querySelector('.date__input__')) {
    document.querySelector('.date__input__').placeholder = formattedDate;
}


// console.log(today);



// $(document).on("click", )



let clicker = false;

const navigationLinks = document.querySelector('.nav__link__prime');
hamButton.addEventListener('touchend', (e) => {

    e.stopPropagation();

    if(!clicker) {
        // console.log("Opening the Menu ***");
        navigationLinks.classList.add('active');
        clicker = true;

    }else {
        // console.log("closing the menu ******");
        navigationLinks.classList.remove('active');
        clicker = false;
    }

    // console.log('clicker status is: ' + clicker):
});


//event listener to close the menu if clicked outside

document.addEventListener('touchend', function(event) {
    const targetElement = event.target;
    if(clicker && (!navigationLinks.contains(targetElement)) || (targetElement !== hamButton)) {
        // console.log("document click was found =======");
        navigationLinks.classList.remove('active');
        // console.log('active class was removed');
        clicker  = false;
    }
})


/************* ADD OR REMOVE CLASS DEPENDING ON DEVICE WIDTH *********** */
function toggleClassOnWidth() {
    const element = document.querySelector('.nav_links.nav__link__prime');
    const mobileClass = 'mobile__nav__links';

    const mobileWidth = 991;

    if (window.innerWidth <= mobileWidth) {
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




/*---------------------  ZOOM IMAGES rooms and suites  ------------------- */
$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
    var src = $(this).attr('src');
    var modal;
  
    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function() {
      removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    });
  });