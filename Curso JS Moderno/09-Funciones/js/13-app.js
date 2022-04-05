const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando la canción con el id ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist de ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
reproductor.nuevaCancion = 'Master of Puppets';
reproductor.obtenerCancion;
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Tiesto')