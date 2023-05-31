<script>

		function empty(){
			//var error=""
			if(document.getElementById('req1').value=="")
			{
				//error+="Enter Firstname";
				alert("Enter first name");
			}/*
			if(document.getElementById('req2').value=="")
			{
				alert("Enter last name");
			}*/
			if(document.getElementById('req3').value=="")
			{
				alert("Enter email address");
			}
			/*
			if(document.getElementById('req4').value=="")
			{
				alert("Enter contact number");
			}
			if(req4.value.length!=10)
			{
				alert('Note : Contact no must be 10 digits')
			}*/
			if(document.getElementById('req5').value=="")
			{
				alert("Password");
				return false;
			}
		}


		function emailValidate(element,message)
	{
		var emailExp=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0]{2,4}$/;
		if(element.value.length>0)
		{
			if(element.value.match(emailExp))
			{
				return true;
			}
			else
			{
				alert(message);
				element.focus();
				return false;
			}
			return true;
		}
		/*else
		{
				alert('Please fill email id');
				element.focus();
				return false;

		}*/
	}

	function isNumeric(element,message)
	{
		var numericExpression=/^[0-9]+$/;
		if(element.value.match(numericExpression))
		{
			return true;
		}
		else{
			alert(message);
			element.focus();
			return false;
		}
	}
	function Selection(element,message)
	{

		if(element.value == "Gender")
		{
			alert(message);
			element.focus();
			return false;
		}
		else{

			return true;
		}

	}



</script>
