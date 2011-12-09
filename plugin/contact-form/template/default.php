<? 
	ob_start();
?>
		<html>

			<head>
		
			</head>
		
			<body>
			
				<div><b>Name</b>: <? echo $values['contact-user-name']; ?></div>
				<div><b>E-mail</b>: <? echo $values['contact-user-email']; ?></div>
				<div><b>Message</b>: <? echo $values['contact-message']; ?></div>
			
			</body>
			
		</html>
<?
	$contents=ob_get_contents();
   ob_end_clean();
   return($contents);
?>


	