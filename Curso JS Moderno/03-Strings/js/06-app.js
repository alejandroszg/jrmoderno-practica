const producto = 'Monitor 20 Pulgadas';

// .repeat permite repetir una cadena de texto. Si no es un número entero, se redondea.
const texto = ' en Promoción'.repeat(2.4);

console.log(texto);
console.log(`${producto}${texto}!!!`);

// split divide un string tomando el criterio del caracter enviado

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, andar en bicicleta, estudiar programación, escuchar podcast";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript en #JSModernoConJuan";
console.log(tweet.split("#"));