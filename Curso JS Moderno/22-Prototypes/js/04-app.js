function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function (){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira){
    this.saldo -= retira;
}

// Heredar un Prototype

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}
// Traer las propiedades de prototype Cliente
Persona.prototype = Object.create(Cliente.prototype)
// Igualar el constructor con Cliente
Persona.prototype.constructor = Cliente;


// Instanciarlo
const alejandro = new Persona('Alejandro', 5000, 123123123);
console.log(alejandro);