const _emailtemplate=(test_link,email,message,password)=>{
return(
`<html>
<head>
<title>emailer</title>
</head>

<body style="width:100%; margin-top:50px;">
<div style="max-width:600px; text-align:center; margin-top:0; margin-right:auto; margin-bottom:0; margin-left: auto;">

		<div><img src=" https://cdn.xebia.com/assets/logos/xebia_logo-large-transparent.png " style="display:inline-block; max-width:100%;"></div>
		<div><p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:19px; margin-top:30px; margin-bottom:20px;margin-left:20px; padding:0;text-align:left;">
			Dear Candidate,                                  
			</p></div>

		<div><p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:19px; margin-top:0; margin-bottom:20px;margin-left:20px; padding:0; font-weight:normal;text-align:left;">
		      ${message}
			</p></div>

		<div><p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:19px; margin-top:0; margin-bottom:20px;margin-left:20px; padding:0; font-weight:normal;text-align:left;">
		       Your Login User Name is <span style="color:#2489B3; font-weight:bold; text-decoration:underline;" >${email}</span>
			</p></div>

		<div><p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:19px; margin-top:0; margin-bottom:20px;margin-left:20px; padding:0; font-weight:normal;text-align:left;">
		       Your Password is <a style="color:#2489B3; font-weight:bold;">${password}</a>
			</p></div>
		<a href="${test_link}" style="display:block; max-width:100%; width:93%;background-color:#2489B3; padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;border-radius:8px;color:#ffffff;font-size:24px;font-family:Arial, Helvetica, sans-serif; margin-top:40px;">
			Click here to start the test!</a>
		<div><p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:14px; margin-top:20px; margin-bottom:15px; margin-left:20px;padding:0; font-weight:normal;text-align:left;">
			Copyright 2018 Xebia India. All Rights Reserved.<br>
		
			</a>.
			</p>
			</div>


</div>	
</body>
</html>`
)}
module.exports=_emailtemplate;