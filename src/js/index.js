/* Here goes your JS code */
/* Here I go... */

// vPos - vertical position hPos - horizontal position

function end()
{
	hide();
	document.getElementById("main").innerHTML += "Thank You!";
	document.getElementById("show-popup-form").style.position = "absolute";
	document.getElementById("show-popup-form").style.top = "-1000px";
	sessionStorage.setItem("wait", false);
}

function hide()
{
	var vPos = window.innerHeight;
	vPos += 350;
	vPos -= 2 * vPos;
	var output = vPos + "px";
	document.getElementById("theOne").style.top = output;
	document.getElementById("impostor").style.animation = "impostorEscape 0.5s";
	window.setTimeout(impostorEscape, 500, output);
	function impostorEscape(output)
	{
		document.getElementById("impostorFrame").style.top = output;
	}
	var wait = sessionStorage.getItem("wait");
	if(wait)
	{
		popPopup();
		document.forms["popupForm"]["login"].value = sessionStorage.getItem("email");
		document.forms["popupForm"]["password"].value = sessionStorage.getItem("password");
		document.forms["popupForm"]["Greg"].checked = true;
		sessionStorage.removeItem("wait");
		window.setTimeout(end, 3000);
	}
	return;
}

function popPopupEnd(Voutput, Houtput)
{
	document.getElementById("theOne").style.top = Voutput;
	document.getElementById("theOne").style.left = Houtput;
	/*document.getElementById('impostor').style.width = "300px";
	document.getElementById('impostor').style.height = "350px";
	document.getElementById('impostor').style.top = "0px";
	document.getElementById('impostor').style.left = "0px";*/
}


function popPopup()
{
	var vPos = window.innerHeight;
	var vOutput = (vPos - 350) / 2;
	vOutput += "px";
	var hPos = window.innerWidth;
	hPos = (hPos - 300) / 2;
	var hOutput = hPos + "px";
	document.getElementById("impostorFrame").style.top = vOutput;
	document.getElementById("impostorFrame").style.left = hOutput;
	document.getElementById('impostor').style.animation = "impostorRising 0.5s";
	window.setTimeout(popPopupEnd, 500, vOutput, hOutput);
	return;
}

function doThings()
{
	hide();
	var email = document.forms["popupForm"]["login"].value;
	sessionStorage.setItem("email", email);
	var pass = document.forms["popupForm"]["password"].value;
	sessionStorage.setItem("password", pass);
	var greg = document.forms["popupForm"]["Greg"].checked;
	if((email != "")&&(pass != "")&&(greg))
	{
		sessionStorage.setItem("wait", true);
	}
	return;
}