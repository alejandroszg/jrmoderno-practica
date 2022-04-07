const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach(mes => {
    if(mes === 'Enero'){
        console.log('Enero sí existe');
    }
})

// Con el método .includes() | Funciona solo en arrays con índice y no con objeto
const existe2 = meses.includes('Enero'); // Evalúa si existe el valor y devuelve un booleano
console.log(existe2)

// El método .some() funciona igual, pero recibe Arrow Function y funciona en Arrays con índice o con objetos
const existe3 = meses.some(mes => mes === 'Febrero'); // Funcionando con Array de índice
console.log(existe3)
const existe4 = carrito.some(producto => producto.nombre === 'iPhone 13 Pro Max'); // Funcionando con Array de objetos
console.log(existe4)