$(document).ready(function() {
	
    var dur = 250;
	
	$('#leadership .item-left').hover(
      function() {
        $(this).children('.text').animate({ opacity: 0 }, 1);
        $(this).children('.text').animate({ opacity: 1 }, dur);
      },
      function() {
    	  $(this).children('.text').animate({ opacity: 0 }, 1);
      }
	);
	
	$('#leadership .item-right').hover(
    function() {
      $(this).children('.text').animate({ opacity: 0 }, 1);
      $(this).children('.text').animate({ opacity: 1 }, dur);
	  },
	  function() {
		  $(this).children('.text').animate({ opacity: 0 }, 1);
	  }
	);
	
});