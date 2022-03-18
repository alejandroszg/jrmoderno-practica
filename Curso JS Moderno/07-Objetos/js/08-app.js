'use strict'

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Congelar el objeto para que no se vea alterado

Object.freeze(producto);


// Método que consulta si el objeto está congelado
console.log(Object.isFrozen(producto));


console.log(producto)