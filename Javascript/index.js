// WHAT IS JAVASCRIPT?
/* Javascript is a powerful programming language that can add interactivity in a website,
it was Invented by Brendan Eich */

//This is my first javascript code.

// console.log("hello callyswest");

// VARIABLES
/* variables are containers that store value
You use variables as symbolic names for values in your application. The names of variables are called identifiers*/

// RULES FOR NAMING A VARIABLE
//1. They cannot be a reserved keyword, example let, if, else, var, true, false, typeof, return and so on
//2. They should be meaningful
//3. They cannot start with a number (1name)
//4. They cannot contain a space or a hypen (-)
//5. They are case sensitive

//WHAT IS A STATEMENT?
//A statement is a piece of code that express an action to be carried out example(console.log("Hello world")).
//All statements in javasccript should be terminated by a semicolon.

//STRING
//A string is a sequence of characters, example("Hello world")

// Declaring my first constant
// const interestRate = 0.2;
// interestRate = 3;
// console.log(interestRate);

//CATEGORIES OF TYPES
//1. Primitive/Value Types
//2. Reference Types

// In the categories of primitives we have Strings, Numbers, Boolean, Undefined, Null .
/* Primitive value types represent simple, atomic values.
They are directly stored in memory and typically occupy a fixed amount of space. */

// let name = "Trust"; // String Literal
// let lastname = "Callys";
// let age = 30; // Number Literal
// let isApproved = true; // Boolean literal
// let firstName = undefined;
// let lastName = null; // Used in situation where we want to clear the value of a variable

// In the reference types category we have Objects, Arrays, Functions
// Reference value types, also known as reference types, represents complex objects that are dynamically allocated in memory.

// WHAT IS AN OBJECT?
// An object in javascript and other programming languages is like an object in real life
// we declare an object using curly brackets known as OBJECT LITERAL

// let cars = {
//   firstCar: "benz",
//   carSpeaker: "JBL",
// };

// There are two ways to work with these properties, now let's say we want to change the name of this car, so we need to access the firstCar properties,
// There are two ways
// 1. Dot Notation

// cars.firstCar = "Range Rover";
// console.log(cars.firstCar);

// 2. Bracket notation

// cars["firstCar"] = "bugatti";
// console.log(cars.firstCar);

// cars["carSpeaker"] = "STUDIO 6"
// console.log(cars.carSpeaker);

// ARRAYS
// Sometimes you might be dealing with a list of objects, for example the list of products in a shopping cart or list of colors the user has selected , in situations like this,
// we use an array.
// we use square brackets to declare an array known as ARRAY LITERAL.
// An array is a data structure that we use to represent a list of items

// let selectedColors = ["red", "blue", "green"];
// selectedColors.push("man", "goat", 20, true);
// console.log(selectedColors);

// FUNCTIONS
// functions are one of the fundamental building block of javascript,
// A function is basically a set of statements that performs a task or calculate a value
// A parameter is what we have at the time of declaration WHILE argument is the actual value we supply for that parameter.
// What we have inside the curly brackets is what we refer to as the body of this function, and this is where we add all these statements to define some kind of logic in our application

// Performimg a task
// function greeting(name) {
//   console.log('Goodmorning ' + name);
// }

// greeting('Trust');

// Calculating a value
// function add (number1, number2){
//   return number1 + number2
// }
// console.log(add(1, 2))
// TYPES OF FUNCTION

// DYNAMIC TYPING
// we have two types of programming languages: Static languages and dynamic languages
// In static languages when we declare a variable, the type of that variable is set and cannot be changed in the future.
// in a dynamic language like javascript the type of variable can change at runtime
// unlike other programming languages we don't have two kinds of numbers in javascript, we don't have floating point numbers and integers, all numbers are of type number

// let person = {
//   skinColor: "brown",
//   height: 90,
// };
// person.skinColor = "GOLD";
// let friend = person
// friend.height = 70
// console.log(friend.height);

// let people = 'alot';
// console.log(people);

// JAVASCRIPT OPERATORS
/*  Operators are symbols that allows us create different expression in javascript. */

// let orange = true;
// let black = false;
// let green = 0;
// let myNum = 1;
// let otherNum = '1';

// if(myNum == otherNum) {
//   console.log('The statement is true');
// }
// else{
//   console.log('statement is false');
// }

// COMPARSION & LOGICAL OPERATORS
/* Using == compares two values and returns true if they are same  */
// != means not exactly the same
// === means exactly the same as
// !== means not exactly the same as

//  ELSE IF
/* can be used to check different values. */

// let colors = ['red', 'blue', 'green', 'yellow'];
// let selectedColor = colors[4];

// if (selectedColor === 'red'){
//   console.log('The color is red');
// }
// else if (selectedColor === 'blue'){
//   console.log('The color is blue');
// }
// else if(selectedColor === 'green'){
//   console.log('The color is green');
// }
// else{
//   console.log('The color is yellow')
// };

// SWITCH
/*Switch statements do the same thing as else if statements, but are a bit more compact, syntactically. */

// switch(selectedColor){
//   case 'red': console.log('The color is red');
//   break;
//   case 'blue': console.log('The color is blue');
//   break;
//   case 'green': console.log('The color is green');
//   break;
//   case 'yellow': console.log('The color is yellow');
//   break;
//   default: console.log('There was an Error, Please try again');
// }

// USING &&
/* In javascript we check if two things are true by using ampercent, if either one is false then we can do something else*/

// let goodMood = true;
// let Moodswing = true;

// if(goodMood && Moodswing){
//   console.log('you are right');
// }
// else{
//   console.log('you are wrong');
// }

// USING ||
/* Use the double pipe (||) character to check to see if any of the statements in the if selector are true. if any of any them is true the whole statement is true.  */

// let gotBreakfast = true;
// let gotLunch = false;
// let gotDinner = false;

// if(gotBreakfast || gotLunch || gotDinner){
//   console.log('I am not starving');
// }
// else{
//   console.log('Ike gwuru');
// }

// let items = ["jam", "butter", "bread"];
// let extraItems = items.push('margarine', 'sardine');
// console.log(items);
// console.log(extraItems);

// SPLICING

// let brands = ['gucci', 'fendi', 'loewe', 'dolce', 'gabbana'];
//  let removedElements = brands.splice(2, 2);
// console.log(brands);
// console.log(removedElements);

// LOOPS
/* loops are used to run the same code over and over again, each time with a different value */
// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }
/* The above example is the most basic loop in javascript. You use a loop to repeat a set of steps for a set of number of times. */

// let character = 'Callys west';
// for (let i = 0; i < character.length; i++){
//   console.log(character[i]);
// }

// WORKING WITH ARRAYS
/* Zero is the most common initial value because you will be frequently working with arrays, which are zero indexed */

// let colors = ['red', 'purple','green'];
// for(let i = 0; i < 3; i++){
//   console.log(colors[i]);
// }

// let names = ['luke', 'mattew','john'];
// for (let i = 0; i < 3; i++){
//   console.log(names[i])
// }
// let colors = ["red", "blue", "green", "big nyash", "small nyash"];
// for (let i = 0; i <= 4; i++) {
//   console.log(colors[i]);
// }

// The For..Of Loop
/* The for.. of loop is specically for working with arrays */

// let fruits = ["apples", "guava", "oranges", "mango"];
// for (let individualFruit of fruits) {
//   console.log(individualFruit);
// }

// String as an array

// let string = 'HELLO WORLD';
// for(let i = 0; i < string.length; i++){
//   console.log(string[i]);
// }

// let string = "smile";
// for (let Alphabet of string) {
//   console.log(Alphabet);
// }

// While Loops

// let  incrementor = 0;
// let text =''
// while(incrementor < 11){
//   text += 'The incrementor has gone up to ' + incrementor + '\n';
//   incrementor++;
// }
// console.log(text)

// let obj1 = { name: "John" };
// let obj2 = obj1;
// obj2.name = "Alice";
// console.log(obj2.name);

// let incrementor = 0;
// let text = "";
// while (incrementor < 10) {
//   text += "the incrementor has gone up to " + incrementor + "\n";
//   incrementor++;
// }
// console.log(text);

// let person = {
//   name: 'Johnson',
//   color: 'chocolate',
// }
// let friend = person;
// friend.name = 'Alice';

// if(person.name == friend.name){
// console.log("statement is true");
// }
// else{
//   console.log("statement is false");
// }

// function add(number1, number2){
//   return number1 + number2
// }
// console.log(add(2,2));

// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'hello jbl'

// // Destructuring assignment
// let a,b, rest;
// [a,b] = [1,2];
// console.log(a);
// console.log(b);

// [a, b, ...rest] = [1, 2, 3, 4, 9];
// console.log(rest);

// REFERENCE ERROR
/* The ReferenceError object represents an error when a variable that doesn't 
 exist (or hasn't yet been initialized) in the current scope is referenced.
 */

// const language = ["HTML", "CSS", "JAVASCRIPT"];
// language.push("PYTHON");
// console.log(language);

// const coffee= ['french roast', 'colombian', 'kona'];
// console.log(coffee[0])

// let name1 = 'Aguero Banks';
// let name2 = 'Jeriq';

// if (name1 !== name2){
//     console.log('THE GOATS')
// }
// else{
//     console.log('freestyle them')
// }

// function greet() {
//   console.log(name1 +  ' and ' + name2 + ' goated')
// }
// greet()

// var a = 6

// a = a + 1

// console.log(a)

// var myString = '\tfirstname\n\t\\secondLine\n\tThirdline'
// console.log(myString)

// let name = 'trust'
// console.log(`my name is ${name}`)

// let career = 'programming is ';
// const add = 'awesome';
// career += add;
// console.log(career[0, 6]);

let countries = ["America", "United kingdom", "dubai"];
let userCountry = countries[2];

switch (userCountry) {
  case "America":
    console.log("james deposited from america");
    break;
  case "United kingdom":
    console.log("thomas deposited from UK");
    break;
  case "dubai":
    console.log("muhammed deposited from dubai");
    break;
  default:
    console.log("who the fuck is this?");
}


// for(let i = 1; i < 16; i++) {--
// console.log(i)
// };

// function timer (bomb){
//   for(let i = 1; i < 15;  i++);
//  console.log( + [i] )
// }
// timer(bomb)

let vehicles = ["Ford", ["Fiesta", "taurus", "Explorer"],
"Honda", ["Pilot", "Civic", "Accord"],
"Toyota", ["Corolla", "Camry", "Prius"]]; 

console.log(vehicles[5][2]);



/*let changeColor = document.querySelectorAll('p');
for(let i = 0; i < changeColor.length; i++){
 changeColor[i].style.color = "red"
}*/

/*const para = (document.querySelector("#changeColor").innerHTML =
  "<p>This is the final comeback</p>");*/

/*let firstpara = document.querySelector("p");
firstpara.className = "pink"*/

/*let check = document.querySelector("input");
check.setAttribute("checked", "checked");*/

/*let newPara = document.createElement("p");
let newText = document.createTextNode("Hello world");
newPara.appendChild(newText);
let mydiv = document.querySelector("div")
mydiv.appendChild(newPara)*/

/*let myDiv = document.querySelector("div"*/

// Capturing Events
/*let btnEl = document.querySelector("button");

function clicked(){
  alert("I told youu not to click me")
}
btnEl.onclick = clicked; */

// let btnEl = document.querySelector("button");

// function clicked(){
// alert("why did you do that?")
// }
//   btnEl.addEventListener("click", clicked);

// btnEl.addEventListener("click", function(){
//   alert("wagwan?")  
// })

 /*btnEl.addEventListener("click", function(event){
  event.target.style.backgroundColor = "red";
  alert("wagwan")
 })*/


//  PREVENTING FORM SUBMIT
 /*let myForm = document.querySelector("form");
 myForm.addEventListener("submit", function(e){
  e.preventDefault()

  let formData = document.querySelector('input').value;
  alert(formData)
 });*/


//  MOUSEOVER, MOUSEOUT EVENTS: JS
/*let heading = document.querySelector("h1");
let box = document.querySelector("div");

box.addEventListener("mouseover", function(){
heading.innerHTML = "The mouse is over the Box"
});

box.addEventListener("mouseout", function(){
  heading.innerHTML = "The Mouse has left the box"
});

heading.addEventListener("mouseover", function(){
  heading.innerHTML = "Roll Your Mouse Over the Boxes"
})*/

// Scroll EVent
/*let pagetop;
window.addEventListener('scroll', function(){
  pagetop = window.pageYOffset;
  console.log(pagetop)
})*/


// Resize Event
/*window.addEventListener('resize', function(){
  console.log(`The window width is ${window.innerWidth}`);
  console.log(`The window Height is ${window.innerHeight}`);
})*/

/*document.addEventListener("keydown", function(){
   alert("A fucking key was pressed")
})*/

/*document.addEventListener('keydown', function(event){
  alert(`the ${event.key} key was pressed`)
})*/

/*function find(){
  oppsglobal = "sup" 
  let aVariable = "this is local";
  console.log(aVariable);
}

find();
  
console.log(oppsglobal)*/

// for (let i=0; i<=10; i++){
//   console.log(`The value of i is ${i}`)
// }

// console.log(cheese)
// let cheese = "yummy"


console.log(cheese);
var cheese = "yummy";



 