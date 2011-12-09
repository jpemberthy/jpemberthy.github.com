<?
	/*****************************************************************/
	/*****************************************************************/
	
	require_once('config.php');
	require_once('../functions.php');
	require_once('../phpMailer/class.phpmailer.php');
	
	/*****************************************************************/
	
	$response=array('error'=>0,'info'=>null);

	$values=array
	(
		'contact-user-name'		=> $_POST['contact-user-name'],
		'contact-user-email'		=> $_POST['contact-user-email'],
		'contact-message'			=> $_POST['contact-message']
	);
	
	/*****************************************************************/
	
	if(isEmpty($values['contact-user-name']) || strcmp($values['contact-user-name'],_def_data_name)==0)
	{
		$response['error']=1;
		$response['info'][]=array('fieldId'=>'contact-user-name','message'=>_msg_invalid_data_name);
	}
	
	if(!validateEmail($values['contact-user-email']) || strcmp($values['contact-user-email'],_def_data_email)==0)
	{
 		$response['error']=1;	
		$response['info'][]=array('fieldId'=>'contact-user-email','message'=>_msg_invalid_data_email);
	}
	
	if(isEmpty($values['contact-message']) || strcmp($values['contact-message'],_def_data_message)==0)
	{
		$response['error']=1;
		$response['info'][]=array('fieldId'=>'contact-message','message'=>_msg_invalid_data_message);
	}	
	
	if($response['error']==1) createResponse($response);
	
	/*****************************************************************/

	if(isGPC()) $values=array_map('stripslashes',$values);
	
	$values=array_map('htmlspecialchars',$values);
	
	$body=include(_template_path);
	
	$mail=new PHPMailer();
	
	$mail->SetFrom(_from_email,_from_name); 
	$mail->AddAddress(_to_email,_to_name);

	$mail->SMTPAuth=true; 
	$mail->Host=_host;
	$mail->Username=_username;
	$mail->Password=_password;
		
	$mail->Subject=_subject_email;
	$mail->MsgHTML($body);

	if(!$mail->Send())
	{
 		$response['error']=1;	
		$response['info'][]=array('fieldId'=>'contact-send','message'=>_msg_send_error);
		createResponse($response);		
	}
	
	$response['error']=0;
	$response['info'][]=array('fieldId'=>'contact-send','message'=>_msg_send_ok);
	
	createResponse($response);		
	
	/*****************************************************************/
	/*****************************************************************/
?>