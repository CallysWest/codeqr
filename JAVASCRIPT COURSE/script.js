let vehicles = [
  "Ford",
  ["Fiesta", "taurus", "Explorer"] /* ARRAY within array */,
  "Honda",
  ["Pilot", "Civic", "Accord"],
  "Toyota",
  ["Corolla", "Camry", "Prius"],
];

console.log(vehicles[1][0]);

/** An array is a container with sub containers */

let sentence = "whats up mister chicken";
console.log(sentence[sentence.length -1]); /*to select last item */

/* OPERATORS, BOOLEAN & SELECTION IN JAVASCRIPT  */
//  OPERATORS are the symbols that will allow us create different expression in javascript(Refer to w3school)
// + Addition
// = Assignment
// - Substraction
// * Multiplication
// / Division
// % Modulus
const name = "john";
/*BOOLEANS & SELECTION*/
let happy = true;
let sad = false;
if (sad) {
  console.log(`${name}` + " "  + "is" + " " + "Happy asf");
} else {
  console.log("go play some juice world album");
}

//COMAPARISON OPERATROR //
let myNum = 3;
let otherNUm = "3";
if(myNum  !== otherNUm){
    console.log("yes");
}else{
    console.log("no")
}

let colors = new Array("red", "pink", "orange", "yellow");
let selectedColors = colors[5];

/*IF, ELSE IF, ELSE STATEMENT */
//  if (selectedColors === "red"){
//   console.log("you chose red");
//  } else if (selectedColors === "pink"){
//   console.log("you selected pink, dont be a bitch bro")
//  }else if( selectedColors === "orange"){
//   console.log("you selected orange")
//  }else if( selectedColors === "yellow"){
//   console.log("you seleceted yellow")
//  }else{
//   console.log("option not available")
//  }

/* SWITCH */
// switch(selectedColors){
// case "red": console.log("you selected red"); break;
// case "pink": console.log("you selected pink"); break;
// case "orange": console.log("orange gang"); break;
// case "yellow": console.log("you selected yellow"); break;
// default: console.log("why are you selcteing stuffs that are not available")
// }

/* USING && operator. Used to check if multiple things are true */ 

let goodMood = true;
let hungry = false;
let ateLastNight = true;

if(goodMood && hungry && ateLastNight){
  console.log("I am not hungry")
} else{
  console.log("I am hungry")
}

/* USING pipe(||). Used to check if any statement in the selector is true */
let breakfast = false;
let lunch = true;
let dinner = false;
if(breakfast || lunch || dinner){
  console.log("i am not hungry")
}else{
  console.log("go and eat")
}

/* LOOPS IN JAVASCRIPT > Used to repeat a set of steps for a set number of times*/
   for(let i = 1; i <= 10; i++){
    console.log(i)
  }

  /* USING LOOPS WITH ARRAYS */
  let items = new Array("yam", "phone", "shoes");
  for( let i = 0; i < items.length ; i++ ){
  console.log(items[i])
  } 

  /* THE FOR... OF LOOP . Used specifically for working with arrays */
  let item = new Array("yam", "phone", "shoes", "apple");
  for(let eachitem of item){
    console.log(eachitem)
  }

  /* STRING AS AN ARRAY */
  let words = "you don't know me son"
  // for(let i = 0; i < words.length; i++){
  //   console.log(words[i])
  // }
  /* OR */
  for(eachAlphabet of words){
    console.log(eachAlphabet)
  }

  /* WHILE LOOPS   */
let i = 1;
let text= "";

while (i <= 10){
//   text += "increased to " + incrementor + "\n"; incrementor++;
// }
/* Using Template literals */
// text += `increases to ${incrementor} \n`; incrementor++;
// }
text += `incrementor is ${i}, the incrementor squared is ${i*i} \n` 
i++;
}
// console.log(text);

/*SEQUENCE, SELECTION & LOOP  */ 
/* SEQUENCE PART ONE */
let myString = "i am really hungry for some";
// console.log(myString)
let myUpperstring = myString.toUpperCase();
// console.log( myUpperstring)

/* SEQUENCE PART TWO */
//  let reallyLocation = myString.search("really"); /* searches for "really" index number */
// let specialWord =  myString.substr(reallyLocation, 6); /*searches the varaiable where "really" is stored and grabs "really" word  */
// specialWord = specialWord.toUpperCase(); /*capitalizes the "really" word  */
// let newString = myString.replace("really", specialWord);/* removes "really" from myString variable and stores in a new variable */
// console.log(newString)
// /* SEQUENCE PART 3 */
// let foods = ["yam", "rice", "beans", "potatoe"];
// for(let eachvalue of foods){
//   console.log(`${myString}, ${eachvalue}`)
// }
// console.log(`${myString}, ${foods[0]}`);

/*LOOP + SELECTION */  

 let foods = ["cheese", "pie", "lunch", "breakfast"];
 let mystring = "i am really hungry for some";
 for (let i = 0; i < foods.length; i++){

  // check if the incrementor is even
 
 if( i % 2 === 0){
  // if it's even make the array element uppercase
  // console.log(`${mystring} ${foods[i].toUpperCase()} \n`); 
 }
 else{
  // if it's odd, keep it lowercase
  // console.log(`${myString} ${foods[i]}`)
 }
}

// FUNCTIONS IN JAVASCRIIPT
 /* Functions are reusable sets of instructions, a function lets you combine a group of instruvtions together and give them a name*/

function learnJavascript() {
  let dayOne = "learn 5 hours a day";
  let dayTwo = "learn 7 hours second day";
  console.log(`${dayOne} and ${dayTwo}`);
};
// learnJavascript();

function checkNum (){
  let userInput =prompt("Enter a whole number", "");

  if(userInput < 10){
    console.log("you have entered a number less than 10");
    for (let i = 0; i < 10; i++){
      console.log(`Here is a $[i]`)
    }
  } else if( userInput > 9) {
     console.log("you have entered a big number");
  }else{
    console.log("ERROR: you didn't enter a number");
  }
}

// checkNum();
  
// PASSING IN DATA
/* fUNCTIONS can take data through parameters that are passsed into the function  */
function upperAlphabet(message){
  let convertMessage = message.toUpperCase();
  console.log(convertMessage);
}

// upperAlphabet("hello felllas")

function addnum(num1, num2){
 let sum = num1 + num2;
 console.log(sum)
}
// addnum(2, 5)

/* RETURNING DATA */
/* A function can return data after having performed whatever operations that function does on that data */

function returnSum(num1, num2){
 let sum = num1 + num2; 
 return sum;
}
// console.log(returnSum(3, 6))

// console.log(Math.random())

// GENERATING RANDOM NUMBERS
let Foods = ["pie", "pizza", "coco pops", "cheese"]

function randomInt( min, max ){

//  let randomValues = max - min + 1;
//  let randomNum = Math.random(); /*geneartes decimaml numbers from 0 - 9 */
//  let randomVal = randomNum * randomValues;
//  let roundedRandomVal = Math.floor(randomVal)/* Used to round down randomNum */
//  let finalNum = min + roundedRandomVal;
//  return finalNum

/* REFACTORING UPPER CODE */
return Math.floor ( (min + max + 1) * Math.random()) + min;
}    
console.log(Foods [randomInt(0, 3)]);

   
/* FUNCTIONS CAN BE ANONYMOUS, This is called funtion expression */

let greetings = function(){
  console.log("Hello world")
}
greetings();  


/*GET ELEMENT BY TAG NAME */
// let ps = document.getElementsByTagName('p');
// for(let i = 0; i < ps.length; i++){
//  ps[i].style.color = "red";
//  alert(`Showing paragraph ${i}`)
// }

/*getElementByClassName */
// let myClass = document.getElementsByClassName('someclass');
// for( let i = 0; i < myClass.length; i++){
//  myClass[i].style.color = "blue";
//  alert(`showing ${i}`)
// }

/*QUERYSELECTOR() */
// The document method querySelector(); will return the first match of a query
// let Item = document.querySelector('#special .someclass');
// Item.style.color = 'blue';

/*  querySelectorAll()  */
// let qa = document.querySelectorAll('#special p');
// for(let i = 0; i < qa.length; i++){
//   qa[i].style.color = "aqua"
// }


// let myDIv = document.querySelector('#special')
// myDIv.innerHTML = "<h1>HELLO WORLD</h1>"
// REFACTORED
document.querySelector("#special").innerHTML = "<h1>HELLO WORLD</h1>";

// CONVERT FARENHEIT TO CELSUIS
function toCelsuis(f){
  return (5/9) * (f-32);

}
  document.getElementById("special").innerHTML = toCelsuis
  (77);

  // Reusing Function
  let degree = toCelsuis(77);
  let result = "The weather is" + " " + `${degree}` + "degrees"+ " " + "today";
  console.log(result)


  let phone = {
    firstname:"Samsung",
    color: "blue",
    price: "$1200",
    quantity: 2,
  }

  console.log(phone.firstname,  phone["quantity"],);

 


 // code here can not use carName
 let nameer = "john"

function myFunction() {
   return carName = nameer + " " + "volvo" ;

    // code here can use carName

} 
let seen = myFunction() + " " +"wheels";
console.log(seen)


let digi = 2;
digi += 4;
console.log(digi);

function displayDate(){
  document.getElementById("h1").innerHTML = Date();
}

let special = 'it\'s "alright!"';
console.log(special.replace("alright", "cool"))

str = "Please visit Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n)

let upp = "Smile people";
console.log(upp.toUpperCase())

let sum = "japa";
console.log(sum.concat(" ",upp)) //concat() joins two or more strings:


// EXTRACTING STRING CHARACTERS
let sum2 = "The johnsons";
console.log(sum2.charAt(0)) //return character at a specified index

let sum3 = "The Simpsons";
console.log(sum3.charCodeAt(5)); // returns the unicode of the character at a specified index in a string:

 //Converting strings to an array
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe 

let u = 3;
console.log(u);

if(u = 4){
  console.log(u)
}

cat = "male";
var cat;
console.log(cat);

const cars = ["benz", "g63",];
cars[2] = "ferarri";
console.log(cars)

let text2 = "What a very  ";
text2 += "nice day";
console.log(text2);

let x = toCelsuis(77)
let result1 = "The temperature is " + toCelsuis(77)+ " celcius";
console.log(result1 ) 