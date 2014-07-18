//alert("JavaScript works!");

// Mina G. Nematalla
// SDI 1407
// Lab 5
// Date: 07/17/2014

// variables

var numb1;
var numb2;
var procedure;
var sum;

// function
var calculator = function(x,y) {
	var sum;
	sum = (x + y);
	return sum
};

// user input
numb1		= parseFloat(prompt("What is your first value?"));
numb2		= parseFloat(prompt("What is your second value?"));
procedure 	= prompt("Do you want to Add (+), Subtract (-), Multiply(x), Divide(/)");
sum 			= ("The sum of numb1 and numb2");

// conditionals
if(procedure === "Add" || procedure === " + ") {
	
	sum = calculator(numb1, numb2);
	console.log("The sum of", + numb1 + " and " + numb2 + " equals " + sum );
	
};
// 









