// ****** SELECT ITEMS **********
//alert used to alert of succesful/unsuccesful item input
const alert = document.querySelector(".alert")
//form will be used to update state
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

// edit option
let editElement;
let editFlag = false;
let editID="";

// ****** EVENT LISTENERS **********
form.addEventListener("submit",addItem)
// ****** FUNCTIONS **********
function addItem(e){
//Seeing that the default functionality here will be to submit the entire form, and we only want to submit an item
e.preventDefault()
console.log(grocery.value)
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
