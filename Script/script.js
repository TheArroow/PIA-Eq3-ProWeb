// 1. Lees el atributo desde el HTML
const archivoXML = document.body.getAttribute('data-xml');

// 2. Ejecutas tu código normal
function cargarDatos() {
    console.log("El archivo a leer es: " + archivoXML);
    // Lógica para leer el XML
}

cargarDatos();

fetch(archivoXML)
    .then(respuesta => respuesta.text())
    .then(texto => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(texto, "text/xml");

        const contenedor = document.getElementById('vista-xml');
        contenedor.innerHTML = '';

        for (let nodo of xmlDoc.childNodes) {
            const elementoVisual = construirArbolColapsable(nodo);
            if (elementoVisual) {
                contenedor.appendChild(elementoVisual);
            }
        }
    })
    .catch(error => {
        document.getElementById('vista-xml').textContent = 'Error al cargar el archivo XML.';
        console.error(error);
    });

function construirArbolColapsable(nodo) {
    if (nodo.nodeType === Node.TEXT_NODE) {
        if (nodo.nodeValue.trim() === '') return null;
        const span = document.createElement('span');
        span.className = 'texto-contenido';
        span.textContent = nodo.nodeValue.trim();
        return span;
    }

    if (nodo.nodeType === Node.COMMENT_NODE) {
        const divComentario = document.createElement('div');
        divComentario.className = 'comentario-xml';
        divComentario.textContent = ` ${nodo.nodeValue.trim()} `;
        return divComentario;
    }

    if (nodo.nodeType === Node.ELEMENT_NODE) {
        let atributosHtml = '';
        for (let attr of nodo.attributes) {
            atributosHtml += ` <span class="atributo-nombre">${attr.name}</span>="<span class="atributo-valor">${attr.value}</span>"`;
        }

        let tieneHijosComplejos = false;
        for (let i = 0; i < nodo.childNodes.length; i++) {
            if (nodo.childNodes[i].nodeType === Node.ELEMENT_NODE || nodo.childNodes[i].nodeType === Node.COMMENT_NODE) {
                tieneHijosComplejos = true;
                break;
            }
        }

        if (!tieneHijosComplejos) {
            const div = document.createElement('div');
            const contenido = nodo.textContent.trim();

            if (contenido) {
                div.innerHTML = `&lt;${nodo.nodeName}${atributosHtml}&gt;<span class="texto-contenido">${contenido}</span>&lt;/${nodo.nodeName}&gt;`;
            } else {
                div.innerHTML = `&lt;${nodo.nodeName}${atributosHtml} /&gt;`;
            }
            return div;
        }

        const details = document.createElement('details');
        details.open = true;

        const summary = document.createElement('summary');
        summary.innerHTML = `&lt;${nodo.nodeName}${atributosHtml}&gt;`;
        details.appendChild(summary);

        for (let hijo of nodo.childNodes) {
            const nodoVisual = construirArbolColapsable(hijo);
            if (nodoVisual) {
                details.appendChild(nodoVisual);
            }
        }

        const cierre = document.createElement('div');
        cierre.className = 'etiqueta-cierre';
        cierre.innerHTML = `&lt;/${nodo.nodeName}&gt;`;
        details.appendChild(cierre);

        return details;
    }

    return null;
}

const botonSubir = document.getElementById("btnSubir");

if (botonSubir) {
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            botonSubir.classList.add("mostrar");
        } else {
            botonSubir.classList.remove("mostrar");
        }
    };

    botonSubir.addEventListener("click", function (evento) {
        evento.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

