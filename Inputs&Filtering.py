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

print(filter_data["match_studyflex"])
