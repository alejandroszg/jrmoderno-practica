const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Spread Operator con arreglo de índices
const meses2 = ['Agosto', ...meses];
console.log(meses2);

//Spread Operator con arreglo de objetos
const tablet = {nombre: 'iPad Mini Pro', precio: 400};
const producto = [...carrito, tablet];
console.log(producto)