function showResults() {
	document.getElementById("scrolldown").innerHTML = "Now scroll Down..."

	var selectedGender = document.getElementsByName("gender")
	var selectedType = document.getElementsByName("type")
	var selectedOccasion = document.getElementsByName("occasion")
	var selectedSF = document.getElementsByName("studyflex")
	var selectedEngagement = document.getElementsByName("engagement")
	
	for (var i = 0 ; i < selectedGender.length; i++) {
		if(selectedGender[i].checked == true) {
			var input_gender = selectedGender[i].value
		}
	}
	for (var i = 0 ; i < selectedType.length; i++) {
		if(selectedType[i].checked == true){
			var input_type = selectedType[i].value
		}
	}
	for (var i = 0 ; i < selectedOccasion.length; i++) {
		if(selectedOccasion[i].checked == true){
			var input_occasion = selectedOccasion[i].value
		}
	}
	for (var i = 0 ; i < selectedSF.length; i++) {
		if(selectedSF[i].checked == true){
			var input_studyflex = selectedSF[i].value
		}
	}

	var filter_data = {
	"match_gender" : [
	],
	"match_occasion" : [
	],
	"match_type" : [
	],
	"match_studyflex" : [
	]
	}
	
	for (var i = 0 ; i < dataset.length ; i++) {
		if (dataset[i]["Gender"] == input_gender){
			filter_data.match_gender.push(dataset[i])
		}
	}
	
	for (var i = 0 ; i < filter_data["match_gender"].length ; i++) {
		if (filter_data.match_gender[i]["Occasion"] == input_occasion){
			filter_data["match_occasion"].push(filter_data["match_gender"][i])
		}
	}

	for (var i = 0 ; i < filter_data.match_occasion.length ; i++) {
		if (filter_data.match_occasion[i]["Type"] == input_type){
			filter_data.match_type.push(filter_data.match_occasion[i])
		}
	}

	for (var i = 0 ; i < filter_data.match_type.length ; i++) {
		if (filter_data.match_type[i]["Study Flex"] == input_studyflex){
			filter_data.match_studyflex.push(filter_data.match_type[i])
		}
	}
	
	if (filter_data["match_studyflex"].length > 0){

		var numOfEng = 0
		var numOfArm = 0
		var numOfRus = 0
		var numOfOther = 0
		var sumOfLength = 0
		var sumOfEmojis = 0
		var sumOfHashtags = 0
		var sumOfLikes = 0
		var sumOfComments = 0
		var sumOfFollowers = 0

		for (i = 0 ; i < filter_data.match_studyflex.length; i++){
			if (filter_data.match_studyflex[i]["Language"] == "Eng"){
				numOfEng = numOfEng + 1
			} else {
					if (filter_data.match_studyflex[i]["Language"] == "Arm"){
						numOfArm = numOfArm +1
					} else {
							if (filter_data.match_studyflex[i]["Language"] == "Rus"){
								numOfRus = numOfRus +1
							} else {
									numOfOther = numOfOther +1
								}
						}
				}
		}

		for (i = 0 ; i < filter_data.match_studyflex.length ; i++){
			sumOfLength = sumOfLength + filter_data.match_studyflex[i]["Length"]
		}

		for (i = 0 ; i < filter_data.match_studyflex.length ; i++){
			sumOfEmojis = sumOfEmojis + filter_data.match_studyflex[i]["# of emojis"]
		}

		for (i = 0 ; i < filter_data.match_studyflex.length ; i++){
			sumOfHashtags = sumOfHashtags + filter_data.match_studyflex[i]["# of hashtags"]
		}

		for (i = 0 ; i < filter_data.match_studyflex.length ; i++){
			sumOfLikes = sumOfLikes + filter_data.match_studyflex[i]["Likes"]
		}

		for (i = 0 ; i < filter_data.match_studyflex.length ; i++){
			sumOfComments = sumOfComments + filter_data.match_studyflex[i]["Comments"]
		}

		for (i = 0 ; i < filter_data.match_studyflex.length ; i++){
			sumOfFollowers = sumOfFollowers + filter_data.match_studyflex[i]["Followers"]
		}

		var percentOfArm = numOfArm/(filter_data["match_studyflex"].length)*100
		var percentOfEng = numOfEng/(filter_data["match_studyflex"].length)*100
		var percentOfRus = numOfRus/(filter_data["match_studyflex"].length)*100
		var percentOfOther = numOfOther/(filter_data["match_studyflex"].length)*100


		var avgLength = sumOfLength/filter_data["match_studyflex"].length
		var avgEmojis = sumOfEmojis/filter_data["match_studyflex"].length
		var avgHashtags = sumOfHashtags/filter_data["match_studyflex"].length
		var avgLikes = sumOfLikes/filter_data["match_studyflex"].length
		var avgComments = sumOfComments/filter_data["match_studyflex"].length
		var avgFollowers = sumOfFollowers/filter_data["match_studyflex"].length

		document.getElementById("ArmLang").innerHTML = percentOfArm.toFixed(2)
		document.getElementById("EngLang").innerHTML = percentOfEng.toFixed(2)
		document.getElementById("RusLang").innerHTML = percentOfRus.toFixed(2)
		document.getElementById("OtherLang").innerHTML = percentOfOther.toFixed(2)

		document.getElementById("AvgLength").innerHTML = avgLength.toFixed(0)
		document.getElementById("AvgEmojis").innerHTML = avgEmojis.toFixed(0)
		document.getElementById("AvgHashtags").innerHTML = avgHashtags.toFixed(0)

		var engagementlvl = (avgLikes + avgComments)/avgFollowers*100
		document.getElementById("AvgEngagement").innerHTML = engagementlvl.toFixed(2)
    
		document.getElementById("AvgLikes").innerHTML = avgLikes.toFixed(0)
		document.getElementById("AvgComments").innerHTML = avgComments.toFixed(0)
		document.getElementById("AvgFollowers").innerHTML = avgFollowers.toFixed(0)

	} else {
			console.log("Sorry, there are no such pictures in our database.")
		}	
	
}