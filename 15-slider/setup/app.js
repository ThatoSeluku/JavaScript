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
    carousel()
})

prevBtn.addEventListener("click", function(){
    counter--;
    carousel()
})

/**
 * 
 * Below we implement this CSS line into Javascript:
 * .slide{
  transform: translateX(-100%);
} 
 */

function carousel(){
  if(counter === slides.length){
      counter = 0;
  }
  if(counter<0){
counter = slides.length-1;
  }



    //Function runs for each number of slides
    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${counter*100}%)`
    })
}