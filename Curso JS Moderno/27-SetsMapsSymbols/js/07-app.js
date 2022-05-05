// Generadores
function *crearGenerador(){
    yield 1;
    yield 'Alejandro';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

// console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

// A medida que se ejecuta el método .next() avanzan los pasos dentro del generador.