const incButton = document.getElementById("incButton")
const resButton = document.getElementById("resButton")
const decButton = document.getElementById("decButton")
const num = document.getElementById("num")

let numb = 0

incButton.onclick =function(){
    numb++
    num.textContent = numb
}
resButton.onclick =function(){
    numb = 0
    num.textContent = 0
}
decButton.onclick =function(){
    numb--
    num.textContent = numb
}