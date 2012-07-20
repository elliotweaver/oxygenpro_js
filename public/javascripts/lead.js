$(document).ready(function() {
	
    var dur = 250;
	
	$('#leadership .item-left').hover(
      function() {
        $(this).children('.text').hide();
        $(this).children('.text').show();
      },
      function() {
    	  $(this).children('.text').hide();;
      }
	);
	
	$('#leadership .item-right').hover(
    function() {
      $(this).children('.text').hide();
      $(this).children('.text').show();
	  },
	  function() {
		  $(this).children('.text').hide();
	  }
	);
	
});