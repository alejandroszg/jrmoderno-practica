// Object Literal
const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300,
    disponible: true
}

// Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 27 Pulgadas', 800)

console.log(producto2)