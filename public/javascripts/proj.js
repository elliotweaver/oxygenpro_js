$(document).ready(function() {
	
	var dur = 250;
	
	$('.project-1, .project-2').hover(
      function() {
    	  $(this).children('.text').show();
      },
      function() {
    	  $(this).children('.text').hide();
      }
	);

	
	$('.project-3').hover(
      function() {
		$(this).children('.text').show();
	  },
	  function() {
	    $(this).children('.text').hide();
	  }
	);
	
	$(".project a.cb").colorbox({iframe:true, innerWidth:900, innerHeight:600});
	
	
});