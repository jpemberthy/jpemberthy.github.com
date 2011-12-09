				
	$(document).ready(function() 
	{
		$('.cascade').casadeLanding();
					
		$.getJSON('http://twitter.com/statuses/user_timeline.json?screen_name=quanticalabs&count=5&callback=?', function(data) 
		{
			if(data.length)
			{
				var list=$('<ul>');
				$(data).each(function(index,value)
				{
					list.append($('<li>').append($('<p>').html(linkify(value.text))));
				});
						
				$('#latest-tweets').append(list);
					
				list.bxSlider(
				{
					auto: true,
					mode:'vertical',
					nextText:null,
					prevText:null,
					displaySlideQty:1,
				   pause:5000
				});  
				
				$('#latest-tweets a').attr('target','_blank');
			}
		});
	});