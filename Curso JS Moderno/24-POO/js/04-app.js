class Cliente {

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, su saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }
};

const alejandro = new Cliente ('Alejandro', 700);
console.log(alejandro.mostrarInformacion());
console.log(alejandro.#nombre);