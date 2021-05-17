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
clearBtn.addEventListener("click", clearList)
const deleteBtn = document.querySelector(".delete-btn")


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
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn" type="button">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn" type="button">
        <i class="fas fa-trash "></i>
      </button>
    </div>`

const deleteBtn = element.querySelector(".delete-btn")
const editBtn = element.querySelector(".edit-btn");


deleteBtn.addEventListener("click", deleteItem); 
editBtn.addEventListener("click", editItem);
//Append child:
list.appendChild(element)
//Display alert after addition:
displayAlert("Successfully added item to list", "success")
container.classList.add("show-container")

//Add to local storage:
addToLocalStorage(id, value);
//Edit function
//Set back to default:
setBackToDefault();
}else if(value && editFlag){ //If there's a value and the edit is true

    editElement.innerHTML = value;
    displayAlert("Successfully changed value", "success")
    //Edit local storage:
    editLocalStorage(editID, value)
    setBackToDefault()
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

function clearList(){
  const items = document.querySelectorAll(".grocery-item");
  //Check if items are more than 0
  if(items.length>0){
    items.forEach(function(item){
    list.removeChild(item) 
})
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger")
  //localStorage.removeItem("list")
  setBackToDefault();
}

//Delete function:
function deleteItem(e){
//CORRECTLY select an item, move from button to element through use of parentElement.parentElement
 const element = e.currentTarget.parentElement.parentElement;
 const id = element.dataset.id;
 list.removeChild(element);
 if(list.children.length ===0){
     container.classList.remove("show-container")
     displayAlert("item removed!", "danger")
     setBackToDefault();
     removeFromLocalStorage(id)
 }
}
//Edit function:
function editItem(e){
    //Select item
    const element = e.currentTarget.parentElement.parentElement;
//Set item
editElement = e.currentTarget.parentElement.previousElementSibling;
//Setup form value to be the value of what we chose:
grocery.value=editElement.innerHTML
editFlag = true;
editID = element.dataset.id;
submitBtn.textContent= "Edit "
}

// ****** Function that removes text from textbox after submit button is clicked **********
function setBackToDefault(){
   grocery.value = "";
   editFlag = false;
   editID ="";
   submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
  const grocery = {id,value}
  let items = localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
items.push(grocery)
localStorage.setItem("list",JSON.stringify(items))
console.log(items);
}

function removeFromLocalStorage(id){}
function editLocalStorage(id, value){
    //localStorage API
    //setItem
    //getItem 
    //removeItem
    //save as strings
    localStorage.setItem("orange", JSON.stringify(['item', 'item2']))
    const oranges = JSON.parse(localStorage.getItem("orange"))
    console.log(oranges)
    localStorage.removeItem("oranges")
}

// ****** SETUP ITEMS **********
