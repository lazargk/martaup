$(function(){
    $('.header-slider').slick({
        arrows:false,
        dots:true,
        vertical:true,
        verticalSwiping: true,
        dotsClass:'header-dots',
        autoplay: 2000,
      });

    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
    })
});



// $(document).ready(function(){
//     $('.your-class').slick({
//       setting-name: setting-value
//     });
//   });