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
		operator('+');
	} else if (taps == 45) {
		operator('-');
	} else if (taps == 42 || taps == 88 || taps == 120) {
		operator('x');
	} else if (taps == 47  || taps == 58) {
		operator(':');
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

function operator(oper) {
	pushed = false;
	number = Number(number);
	numbers.push(number);
	operators.push(oper);
	document.getElementById("som").innerHTML += number + " " + oper + " ";
	number = "";
	console.log(numbers);
	document.getElementById("antwoord").innerHTML = "0";
}

function buttonANS() {
	number = Number(number);
	numbers.push(number);
	document.getElementById("som").innerHTML += number;
	console.log("ans");
	number = "";
	var i;
	var l;
	var loop = operators.length;
	for (l=0; l<=loop; l++){
		for (i=0; i<numbers.length; i++) {
			if (operators[i] == "x") {
				numbers.splice(i, 2, numbers[i] * numbers[i+1]);
				operators.splice(i, 1);
			} 
			else if (operators[i] == ":") {
				numbers.splice(i, 2, numbers[i] / numbers[i+1]);
				operators.splice(i, 1);
			}
		}
		for (i=0; i<numbers.length; i++) {
			if (operators[i] == "+") {
				numbers.splice(i, 2, numbers[i] + numbers[i+1]);
				operators.splice(i, 1);
			} 
			else if (operators[i] == "-") {
				numbers.splice(i, 2, numbers[i] - numbers[i+1]);
				operators.splice(i, 1);
			}
		}
	}
	number = numbers[0];
	document.getElementById("antwoord").innerHTML = "Antwoord is " + number + ".";
}