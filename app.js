// console.log("hello there! script is working from diff file");
// var username = prompt("give me your username");
// alert("this script works!!" + username);

var btntranslate = document.querySelector("#btn-translate");
// console.log(btntranslate);
btntranslate.addEventListener("click", function clickEventHandler(){
  console.log("clicked");
  console.log("input", textinput.value);
})

var textinput = document.querySelector("#text-input");
console.log(textinput);

// "input[name='translator']"  -->  input element with attribute name='traslator'

