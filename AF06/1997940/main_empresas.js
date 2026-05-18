
document.addEventListener("DOMContentLoaded", () => {
    let urlActual = window.location.pathname;
    if (urlActual.endsWith("index.html") || urlActual.endsWith("/")) {
        alert("Portafolio de Prácticas Profesionales - Omar Joaquín Sosa Moreno | FIME");
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
    btnAnterior.href = "../../ACT5/1997940/index.html"; 
    btnAnterior.className = "btn-flotante btn-flotante-ant";

    const btnSiguiente = document.createElement("a");
    btnSiguiente.innerHTML = "Sig ▶";
    btnSiguiente.href = "../../AF07/AF07.html"; 
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