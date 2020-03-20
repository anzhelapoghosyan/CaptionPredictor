#Existing data for retrieving relevant posts
p1_gender = "F"
p1_occasion = "Event"
p1_type = "Selfie"
p1_studyflex = "Yes"

#Existing data for output
p1_language = "English"
p1_length = 3
p1_emojis = 2
p1_hashtags = 1
p1_likes = 274
p1_comments = 17

p1 = {
  #for input
  "gender" : F,
  "occasion" : "Event",
  "type" : "Selfie",
  "studyflex" = Y,
  
  #for output
  "language" : "English",
  "length" : 3,
  "emojis" : 2,
  "hashtags" : 1,
  "likes" : 274,
  "comments" : 17
}

#User inputs
input_gender = input("Please choose your gender (F/M): ")
input_occasion = input("Please specify the occasion (Event/Graduation/Lifestyle/Landscape): ")
input_type = input("Please specify the the of pictures to analyze (Selfie/Taken by someone else): ")
input_studyflex = input("Please specify whether study flex should be apparent in the posts (Yes/No): ")

if (input_gender == p1["gender"] and input_occasion == p1["occasion"] and input_type == p1["type"] and input_studyflex == p1["studyflex"]):
  print("The captions of pictures that fit your description are usually in the", p1["language"], "language")
  print("Have a length of ", p1["length"], "words")
  print(p1["emojis"], "emojis")
  print(p1["hashtags"], "hashtags")
  print("Prediced number of", p1["likes"], "likes")
  print("Prediced number of", p1["comments"], "comments")
else:
  print("There are no similar pictures in my db")
  #ToDo ask the user ....
