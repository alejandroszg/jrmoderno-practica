// Destructurin con Arreglos
const numeros = [10, 20, 30, 40, 50];

// const [ , , tercero] = numeros;
const [primero, ...tercero] = numeros;

console.log(primero);
console.log(tercero);