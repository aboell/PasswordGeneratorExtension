document.getElementById('pwd2').style.display = "none";
document.getElementById('pwd1').style.display = "block";
var a=0;

//document.getElementById('do-count').onclick = count;
document.getElementById('view').onclick = showPassword;
document.getElementById('makePassword').onclick = generatePassword;

function showPassword() {
	var pwd = document.getElementById('pwd1');
	var txt = document.getElementById('pwd2');
	if(pwd.style.display == 'block') {
		pwd.style.display = 'none';
		txt.style.display = 'block';
	}
	else {
		pwd.style.display = 'block';
		txt.style.display = 'none';
	}
}

function generatePassword() {
	var value1 = document.getElementById('phrase').value;
	var words = value1.split(" ");
    var firsts = "";
	var firsts = "";
	
	for(i = 0; i <words.length; i++)
    {
    	firsts += words[i].charAt(0);
    }
    if (value1=="")
	{
		return;
	} 
	firsts = firsts.replace(/i/g, "!");
	firsts = firsts.replace(/a/g, "@");
	firsts = firsts.replace(/(s|S)/g, "$");
	firsts = firsts.replace(/l/g, "1");
	firsts = firsts.replace(/E/g, "3");
	firsts = firsts.replace(/(o|O)/g, "0");
	firsts = firsts.replace(/B/g, "8");
	document.getElementById('temp').innerHTML = passwordStrength(firsts);
	document.getElementById('pwd1').value = firsts;
	document.getElementById('pwd2').value = firsts;  
	if(passwordStrength(firsts)!="<b>Weak</b>")
	{
		copy(firsts,"text/plain");
		document.getElementById('status').innerHTML = "<b><center>Password copied to clipboard</center></b>";
	}
	else
	{
		document.getElementById('status').innerHTML = "<b><center>Password fails complexity requirements</center></b>";
	}
}

function copy(str, mimetype) {
  document.oncopy = function(event) {
    event.clipboardData.setData(mimetype, str);
    event.preventDefault();
  };
  document.execCommand("Copy", false, null);
}

function passwordStrength(value)  {
	// passwordStrength
	var strength="";
	var characterClassifications = 0;
	var tempValue = value.split("");
	var lowerCase=false;
	for(var i = 0;i < tempValue.length;i++)
	{
		if(tempValue[i] == tempValue[i].toLowerCase() && tempValue[i] != tempValue[i].toUpperCase())
		{
			lowerCase = true;
			break;
		}
	}
	
	var upperCase=false;
	for(var i = 0;i < tempValue.length;i++)
	{
		if(tempValue[i] == tempValue[i].toUpperCase())
		{
			upperCase = true;
			break;
		}
	}
	var numbers=false;
	for(var i = 0;i < tempValue.length;i++)
	{
		if(! isNaN(parseInt(tempValue[i],10)))
		{
			numbers = true;
			break;
		}
	}
	var specialChars=false;
	var pattern = 	new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
	specialChars = pattern.test(value);

	characterClassifications = lowerCase + upperCase + numbers + specialChars;
	if (value.length < 8 || characterClassifications < 2)
	{
		strength="<b>Weak</b>";
	}
	else if (value.length < 10 || characterClassifications < 3)
	{
		strength="<b>OK</b>";
	}
	else if (value.length < 12 || characterClassifications < 4)
	{
		strength="<b>Strong</b>";
	}
	else if (value.length > 11 && characterClassifications > 3)
	{
		strength="<b>Very Strong</b>";
	}
	else 
	{
		strength="Error";
	}  
	return strength; 
}
