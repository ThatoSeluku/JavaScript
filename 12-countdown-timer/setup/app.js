const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")
 
let futureDate = new Date(2021, 4, 22, 12, 33,11);


const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate()

//Get weekday:
const weekday = weekdays[futureDate.getDay()]


giveaway.textContent=`Giveaway ends on  ${weekday}  ${date} ${month} ${year} at ${hours}:${minutes}AM`

const futureTime = futureDate.getTime()


function getRemainingTime(){
  const today = new Date().getTime()
  const t = futureTime- today;

  //Calculate values in ms
  const oneDay  = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute= 60*1000
  const oneSecond = 1000

let days = t/oneDay
days = Math.floor(days)

let hours =Math.floor((t%oneDay)/oneHour)
let minutes = Math.floor((t%hours)/oneMinute)
let seconds = Math.floor((t%oneMinute)/1000)

//Setup array:
const values = [days, hours, minutes, seconds]
function format(item){
  if(item.value<10){
    return item = `0${item}`
  }
  return item
}

items.forEach(function(item, index){
  item.innerHTML = values[index]
})
if(t<0){
  clearInterval(countdown)
  deadline.innerHTML= `<h4 class= "expired">The world has ended</h4>`
}
}
//Countdown:
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()