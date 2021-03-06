document.addEventListener('DOMContentLoaded', ()=>{

//const options:
//Create array of objects to be used in game 
const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]



cardArray.sort(()=>0.5 - Math.random())

//Select 'grid' query
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId =[]
let cardsWon = []

//Function that creates the game board
function createBoard(){
for(let i=0; i<cardArray.length; i++)
//Create card element and set it to img:
const card = document.createElement('img')
//Set all images to white image, this acts as the blank canvas
card.setAttribute('src', 'images/blank.png')
//Set id to each element(i) of card
card.setAttribute('data-id', i)
//Call flipcard function when image is clicked
card.addEventListener('click', flipcard)
grid.appendChild(card)
}


//Check for matches
function checkForMatch(){
  //Get all cards and put them in a query selector:
  const cards = document.querySelectorAll('img')
  //Get first value of array and assign to 
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

if(optionOneId==optionTwoId){
cards[optionOneId].setAttribute('src', 'images/blank.png')
cards[optionTwoId].setAttribute('src', 'images/blank.png')
alert('You clicked the same card!')

}else if(cardsChosen[0] === cardsChosen[1]){
cards[optionOneId].setAttribute('src', 'images/white.png')
cards[optionTwoId].setAttribute('src', 'images/white.png')
//Upon clicking two matching cards remove the flipCard eventlistener
cards[optionOneId].removeEventListener('click', flipcard)
cards[optionTwoId].removeEventListener('click', flipcard)
alert('Great job! Keep going!')
cardsWon.push(cardsChosen)
}else{
  cards[optionOneId].setAttribute('src', 'images/blank.png')
  cards[optionTwoId].setAttribute('src', 'images/blank.png')
  alert('sorry, try again')
}
cardsChosen = []
cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if(cardsWon.length ===cardsArray.length/2)
{
  resultDisplay.textContent= 'Well, well, well, you have beat the game!'
}
}


//Flip the card
function flipcard(){
 //Select the cardId
  let cardId = this.getAttribute('data-id')
//push chosen card to top of array list by name
cardChosen.push(cardArray[cardId].name)
cardsChosenId .push(cardId)
 //set image attribute to src and image
this.setAttribute('src', cardArray[cardId].img)
//Check for match after half a second
if (cardsChosen.length ===2){
 setTimeout(checkForMatch, 500)
}
}

createBoard()
})
