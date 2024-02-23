// alert('I AM THE FUTURE');
// console.error('fuck you, this is an error man')
// console.warn('come on man, you sure you wanna loose your account?')

// Variable
/* Variable are symbolic names we use as values in our application */

// Variable Declaration
/* we can declare variables usiing 3 methods;
var, let, const. */

// Data Types 
// String, Number, boolean, null, undefined.
// const name = 'king';
// const age = 20
// const logic = true;
// const value = null;
// const y = undefined;
// let x;

// console.log(typeof y)
// Concatenation
// console.log('my name is ' + name + ' i am ' + age + ' years old')

// String Template /* Another way to concatenate a string */
// const smile = `my name is ${name} i am ${age} years old`;
// console.log(smile.substring(1, 5).toUpperCase().split(''))


// function display(){
//   alert('GOOD MORNING TRUST')
// }

// const niches = 'it, code, tech';
// console.log(niches.split(', '));

// QUESTION
/*What is a native Code */
// ANSWER it is a binary data compiled to run on a processor

// Method are actions that can be performed on object

// ARRAYS
/* Arrays are variables that holds multiple values*/

// const numbers = new Array(1,'smile', true,);
// array can be created using the constructor(new Array())
/*or using array literal []*/

//ARRAY MANIP ULATION

// numbers[3] = 10; /* used to add an element to the array and i figured out i can use it to manipulate values in an array*/
// numbers.push('banana');  /* best practice to add an element to an array */
// numbers.shift() /* removes the first element instead of the first */
// numbers.unshift('oat'); /* useed to add as element on the begining of an array */
// numbers.pop() /* used to remove the last element in an array */
// console.log(Array.isArray(numbers)) /*used to check if something is an Array */
// console.log(numbers.indexOf('oat')) /* used to grab the index of an element */
// console.log(numbers);

// OBJECT LITERALS
/* they are basically key value pairs*/
// const person = {
//     firstName: 'john',
//     lastname: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: 'to main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.address.city)
// person.email = 'john@gmail.com' /* you can assign value directly to object */

// // Destructuring
//  const {firstName, lastname, address:{city}} = person

// console.log(person.split);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
     
]


//  THE FOR OF...LOOP.

// for(todo of todos){
// console.log(todo.text)
// }

// const todoJSON = JSON.stringify(todos); /* JSON FORMAT*/
// console.log(todoJSON);

// JSON
/* JSON is a data format that is used within fullstack development to send data using APIs 
when you are sending data to a server it usually send it in JSON format and
receives it in JSON format. This is how we send data to a server. */

// For Loop
// for (let i = 0; i < 10; i++) {
//   console.log(`Adding Numbers ${i}`);
// }

// While Loop  /* The difference is that the variable and increment are declared outside of the parameter*/
// let i = 0;
// while(i < 10 ){
//  console.log(`Adding Numbers with while loops${i}`);
//  i++;
// }


// High order array methods which is a way to do any kind of iterations for arrays,examples:
/*forEach: loops through the array, 
  map: allows to create new array from an array
  filter: allows to create new array based on a condition*/

 todos.forEach(function(object){ /*high order array methods take in a parameter of function */
console.log(object.isCompleted)
 });  

// const todoArray = todos.map(function(objects){
//     return objects.isCompleted;
// });
//  console.log(todoArray);

  
//  todos.forEach(function(objects){
//     console.log(objects.text)
//  })

//  const todoCompleted = todos.filter(function(objects){
//     return objects.isCompleted === true;
//  }).map(function(todo){ 
//     return todo.text
//  })
//  console.log(todoCompleted);


// CONDITIONALS
/* && means and, || means or */
// let x = 2;
// if(x === 10){
//     console.log('x is 10 brah');
// } else if(x > 10){
//     console.log('x is greater than 10 brah');
// } else{
//     console.log('x is less than 10')
// }

// Tenary Operator
/* is basically a shorthand if statement used alot to assign variables based on conditions  */

// const x = 1;

// color = x < 10 ? 'green' : 'red';
// console.log(color)

// Switch /*Refer to other note to refer to switch */
// const colors = 'red'

// switch(colors){
// case 'red':
// console.log('color is red')
// break;
// }

// FUNCTIONS
// const numbers = function addNumber(num1, num2, num3) {
//     return num1 + num2 - num3;
// }
// console.log(numbers(2, 2 , 1))


// TODO
// OBJECT ORIENTED PROGRAMMING
// DOM
// BEGINNER FRIENDLY PROJECTS IN JAVASCRIPT 