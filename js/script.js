$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

})




$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "Problem Solver."],
		typeSpeed: 50,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});


	


	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) { // if countUpFinished is not true AND 
			$(".counter").each(function() {   		// for each counter element with the counter class do the following thing
				var element = $(this);				// variable element = this 
				var endVal = parseInt(element.text());	// variable endVal = 

				element.countup(endVal);				// call the countup function
			})

			countUpFinished = true;

		}


	});


	$("[data-fancybox]").fancybox();			// add fancybox function


	$(".items").isotope({					// isotope called when the page loads
		filter: '*',						// filter that is applied from the start is 'all'
		animationOptions: {					 // options for the animation
			duration: 1500,					// 1500 miliseconds
			easing: 'linear',				// smoothing of animation
			queue: false					// their examples use it so using it here
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");		// find the element that has the current class applied and remove it
		$(this).addClass("current");						 // the current button we clicked "this" we will add the class current

		var selector = $(this).attr("data-filter");

		$(".items").isotope({					// isotope called when we click on the element
			filter: selector,				    // passing the current selection as the applied filter
			animationOptions: {					 // options for the animation
				duration: 1500,					// 1500 miliseconds
				easing: 'linear',				// smoothing of animation
				queue: false					// their examples use it so using it here
			}
		});

		return false;						 // stop doing any other activity or actions
	});



	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}

});


// .click will be the code that happens when you click on one of the anchor buttons















