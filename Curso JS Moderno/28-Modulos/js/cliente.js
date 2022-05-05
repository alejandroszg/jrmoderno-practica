export const nombreCliente = 'Alejandro';
export const ahorro = 300;

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log('Sí tiene saldo');
    } else {
        console.log('El cliente no tiene saldo')
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}

export default function nuevaFuncion(){
    console.log('Este es el export default');
}