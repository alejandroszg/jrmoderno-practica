const carrito = new Set();

carrito.add('Camisa'); // Agrega elementos al Set
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

carrito.delete('Disco #3'); // Elimina elementos del Set
console.log(carrito.delete('Disco #2')); // Al estar entre console.log, devuelve booleano
carrito.clear(); // Elimina todos los elementos del Set
console.log(carrito.size); // Indica longitud del Set