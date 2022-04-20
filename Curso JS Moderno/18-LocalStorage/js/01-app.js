localStorage.setItem('Nombre', 1);

const producto = {
    nombre: 'iPhone 13 Pro Max',
    precio: 1350000
}
localStorage.setItem('Producto', JSON.stringify(producto));

const meses = JSON.stringify(['Enero', 'Febrero', 'Marzo']);
localStorage.setItem('Meses', meses);