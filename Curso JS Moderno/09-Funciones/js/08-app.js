//Funciones que se pasan valores
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

agregarCarrito(100);


function impuestos(total){
    return total * 1.19;
}
const valorFinal = impuestos(total);
console.log(valorFinal);