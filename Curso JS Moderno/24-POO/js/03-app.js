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
        return `Bienvenido al cajero`
    }
};

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return `Bienvenido al cajero de empresas`
    }
}
const alejandro = new Cliente('Alejandro', 700);
const empresa = new Empresa('Rapidocasa', 5000, 1234, 'Real Estate');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());