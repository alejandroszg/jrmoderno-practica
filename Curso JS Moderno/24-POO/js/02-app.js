// Class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, su saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
};


const alejandro = new Cliente('Alejandro', 700);
console.log(alejandro.mostrarInformacion());
console.log(alejandro);
console.log(Cliente.bienvenida()); // static forma parte de la clase, no del objeto
// console.log(alejandro.bienvenida());

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
// console.log(alejo.mostrarInformacion());