document.addEventListener("DOMContentLoaded", () => {
    let ruta = window.location.pathname;
    if (ruta.endsWith("index.html") || ruta === "/" || ruta.endsWith("/")) {
        alert("Omar Joaquín Sosa Moreno. Actividad Fundamental #5");
    }
});

async function cargarXML() {
    try {
        const respuesta = await fetch('../IMG/AF02-1997940.xml');
        const texto = await respuesta.text();
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(texto, "text/xml");
        
        const temas = xmlDoc.getElementsByTagName("clase");
        let htmlContenido = "<ul>";
        
        for (let i = 0; i < temas.length; i++) {
            let nombreTema = temas[i].textContent;
            htmlContenido += `<li>${nombreTema}</li>`;
        }
        
        htmlContenido += "</ul>";
        
        document.getElementById("contenedor-xml").innerHTML = htmlContenido;
        
    } catch (error) {
        console.error("Error al leer el archivo XML:", error);
        document.getElementById("contenedor-xml").innerHTML = "<p>No se pudo cargar el visor XML.</p>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("contenedor-xml")) {
        cargarXML();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const navFlotante = document.createElement("div");
    navFlotante.className = "nav-flotante-universal";

    const btnIndex = document.createElement("a");
    btnIndex.innerHTML = "🏠 AF03";
    btnIndex.href = "../../index.html";
    btnIndex.className = "btn-flotante btn-flotante-index";

    const btnAnterior = document.createElement("a");
    btnAnterior.innerHTML = "◀ Ant";
    btnAnterior.href = "../../AF02/AF02-1997940.html"; 
    btnAnterior.className = "btn-flotante btn-flotante-ant";

    const btnSiguiente = document.createElement("a");
    btnSiguiente.innerHTML = "Sig ▶";
    btnSiguiente.href = "../../AF06/1997940/index.html"; 
    btnSiguiente.className = "btn-flotante btn-flotante-sig";

    navFlotante.appendChild(btnIndex);
    navFlotante.appendChild(btnAnterior);
    navFlotante.appendChild(btnSiguiente);

    document.body.appendChild(navFlotante);

    let memoriaScroll = window.scrollY;
    window.addEventListener("scroll", () => {
        let scrollActual = window.scrollY;
        
        if (scrollActual > memoriaScroll && scrollActual > 60) {
            navFlotante.classList.add("oculto");
        } else {
            navFlotante.classList.remove("oculto");
        }
        memoriaScroll = scrollActual;
    });
});