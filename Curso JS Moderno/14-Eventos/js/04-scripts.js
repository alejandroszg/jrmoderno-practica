//Evento submit a un formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); // Previene ejecución por defecto, ya sea un método post o acceder a un URL
    console.log('Buscando...');
    console.log(e.target.action);
}