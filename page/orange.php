
	<? require_once('../plugin/contact-form/config.php'); ?>

	<div class="layout-50 clear-fix overflow-fix">
	
		<div class="layout-50-left">
		
			<h3>On The Map</h3>
			<div id="map"></div>
			
			<br/>
			
			<h3>Anna Brown Studio</h3>
			<p>
				1370 Northwood, 15<br/>
				Houston, TX72150, United States Of America
			</p>
			
			<ul class="no-list contact-list">
				<li class="contact-list-phone"><span>Phone:</span> 1.800.353.252</li>
				<li class="contact-list-fax"><span>Fax:</span> 1.800.353.253</li>
				<li class="contact-list-mail"><span>Mail:</span> anna.brown@mail.com</li>
			</ul>
		
		</div>

		<div class="layout-50-right">
		
			<h3>Get In Touch</h3>
		
			<form name="contact" id="contact" action="" method="post">
				
				<div>
				
					<div class="form-line block">
						<input type="text" name="contact-user-name" id="contact-user-name" value="<?=_def_data_name?>" onfocus="clearInput(this,'focus','<?=_def_data_name?>')" onblur="clearInput(this,'blur','<?=_def_data_name?>')"/>	
					</div>
					<div class="form-line block">
						<input type="text" name="contact-user-email" id="contact-user-email" value="<?=_def_data_email?>" onfocus="clearInput(this,'focus','<?=_def_data_email?>')" onblur="clearInput(this,'blur','<?=_def_data_email?>')"/>	
					</div>					
					<div class="form-line block">
						<textarea rows="0" cols="0" name="contact-message" id="contact-message" onfocus="clearInput(this,'focus','<?=_def_data_message?>')" onblur="clearInput(this,'blur','<?=_def_data_message?>')"><?=_def_data_message?></textarea>	
					</div>
					
					<div class="form-line">
						<a href="javascript:submitContactForm();" class="button block" id="contact-send">Send</a>
					</div>
				
				</div>	

			</form>
		
		</div>
	
	</div>
