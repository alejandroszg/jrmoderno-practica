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

// Instanciarlo
const alejandro = new Cliente('Alejandro', 6000);
const nathalie = new Cliente('Naty', 5500);
console.log(alejandro);
console.log(nathalie.nombreClienteSaldo());
nathalie.retiraSaldo(2500);
console.log(nathalie.nombreClienteSaldo());
