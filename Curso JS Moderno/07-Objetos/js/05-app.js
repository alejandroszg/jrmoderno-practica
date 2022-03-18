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

console.log(producto.informacion.fabricacion.pais)