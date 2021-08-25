$(function () {

   $('.carousel__inner').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 620,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });
});