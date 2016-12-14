var pushed = false;
var numbers = [];
var number = "";

function buttonDEC() {
	if (pushed == false) {
		document.getElementById("antwoord").innerHTML += ".";
		pushed = true;
		number += ".";
	}
}

function button(nmr) {
	number += nmr
	document.getElementById("antwoord").innerHTML = number;
	console.log(nmr)
}

function tap(event) {
	var taps = event.which || event.keyCode;
	if (taps == 48) {
		button(0);
	} else if (taps == 49) {
		button(1);
	} else if (taps == 50) {
		button(2);
	} else if (taps == 51) {
		button(3);
	} else if (taps == 52) {
		button(4);
	} else if (taps == 53) {
		button(5);
	} else if (taps == 54) {
		button(6);
	} else if (taps == 55) {
		button(7);
	} else if (taps == 56) {
		button(8);
	} else if (taps == 57) {
		button(9);
	} else if (taps == 46) {
		buttonDEC();
	}
}








var k = "slaap";
k = k+"muts";
k += "muts";
// slaapmutsmuts