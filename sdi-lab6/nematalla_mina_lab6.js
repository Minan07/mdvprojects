//alert("JavaScript works!");

var sportsTeam = function(){
	
	sportsTeam = ["Heat", "Cavaliers", "Thunder", "Magic"];
	city = ["Miami", "Cleveland","Oklahoma", "Orlando"];

	for (i = 0; i < city.length; i++) {
	
		console.log(city[i] + " is the city that the " + sportsTeam[i]+ " is located in.");	
	
	}	
};

sportsTeam();
