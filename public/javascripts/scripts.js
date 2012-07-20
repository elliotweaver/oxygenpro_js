(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=156638724355054";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function() {
	  
  
	  
	  var controller = $.scrollorama({ blocks: '.scrollblock' });
	  $('.scrollblock').css('position', 'relative').css('top', '0');
	  
	  /* Top VMware */
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
