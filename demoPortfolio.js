
$(function() {

/*Image slider*/

	var interval;
	$(window).on('load', function() {
		$('.firstDiv img:gt(0)').hide();
		interval = setInterval(go, 3000);
		function go() {
			var currentImg = $('.active');
			var nextImg = currentImg.next();
			var firstImg = $('.firstDiv img:first');
			var lastImg = $('.firstDiv img:last')
			if(nextImg.length) {
				currentImg.removeClass('active').fadeOut(3000);
				nextImg.addClass('active').fadeIn(3000);
			}
			else {
				lastImg.removeClass('active').fadeOut(3000);
				firstImg.addClass('active').fadeIn(3000);
			}
			if(nextImg.length == 5) {
				clearInteval(interval);
			}
		};
		
	});
	$('.firstDiv').on('mouseover', function() {
		$(this).css('cursor', 'pointer');
		$('.firstDiv img').css('opacity', 1);
		$('#mainLogo2').css('display', 'block');
	});
	$('.firstDiv').on('mouseout', function() {
		$('.firstDiv img').css('opacity', 0.7);
		$('#mainLogo2').css('display', 'none');
	});

/*Personal Informations*/

	function personalInfoGo() {
		$('#sectionDiv section').animate({left:'605px'}, 2000);
		$('#profilPicDiv img').animate({right:'640px'}, 2000);
	};
	
	$(window).on('load', function() {
		personalInfoGo();
	});
		if($(window).width() > 1300){
			personalInfoGo();		
		}
		else {
			$('#mainDiv').css({
				'background-color': 'blue'
			});
		}

	

	

/*Education*/
	
	$('#education').hide();
	$('#portfolioDiv1 div:nth-child(2)').on('click', function() {
		$('#education').slideDown(900);
		$('#portfolioDiv1').slideUp(1000);
		$('#portfolioPageHeader').html('Education');
	});

	$('#education').on('click', function() {
		$('#portfolioDiv1').slideDown(900);
		$('#education').slideUp(1000);		
		$('#portfolioPageHeader').html('This is Me');
	});
	
/*Work Experience*/

	$('#portfolioDiv1 div:nth-child(3)').on('click', function() {
		$('#workExperience').css('display', 'block').slideDown(900);
		$('#portfolioDiv1').slideUp(1000);
		$('#portfolioPageHeader').html('Work Experience');
	});

	$('#workExperience').on('click', function() {
		$('#portfolioDiv1').slideDown(900);
		$('#workExperience').slideUp(1000);		
		$('#portfolioPageHeader').html('This is Me');
	});


	
/*Computer Skils*/

	$('.computerSkills').hide();
	$('#computerSkills').hide();
	$('#portfolioDiv1 div:nth-child(4)').on('click', function() {
		$('#computerSkills').slideDown(1000);
		$('#portfolioDiv1').slideUp(1000);
		$('#computerSkills div:nth-child(1)').fadeIn(2000);
		$('#computerSkills div:nth-child(2)').fadeIn(3000);
		$('#computerSkills div:nth-child(3)').fadeIn(4000);
		$('#computerSkills div:nth-child(4)').fadeIn(5000);
		$('#computerSkills div:nth-child(5)').fadeIn(6000);
		$('#computerSkills div:nth-child(6)').fadeIn(7000);
		$('#portfolioPageHeader').html('Computer Skills');
	});
	$('#computerSkills').on('click', function() {
		$('#portfolioDiv1').slideDown(1000);
		$('#computerSkills').slideUp(1000);	
		$('.computerSkills').hide();	
		$('#portfolioPageHeader').html('This is Me');
	});

/*Peronal skills*/

	 $(window).on('load', function() {
		$('thead th:nth-child(1)').animate({
			left: '-700px'
		}, 0.1);
		$('thead th:nth-child(2)').animate({
			left: '900px'
		}, 0.1);
		$('thead th:nth-child(3)').animate({
			bottom: '700px'
		}, 0.1);
		$('tbody tr:nth-child(1) td:nth-child(1)').animate({
			bottom: '700px'
		}, 0.1);
		$('tbody tr:nth-child(1) td:nth-child(2)').animate({
			left: '-700px'
		}, 0.1);
		$('tbody tr:nth-child(1) td:nth-child(3)').animate({
			bottom: '-700px'
		}, 0.1);
		$('tbody tr:nth-child(1) td:nth-child(4)').animate({
			left: '900px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(1)').animate({
			bottom: '700px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(2)').animate({
			left: '-700px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(3)').animate({
			bottom: '-1000px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(4)').animate({
			bottom: '-700px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(5)').animate({
			bottom: '700px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(6)').animate({
			left: '-1000px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(7)').animate({
			left: '1200px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(8)').animate({
			bottom: '-700px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(9)').animate({
			left: '-1000px'
		}, 0.1);
		$('tbody tr:nth-child(2) td:nth-child(10)').animate({
			left: '900px'
		}, 0.1);
		
	});
	$('table').on('mouseover', function() {
		$('thead th:nth-child(1)').animate({
			left: '0px'
		}, 2200);
		$('thead th:nth-child(2)').animate({
			left: '0px'
		}, 2100);
		$('thead th:nth-child(3)').animate({
			bottom: '0px'
		}, 2100);
		$('tbody tr:nth-child(1) td:nth-child(1)').animate({
			bottom: '0px'
		}, 2300);
		$('tbody tr:nth-child(1) td:nth-child(2)').animate({
			left: '0px'
		}, 2500);
		$('tbody tr:nth-child(1) td:nth-child(3)').animate({
			bottom: '0px'
		}, 2200);
		$('tbody tr:nth-child(1) td:nth-child(4)').animate({
			left: '0px'
		}, 2600);
		$('tbody tr:nth-child(2) td:nth-child(1)').animate({
			bottom: '0px'
		}, 2200);
		$('tbody tr:nth-child(2) td:nth-child(2)').animate({
			left: '0px'
		}, 2300);
		$('tbody tr:nth-child(2) td:nth-child(3)').animate({
			bottom: '0px'
		}, 2200);
		$('tbody tr:nth-child(2) td:nth-child(4)').animate({
			bottom: '0px'
		}, 2450);
		$('tbody tr:nth-child(2) td:nth-child(5)').animate({
			bottom: '0px'
		}, 2600);
		$('tbody tr:nth-child(2) td:nth-child(6)').animate({
			left: '0px'
		}, 2320);
		$('tbody tr:nth-child(2) td:nth-child(7)').animate({
			left: '0px'
		}, 2400);
		$('tbody tr:nth-child(2) td:nth-child(8)').animate({
			bottom: '0px'
		}, 2520);
		$('tbody tr:nth-child(2) td:nth-child(9)').animate({
			left: '0px'
		}, 2245);
		$('tbody tr:nth-child(2) td:nth-child(10)').animate({
			left: '0px'
		}, 2160);
		$('#tableMouseOver').css('opacity', 1);
	});
	$('table').on('mouseout', function() {
		$('#tableMouseOver').css('opacity', .7);
	}); 
 
/*Artiskic skills*/

	$('#portfolioDiv1 div:nth-child(6)').on('click', function() {
		$('#icon6').hide();
		$('#quote').css('display', 'block');
	});
	$(window).on('scroll', function() {
		$('#icon6').fadeIn(2000);
		$('#quote').css('display', 'none');
		console.log('scroll');
	});

/*About*/
	
	/*JS*/

/*Footer*/
			
		function contactFooter() {

			$('#contact').show();
			$('footer').hide();
			$('#scroll').hide();
			$('#contact').on('mouseover', function() {
			$('footer').show();
			$('#scroll').show();
				});
			$('#contact').on('mouseout', function() {
			$('footer').hide();
			$('#scroll').hide();

				});
			$('footer').on('mouseover', function() {
			$('footer').show();
				});
			$('footer').on('mouseout', function() {
			$('footer').hide();
				});
		};

		function contactFooterR() {     /*Response width='<=640px'*/

			if ($(window).width() <= 640){	
				$('footer').show();	
				$('#contact').hide();
				$('#scroll').hide();

				$('footer').on('mouseout', function() {
					$('footer').show();

				});		
					}	
			else {
				$('footer').hide();
				$('#contact').show();
			}
		}


		$(window).resize(function() {
			contactFooter();
			contactFooterR();
		});

		$(window).on('load', function() {
			contactFooter();
			contactFooterR();			
		});

			
})
