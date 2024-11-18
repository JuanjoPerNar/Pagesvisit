const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

function actualizarVisitas() {
    let visitas = localStorage.getItem('contadorVisitas');
    if (!visitas) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    localStorage.setItem('contadorVisitas', visitas);
    contadorVisitas.textContent = visitas;    
}

actualizarVisitas()

function restablecerContador() {
    localStorage.removeItem('contadorVisitas');
    contadorVisitas.textContent = 0
}

btnReestablecer.addEventListener('click', restablecerContador);

