let person = {
  name:  "John",
  age: 20,
  greet: function(){
  return "Hello";
  }
};

const greetUser = person.greet() + " " + person.name;
console.log(greetUser);

const isSunny = false;

if (isSunny) {
  console.log("Buy a Fan")
} else {
  console.log("Do you have an Umbrella?")
}

function makeSum (num1, num2){
 return num1 + num2;
}
console.log(makeSum(2, 3));
