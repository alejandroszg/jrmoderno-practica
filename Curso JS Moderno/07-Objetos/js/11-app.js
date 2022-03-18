const producto = {
    nombre: "Televisor 55 pulgadas",
    precio: 300000,
    stock: "disponible",
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y es de tamaño ${this.dimensiones.mediano}`)
    },
    dimensiones : {
        grande: "55 pulgadas",
        mediano: "32 pulgadas"
    }
}

producto.mostrarInfo()