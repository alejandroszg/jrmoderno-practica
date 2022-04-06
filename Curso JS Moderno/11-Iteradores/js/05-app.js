//Ciclo do..while: siempre ejecuta un ciclo y luego evalúa la condición

let i = 1; // Inicialización

do {
    console.log(`Número ${i}`);
    i++; // Incremento
}while(i<10); // Condición

// FizzBuzz con ciclo do while

// let i = 1;
// do {
//     if(i%15 === 0){
//         console.log(`${i} FizzBuzz`)
//     }
//     else if(i%3 === 0){
//         console.log(`${i} Fizz`)
//     }
//     else if(i%5 === 0){
//         console.log(`${i} Buzz`)
//     }
//     i++;
// } while(i<100);