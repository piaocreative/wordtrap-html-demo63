$( document ).ready( function() {

  if ( $('.logos' ).length ) {
    $('.logos').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
      ]
    });   
  }

  if ( $( '.products' ).length ) {
    $('.products').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".best-prev"),
      nextArrow: $(".best-next"),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
          }
        },
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        }
      ]
    });   
  }

  if ( $( '.authors' ).length ) {
    $('.authors').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".author-prev"),
      nextArrow: $(".author-next"),
      responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
      ]
    });   
  }

  if ( $( '.posts' ).length ) {
    $('.posts').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".post-prev"),
      nextArrow: $(".post-next"),
      responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
      ]
    });   
  }

});