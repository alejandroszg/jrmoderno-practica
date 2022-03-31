const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`)
    },
    borrar: function(id){
        console.log(`Borrando la canción con el id ${id}`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist de ${nombre}`)
    }
}

reproductor.crearPlaylist('Ozuna');
reproductor.pausar();
