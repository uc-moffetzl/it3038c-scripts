#This program will count how many letters, constants, and vowels are in a persons inputted string
#By Zachary Moffett

string=input("Please enter a word that you want counted: ")
vowels = 0
constants = 0

for i in string:
    if(i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u' or
    i == 'A' or i == 'E' or i == 'I' or i == 'O' or i == 'U'):
        vowels = vowels + 1
    else:
        constants = constants +1

letters = constants + vowels

print("Here are how many letters are in your word: ", letters)
print("Here are how many letters are vowels in your word: ", vowels)
print("Here are how many letters are constants in your word: ", constants)