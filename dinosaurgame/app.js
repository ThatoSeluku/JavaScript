//Create elements to access charcter and block. These ID's are accessed from the HTML file
var character = document.getElementById("character");
var block = document.getElementById("block");
//initialize a counter
var counter=0;

//Create jump function and check if animate exists
function jump(){
    if(character.classList == "animate"){return}
    //Add animate class to character. Basically animate the character when jump is called
    character.classList.add("animate");
    //Kill the process after 300ms
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
//Check for death
var checkDead = setInterval(function() {
    //Get the integer value of character and blockleft
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //Check if blockleft and character top are at some point equal
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        //If collision, kill animation
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        //Call animation again for when user restarts the game by pressing the alert
        block.style.animation = "block 1s infinite linear";
    }else{
        //Or else, keep incrementing the counter
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
    //Check if dead every 10ms, keep running the function
}, 10);