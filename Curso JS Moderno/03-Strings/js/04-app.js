const producto = '                   Monitor 20 Pulgadas                        ';

console.log(producto);

//Eliminar del inicio...
console.log(producto.trimStart())
//Eliminar del final...
console.log(producto.trimEnd());
//Eliminar ambos mediante chaining
console.log(producto.trimStart().trimEnd());

//Método tradicional
console.log(producto.trim());