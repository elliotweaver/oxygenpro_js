$(document).ready(function() {
	  
	  
	  var controller = $.scrollorama({ blocks: '.scrollblock' });
	  $('.scrollblock').css('position', 'relative').css('top', '0');
	  
	  controller.animate(
	    '.tile0',
	    { 
	      delay: 0, 
	      duration: 600, 
	      property:'top', 
	      start:0, 
	      end:300 
	    }
	  );
	  controller.animate(
	    '.tile1',
	    { 
	      delay: 0, 
	      duration: 600, 
	      property:'top', 
	      start:0, 
	      end:-200 
	    }
	  );
	  controller.animate(
	    '.tile1',
	    { 
	      delay: 0, 
	      duration: 600, 
	      property:'right', 
	      start:20, 
	      end:-120 
	    }
	  );
	  controller.animate(
	    '.tile2',
	    { 
	      delay: 0, 
	      duration: 600, 
	      property:'top', 
	      start:0, 
	      end:100 
	    }
	  );
	  controller.animate(
	    '.tile3',
	    { 
	      delay: 0, 
	      duration: 600, 
	      property:'right', 
	      start:34, 
	      end:150 
	    }
	  );
	  controller.animate(
	    '.tile3',
	    { 
	      delay: 0, 
	      duration: 600, 
	      property:'top', 
	      start:0, 
	      end:150 
	    }
	  );
	  /*
		controller.animate(
		  '.tile3',
		  { 
		    delay: 200, 
		    duration: 1200, 
		    property:'top', 
		    start:500, 
		    end:-500 
		  }
		);
		*/
	  
});
