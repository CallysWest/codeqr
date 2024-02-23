// variable initialization and declaration
// let xp = 0;
// let health = 100;
// let gold = 50;
// let currentWeapon = 0;
// let fighting;
// let monsterHealth;
// let inventory = ["stick"];

// connecting html elements with their ids
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

const locations = [
  {
    name: "townsquare",
    buttonText: ["goToStore", "goToCave", "fightDragons"],
    button_Function: [goStore, goToCave, fightDragon],
    text: "You are in the town square you see a sign that says store.",
  },
];

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goToCave;
button3.onclick = fightDragon;

function update(location) {

}

function goStore() {
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  button1.innerText = "Buy 10 health (10 Gold)";
  button2.innerText = "Buy weapons (10 Gold)";
  button3.innerText = "Go to town square";
  text.onclick = text.innerText =
    "You are in the town square you see a sign that says store.";
}

function goTown() {
  button1.onclick = goToStore;
  button2.onclick = goToCave;
  button3.onclick = fightDragon;
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "fight Dragon";
  text.onclick = text.innerText = "You entered the store";
}


function buyHealth() {
  
}

function buyWeapon() {
  
}

function goToCave() {

}
function fightDragon() {
  
}

console.log("Hello World")

function people() {
  alert("people entered the bulding")
}