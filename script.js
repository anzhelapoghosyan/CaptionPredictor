function showResults() {
	selectedGender = document.getElementsByName("gender")
	selectedType = document.getElementsByName("type")
	selectedOccasion = document.getElementsByName("occasion")
	selectedSF = document.getElementsByName("studyflex")
	
	for (var i = 0 ; i < selectedGender.length; i++) {
		if(selectedGender[i].checked == true) {
			var input_gender = selectedGender[i]
		}
	}
	for (var i = 0 ; i < selectedType.length; i++) {
		if(selectedType[i].checked == true){
			var input_type = selectedType[i]
		}
	}
	for (var i = 0 ; i < selectedOccasion.length; i++) {
		if(selectedOccasion[i].checked == true){
			var input_occasion = selectedOccasion[i]
		}
	}
	for (var i = 0 ; i < selectedSF.length; i++) {
		if(selectedSF[i].checked == true){
			var input_studyflex = selectedSF[i]
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
// Need to be able to filter throughhhhhhh, until here everything is ok
	for (var i = 0 ; i < dataset.length ; i++) {
		if (dataset[i]["Gender"].value == input_gender){
			filter_data.match_gender.append(dataset[i])
		}
	}
	console.log(filter_data)

// pretty sure it'd work from here again
	var data = filter_data

	if (data.length > 0){

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

		for (i = 0 ; i < data.length; i++){
			if (data[i]["Language"] == "Eng"){
				numOfEng = numOfEng + 1
			}else{
				if (data[i]["Language"] == "Arm"){
					numOfArm = numOfArm +1
				}else{
					if (data[i]["Language"] == "Rus"){
						numOfRus = numOfRus +1
					}else{
						if (data[i]["Language"] == "Other"){
							numOfOther = numOfOther +1
						}
		}





	} else {
		console.log("Sorry, there are no such pictures in our database.")
	}
}

// Not sure where to put it exactly, 
// it's for a user to be redirected to the other page for // the result

// do we want the output to be on another page?
function goToPage (pageID) {
  pages = getElementByClassName("page");
  for (i=0; i < pages.length; i++) {
    pages[i].style = "display: none;"
  }
  document.getElementById("resultspage"+pageID).style = "display; block;"
}