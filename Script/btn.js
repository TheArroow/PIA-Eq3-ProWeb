document.addEventListener("DOMContentLoaded", () => {
    // 1. Crear y configurar el botón
    const btnPIA = document.createElement("a");
    btnPIA.textContent = "⬅ Volver al PIA";
    btnPIA.href = "../../index.html"; 
    btnPIA.className = "btn-universal-pia";
    document.body.appendChild(btnPIA);

    // 2. Lógica para ocultar/mostrar al hacer scroll
    let scrollAnterior = 0; // Guardamos la posición inicial

    window.addEventListener("scroll", () => {
        // Obtenemos en qué pixel de la página estamos ahora
        let scrollActual = window.scrollY || document.documentElement.scrollTop;

        // Si el scroll actual es mayor al anterior, significa que estamos bajando
        if (scrollActual > scrollAnterior) {
            btnPIA.classList.add("oculto"); // Le ponemos la clase para esconderlo
        } else {
            // Si es menor, significa que estamos subiendo
            btnPIA.classList.remove("oculto"); // Le quitamos la clase para mostrarlo
        }

        // Actualizamos la memoria del scroll para el siguiente movimiento
        // El condicional evita que se rompa al hacer "rebote" hasta arriba en celulares
        scrollAnterior = scrollActual <= 0 ? 0 : scrollActual; 
    });
});