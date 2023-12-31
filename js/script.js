$(function(){
    $('.servicewrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        centerMode: true,
        centerPadding: 0,
        prevArrow: "<i class='fa-solid fa-arrow-up up'></i>",
        nextArrow: " <i class='fa-solid fa-arrow-down down'></i>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });

      $('.revimgwrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: "<i class='fa-solid fa-arrow-up up'></i>",
        nextArrow: " <i class='fa-solid fa-arrow-down down'></i>",
        asNavFor: '.revtestwrapper',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
      });

      $('.revtestwrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.revimgwrapper',
        arrows: false,
      });

})

$('.countertext').counterUp({
  delay: 10,
  time: 1500
});

$('.sideclose').click(function(){
  $('.sidebar').css('left', '100%')
})
$('.toggler').click(function(){
  $('.sidebar').css('left', '0')
})
