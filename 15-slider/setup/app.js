const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, index){
//Seeing that index is array values, we're going to multiply by 100 and add % sign at the end. This ensures that sildeshow moves at values of 100
slide.style.left= `${index*100}%`; 
})

let counter = 0;
nextBtn.addEventListener("click", function(){
    counter++;
})

prevBtn.addEventListener("click", function(){
    counter--;
})