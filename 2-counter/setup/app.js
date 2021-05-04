//initilaze counter
let count =0;

//Select all 'btn' containers, then buttons
//Use #value because the ID name is value 
const value = document.querySelector("#value");
//Select all values with btn
const btn = document.querySelectorAll(".btn");

btn.forEach(function (button){
button.addEventListener('click', function(e){
const styles = e.currentTarget.classList;
if(styles.contains('decrease')){
    count--;
}else if(styles.contains('increase')){
    count++;
}else if (styles.contains('reset'))
{
    count = 0;
}
if(count>0){
    value.style.color = "green";
}else if(count<0){
    value.style.color = "red";
}
if(count ===0){
    value.style.color = "#222";
}
//Call valriable that contains text content, then change it accordingly
value.textContent = count;
})
});