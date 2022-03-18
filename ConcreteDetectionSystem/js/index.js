
const signInBtn = document.getElementById("signUp");
const signUpBtn = document.getElementById("singIn");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
var p = document.getElementById("change");

signUpBtn.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
    p.style.zIndex = 6;
})

signInBtn.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    p.style.zIndex = 11;
});
firstForm.addEventListener("submit" , (e)=>e.preventDefault());

secondForm.addEventListener("submit",(e)=> e.preventDefault());

