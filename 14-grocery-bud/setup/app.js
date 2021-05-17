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
const value = grocery.value 
const id = new Date().getTime().toString()
if(value && !editFlag)//If value is true and editFlag is false
{
console.log("Add item to list")
}else if(value && editFlag){ //If there's a value and the edit is true
console.log("Great edit")
}else{
displayAlert("Please enter your value", "danger")
}
}

//Display success/ failure alert:
function displayAlert(text, action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    //remove alert with timer/ instead of calling function, you may write all functionality in there
    setTimeout(function(){
        alert.textContent =""
        alert.classList.remove(`alert-${action}`)
    }, 4000)

}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
