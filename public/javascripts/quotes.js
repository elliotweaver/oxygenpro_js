$(document).ready(function() {
	var timer;
	clearTimeout(timer);
	timer = setInterval(eval("qPager"),"7000");
	$(".q-pager .dot").click(function() {
	  var num;
	  $($(this).attr('class').split(' ')).each(function(){
	    if (this !== '' && this != 'active' && this != 'inactive' && this != 'dot') {
	      var arr = this.split('-');
        num = arr[1];
	    }
	  });
	  $('.q-pager .dot').removeClass('active').addClass('inactive');
	  $('.q-pager .dot-'+num).removeClass('inactive').addClass('active');
	  $('.quote').removeClass('active').addClass('inactive');
	  $('.quote-'+num).removeClass('inactive').addClass('active');
	  //$('.quote-'+current).animate({ opactiy : '0' }, dur);
	  //$('.quote-'+next).animate({ opactiy : '0' }, dur);
	});
	
	$(".quoteform .send").click(function() {
	  
	  var e = false;
	  
	  //name
    if ($(".quoteform .name").val() == '') {
      $(".e-name").html("Enter a name");
      e = true;
    }
    else {
      $(".e-name").html("");
    }
    
    //email
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test($(".quoteform .email").val())) {
      $(".e-email").html("Enter a valid email address");
    }
    else {
      $(".e-email").html("");
    }
    
    //comment
    if ($(".quoteform .comment").val() == '') {
      $(".e-comment").html("Enter a project description");
    }
    else {
      $(".e-comment").html("");
    }
    
    //comment
    if ($(".quoteform .phone").val() == '') {
      $(".e-phone").html("Enter a phone number");
    }
    else {
      $(".e-phone").html("");
    }
    
    //no errors send form
    if (!e) {
      $.ajax({
        url: "/quote?name="+$(".quoteform .name").val()+"&url="+$(".quoteform .url").val()+"&email="+$(".quoteform .email").val()+"&comment="+$(".quoteform .comment").val()+"&company="+$(".quoteform .company").val()+"&phone="+$(".quoteform .phone").val()+"&budget=25&deadline="+$(".quoteform .deadline").val(),
        success: function(data) {
          $(".e-response").html(data);
        }
      });
    }
    
  });
	
	
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