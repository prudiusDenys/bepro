$(function () {

  $('.slider__content').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    centerMode: false,
    responsive: [{
      breakpoint: 1025,
      settings: {
        arrows: false,
      }
    }, ]
  });

  $('.header__registry-person').click(function (event) {
    $('.header__registry-person, .header__registry').toggleClass('active');
  })

  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })

  

  $('.event__content').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    centerMode: false,
    responsive: [{
      breakpoint: 1025,
      settings: {
        arrows: false,
      }
    }]
  });

  $('.popular__slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    centerMode: false,
    prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
    responsive: [{
      breakpoint: 1025,
      settings: {
        arrows: true,
      }
    }]
  });

  $('.products__slider-content').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    centerMode: false,
    prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
    nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          arrows: true,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: true,
        }
      }

    ]
  });

});