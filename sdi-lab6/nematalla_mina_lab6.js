//alert("JavaScript works!");

// Mina G. Nematalla
// SDI 1407
// Lab 6 
// July 19, 2014



var sportsTeam = function(){
	
	sportsTeam = ["Heat", "Cavaliers", "Thunder", "Magic"];
	city = ["Miami", "Cleveland","Oklahoma", "Orlando"];

	var sportsTeam = ["Heat", "Cavaliers", "Thunder", "Magic", "Spurs"];
	console.log(sportsTeam);
	
	
	for (i = 0; i < city.length; i++) {
	
		console.log(city[i] + " is the city that the " + sportsTeam[i]+ " is located in.");	
	
	}	

	var sportsTeam = ["Heat", "Cavaliers", "Thunder", "Magic", "Spurs"];
	console.log(sportsTeam);
	
	
	var nbaTeam = sportsTeam.push();
	sportsTeam.push("Rockets", "Spurs");
	console.log(sportsTeam);
	
	var nbaTeam = sportsTeam.pop();
	sportsTeam.pop("Rockets");
	console.log(sportsTeam);
	
	
	
};

sportsTeam();
