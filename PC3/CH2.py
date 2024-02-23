#STRING FORMATING
# name='john'
# #Grabs the name of the user interacting with the program.
# name=input('Enter Username: ')
# age = '30'
# age = ('Enter Age: ')
# a = '-' * 90

# string1= 'Welcome back '
# string2= 'My name is {1},i am {0} years old'.format(age,name)
# string3= f'my name is {name},i am {age} years old'

# print (string1 + ' ' + name)
# print(a)
# print(string2)
# print(a)
# print(string3)

# #Tuples
# """
# Tuples are immutsble data types,which means items in the tuple cannot be changed.
# List operations such as:
# insert,pop,remove,append, cannot be performed on tuples.
# """

# gender =('male','female','others')
# print(gender)

# #Dictionaries
# """
# A Dictionary is a Hashable data type, data is entered using a key.
# """

# smile = {'trust':20, 'martins': 0}
# print(smile['trust'])

# user1 = {'username': 'joseph', 'password': 'joe678'}
# user2 = {'username': 'trust', 'password': 'smile419'}

# users = {'user1': user1, 'user2': user2}
# print(users)
# #changing of password
# user2['password'] = 'smile999'
# print(users)
# #Adding a new user to the users dictionary.
# users['user3'] = {'username': 'Felix', 'password': 'felix67'}
# print(users)
 
name = input('Enter Username ' )
age = input('Enter Age ' )
print( name + ' is ' + age)