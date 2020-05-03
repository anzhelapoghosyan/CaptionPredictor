function showResults() {
	var selectedGender = document.getElementsByName("gender")
	var selectedType = document.getElementsByName("type")
	var selectedOccasion = document.getElementsByName("occasion")
	var selectedSF = document.getElementsByName("studyflex")
	var selectedEngagement = document.getElementsByName("engagement")
	
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
	for (var i = 0 ; i < selectedEngagement.length; i++) {
		if(selectedEngagement[i].checked == true){
			var input_engagement = selectedEngagement[i]
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
			} else {
					if (data[i]["Language"] == "Arm"){
						numOfArm = numOfArm +1
					} else {
							if (data[i]["Language"] == "Rus"){
								numOfRus = numOfRus +1
							} else {
									if (data[i]["Language"] == "Other"){
										numOfOther = numOfOther +1
									}
							}
					}
			}
		}
		

			// the reference here is probably wrong too?

		for (i = 0 ; i < data.length ; i++){
			sumOfLength = sumOfLength + float(data[i]["Length"])
		}
		for (i = 0 ; i < data.length ; i++){
			sumOfEmojis = sumOfEmojis + float(data[i]["# of emojis"])
		}
		for (i = 0 ; i < data.length ; i++){
			sumOfHashtags = sumOfHashtags + float(data[i]["# of hashtags"])
		}
		for (i = 0 ; i < data.length ; i++){
			sumOfLikes = sumOfLikes + float(data[i]["Likes"])
		}
		for (i = 0 ; i < data.length ; i++){
			sumOfComments = sumOfComments + float(data[i]["Comments"])
		}
		for (i = 0 ; i < data.length ; i++){
			sumOfFollowers = sumOfFollowers + float(data[i]["Followers"])
		}

		var percentOfArm = numOfArm/data.length*100
		var percentOfEng = numOfEng/data.length*100
		var percentOfRus = numOfRus/data.length*100
		var percentOfOther = numOfOther/data.length*100

		var avgLength = sumOfLength/data.length
		var avgEmojis = sumOfEmojis/data.length
		var avgHashtags = sumOfHashtags/data.length
		var avgLikes = sumOfLikes/data.length
		var avgComments = sumOfComments/data.length
		var avgFollowers = sumOfFollowers/data.length

		console.log("Here are some stats about your inputs:")
		console.log("Languages of captions:")
		console.log(int(percentOfArm), "%","Armenian")
		console.log(int(percentOfEng), "%", "English")
		console.log(int(percentOfRus),"%", "Russian") 
		console.log(int(percentOfOther),"%", "Other")
		console.log("Average length of captions: ", int(avgLength), "words")
		console.log("And an average of: ")
		console.log(int(avgEmojis), "emoji(s)")
		console.log(int(avgHashtags), "hashtag(s)")
		
		if(input_engagement == "yes"){
			var engagementlvl = (avgLikes + avgComments)/avgFollowers*100
			/////Still figuring out if we should print it on this page or another one (I know there is no print function in js)
			console.log("It is: ",int(engagementlvl), "%!")
			console.log(int(avgLikes), "likes")
			console.log(int(avgComments), "comments")
			console.log(int(avgFollowers), "followers")
		}


	} else {
		console.log("Sorry, there are no such pictures in our database.")
	}
}

// Not sure where to put it exactly, 
// it's for a user to be redirected to the other page for 
// the result

// do we want the output to be on another page?
function goToPage (pageID) {
  pages = getElementByClassName("page");
  for (i=0; i < pages.length; i++) {
    pages[i].style = "display: none;"
  }
  document.getElementById("resultspage"+pageID).style = "display; block;"
}