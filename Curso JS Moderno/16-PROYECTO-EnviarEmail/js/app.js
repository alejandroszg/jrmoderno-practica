// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const btnReset = document.querySelector('#resetBtn');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();

function eventListeners(){
    // Cuando se carga el DOM, arranca la app
    document.addEventListener('DOMContentLoaded', iniciarApp());

    // Campos del Formulario
    email.addEventListener('blur', validarFormulario); // El listener blur sirve cuando se sale de la caja de texto
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    // Cuando se envía el formulario
    btnEnviar.addEventListener('click', enviaEmail);

    // Cuando se reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);
}

// Funciones

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

}

// Valida el formulario
function validarFormulario(e){
    // Elimina los errores...

    if(e.target.value.length > 0){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
        if(er.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email inválido');
        }
    }

    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        console.log('Aún faltan campos por validar');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    
    const errores = document.querySelectorAll('.error') // Usamos querySelectorAll ya que admite propiedad .length
    if(errores.length === 0){
        formulario.appendChild(mensajeError)
    }
}

// Envía el mail
function enviaEmail(e){
    e.preventDefault();

    // Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    
    // Después de 3 segundos, ocultar el spinner y mostrar el mensaje
    setTimeout(()=>{
        spinner.style.display = 'none';
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje enviado satisfactoriamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'uppercase')
        formulario.insertBefore(parrafo, spinner);
        setTimeout(()=>{
            parrafo.remove();
            resetearFormulario();
            eliminarBordes(email, asunto, mensaje);
        }, 5000)
    }, 3000)
}

// Función que resetea el formulario
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
    
}

// Reinicia el borde de los inputs
function eliminarBordes(input1, input2, input3){
    const clases = 'border-green-500';
    input1.classList.remove(clases);
    input2.classList.remove(clases);
    input3.classList.remove(clases);
}