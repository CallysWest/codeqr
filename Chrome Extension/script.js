const  inputBtn = document.getElementById("input-btn");
let myLeads = [];
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("myName", "Callys West")

let name = localStorage.getItem("myName");
console.log(name)



inputBtn.addEventListener("click", function (){
     myLeads.push(inputEl.value)
 inputEl.value = ""
     renderLeads()
}) 

function renderLeads(){
let listItems = ""
for(i = 0; i < myLeads.length; i++){
   listItems+=`
   <li>
   <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
   </li>
   `

    // let li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li)
}
ulEl.innerHTML = listItems
}

let buttonEL = document.getElementById("btn-el");
buttonEL.innerHTML = "<button id='myInput' onclick='clearinput()'>CLEAR INPUT</button>";

function clearinput(){
    let inputField = inputEl
    inputField.value = ""
}

// const recipient = "James";
// const sender = "West"
// const email = `Hey ${recipient}!
// How is it going?
// ${sender }`;
// console.log(email)


// let btnEl = document.getElementById("btn-el");
// btnEl.innerHTML = "<button onclick='buy()'>Buy</button>"

// function buy(){
//      btnEl.innerHTML += "<p>Thank you for buying<p/>";
// }
