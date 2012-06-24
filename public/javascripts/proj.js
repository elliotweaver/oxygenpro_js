$(document).ready(function() {
	
	var dur = 250;
	
	$('.project-1, .project-2').hover(
      function() {
    	  $(this).children('.text').addClass('hover').animate({ opacity: 1 }, dur);
      },
      function() {
    	  $(this).children('.text').removeClass('hover').animate({ opacity: 0 }, 1);
      }
	);

	
	$('.project-3').hover(
      function() {
		$(this).children('.text').addClass('hover').animate({ opacity: 1 }, dur);
	  },
	  function() {
	    $(this).children('.text').removeClass('hover').animate({ opacity: 0 }, 1);
	  }
	);
	
	$(".project a.cb").colorbox({iframe:true, innerWidth:900, innerHeight:600});
	
	
});