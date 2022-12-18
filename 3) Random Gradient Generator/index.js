let block = document.querySelector(".block");
let colors = [
    '#5199FF',
    '#4A69FF',
    '#2300B0',
    '#7EB3FF',
    '#1EC9E8',
    '#48CFAF',
    '#00DFC8',
    '#4BB462',
    '#8CBA51',
    '#FF756B',
    '#F59BAF',
    '#FF005C',
    '#E47CCD',
    '#F375CF',
    '#940CFE',
    '#E6E7E8',
    '#F0F6F4',
    '#BBC9DD',
    '#2F3538',
    'gold',
    'pink',
    'black',
    'green',
    'deeppink',
    'brown'
]
let button = document.querySelector('button')

button.addEventListener('click', ()=> {
    let ln = colors.length
    let num1 = Math.floor(Math.random()* ln) // 0 - ln
    let num2 = Math.floor(Math.random()* ln)
    block.style.background = `linear-gradient(90deg,${colors[num1]},${colors[num2]})`;
})