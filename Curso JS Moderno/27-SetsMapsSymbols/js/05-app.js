const sym = Symbol('1');
const sym2 = Symbol('1');

// console.log(Symbol() === Symbol());

const nombre = Symbol('Nombre');
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Alejandro';
persona[apellido] = 'Sánchez';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);