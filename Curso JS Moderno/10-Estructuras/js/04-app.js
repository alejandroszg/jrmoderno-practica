// Operador Mayor que y Menor que

const dinero = 100;
const aPagar = 500;
const tarjeta = false;
const cheque = false;

if (dinero >= aPagar){
    console.log('Sí puede pagar');
} else if(tarjeta){
    console.log('Sí puede pagar, tiene tarjeta');
} else if(cheque){
    console.log('Sí puede pagar, tiene cheque');
} else {
    console.log('Fondos insuficientes');
}