const colors = ["green", "red", "orange", "grey"];
const btn= document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function()
{
    //Goal is get random number between 0 and 3
//    const randomNumber = 3;

//Create a variable "randomNumber" Return random number between 0 and 3:
 var randomNumber = Math.floor((Math.random() * 4) + 0);
document.body.style.backgroundColor = colors[randomNumber];


color.textContent = colors[randomNumber];
console.log(randomNumber);
if(randomNumber==0){
    var audio = new Audio('audio/green.m4a');
    audio.play();
}else if(randomNumber==1){
    var audio = new Audio('audio/red.m4a');
    audio.play();
}else if(randomNumber == 2){
    var audio = new Audio('audio/orange.m4a');
    audio.play();
   }else if(randomNumber == 3){
    var audio = new Audio('audio/grey.m4a');
    audio.play();
}
});
