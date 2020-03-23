import csv

input_gender = input("Please input your Gender")

with open ('dataset.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)

    for item in csv_reader:
        if (item["Gender"] == input_gender):
            print(item["IG username"], ":", item["Type"], ":", item["Occasion"])
