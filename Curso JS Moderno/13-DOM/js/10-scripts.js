// Crear HTML desde JavaScript
// Ejemplo de enlace
const enlace = document.createElement('a');

enlace.textContent = 'Nuevo enlace';
enlace.href = '/nuevo-enlace.html';
enlace.target = '_blank';

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace)

// Ejemplo de Card
// Crear párrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto de Rock';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$350 por persona';
parrafo3.classList.add('precio');

// Crear el div
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('.card');

// Agregar la info a la card
card.appendChild(imagen);
card.appendChild(info);

// Agergar al HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);