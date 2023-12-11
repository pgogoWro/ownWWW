$(document).ready(function() {
	var navigationY = $('nav').offset().top;
	var stickyNavigation=function(){
		var scrollY=$(window).scrollTop();
		if(scrollY>navigationY){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
		};
		stickyNavigation();

		$(window).scroll(function(){
			stickyNavigation();
		});
	});