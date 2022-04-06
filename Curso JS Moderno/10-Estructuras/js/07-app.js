// Operador || revisa que se cumpla una de las condiciones
const efectivo = 100;
const credito = 1000;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo>=totalAPagar || disponible>=totalAPagar){
    console.log('puede pagar')
} else {
    console.log('No puede pagar')
}