const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso:'1kg',
    largo: '1m'
}

console.log(producto);
console.log(medidas);

// Juntar dos objetos o más, con el método assign

const resultado = Object.assign(producto, medidas)
console.log(resultado)

// Mediante Spread Operator 
const resultado2 = {...producto, ...medidas};
console.log(resultado2);