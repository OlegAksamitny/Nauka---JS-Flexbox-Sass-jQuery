
const items = document.querySelectorAll('div')
items.forEach(function(item) {
    item.addEventListener('click', changeColor)});
function changeColor() {
    document.body.className = this.className
}