const arrow = document.querySelector('.arrow')
const menu = document.querySelector('nav')
function burger() {
    arrow.classList.toggle('show')
    menu.classList.toggle('show')
    
    console.log('dziala')
}
arrow.addEventListener('click', burger)