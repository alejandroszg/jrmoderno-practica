// Detectar si hay conexión a internet

window.addEventListener('online', actualizarEstado)
window.addEventListener('offline', actualizarEstado)

function actualizarEstado(){
    if(navigator.online){
        console.log('Sí estás online')
    } else {
        console.log('No estás online')
    }
}