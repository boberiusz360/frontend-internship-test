/* Here goes your JS code */
/* Here I go... */

//var loaded = false;

// vPos - vertical position hPos - horizontal position
function hide(loaded)
{
	if(!loaded)
	{
		var vPos = window.innerHeight;
		vPos += 350;
		vPos -= 2 * vPos;
		var output = vPos + "px";
		document.getElementById("theOne").style.top = output;
		loaded = true;
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