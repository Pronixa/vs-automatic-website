var timer = 5000;

var i = 0;
var max = $('#galleryContent > li').length;

$("#galleryContent > li").eq(i).addClass('active').css('left', '0');
$("#galleryContent > li").eq(i + 1).addClass('active').css('left', '25%');
$("#galleryContent > li").eq(i + 2).addClass('active').css('left', '50%');
$("#galleryContent > li").eq(i + 3).addClass('active').css('left', '75%');


setInterval(function () {

  $("#galleryContent > li").removeClass('active');

  $("#galleryContent > li").eq(i).css('transition-delay', '0.25s');
  $("#galleryContent > li").eq(i + 1).css('transition-delay', '0.5s');
  $("#galleryContent > li").eq(i + 2).css('transition-delay', '0.75s');
  $("#galleryContent > li").eq(i + 3).css('transition-delay', '1s');

  if (i < max - 4) {
    i = i + 4;
  } else

  {
    i = 0;
  }

  $("#galleryContent > li").eq(i).css('left', '0').addClass('active').css('transition-delay', '1.25s');
  $("#galleryContent > li").eq(i + 1).css('left', '25%').addClass('active').css('transition-delay', '1.5s');
  $("#galleryContent > li").eq(i + 2).css('left', '50%').addClass('active').css('transition-delay', '1.75s');
  $("#galleryContent > li").eq(i + 3).css('left', '75%').addClass('active').css('transition-delay', '2s');

}, timer);