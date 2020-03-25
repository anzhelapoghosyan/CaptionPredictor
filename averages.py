sumOfLength = 0
sumOfEmojis = 0
sumOfHashtags = 0

for item in data:
	sumOfLength = sumOfLength + float(item["Length"])

for item in data:
	sumOfEmojis = sumOfEmojis + float(item["# of emojis"])

for item in data:
	sumOfHashtags = sumOfHashtags + float(item["# of hashtags"])

avgLength = sumOfLength/(len(data))
avgEmojis = sumOfEmojis/(len(data))
avgHashtags = sumOfHashtags/(len(data))

print("Average length of captions: ", int(avgLength), "words")
print("And an average of: ")
print(int(avgEmojis), "emoji(s)")
print(int(avgHashtags), "hashtag(s)")
