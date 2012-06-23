$(document).ready(function() {
	  
	  
	  var controller = $.scrollorama({ blocks: '.scrollblock' });
	  $('.scrollblock').css('position', 'relative').css('top', '0');
	  
	  controller.animate(
	      '.tile3',
	      { 
	        delay: 0, 
	        duration: 800, 
	        property:'top', 
	        start:74, 
	        end:280
	      }
	    );
	  controller.animate(
	    '.tile1',
	    { 
	      delay: 0, 
	      duration: 800, 
	      property:'top', 
	      start:1, 
	      end:310 
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
