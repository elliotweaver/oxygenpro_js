$(document).ready(function() {
	$('#capabilities .item').hover(
	  function() {
		  $(this).addClass('hover');
	  },
	  function() {
		  $(this).removeClass('hover');
	  }
	);
});