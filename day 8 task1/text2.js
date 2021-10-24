// target by id 
var btn=document.getElementById("btn");
console.log(btn);
var add=function(){
    alert("heloo");
}
btn.addEventListener("click",add);

// target by className
var para=document.getElementsByClassName("sec1");
console.log(para);

// target by tagName
var tag=document.getElementsByTagName("p");
console.log(tag);

// target by queryselector
var query1=document.querySelector(".sec1");
console.log(query1);

// target by queryselector
var quer2=document.querySelector("#btn");
console.log(quer2);

//target by queryselectorall 
var queryall=document.querySelectorAll(".sec1");
console.log(queryall);