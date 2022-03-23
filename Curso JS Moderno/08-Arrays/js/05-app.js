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

// método .push para agregar al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 100
}

// método para agregar al principio de un arreglo

carrito.unshift(producto3);

console.table(carrito);