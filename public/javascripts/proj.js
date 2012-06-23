$(document).ready(function() {
	
	var dur = 250;
	
	$('.project-1, .project-2').hover(
      function() {
    	  $(this).children('.text').addClass('hover').animate({ right: '-322px', opacity: 1 }, dur);
      },
      function() {
    	  $(this).children('.text').removeClass('hover').animate({ right: '0px', opacity: 0 }, 10);
      }
	);
	
	$('.project-3').hover(
      function() {
		$(this).children('.text').addClass('hover').animate({ right: '322px', opacity: 1 }, dur);
	  },
	  function() {
	    $(this).children('.text').removeClass('hover').animate({ right: '0px', opacity: 0 }, 10);
	  }
	);
	
	$(".project a").colorbox({iframe:true, innerWidth:600, innerHeight:400});
	
	
});