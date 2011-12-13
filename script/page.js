$('.fancybox').fancybox({
  'titlePosition': "over"
});

$('.fancybox img').captify();

$('.gallery-list').hover(
 function() {},
 function()
 {
   $(this).find('li img').animate({opacity:1},250);
 }
);

$('.gallery-list li').hover(
 function()
 {
   $(this).siblings('li').find('img').css('opacity',0.5);
   $(this).find('img').animate({opacity:1},250);
 },
 function()
 {
   $(this).find('img').css('opacity',1);
 }
);
