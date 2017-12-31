var score1 = 0;
var score2 = 0;
const groups = ["lClub", "lHeart", "lDiamonds", "lSpades", "hClub", "hHeart", "hDiamonds", "hSpades"];

function setTeams() {
	
	groups.forEach(function(group) {
        optionList = Array(4);
        for (var i = 0; i < optionList.length; ++i) {
        	optionList[i] = document.createElement("option");
        }
        optionList[0].text = $("#team1").val();
        optionList[1].text = $("#team2").val();
        optionList[2].text = "0.5 " + $("#team1").val();
        optionList[3].text = "0.5 " + $("#team2").val();
        
        $('#'+group)
        .find('option')
        .end()
        .prepend(optionList);
	});
}