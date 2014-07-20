//alert("JavaScript works!");


// variables
var username;
var password;
var login

var checkLogin = function (uname, pword) {
	
	if (uname === "mnematalla" && pword === "password") {
		
		return true;
		
	} else {
		
		return false;
	}
};

username = prompt("Please enter your username: ");
password = prompt("Please enter your password: ");
login = checkLogin(username, password);

if (login === true) {
	
	console.log("Welcome, we have been expecting you!");
	
} else {
	
	console.log("Woah hold up, who are you! INTRUDER ALERT!");
	
	
}


var myHello = function(firstName) {
	
	if(firstName === "Mina") {
		console.log("Ugh, Not you again!");
		
	} else {
		console.log("Welcome, Mina!")
	}
};















