let 
  dollar = document.querySelector('.dollar'),
  euro = document.querySelector('.euro'),
  gold = document.querySelector('.gold');

let 
  dollarResult = document.querySelector(".dollarResult"),
  euroResult = document.querySelector(".euroResult"),
  goldResult = document.querySelector(".goldResult");

dollar.addEventListener('input', (event)=> {
    convert(event, 'dollar')
})
euro.addEventListener('input', (event)=> {
    convert(event, 'euro')
})
gold.addEventListener('input', (event)=> {
    convert(event, 'gold')
})

function convert (event, currency) {
    if (currency === 'dollar') {
        dollarResult.textContent = dollar.value * 63.22; 
    }
    if (currency === "euro") {
        euroResult.textContent = euro.value * 66.17; 
    }
    if (currency === "gold") {
        goldResult.textContent = gold.value * 3581.25;
    }
}