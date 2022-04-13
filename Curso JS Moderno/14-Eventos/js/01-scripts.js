console.log(1); // Primero
document.addEventListener('DOMContentLoaded', ()=>{
    console.log(2); // Tercero
})
console.log(3); // Segundo

// El orden de ejecución es tal ya que primero JS lee todo el archivo y va ejecutando y, una vez se cargue el HTML
// ejecuta la función