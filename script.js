var css = document.querySelector("h3")
var body = document.getElementById("gradient")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

//displays default CSS RGBA values for linear-gradient

function currentSettings() {
    var CSSprop = window.getComputedStyle(body,null).getPropertyValue("background-image")
   // console.log(CSSprop)
    css.textContent = CSSprop
   
}
currentSettings()

//retrievs the select dropdown value 

function directionChange(select) {
    var selectedOption = select.options[select.selectedIndex]
    var selectedText = selectedOption.text
    console.log(selectedText)
    return setGradient(selectedText)
}

function setGradient(gradDir){
    body.style.background = 
    "linear-gradient("
    + gradDir
    + ", "
    + color1.value
    + ","
    + color2.value
    + ")";

    css.textContent = body.style.background 
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
