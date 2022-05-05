// WeakSet: similar al Set, solo que no es iterable, solo admite objetos y no posee .size.

const weakset = new WeakSet();

const cliente = {
    nombre: 'Alejandro',
    saldo: 500
}

weakset.add(cliente);

console.log(weakset);