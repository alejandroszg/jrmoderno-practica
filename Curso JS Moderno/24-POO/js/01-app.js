// Class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, su saldo es de ${this.saldo}`;
    }
};


const alejandro = new Cliente('Alejandro', 700);
console.log(alejandro.mostrarInformacion());
console.log(alejandro);

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, su saldo es de ${this.saldo}`;
    }
};

const alejo = new Cliente2('Alejandro', 700);
console.log(alejo.mostrarInformacion());