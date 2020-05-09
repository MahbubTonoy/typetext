var getId = document.getElementById("typeText");
var getVal = getId.getAttribute("data-text");
var getSpeed = getId.getAttribute("data-speed");
var valueSplit = getVal.split("");
var outputType = getId.getAttribute("data-output");
var i = 0, x = "", l = valueSplit.length;
setInterval(function(){
x += valueSplit[i];
i++;
if(i > l){
  i = 0;
  x = "";
}
  if(outputType == "innerHTML") {
    getId.innerHTML = x;
  }
  if(outputType == "value") {
    getId.value = x;
  }
  if(outputType == "placeholder") {
    getId.setAttribute("placeholder", x);
  }
}, getSpeed);