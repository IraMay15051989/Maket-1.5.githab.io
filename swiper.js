
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: "1.3",
    spaceBetween: 16,
    breakpoints : {
        500: {slidesPerView: 2},
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });


 
  