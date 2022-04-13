// Event Bubbling: cuando se ejecutan eventos y se propagan al ser padres o hijos

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const infoTitulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en card');
});
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en info');
});
infoTitulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en titulo');
})