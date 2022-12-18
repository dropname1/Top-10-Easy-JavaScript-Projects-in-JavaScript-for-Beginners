let block = document.querySelector(".mainBlock")
let positionText = document.querySelector(".positionX")

block.addEventListener('mousemove',(e)=> {
    positionText.textContent = e.clientX
    block.style.backgroundColor = `hsl(${e.clientX}, 80%, 50%)` //1-360
})