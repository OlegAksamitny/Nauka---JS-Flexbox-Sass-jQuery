// Potrzebne zmienne
let counter = 0;

// Pobieramy potrzebne elementy strony
const spanCounter = document.querySelector('span.counter');
const buttonPlus = document.querySelector('button:nth-of-type(1)');
const buttonMinus = document.querySelector('button:nth-of-type(2)');

// Nasłuchiwanie na zdarzenie + określiliśmy akcje w funkcji
buttonPlus.addEventListener('click', function () {
    counter++;
    spanCounter.textContent = counter
})

buttonMinus.addEventListener('click', function () {
    counter--;
    spanCounter.textContent = counter
})