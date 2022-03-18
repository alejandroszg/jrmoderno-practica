const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1 kilo",
            medidas: "1 metro"
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

// Acceder a los valores del objeto mediante Destructuring

const { nombre, informacion, informacion: { fabricacion, fabricacion: {pais} }} = producto;

console.log(pais)