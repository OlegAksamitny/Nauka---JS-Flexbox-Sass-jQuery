const btnIncrease = document.querySelector('button:nth-of-type(1)')
const btnDecrease = document.querySelector('button:nth-of-type(2)')
const text = document.querySelector('p')

let textSize = 16;

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + 'px';
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + 'px';
}

btnIncrease.addEventListener('click', textIncrease)
btnDecrease.addEventListener('click', textDecrease)

