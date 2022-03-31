iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');

    usuarioAutenticado('Alejandro');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario, espere...');
    setTimeout(function(){
        console.log(`Usuario autenticado: ${usuario}`)}, 3000); // Jugando con tiempo.
}