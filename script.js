var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var linearDirection = document.getElementsByName("toDirection")[0]

//displays default CSS RGBA values for linear-gradient
 
function currentSettings() {
    var CSSprop = window.getComputedStyle(body,null).getPropertyValue("background-image")
   // console.log(CSSprop)
    css.textContent = CSSprop
}

currentSettings()

function returnColor(){
  
  body.style.background = 
    "linear-gradient("
    + linearDirection.value
    + ", "
    + color1.value
    + ","
    + color2.value
    + ")";

    currentSettings()
  
}

document.querySelector('select[name="toDirection"]').onchange=returnColor;
color1.addEventListener("input", returnColor)
color2.addEventListener("input", returnColor)

