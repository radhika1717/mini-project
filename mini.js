function validateName(){
	var Fname=document.getElementById("name");
				var eml=document.getElementById("num");
				var psw1=document.getElementById("mail");
				if(Fname.value==""||eml.value==""||psw1.value=="")
				{
				alert("All fields are required!!!");
				return false;
			    }  
}