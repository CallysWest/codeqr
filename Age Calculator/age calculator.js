 const btnEL = document.getElementById("btn");
 const birthdayEL = document.getElementById("birthday");
 const reloadBtn = document.getElementById("reload")

  btnEL.addEventListener("click", calculateAge);

 function calculateAge() {
    const birthdayValue = birthdayEL.value;
    if(birthdayValue === "") {
        alert("Date should not be empty!")
    }else {
        const age = getAge(birthdayValue);
    }
    
 }

 function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
   //  getminutes()=0
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
   //  const minutes = currentDate.getMinutes()-birthdayDate.getMinutes()
   //  const seconds = currentDate.getSeconds()-birthdayDate.getSeconds() 
    document.querySelector('#result').textContent=`${age} years and ${month} months old `
 }
 document.querySelector('#reload').addEventListener('click',()=>{
    location.reload()
 })
 

 const object1 = {
   name : "chucks",
   price: 8.99,
 }
// Destructuring
//const name = object1.name
 const {name, price} = object1;
//    console.log(name)
//    console.log(price)

const object5 = {
   //  name: name,
   name, //shorthand property
   // fun: function Greet (){
   //    console.log("Hello World")
   // },
    method(){
      console.log('Hello World'); /*ShortHand Method */
    }
};

 console.log(object5);
 console.log(object5['fun'])
 object5.method();