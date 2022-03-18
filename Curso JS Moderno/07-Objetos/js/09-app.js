'use strict'

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;
// Sellar el objeto permite que se modifiquen los valores existentes más no crear alguno nuevo
Object.seal(producto);
console.log(Object.isSealed(producto));