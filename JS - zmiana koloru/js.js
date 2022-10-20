const divLeft = document.querySelector('.s1')
const divRight = document.querySelector('.s2')

function changeColor() {
    divLeft.classList.toggle('red')
    divRight.classList.toggle('red')
}

divLeft.addEventListener('click', changeColor)
divRight.addEventListener('click', changeColor)