const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Silla Computadora', precio: 300},
    { nombre: 'Escritorio', precio: 100},
    { nombre: 'Mouse y Teclado', precio: 80}
]

// Este ciclo for cumple la función de iterar en cada uno de los elementos del array y acceder a sus datos
// La condicional de si la variable i es menor a la longitud del carrito se cumple, aumenta en 1 su valor es lo
// que nos permite iterar en todos los elementos del array hasta que alcance el número final según su longitud

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}

// El método .forEach brinda el mismo resultado que el ciclo for previamente visto, solo que simplifica el código
// El método recorre todo el arreglo

carrito.forEach(function(producto){
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
})