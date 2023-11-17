function mostrarImagenCompleta(src) {
    document.getElementById('fondoImagenCompleta').style.display = 'block';
    var imagenCompleta = document.createElement('img');
    imagenCompleta.src = src;
    imagenCompleta.id = 'imagenCompleta';
    document.body.appendChild(imagenCompleta);
}

function ocultarImagenCompleta() {
    document.getElementById('fondoImagenCompleta').style.display = 'none';
    var imagenCompleta = document.getElementById('imagenCompleta');
    if (imagenCompleta) {
        document.body.removeChild(imagenCompleta);
    }
}

