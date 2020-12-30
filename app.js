// console.log("hello there! script is working from diff file");
// var username = prompt("give me your username");
// alert("this script works!!" + username);
// "input[name='translator']"  -->  input element with attribute name='traslator'

var btntranslate = document.querySelector("#btn-translate");
var textinput = document.querySelector("#text-input");
var outputdiv = document.querySelector("#output");
// outputdiv.innerText = "pooja maheshwari";
// console.log(btntranslate);
// console.log(textinput);
// console.log(outputdiv);

btntranslate.addEventListener("click", function clickEventHandler(){
  // console.log("clicked");
  // console.log("input", textinput.value);
  outputdiv.innerText = "hefgeur gyegfyh gewgh " + textinput.value;
})


