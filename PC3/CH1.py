#Displays hello to the user.
print("Let's Code")

txt = 'I love programming'

print(txt)
print(txt.capitalize())
print(txt.upper())
print(txt.lower())

print('love' in txt)
print('Love' in txt)
print('hate' in txt)

#LIST DATA TYPES
scores = [10,20,30,45,0,12]

print(scores)
#grab an item from scores
print(scores[3])
#append: adds an items to the end of a list
scores.append(55)
print(scores)
#insert: Adds an item at any position in the list
scores.insert(2,'Lion')
print(scores)
scores.insert(3,'West')
print(scores)
print(scores[-1])
#List Slicing:picking characters in sequence
print(scores[0:5])
#pop: removes the last item in the list
scores.pop(6)
print(scores)
#remove:removes a particular item
scores.remove(30)
print(scores)

