input_engagement = input("Would you also like to see the average level of engagement these kinds of posts get? (Input yes/no): ")

sumOfLikes = 0
sumOfComments = 0
sumOfFollowers = 0

for item in data:
	sumOfLikes = sumOfLikes + float(item["Likes"])

for item in data:
	sumOfComments = sumOfComments + float(item["Comments"])

for item in data:
	sumOfFollowers = sumOfFollowers + float(item["Followers"])

avgLikes = sumOfLikes/(len(data))
avgComments = sumOfComments/(len(data))
avgFollowers = sumOfFollowers/(len(data))

if input_engagement == "yes":
	engagementlvl = (avgLikes + avgComments)/avgFollowers*100
	print("It is: ",int(engagementlvl), "%!")
	print(int(avgLikes), "likes")
	print(int(avgComments), "comments")
	print(int(avgFollowers), "followers")
