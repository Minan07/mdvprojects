//alert("JavaScript works!");


// variables
var numb1;
var numb2;
var procedure;
var division;

// function
var Divide = function(x,y) {
	var division;
	division = (x / y);
	return division;
};

// user input
numb1		= parseFloat(prompt("What is your first value?"));
numb2		= parseFloat(prompt("What is your second value?"));
procedure 	= prompt("Put in your operation");
division    =("The division of numb1 and numb2");

// conditionals
if(procedure === "Divide" || procedure === " / ") {
	
	product = Division(numb1, numb2);
	console.log("The division " + numb1 + " and " + numb2 + " equals " + division );


};
