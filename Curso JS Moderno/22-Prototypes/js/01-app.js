const cliente = {
    nombre: 'Alejandro',
    saldo: 500
}

console.log(cliente);

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const alejandro = new Cliente('Alejandro', 500);
console.log(alejandro);