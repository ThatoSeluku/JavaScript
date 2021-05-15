// lorem text
const text = [
  `THANOS (2014): I am– inevitable.

  [Thanos snaps his fingers, but nothing happens except a metallic "clink." He sees the Infinity Stones are missing. Tony has the stones on his own gauntlet, the gamma radiation coursing through him, to Thanos' shock.]`,
  `THANOS: The universe required correction. After that, the stones served no purpose, beyond temptation`,
  `THANOS: You should be grateful. [Punched by Hulk Buster]`,
  `THANOS: Gone. Reduced to atoms`,
  `THANOS: I used the stones to destroy the stones. It nearly killed me. But the work is done. It always will be. [sits himself a little straighter.] I am... inevitable.`,
  `THANOS: Ah, thank you, daughter. [Nebula looks down, a little uncomfortable.] Perhaps I treated you too harshly.
  `,
  `THANOS (2014): Ronan's located the Power Stone. I'm dispatching you to his ship.`,
  `THANOS (2014): His alternative is death, then. [Thanos wipes his double-bladed sword] Ronan's obsession clouds his judgement.`,
  `THANOS (2014): No, you won't`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function(e){
  e.preventDefault();
  //Assign the value of value to amount.value
  //But whenever a value is added, it's passed as a string
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random()*text.length);
  

  //if empty or negative or >9
  if(isNaN(value) || value<=0 || value>9){
    result.innerHTML = `<p class="result">${text[random]}</p>`
  }else{
    let tempText = text.slice(0, value);
    tempText =tempText.map(function(item){
      return  `<p class="result">${item}</p>`
    })
.join("");
result.innerHTML=tempText;
  }
})
