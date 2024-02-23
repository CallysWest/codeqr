"""@TODO

TODO 1:
Refractor the while loop inside the ch3.py to allow the user try only
3 times before ending the program.


TODO 2:
Write a program to simulate an ATM.

Hints:
First promt the user with options to choose from
1. Withdraw
2. Transfer
3. Pay Bills
4. Quick Teller
5. Cancel

after users selection display the action that was taken by the user.
example:
if user selects Transfer, display transfer
"""
print("""
      1. Withdraw
      2. Transfer
      3. Paybills
      4. Quick Teller
      5. Cancel
""")
user_input = int(input('Enter Option '))
if user_input == 1:
    print('Withdraw')
    
if user_input == 2:
    print('Transfer')  
 
if user_input == 3:
    print('Paybills')    
    
if user_input == 4:
    print('Quick Teller') 

if user_input == 5:
     print('Cancel')
     
    
     
