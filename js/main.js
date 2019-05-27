$(".show-image").click(function() {
    event.preventDefault();
    var mainImage = $(this).index();
    $('.product-photo-section img').removeClass('active');
    $('.product-photo-section img').eq(mainImage).addClass('active');
});

$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$('.slider-popup').slick({
  infinite: true,
  dots: false,
  slidesToShow: 6,
  slidesToScroll: 3,
  nextArrow: '<button class="slick-arrow nt slick-next"><i class="fas fa-chevron-right"></i></button> ',
  prevArrow: '<button class="slick-arrow pr slick-prev"><i class="fas fa-chevron-left"></i></button> ',
  responsive: [
   {
     breakpoint: 769,
     settings: {
       slidesToShow: 3
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1
     }
   }
 ]
});

$(document).ready(function() {
  $(".accordion .accord-header").click(function() {

      if($(this).next("div").is(":visible")){

        $(this).next("div").slideUp("slow");

      } else {
        $(".accordion .accord-content").slideUp("slow");
        $(this).next("div").slideToggle("middle");

      }
  });
});

$('.product-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
});
