// Con Delegation se evita el Event Bubbling
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')){
        console.log('Diste en el título');
    }
    if(e.target.classList.contains('categoria')){
        console.log('Diste en la categoría');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste en el precio');
    }
})