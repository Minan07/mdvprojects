//alert("JavaScript works!");

// Mina G. Nematalla
// SDI 1407
// Lab 5
// Date: 07/17/2014



// variables

var numb1
var numb2
var procedure;
var difference;

// function
var Subtraction = function(x,y) {
	var Subtraction;
	difference = (x - y);
	return difference
};


// user input

numb1           = parseFloat(prompt("What is your value?"));
numb2           = parseFloat(prompt("What is your value?"));
procedure       = prompt("PLease enter operation");
difference      = ("The difference of numb1 and numb2");

// conditionals
if(procedure === "Subtraction" || procedure === " - ") {
	
	difference = Subtraction(numb1, numb2);
	console.log("The difference of", + numb1 + " and " + numb2 + " equals " + difference);
	
};









