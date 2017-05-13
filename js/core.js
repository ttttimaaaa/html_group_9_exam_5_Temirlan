$(document).ready(function(){

	$('#menu-btn').click(function(){		
			$('.menu').slideToggle(700);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			}		
		});

});

// slider-1
$(document).ready(function(){


	$('.slider-1').slick({
		pauseOnHover:true,
		autoplaySpeed:2000,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,		
		responsive: [
			{
				breakpoint: 700,
      	settings: {
        	slidesToShow: 1,   
       
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
});