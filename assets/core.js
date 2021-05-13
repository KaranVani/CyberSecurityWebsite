window.addEventListener("load", init);

function init() {


//alert("Javascript loaded");
var submitBtn = document.querySelector('#submitbutton');

submitBtn.addEventListener('click', submit);

let output = document.querySelector("#output");
output.textContent = "";

function submit(){
count = 0;

if(document.getElementById("q1a").checked){
    count++
}if(document.getElementById("q2a").checked){
    count++
}if(document.getElementById("q3a").checked){
    count++
}


output.textContent = "You got " +count+ " correct.";




}}