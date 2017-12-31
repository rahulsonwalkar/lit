var score1 = 0;
var score2 = 0;

$(document).ready(function() {
    $('select').material_select();
    ["lClub", "lHeart", "lDiamonds", "lSpades", "hClub", "hHeart", "hDiamonds", "hSpades"].forEach(function(elem) {
        $('#'+elem)
        .find('option')
        .remove()
        .end()
        .append('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</option>')
        .append('</option><option value="X">&#x274c;</option>')
        .val('');
	});
});
function setTeams() {
    var lClub = document.getElementById("lClub");
    var lHeart = document.getElementById("lHeart");
    var lDiamonds = document.getElementById("lDiamonds");
    var lSpades = document.getElementById("lSpades");
    var hClub = document.getElementById("hClub");
    var hHeart = document.getElementById("hHeart");
    var hDiamonds = document.getElementById("hDiamonds");
    var hSpades = document.getElementById("hSpades");
    ["lClub", "lHeart", "lDiamonds", "lSpades", "hClub", "hHeart", "hDiamonds", "hSpades"].forEach(function(elem) {
        $('#'+elem)
        .find('option')
        .remove()
        .end()
        .append('<option value="">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</option>')
        .append('</option><option value="X">&#x274c;</option>')
        .val('');
	});
//Since DOM objects cannot be reused, create an array of identical objects.
	var optionList = [ document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option"),
 document.createElement("option")]
	optionList[0].text = document.getElementById("team1").value;
	optionList[1].text = document.getElementById("team2").value;
	optionList[2].text = document.getElementById("team1").value;
	optionList[3].text = document.getElementById("team2").value;
	optionList[4].text = document.getElementById("team1").value;
	optionList[5].text = document.getElementById("team2").value;
	optionList[6].text = document.getElementById("team1").value;
	optionList[7].text = document.getElementById("team2").value;
	optionList[8].text = document.getElementById("team1").value;
	optionList[9].text = document.getElementById("team2").value;
	optionList[10].text = document.getElementById("team1").value;
	optionList[11].text = document.getElementById("team2").value;
	optionList[12].text = document.getElementById("team1").value;
	optionList[13].text = document.getElementById("team2").value;
	optionList[14].text = document.getElementById("team1").value;
	optionList[15].text = document.getElementById("team2").value;

    optionList[16].text = "0.5" + document.getElementById("team1").value;
	optionList[17].text = "0.5" +document.getElementById("team2").value;
	optionList[18].text = "0.5" +document.getElementById("team1").value;
	optionList[19].text = "0.5" +document.getElementById("team2").value;
	optionList[20].text = "0.5" +document.getElementById("team1").value;
	optionList[21].text = "0.5" +document.getElementById("team2").value;
	optionList[22].text = "0.5" +document.getElementById("team1").value;
	optionList[23].text = "0.5" +document.getElementById("team2").value;
	optionList[24].text = "0.5" +document.getElementById("team1").value;
	optionList[25].text = "0.5" +document.getElementById("team2").value;
	optionList[26].text = "0.5" +document.getElementById("team1").value;
	optionList[27].text = "0.5" +document.getElementById("team2").value;
	optionList[28].text = "0.5" +document.getElementById("team1").value;
	optionList[29].text = "0.5" +document.getElementById("team2").value;
	optionList[30].text = "0.5" +document.getElementById("team1").value;
	optionList[31].text = "0.5" +document.getElementById("team2").value;
  lClub.add(optionList[0], lClub[0]);
	lClub.add(optionList[1], lClub[1]);
	lHeart.add(optionList[2], lHeart[0]);
	lHeart.add(optionList[3], lHeart[1]);
	lDiamonds.add(optionList[4], lDiamonds[0]);
	lDiamonds.add(optionList[5], lDiamonds[1]);
	lSpades.add(optionList[6], lSpades[0]);
	lSpades.add(optionList[7], lSpades[1]);
	hClub.add(optionList[8], hClub[0]);
	hClub.add(optionList[9], hClub[1]);
	hHeart.add(optionList[10], hHeart[0]);
	hHeart.add(optionList[11], hHeart[1]);
	hDiamonds.add(optionList[12], hDiamonds[0]);
	hDiamonds.add(optionList[13], hDiamonds[1]);
  hSpades.add(optionList[14], hSpades[0]);
	hSpades.add(optionList[15], hSpades[1]);

	lClub.add(optionList[16], lClub[2]);
	lClub.add(optionList[17], lClub[3]);
	lHeart.add(optionList[18], lHeart[2]);
	lHeart.add(optionList[19], lHeart[3]);
	lDiamonds.add(optionList[20], lDiamonds[2]);
	lDiamonds.add(optionList[21], lDiamonds[3]);
	lSpades.add(optionList[22], lSpades[2]);
	lSpades.add(optionList[23], lSpades[3]);
	hClub.add(optionList[24], hClub[2]);
	hClub.add(optionList[25], hClub[3]);
	hHeart.add(optionList[26], hHeart[2]);
	hHeart.add(optionList[27], hHeart[3]);
	hDiamonds.add(optionList[28], hDiamonds[2]);
	hDiamonds.add(optionList[29], hDiamonds[3]);
  hSpades.add(optionList[30], hSpades[2]);
	hSpades.add(optionList[31], hSpades[3]);
}