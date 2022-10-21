const btnJs = document.querySelector('.js');

function square() {
    const divItem = document.createElement('div');
    divItem.classList.add('box')
    // Albo:
    // divItem.className = 'box';
    // Albo:
    // divItem.setAttribute('class', 'box')
    document.body.appendChild(divItem);
    // Albo:
    // document.body.appendChild(document.createElement('div'));
}


btnJs.addEventListener('click', square)



