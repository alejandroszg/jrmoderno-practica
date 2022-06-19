const aplicarDescuento = new Promise((resolve, revejct) => {
    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado');
    } else {
        revejct('No se pudo aplicar');
    }
})

aplicarDescuento
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


// 3 Valores disponibles
// fullfilled - Se cumplió el promise
// rejected - No se cumplió el proimse
// pending - No se cumplió el promise y no fue rechazado

function descuento(mensaje){
    console.log(mensaje)
}