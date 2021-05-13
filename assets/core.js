window.addEventListener("load", init);

function init() {


//alert("Javascript loaded");
var submitBtn = document.querySelector('#submitbutton');

submitBtn.addEventListener('click', submit);
var correct = 0;


function submit(){
var answers = document.querySelectorAll("#value");
let output = document.querySelector("#output");


for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
        
        correct++

        

        
        
    }


}

console.log(correct);







}}