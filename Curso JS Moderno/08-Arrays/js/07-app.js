const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "iPad Mini 4",
    precio: 700
}

carrito.push(producto, producto2, producto3);

// Eliminar el último elemento de un arreglo
// carrito.pop();

// Eliminar el primer elemento de un arreglo
// carrito.shift();

// Eliminar elementos según se indique en los parámetros
// El método .splice(A, B) recibe dos parámetros; siendo A donde parte a eliminar y B los espacios para eliminar

carrito.splice(2, 1);

console.table(carrito);