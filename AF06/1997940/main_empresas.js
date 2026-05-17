// main_empresas.js
document.addEventListener("DOMContentLoaded", () => {
    // Alerta formal obligatoria del alumno al entrar a la portada
    let urlActual = window.location.pathname;
    if (urlActual.endsWith("index.html") || urlActual.endsWith("/")) {
        alert("Portafolio de Prácticas Profesionales - Omar Joaquín Sosa Moreno | FIME");
    }
});