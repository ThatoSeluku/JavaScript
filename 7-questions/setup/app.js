//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
  //console.log(question);
  //Here we used "question" and not "document" as, if we chose 
  //document we would've selected every instance of the "question" query
const btn = question.querySelector(".question-btn");
btn.addEventListener("click", function(e){
questions.forEach(function(item){
  if(item !==question){
    item.classList.remove("show-text");
  }
})
  question.classList.toggle("show-text");
})
})

/*
// traversing the dom
//Create'btns' and assign it to all instances of ".question button"
const btns = document.querySelectorAll(".question-btn"); 
//Select each instance of "button", using loop tranversal
btns.forEach(function (questionbtn) {
  //Created an event listener for each btns instance:
  //The listener listens to click events, where function with parameter 'event' will be called
 questionbtn.addEventListener("click", function(e){
const question = e.currentTarget.parentElement.parentElement
 question.classList.toggle("show-text");
  });
});
*/