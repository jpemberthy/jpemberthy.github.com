
	/*****************************************************************/

	function getRandom(min,max)
	{
    	return((Math.floor(Math.random()*(max-min)))+min);
	}
	
	/*****************************************************************/
	
	function clearInput(object,action,defaulValue)
	{
		var object=$(object);
		var value=jQuery.trim(object.val());
		
		if(action=='focus')
		{
			if(value==defaulValue) object.val('');
		}
		else if(action=='blur')
		{
			if(value=='') object.val(defaulValue);
		}
	}
	
	/*****************************************************************/
	
	function blockForm(formId,action)
	{
		if(action=='block')
			$('#'+formId).find('.block').block({message:false,overlayCSS:{opacity:'0.3'}});
		else $('#'+formId).find('.block').unblock();
	}
	
	/*****************************************************************/