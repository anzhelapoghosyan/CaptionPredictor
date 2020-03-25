import csv

input_gender = input("Please choose the gender (Female/Male): ")
input_occasion = input("Please specify the occasion (Event/Graduation/Lifestyle/Landscape): ")
input_type = input("Please specify the type of pictures to analyze (Selfie [Input S] /Taken by someone else [Input T]): ")
input_studyflex = input("Please specify whether study flex should be apparent in the posts (yes/no): ")

filter_data = {
	"match_gender" : [
	],
	"match_occasion" : [
	],
	"match_type" : [
	],
	"match_studyflex" : [
	]
}

with open ('dataset.csv', 'r') as csv_file:
	csv_reader = csv.DictReader(csv_file)
	
	for item in csv_reader:
		if(item["Gender"] == input_gender):
			filter_data["match_gender"].append(item)

	for item in filter_data["match_gender"]:
		if (item["Occasion"] == input_occasion):
			filter_data["match_occasion"].append(item)
			
	for item in filter_data["match_occasion"]:
		if (item["Type"] == input_type):
			filter_data["match_type"].append(item)

	for item in filter_data["match_type"]:
		if (item["Study Flex"] == input_studyflex):
			filter_data["match_studyflex"].append(item)

data = filter_data["match_studyflex"]
if len(data)>0:

	numOfEng = 0
	numOfArm = 0
	numOfRus = 0
	numOfOther = 0
	sumOfLength = 0
	sumOfEmojis = 0
	sumOfHashtags = 0
	sumOfLikes = 0
	sumOfComments = 0
	sumOfFollowers = 0

	for item in data:
		if item["Language"] == "Eng":
			numOfEng = numOfEng + 1
		else:
			if (item["Language"] == "Arm"):
				numOfArm = numOfArm +1
			else:
				if (item["Language"] == "Rus"):
					numOfRus = numOfRus +1
				else:
					if (item["Language"] == "Arm"):
						numOfArm = numOfArm +1
					else:
						if (item["Language"] == "Other"):
							numOfOther = numOfOther +1

	for item in data:
		sumOfLength = sumOfLength + float(item["Length"])

	for item in data:
		sumOfEmojis = sumOfEmojis + float(item["# of emojis"])

	for item in data:
		sumOfHashtags = sumOfHashtags + float(item["# of hashtags"])

	for item in data:
		sumOfLikes = sumOfLikes + float(item["Likes"])

	for item in data:
		sumOfComments = sumOfComments + float(item["Comments"])

	for item in data:
		sumOfFollowers = sumOfFollowers + float(item["Followers"])

	percentOfArm = numOfArm/len(data)*100
	percentOfEng = numOfEng/len(data)*100
	percentOfRus = numOfRus/len(data)*100
	percentOfOther = numOfOther/len(data)*100

	avgLength = sumOfLength/(len(data))
	avgEmojis = sumOfEmojis/(len(data))
	avgHashtags = sumOfHashtags/(len(data))
	avgLikes = sumOfLikes/(len(data))
	avgComments = sumOfComments/(len(data))
	avgFollowers = sumOfFollowers/(len(data))

	print("Here are some stats about your inputs:")
	print("Languages of captions:")
	print(int(percentOfArm), "%","Armenian")
	print(int(percentOfEng), "%", "English")
	print(int(percentOfRus),"%", "Russian") 
	print(int(percentOfOther),"%", "Other")
	print("Average length of captions: ", int(avgLength), "words")
	print("And an average of: ")
	print(int(avgEmojis), "emoji(s)")
	print(int(avgHashtags), "hashtag(s)")

	input_engagement = input("Would you also like to see the average level of engagement these kinds of posts get? (Input yes/no): ")

	if input_engagement == "yes":
		engagementlvl = (avgLikes + avgComments)/avgFollowers*100
		print("It is: ",int(engagementlvl), "%!")
		print(int(avgLikes), "likes")
		print(int(avgComments), "comments")
		print(int(avgFollowers), "followers")
else:
	print("Sorry, there are no such pictures in our database")
