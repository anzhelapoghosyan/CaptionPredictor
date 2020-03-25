numOfEng = 0
numOfArm = 0
numOfRus = 0
numOfOther = 0

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

percentOfArm = numOfArm/len(data)*100
percentOfEng = numOfEng/len(data)*100
percentOfRus = numOfRus/len(data)*100
percentOfOther = numOfOther/len(data)*100

print("Languages of captions:")
print(int(percentOfArm), "%","Armenian")
print(int(percentOfEng), "%", "English")
print(int(percentOfRus),"%", "Russian") 
print(int(percentOfOther),"%", "Other")
