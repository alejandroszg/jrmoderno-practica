// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){
    // Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vacriar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    })
}

// Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    console.log(articulosCarrito)
}

//Elimina un curso del carrito
function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo articulosCarrito mediante el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido HTML donde se hace click y extrae información del curso
function leerDatosCurso(curso){
    // Crear un objeto con el contenido del curso seleccionado
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe){
        // Actualizamos la cantidad en el carrito
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            }else{
                return curso; // retorna los objetos que no están duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    // Agregar al HTML
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){
    limpiarHTML();
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100" /></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}"> X </td>
        `;
        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}