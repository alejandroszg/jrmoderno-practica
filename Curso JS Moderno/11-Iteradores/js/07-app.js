const pendientes = ['Trabajar', 'Alimentación', 'Ejercicio', 'Estudiar'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Silla Computadora', precio: 300},
    { nombre: 'Escritorio', precio: 100},
    { nombre: 'Mouse y Teclado', precio: 80}
]

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre)
}