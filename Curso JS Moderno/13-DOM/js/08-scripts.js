const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Los espacios en blanco son considerados elementos

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';

// card.children[0].src = 'img/hacer3.jpg'
// console.log(card.children[0])

// Traversing del hijo al padre

console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

console.log(card);
console.log(card.nextElementSibling)