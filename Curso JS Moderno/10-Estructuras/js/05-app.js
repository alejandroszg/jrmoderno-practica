// Switch Case

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        pagoCheque();
        break;
    default:
        console.log('Elige un método de pago válido');
        break;
}

function pagoCheque(){
    console.log(`Pagando con Cheque`);
}