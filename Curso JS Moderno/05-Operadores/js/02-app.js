const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisa si 2 elementos tienen el mismo valor

console.log(numero1 == numero3);
console.log(numero1 == numero2);

// Comparador estricto: revisa si además de tener el mismo valor, son del mismo tipo

console.log(numero1 === numero3);

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero != numero2);
console.log(numero1 !== parseInt(numero2));