$(document).ready(function() {
	  
	  
	  var controller = $.scrollorama({ blocks: '.scrollblock' });
	  $('.scrollblock').css('position', 'relative').css('top', '0');
	  
	  controller.animate(
	      '.tile3',
	      { 
	        delay: 0, 
	        duration: 600, 
	        property:'top', 
	        start:74, 
	        end:-20
	      }
	    );
	  controller.animate(
	    '.tile2',
	    { 
	      delay: 0, 
	      duration: 600, 
	      property:'top', 
	      start:-9, 
	      end:-500 
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
