sumOfLength = 0
sumOfEmojis = 0
sumOfHashtags = 0
sumOfLikes = 0
sumOfComments = 0
sumOfFollowers = 0

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
  
avgLength = sumOfLength/(len(data))
avgEmojis = sumOfEmojis/(len(data))
avgHashtags = sumOfHashtags/(len(data))
avgLikes = sumOfLikes/(len(data))
avgComments = sumOfComments/(len(data))
avgFollowers = sumOfFollowers/(len(data))

print("Average length of captions: ", int(avgLength), "words")
print("And an average of: ")
print(int(avgEmojis), "emoji(s)")
print(int(avgHashtags), "hashtag(s)")
