const productoJSON = localStorage.getItem('Producto');
console.log(JSON.parse(productoJSON));

const mesesJSON = JSON.parse(localStorage.getItem('Meses'));
console.log(mesesJSON);