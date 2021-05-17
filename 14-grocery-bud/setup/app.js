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
    const element = document.createElement("article")
    //Add new class
    element.classList.add("grocery-item");
    //add ID
    const attr = document.createAttribute("data-id");
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn" type="button">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn" type="button">
        <i class="fas fa-trash "></i>
      </button>
    </div> `
//Append child:
list.appendChild(element)
//Display alert after addition:
displayAlert("Successfully added item to list", "success")
container.classList.add("show-container")

//Add to local storage:
addToLocalStorage(id, value);
//Set back to default:
setBackToDefault();
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
        alert.textContent ="";
        alert.classList.remove(`alert-${action}`)
    }, 4000)

}

// ****** Function that removes text from textbox after submit button is clicked **********
function setBackToDefault(){
   grocery.value = "";
   editFlag = false;
   editID ="";
   submitBtn.textContent = "submit";
};

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value){
    console.log("Added to local storage");
}
// ****** SETUP ITEMS **********
