//parent
var btn1=document.getElementById("btn1");
var par1=document.querySelector(".sec1");
function pan1() {
     console.log(par1.parentNode);
}
btn1.addEventListener("click",pan1);

//child
var btn2=document.getElementById("btn2");
var par2=document.querySelector(".sec3");
function pan2() {
     console.log(par2.firstChild);
}
btn2.addEventListener("click",pan2);

//sibling
var btn3=document.getElementById("btn3");
var par3=document.querySelector(".sec5");
function pan3() {
     console.log(par3.nextElementSibling);
}
btn3.addEventListener("click",pan3);

