let url = 'https://www.codewars.com/api/v1/users/MateuszPuto';
let url2 = 'https://www.codewars.com/api/v1/users/MateuszPuto/code-challenges/completed?page=';

const request = new Request(url);

function showStats() {
	fetch(request)
		.then(response => response.json())
		.then(response => {
			let profile = response;
			let noKatas = profile["codeChallenges"]["totalCompleted"];
		
			var stats = [];
			stats.push("Username: " + profile["username"]);
			stats.push("Honor: " + profile["honor"]);
			stats.push("Clan: " + profile["clan"]);
			stats.push("Leaderboard: " + profile["leaderboardPosition"]);
			stats.push("Completed challanges: " + profile["codeChallenges"]["totalCompleted"]);
	
			document.getElementById('codewars-profile').innerHTML = stats.join("<br/>"); 
			
			for(i=0; i<Math.ceil(noKatas/200); i++) {
				const request2 = new Request(url2 + i.toString());
	
				fetch(request2)
					.then(response => response.json())
					.then(response => {
						//console.log(response);
					});
			}
		});
};
