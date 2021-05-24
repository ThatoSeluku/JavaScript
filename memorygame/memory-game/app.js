document.addEventListener('DOMContentLoaded', ()=>{

//const options:
//Create array of objects to be used in game 
const cardArray =[
{
name: 'fries',
img: 'images/fries.png'
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
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
            },
            {
              name: 'ice-cream',
              img: 'images/ice-cream.png'
              },
              {
                name: 'milkshake',
                img: 'images/milkshake.png'
                },
                {
                  name: 'milkshake',
                  img: 'images/milkshake.png'
                  },
                  {
                    name: 'pizza',
                    img: 'images/pizza.png'
                    },
                    {
                      name: 'pizza',
                      img: 'images/pizza.png'
                      },

]

//Select 'grid' query
const grid = document.querySelector('.grid')

var cardsChosen = []
var cardsChosenId =[]

//Function that creates the game board
function createBoard(){
for(let i=0; i<cardArray.length; i++)
//Create card element and set it to img:
var card = document.createElement('img')
//Set all images to white image, this acts as the blank canvas
card.setAttribute('src', 'images/blank.png')
//Set id to each element(i) of card
card.setAttribute('data-id', i)
//Call flipcard function when image is clicked
card.addEventListener('click', flipcard)
grid.appendChild(card)
}
},

//Check for matches
function checkForMatch(){
  //Get all cards and put them in a query selector:
  var cards = document.querySelectorAll('img')
  //Get first value of array and assign to 
  const optionOneId = cardsChosenId[0]

}


//Flip the card
function flipcard(){
 //Select the cardId
  var cardId = this.getAttribute('data-id')
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


)
