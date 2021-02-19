/* Here goes your JS code */
/* Here I go... */

// vPos - vertical position hPos - horizontal position


var wait = false;

function hide()
{
	if(wait == false)
	{
		var vPos = window.innerHeight;
		vPos += 350;
		vPos -= 2 * vPos;
		var output = vPos + "px";
		document.getElementById("theOne").style.top = output;
	}
	return;
}

function popPopup()
{
	var vPos = window.innerHeight;
	var vOutput = (vPos - 350) / 2;
	vOutput += "px";
	var hPos = window.innerWidth;
	hPos = (hPos - 300) / 2;
	var hOutput = hPos + "px";
	document.getElementById("theOne").style.top = vOutput;
	document.getElementById("theOne").style.left = hOutput;
	return;
}

function doThings()
{
	var email = document.forms["popupForm"]["login"].value;
	var pass = document.forms["popupForm"]["password"].value;
	var greg = document.forms["popupForm"]["Greg"].checked;
	if((email != "")&&(pass != "")&&(greg)){alert(email);}
	return;
}