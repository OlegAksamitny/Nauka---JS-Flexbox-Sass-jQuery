const divOrange = document.querySelector('div.orange')
const divGreen = document.querySelector('div.green')
const divBlue = document.querySelector('div.blue')
const divYellow = document.querySelector('div.yellow')
const divRed = document.querySelector('div.red')

let body = document.body

function orange() {
    body = document.body.removeAttribute('class');
    body = document.body.classList.add('orange');
}
function green() {
    body = document.body.removeAttribute('class');
    body = document.body.classList.toggle('green');
}
function blue() {
    body = document.body.removeAttribute('class');
    body = document.body.classList.add('blue')
}
function yellow() {
    body = document.body.removeAttribute('class');
    body = document.body.classList.add('yellow')
}
function red() {
    body = document.body.removeAttribute('class');
    body = document.body.classList.add('red')
}

divOrange.addEventListener('click', orange)
divGreen.addEventListener('click', green)
divBlue.addEventListener('click', blue)
divYellow.addEventListener('click', yellow)
divRed.addEventListener('click', red)