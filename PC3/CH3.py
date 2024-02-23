#   CONDITIONALS
"""
SYNTAX
If expression:
    statements
elif expression:
       statements
else:       
    statements
"""

# user_age = 30
# has_pvc = True

# if user_age >= 18 and has_pvc == True:
#    print('User can Vote!!!')
# else:
#     print('Grow up kiddo!!!')   


# user_age =input('Enter your age to place your vote ')
# has_pvc = True

# if int(user_age) >= 18 and has_pvc == True:
#    print('User can Vote!!!')
# else:
#     print('Grow up kiddo!!!')  

# user_name =input('Enter your name to place your vote ')
# has_pvc = True
# criminals= ['Trust','Martin','Jessica','Marvelous']

# if user_name.capitalize() in criminals:
#    print('User cannot vote') 
   
# elif int(input('Enter your age to place your vote ')) >= 18 and has_pvc == True:
#    print('User can Vote!!!')
   
# else:
#     print('Grow up kiddo!!!') 


# ITERATIONS

"""
Syntax :
Method 1
usecase 1:
for variable in range(start,stop,increment):
    statements
    
usecase 2: 
for variable in data:
    statements
    
where data is simply an iterable data type such as:
string, list, tuples, dictionaries

Method 2
WHILE LOOP 
while expression:
    statements      
"""
# Usecase 1
# for value in range(0,10):
#    print(f'Dispend ${value} worth of fuel.')

# for value in range(1,1001):
#  print(f'dispensed ${value} worth of fuel.')



# Usecase 2
# for items in 'jessica':
#     print(items)

# for items in [True,'Mike',100]:
#     print(items)

# for value in range(1,21,2):
#     print(value)
    
# for value in range(2,21,2):
#       print(value)    

print("""
      SELECT AN OPTION TO CONTINUE OR END THE PROGRAM:
      
      1.Continue
      2.End
    
      
   """)

# user_input = int(input('Enter Option'))

# while user_input != 2:
#     user_input = int(input('Enter Option'))
#     if user_input == 2:
#         break
  
# start = 1
# stop = 10

# while start <= stop:
#     print(start)
#     start = start + 1

print("""
      SELECT ANY NUMBER FROM 1 TO 10 TO PARTICIPATE IN OUR CHOCOLATE TOUR.
      
      ENTER 0 TO QUIT
""")
from random import randint
win_number = randint(1,10)#Genrate random number from 1-10
trails = 0
user_input =int(input('Enter Option: '))
trails = trails + 1

while user_input != win_number:
    user_input =int(input('Enter Option: '))
    trails = trails + 1
    if user_input == 0:
        break
    
if user_input == win_number:
    print(f'You Won with {trails} trails')




    
  
 