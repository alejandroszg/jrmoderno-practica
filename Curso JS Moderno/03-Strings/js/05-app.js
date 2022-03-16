const producto = 'Monitor 20 Pulgadas';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(2,1));
// el método .slice cuando detecta primero un número mayor, no hace nada y devuelve un vacío

// Alternativa a .slice
console.log(producto.substring(0,10));
console.log(producto.substring(3,2));
// el método .slice cuando detecta primero un número mayor, voltea los valores y ubica primero el menor y luego el mayor

const usuario = "Alejandro";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(3));