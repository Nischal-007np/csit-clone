let ham=  document.querySelector("#hamburger")
let navLists= document.querySelector(".nav-lists")

ham.addEventListener("click",function(){
    navLists.classList.toggle(`active`)
});
