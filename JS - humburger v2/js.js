const btn = document.querySelector('.burger');
const iconBurger = document.querySelector('.fa-burger');
const iconX = document.querySelector('.fa-sharp');
const column = document.querySelector('aside')

function menu() {
    iconBurger.classList.toggle('show')
    iconX.classList.toggle('show')
    column.classList.toggle('show')

    console.log('dziala')
}
btn.addEventListener('click', menu)
