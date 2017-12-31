var score1 = 0;
var score2 = 0;
const groups = ["lClub", "lHeart", "lDiamonds", "lSpades", "hClub", "hHeart", "hDiamonds", "hSpades"];
const emptyValue = "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
$(document).ready(function() {
	$("select").prop("disabled",true);
	$("#clearButton").click(clearScores);
});

function setTeams() {
	$("#setTeamsButton").prop("disabled",true);
	$("select").prop("disabled",false);
	$("#clearButton").prop("disabled",false);
	$("#resetButton").prop("disabled",false);
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

function clearScores() {
	groups.forEach(function(group) {
        $('#'+group)
        .find('option')
        .val(emptyValue)
        .attr('selected','selected');
	});
}

function resetTeams() {
	$("#setTeamsButton").prop("disabled",false);
	$("select").prop("disabled",false);
	$("#clearButton").prop("disabled",true);
	$("#resetButton").prop("disabled",true);
	groups.forEach(function(group) {
        let optionElement = document.createElement("option");
        $('#'+group)
        .empty()
        .append(optionElement)
        .val(emptyValue);
	});
}