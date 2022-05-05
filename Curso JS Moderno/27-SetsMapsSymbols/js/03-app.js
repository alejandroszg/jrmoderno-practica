const cliente = new Map();

cliente.set('saldo', 3000);
cliente.set('nombre', 'Nathalie');
cliente.set('tipo', 'Premium');

cliente.set('edad', 31);
console.log(cliente.has('nombre'));



console.log(cliente.get('edad'));
console.log(cliente);

// Métodos
// .set('llave', 'valor') = permite agregar datos después de creado, si ya existe, reescribe.
// .size = number // Longitud 
// .has('nombre') = boolean // Si existe
// .get('nombre') = Alejandro // Trae valor de la llave, si esta no existe, undefined
// .clear()
