const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Silla Computadora', precio: 300},
    { nombre: 'Escritorio', precio: 100},
    { nombre: 'Mouse y Teclado', precio: 80}
]

const nuevoArreglo = carrito.map( producto => `Producto: ${producto.nombre} - Precio: ${producto.precio}`);
const casa = carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));
console.log(nuevoArreglo)
//El método .map() devuelve un nuevo arreglo con el resultado dado en la función