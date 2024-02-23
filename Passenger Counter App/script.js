let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
let pEl = document.getElementById("error");




// Button when clicked adds 1 to the original number 0
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save(){
    let eachCount = count + " - ";
    saveEl.textContent += eachCount;
    countEl.textContent = 0;
    count = 0;
    
}




// Working with and concatenating variables
let firstName = "Callys";
let secondName = "West";
let fullName = firstName + " " + secondName;
let greeting = "Hi there, "
console.log(fullName)


function myFunction() {
console.log(greeting + fullName)
}

myFunction()

// working with Functions
let myPoints = 3;

function add3Points() {
  myPoints += 3; 
}


function remove1Point() {
  myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)

function error() {
  pEl.innerText = "Something went wrong";
}

let num1 = 8;
let num2 = 2;
let sum = document.getElementById("sum-el");
document.getElementById("num1-el").textContent;
document.getElementById("num2-el").textContent;

function add() {
  let add = num1 + num2;
 sum.textContent = "Sum: " + add;
 

}


function subtract() {
let result = num1 - num2;
sum.textContent = "Sum: " + result;
}


function divide() {
let result = num1 / num2;
sum.textContent = "Sum: " + result
 
}

function multiply() {
  let result = num1 * num2;
sum.textContent = "Sum: " + result;

}

