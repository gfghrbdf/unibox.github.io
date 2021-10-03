$(document).ready(function(){

	$('.hover-section-1').mouseenter(function(){

		$('.service-list1').css('display','block');

	})

	$('.hover-section-1').mouseleave(function(){

		$('.service-list1').css('display','none');

	})



	$('.hover-section-2').mouseenter(function(){

		$('.service-list2').css('display','block');

	})

	$('.hover-section-2').mouseleave(function(){

		$('.service-list2').css('display','none');

	})



	$('.hover-section-3').mouseenter(function(){

		$('.service-list3').css('display','block');

	})

	$('.hover-section-3').mouseleave(function(){

		$('.service-list3').css('display','none');

	})



	$('.hover-section-4').mouseenter(function(){

		$('.service-list4').css('display','block');

	})

	$('.hover-section-4').mouseleave(function(){

		$('.service-list4').css('display','none');

	})

	$('.hover-section-5').mouseenter(function(){

		$('.service-list5').css('display','block');

	})

	$('.hover-section-5').mouseleave(function(){

		$('.service-list5').css('display','none');

	})

	$('.hover-section-6').mouseenter(function(){

		$('.service-list6').css('display','block');

	})

	$('.hover-section-6').mouseleave(function(){

		$('.service-list6').css('display','none');

	})


	//  valuable client owl carosel 

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout: 3000,
    smartSpeed:800,
    stagePadding:50,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

	AOS.init();


	// counter js

	$('.coun').counterUp({
    delay: 20,
    time: 5000
});


	// priceing page related services


	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


	

})