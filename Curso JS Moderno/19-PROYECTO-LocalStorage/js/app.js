// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    })

}

// Funciones

function agregarTweet(e){
    e.preventDefault();

    // Textarea del tuit
    const tweet = document.querySelector('#tweet').value;

    // Validación...
    if(tweet === ''){
        mostrarError('El mensaje no puede ir vacío');
        return; // evita que se ejecuten más líneas de código
    } 
        
    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }
    
    // Añadir tweets al arreglo
    tweets = [...tweets, tweetObj];

    // Crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // EDlimina el mensaje de error tras 3 segundos
    setTimeout(()=>{
        mensajeError.remove()
    }, 3000);
}

// Muestra listado de tweets en HTML
function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            // Agregar botón de eliminar tweet
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la función de eliminar
            btnEliminar.onclick = (id) => {
                borrarTweet(tweet.id);
            }

            // Crear tweet
            const li = document.createElement('li');
            li.innerText = tweet.texto;

            // Asignar el botón
            li.appendChild(btnEliminar);

            // Agregar en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega tweets actuales a LS
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}