const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
const id = e.target.dataset.id;
//So basically if the data id exists then do the following...
if(id){
//remove active from all buttons if you click anywhere
btns.forEach(function(btn){
    btn.classList.remove("active");
    //Add active to other button if you click anywhere
e.target.classList.add("active");
})


//Now for content:

//Remove active from content:
articles.forEach(function(article)
{
article.classList.remove("active");
});
const element = document.getElementById(id);
element.classList.add("active");
}
});