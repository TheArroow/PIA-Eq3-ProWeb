// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Solo mostramos la alerta si estamos en el index
    let ruta = window.location.pathname;
    if (ruta.endsWith("index.html") || ruta === "/" || ruta.endsWith("/")) {
        alert("Omar Joaquín Sosa Moreno. Actividad Fundamental #5");
    }
});

async function cargarXML() {
    try {
        // Reemplaza 'datos.xml' por la ruta real de tu archivo XML
        const respuesta = await fetch('../IMG/AF02-1997940.xml');
        const texto = await respuesta.text();
        
        // Parsear el texto plano a un objeto DOM de XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(texto, "text/xml");
        
        // Ejemplo de extracción: Supongamos que tu XML tiene etiquetas <tema>
        const temas = xmlDoc.getElementsByTagName("clase");
        let htmlContenido = "<ul>";
        
        for (let i = 0; i < temas.length; i++) {
            let nombreTema = temas[i].textContent;
            htmlContenido += `<li>${nombreTema}</li>`;
        }
        
        htmlContenido += "</ul>";
        
        // Inyectar el resultado en el div del HTML
        document.getElementById("contenedor-xml").innerHTML = htmlContenido;
        
    } catch (error) {
        console.error("Error al leer el archivo XML:", error);
        document.getElementById("contenedor-xml").innerHTML = "<p>No se pudo cargar el visor XML.</p>";
    }
}

// Ejecutar la función cuando la página esté lista
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("contenedor-xml")) {
        cargarXML();
    }
});