$(document).ready(function() {
	
    var dur = 250;
	
	$('#leadership .item-left').hover(
      function() {
    	  $(this).children('.text').animate({ left: '235px', opacity: 1 }, dur);
      },
      function() {
    	  //$(this).children('.text').css('left', '0px').css('opacity', '0');
      }
	);
	
	$('#leadership .item-right').hover(
      function() {
		$(this).children('.text').animate({ left: '-235px', opacity: 1 }, dur);
	  },
	  function() {
		  //$(this).children('.text').css('left', '0px').css('opacity', '0');
	  }
	);
	
});