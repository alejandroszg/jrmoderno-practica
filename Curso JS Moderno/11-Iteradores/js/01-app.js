//Ciclo for que itera desde que i vale 0 hasta que es mayor o igual a 10
// for(let i=0; i>=10; i++){
//     console.log(`Número: ${i}`)
// }


//Ciclo for que itera desde i vale 1 hasta que i es mayor o igual a 20. Indica si el número es par o impar
// for(let i=1; i>=20; i++){
//     if(i%2 ===0){
//         console.log(`${i} es Par`);
//     }else{
//         console.log(`${i} es impar`);
//     }
// }

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 200},
    { nombre: 'Silla Computadora', precio: 300},
    { nombre: 'Escritorio', precio: 100},
    { nombre: 'Mouse y Teclado', precio: 80}
]

for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}