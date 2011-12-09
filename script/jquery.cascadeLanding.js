	
	/*****************************************************************/
	
	(function($)
	{	
		/**************************************************************/

		var CascadeLanding=function(cascade)
		{
			/***********************************************************/
		
			var $this=this;
		
			var cascade=$(cascade);
			var cascadeWindow=cascade.find('.cascade-window');
			var cascadeElement=cascade.find('.cascade-menu li');
			var cascadeNavigation=cascade.find('.cascade-navigation');
			
			var scrollbar='';
			var selectedElement='';
			
			var openEnable=true;

			/***********************************************************/
			
			this.load=function()
			{
				/********************************************************/
				
	  			cascadeElement.bind('click',function(event) 	
				{	
					event.preventDefault();
					$this.openElement(this);
				});		
				
				/********************************************************/
				
				cascadeWindow.find('.cascade-window-close-bar a').click(function(event) 
				{
					event.preventDefault();
					$this.closeElement();
				});
				
				/********************************************************/
			};
			
			/***********************************************************/
			
			this.openElement=function(element)
			{
				if(!openEnable) return;
				
				openEnable=false;
			
				if($('.cascade-window-content').html()!='')
				{
					$this.closeElement();
					return;
				}
			
				selectedElement=$(element);

				var i=0;
				var selectedPage=selectedElement.attr('id');
				var selectedClass=selectedElement.attr('class');	
				
				selectedElement.css('z-index',2);
				
				cascadeElement.animate({left:0},500,'easeOutExpo',function(data) 
				{
					i++;
					if(i==cascadeElement.length)
					{
						cascadeWindow.css('opacity','1');
						cascadeWindow.css('display','block');
							
						cascadeWindow.attr('class','cascade-window '+selectedClass);
						cascadeWindow.animate({width:'640px'},500,'easeOutBounce',function()
						{
							$this.showPreloader(true);
							
							$.get('page/'+selectedPage,{},function(page) 
							{			
								$('.cascade-window-content').html(page);
								scrollbar=$('.cascade-window-content').jScrollPane({maintainPosition:false,autoReinitialise:true}).data('jsp');
								
								$this.showPreloader(false);	
								$this.showNavigation(true);
	
								$.getScript('script/page.js');
								
								openEnable=true;
							},
							'html');
						});
					}
				});				
			}
			
			/***********************************************************/
			
			this.closeElement=function(data)
			{
				openEnable=false;
			
				if(scrollbar!='') 
				{
					scrollbar.destroy();
					scrollbar='';
				}
			
				$(':input,a').qtip('destroy');
				$('.cascade-window-content').html('');
				
				$this.showNavigation(false);
				
 				cascadeWindow.animate({width:'0px',opacity:0},500,'easeOutBounce',function() 	
				{
					cascadeWindow.css('display','none');
					$this.expandElements(data);
				});			
			}
			
			/***********************************************************/
			
			this.expandElements=function(data)
			{
				var counter=0,done=0,left=-200;
					
				cascadeElement.each(function() 
				{
					$(this).css('z-index',1);
					left+=200+((counter++)>0 ? 20 : 0);
					
					$(this).animate({left:left},500,'easeOutExpo',function()
					{
						done++;
						if(done==cascadeElement.length)
						{
							openEnable=true;
							if(typeof(data)!='undefined')
							{
								if(typeof(data.onComplete)!='undefined') data.onComplete.apply();
							}
						}
					});
				});
			}
			
			/***********************************************************/
			
			this.createNavigation=function()
			{
				cascadeNavigation.each(function() 
				{
					$(this).bind('click',function(event) 
					{
						event.preventDefault();
					
						if($(this).hasClass('cascade-navigation-prev'))
						{	
							$this.closeElement({'onComplete':function() 
							{ 	
								var prev=selectedElement.prev();
								if(prev.length==0) prev=cascade.find('.cascade-menu li:last');

								$this.openElement(prev);
							}});							
						}
						else
						{
							$this.closeElement({'onComplete':function() 
							{ 
								var next=selectedElement.next();
								if(next.length==0) next=cascade.find('.cascade-menu li:first');

								$this.openElement(next);
							}});								
						}
					});
				});	
			}
			
			/***********************************************************/
			
			this.showNavigation=function(show)
			{
				if(cascadeElement.length>1)
					cascadeNavigation.css('display',show ? 'block' : 'none');
			}
			
			/***********************************************************/
			
			this.showPreloader=function(show)
			{
				if(show) cascadeWindow.addClass('cascade-window-prealoder');
				else cascadeWindow.removeClass('cascade-window-prealoder');
			}
					
			/***********************************************************/
		};

		/**************************************************************/
		 
		$.fn.casadeLanding=function()
		{
			/***********************************************************/
		
			var casadeLanding=new CascadeLanding(this);
			
			casadeLanding.load();
			casadeLanding.createNavigation();

			/***********************************************************/
		};
		
		/**************************************************************/
		
	})(jQuery);