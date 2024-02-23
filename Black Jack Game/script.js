let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el");
let playerAsset = {
  name: "West",
  chips: 149,
}

playerEl.textContent = playerAsset.name + ": $" + playerAsset.chips

/* When the start game button is clicked it runs other
 functions in their blockes like generating two random cards which is stored in an array
 variable, later on this is added up in the sum Variable.*/
function startGame() {
isAlive = true;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
cards = [firstCard, secondCard];
sum = firstCard + secondCard;
  renderGame();
}

/*This function renders other features of the game */
function renderGame() {
if (sum <= 20) {
  message = "Do you want to draw a new Card ? 🃚";  
} else if (sum === 21) {
  alert("You Won ♣️");
  message = "You've got BlackJack ♣️";
  hasBlackJack = true;
} else {
  alert("Game Over")
  message = "You're out of the game 🃏";
  isAlive = false;
}

messageEl.textContent = message;


 sumEl.textContent = "Sum: " + sum;
 cardsEl.textContent = "Cards: "
 /*Loops through the cards array which has the getRandomCard() function in the startGame() function */
 for (let i = 0; i < cards.length; i++){
   cardsEl.textContent += cards[i] + " "
  }

}

function newCard() {
 // only allow the player get a new card if is alive and does not have blackjack
  if(isAlive === true ){
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame(); 
   }
}

function getRandomCard() {
  // if 1 -> return 11
  // if 11-13 -> return 10
   let randomNum = Math.floor(Math.random() * 13) + 1;
  if(randomNum == 1) {
   return 11
  }else if(randomNum > 10){
 return 10
  }else{
    return randomNum
  }
 
}
// console.log(getRandomCard())






/*let person = {
  name: "West",
  age: 20,
  country: "dubai"
}

function logData() {
  console.log(person.name + " is " + person.age + " years old and lives in " + person.country )
}
logData()

let age = 9;

if(age < 6) {
  console.log(" Free")
}else if(age < 18){
  console.log("child discount");
}else if(age <  27){
 console.log("student discount")
}else if(age < 67){
  console.log("full price")
}else{
  console.log("senior citizen")
}

let largecountries = ["Tuvalu","India", "USA", "Indonasia", "Monaco"]

largecountries.pop()
largecountries.push("Pakistan")
largecountries.shift()
largecountries.unshift("China ")
for (i = 0; i < largecountries.length; i++ ) {
 console.log(largecountries[i])
}

let dayofMonth = 13;
let weekday = "Friday";
 if(dayofMonth && weekday){
  console.log("Spooky")
 }

 let hands = ["Rock","Paper", "Scissors"];

 function getHands(){
  handsindex = Math.floor(Math.random() *3);
  console.log(hands[handsindex]) 
 }
 getHands()*/


// let fruits = ["Apple", "Orange", "Apple", "Apple", "Orange"];
// let Appleshelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("ornage-shelf");


// function sortFruits() {
//   for (let i = 0; i < fruits.length; i++){
//     if (fruits[i] === "Apple") {
//       Appleshelf.textContent += "Apple";
//     }

//     else if (fruits[i] === "Orange")  {
//           orangeShelf.textContent += "Orange"
//     }
//   }
// }

// sortFruits()
digits = Math.floor(Math.random() * 5) + 1
console.log(digits)