$(document).ready(function() {
	var timer;
	clearTimeout(timer);
	timer = setInterval(eval("qPager"),"7000");
});

var qPager = function() {
	var dur = 500;
	var current = getActiveQuote();
	var next = parseInt(current) + 1;
	if (next == 4) {
		next = 1;
	}
	$('.q-pager .dot').removeClass('active').addClass('inactive');
	$('.q-pager .dot-'+next).removeClass('inactive').addClass('active');
	$('.quote').removeClass('active').addClass('inactive');
	$('.quote-'+next).removeClass('inactive').addClass('active');
	$('.quote-'+current).animate({ opactiy : '0' }, dur);
	$('.quote-'+next).animate({ opactiy : '0' }, dur);
};

var getActiveQuote = function() {
	var active = '1';
	$($('.q-pager .active').attr('class').split(' ')).each(function() {
		if (this !== '' && this != 'active' && this != 'inactive' && this != 'cs-dot') {
			var arr = this.split('-');
            active = arr[1];
        }
	});
	return active;
};