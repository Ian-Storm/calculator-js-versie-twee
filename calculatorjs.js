var pushed = false;
var numbers = [];
var operators = [];
var number = "";
var ans = 0;

function buttonDEC() {
	if (pushed == false) {
		document.getElementById("antwoord").innerHTML += ".";
		pushed = true;
		number += ".";
		console.log(".")
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
	} else if (taps == 67 || taps == 99) {
		buttonC();
	} else if (taps == 43) {
		buttonADD();
	} else if (taps == 13) {
		buttonANS();
	}
}

function buttonC() {
	pushed = false;
	numbers = [];
	number = "";
	document.getElementById("antwoord").innerHTML = "0";
	document.getElementById("som").innerHTML = "";
	console.log("clear");
}

function buttonADD() {
	number = Number(number);
	numbers.push(number);
	console.log("add");
	document.getElementById("som").innerHTML += number + " + ";
	document.getElementById("antwoord").innerHTML = "0";
	number = "";
	pushed = false;
}

function buttonSUB() {

}

function buttonMULT() {

}

function buttonDIV() {

}

function buttonANS() {
	number = Number(number);
	numbers.push(number);
	console.log("ans");
	number = "";
	var i;
	for (i=0; i<numbers.length; i++) {
		numbers.splice(i, 2, numbers[i] + numbers[i+1]);	
	}
	number = numbers[0];
	document.getElementById("antwoord").innerHTML = "antwoord is " + number;
}