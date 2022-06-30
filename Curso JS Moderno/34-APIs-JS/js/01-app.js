// Solicitar permisos de notificación
const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`El resultado es ${resultado}`)
        })
});

// Emite una notificación
const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        new Notification('Esta es la notificación', {
            icon: './img/ccj.png',
            body: 'El Bongo Bongo'
        })
    }
});

