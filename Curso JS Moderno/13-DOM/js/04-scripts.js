// Elemento .querySelector('');

const card = document.querySelector('.card');
console.log(card);

//Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info)

//Seleccionar el segundo elemento de un listado de clases iguales
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2');
console.log(segundoCard);

// Seleccionar el formulario
const formulario = document.querySelector('#formulario');
console.log(formulario)

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);