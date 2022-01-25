AOS.init({
  duration: 350,
  offset:100,
});

// home
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 //  slide-trendding
var swiper = new Swiper(".trendding-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 1,
     },
     700: {
       slidesPerView: 3,
     },
     1000: {
       slidesPerView: 5.1,
     },
  },
});

 //  necklace-trendding
 var swiper = new Swiper(".necklace-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 2,
     },
     700: {
       slidesPerView: 3,
     },
     1000: {
       slidesPerView: 5,
     },
  },
});

 //  earring-trendding
 var swiper = new Swiper(".earring-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 2,
       },
       700: {
         slidesPerView: 3,
       },
       1000: {
         slidesPerView: 5,
       },
    },
  });


   //  bangles-trendding
 var swiper = new Swiper(".bangles-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 2,
     },
     700: {
       slidesPerView: 3,
     },
     1000: {
       slidesPerView: 5,
     },
  },
});

   //  silring-trendding
   var swiper = new Swiper(".silring-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 2,
       },
       700: {
         slidesPerView: 3,
       },
       1000: {
         slidesPerView: 5,
       },
    },
  });
  
  // client-slider
  var swiper = new Swiper(".client-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 3,
       },
       1000: {
         slidesPerView: 5,
       },
    },
  });