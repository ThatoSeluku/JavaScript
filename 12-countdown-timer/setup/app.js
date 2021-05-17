//First create arrays of months and weekdays as year and time are easily accessible without a string descriptor
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

//Begin selecting elements using querySelector where we look for giveaway, deadline and dl-format classes from HTML
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
//Items is assossiated with parent div(.deadline-format h4) which has all time items
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// Create futureDate, a Date() element that holds the year, month, day...;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);


//Retrieve year, hours and minutes (as these have no string constraint)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

//Associate month element with number in futureDate
let month = futureDate.getMonth();
//Associate that number with a string found in your array
month = months[month];

//Create string called weekday make it = to weekdays(day(0-6))
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
//Change text to this upon load
giveaway.textContent = `The motherfucking world🌎 ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//Now for time:
//We first associate futureTime to the time found in our date
const futureTime = futureDate.getTime();

//Create function called getRemainingTime
function getRemaindingTime() {
  //Get current time (in ms)
  const today = new Date().getTime();
  //Create variable t, this is the difference between the furtureTime and present time
  const t = futureTime - today;

  /* Reference to convert everything to milliseconds
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  */

  //Conversion to milliseconds complete
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  //Create variable called days, we then divide the time left for countdown by a day
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  //If difference in time is less than 0. Time expired
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, the motherfucking world has ended!</h4>`;
  }
}
// countdown, keep refreshing page every 1000ms aka 1 second
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
