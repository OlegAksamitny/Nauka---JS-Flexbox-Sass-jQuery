const btn = document.querySelector('button');
const square = document.querySelector('.square');

let turn = 0;

btn.addEventListener('click', function () {
    turn = turn + 45;
    square.style.transform = 'rotate(' + turn + 'deg)'
})
