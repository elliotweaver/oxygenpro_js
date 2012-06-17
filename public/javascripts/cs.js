$(document).ready(function() {
	
	$('.cs').hover(
	  function() {
	    $(this).addClass('hover');
	    $(this).children('.info').animate({ bottom: '0px' }, 500);
	  },
	  function() {
	    $(this).removeClass('hover');
	    $(this).children('.info').animate({ bottom: '-56px' }, 10);
	  }
	);
	
	var jump = 460;
	var dur = 500;
	$('.cs-pager .left').click(function() {
		var current = getActive();
		if (current == 1) {
			return;
		}
		var prev = parseInt(current) - 1;
		var sel_prev = '.cs-dot-'+prev;
		$('.cs-dot').removeClass('active').addClass('inactive');
		$(sel_prev).addClass('active');
		var position = '-' + ((prev - 1) * jump) + 'px';
		$('#case-studies .inner').animate({ left : position }, dur); 
	});
	$('.cs-pager .right').click(function() {
		var current = getActive();
		var items = $('.cs-pager .dots .cs-dot').length;
		if (current == items) {
			return;
		}
		var next = parseInt(current) + 1;
		var sel_next = '.cs-dot-'+next;
		$('.cs-dot').removeClass('active').addClass('inactive');
		$(sel_next).removeClass('inactive').addClass('active');
		var position = '-' + ((next - 1) * jump) + 'px';
		$('#case-studies .inner').animate({ left : position }, dur); 
	});
});

var getActive = function() {
	var active = '1';
	$($('.cs-pager .active').attr('class').split(' ')).each(function() {
		if (this !== '' && this != 'active' && this != 'inactive' && this != 'cs-dot') {
			var arr = this.split('-');
            active = arr[2];
        }
	});
	return active;
}