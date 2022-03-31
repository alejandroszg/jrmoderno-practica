//Arrow Functions
//Funcion Tradicional
const aprendiendo = function(){
    console.log(`Aprendiendo JavaScript`);
}

//Función de Flecha
//1. Cambio incial: el function se transforma en un "=>" del lado derecho de paréntesis
const aprendiendo2 = () => {
    console.log(`Aprendiendo JavaScript`);
}
//2. Cuando tienes una función de una sola línea, las llaves no son necesarias
const aprendiendo3 = () => console.log(`Aprendiendo JavaScript`);
//Además, cuando tiene una sola línea, dan por implícito el return
const aprendiendo4 = () => `Aprendiendo JavaScript`;
console.log(aprendiendo4());