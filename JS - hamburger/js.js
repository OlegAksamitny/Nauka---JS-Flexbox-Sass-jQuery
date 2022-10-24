const btn = document.querySelector('.burger')

function menu() {
    btn.classList.toggle('active')
}

btn.addEventListener('click', menu)
