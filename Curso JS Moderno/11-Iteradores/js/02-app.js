const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Silla Computadora', precio: 300, descuento: true},
    { nombre: 'Escritorio', precio: 100},
    { nombre: 'Mouse y Teclado', precio: 80}
]

for(let i=0; i<carrito.length;i++){
    if(carrito[i].descuento){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}

//La declaración continue hace que se salte el índice en el que el loop se está ejecutando.