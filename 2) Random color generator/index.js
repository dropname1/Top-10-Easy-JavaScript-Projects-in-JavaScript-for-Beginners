let body = document.querySelector('body')
let button = document.querySelector('button')

button.addEventListener('click', ()=> {
    let hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = hexCode
})