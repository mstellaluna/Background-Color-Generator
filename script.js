var css = document.querySelector("h3")
var body = document.getElementById("gradient")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

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