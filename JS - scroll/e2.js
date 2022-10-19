const spanResult = document.querySelector('span')

window.addEventListener('scroll', function () {
    spanResult.textContent = window.scrollY;
})