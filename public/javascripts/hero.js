$(document).ready(function() {
  
  /*
  var timer;
  clearTimeout(timer);
  timer = setInterval(eval("fPager"),"7000");
  $(".front-pager .front-dot").click(function() {
    var num;
    $($(this).attr('class').split(' ')).each(function(){
      if (this !== '' && this != 'active' && this != 'inactive' && this != 'front-dot') {
        var arr = this.split('-');
        num = arr[2];
      }
    });
    //de-active all
    $('.front-pager .front-dot').removeClass('active').addClass('inactive');
    $('.slide').removeClass('active').addClass('inactive');
    //activate
    $(this).addClass('active');
    $('.slide-'+num).removeClass('inactive').addClass('active');
  });
  */
  
});

/*
var fPager = function() {
  var dur = 500;
  var current = getActiveFront();
  var next = parseInt(current) + 1;
  if (next == 2) {
    next = 0;
  }
  //de-activate all
  $('.front-pager .front-dot').removeClass('active').addClass('inactive');
  $('.slide').removeClass('active').addClass('inactive');
  //active
  $('.front-pager .front-dot-'+next).removeClass('inactive').addClass('active');
  $('.slide-'+next).removeClass('inactive').addClass('active');
};

var getActiveFront = function() {
  var active = '1';
  $($('.front-pager .active').attr('class').split(' ')).each(function() {
    if (this !== '' && this != 'active' && this != 'inactive' && this != 'front-dot') {
      var arr = this.split('-');
            active = arr[2];
        }
  });
  return active;
};
*/