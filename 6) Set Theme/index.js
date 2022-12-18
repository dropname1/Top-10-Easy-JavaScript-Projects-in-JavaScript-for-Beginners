let pink = document.querySelector('.pink')
let gray = document.querySelector('.gray')
let white = document.querySelector('.white')
let body = document.querySelector('BODY') 
gray.checked = true

pink.addEventListener('click', (event)=> {
    setTheme(event)
})
gray.addEventListener('click', (event)=> {
    setTheme(event)
})
white.addEventListener('click', (event)=> {
    setTheme(event)
})

function setTheme (event) {
    if (pink.checked) {
        body.style.background = 'pink'
    }
    if (gray.checked) {
        body.style.background = "gray";
    }
    if (white.checked) {
        body.style.background = "#E5F0FF";
    }
}