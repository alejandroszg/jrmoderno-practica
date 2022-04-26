function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}
const alejandro = new Cliente('Alejandro', 500);
const rapidocasa = new Empresa('Rapidocasa', 5000, 'inmobiliario');

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}
function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} del rubro de ${categoria} cuenta con un saldo de ${saldo}`;
}

console.log(formatearCliente(alejandro));
console.log(formatearEmpresa(rapidocasa));