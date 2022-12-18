let time = document.querySelector('.time')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let msec = document.querySelector('.msec')

setInterval(()=> {
    let data = new Date();
    time.textContent = data.getHours()
    min.textContent = data.getMinutes()
    sec.textContent = data.getSeconds()
    msec.textContent = data.getMilliseconds()
},1)