$('#strangers').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: false,
  responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 4,
  //       infinite: true
  //     }
  //   },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})