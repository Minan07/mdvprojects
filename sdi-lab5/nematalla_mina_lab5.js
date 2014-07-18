//alert("JavaScript works!");


// variables
var numb1;
var numb2;
var procedure;
var product

// function
var Multiplication = function(x,y) {
	var product;
	product = (x * y);
	return product;
};

// user input
numb1		= parseFloat(prompt("What is your first value?"));
numb2		= parseFloat(prompt("What is your second value?"));
procedure 	= prompt("Put in your operation");
product   =("The product of numb1 and numb2");

// conditionals
if(procedure === "Multiplication" || procedure === " * ") {
	
	product = Multiplication(numb1, numb2);
	console.log("The product of", + numb1 + " and " + numb2 + " equals " + product );
	
};




