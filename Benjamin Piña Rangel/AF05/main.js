const btns = document.querySelectorAll('.tab-btn');
const contentPanes = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
  contentPanes.forEach((pane) => pane.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  btns.forEach((btn) => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === tabId) btn.classList.add('active');
  });
}

btns.forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
});

document.querySelectorAll('.nav-btn-grad').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dest = btn.getAttribute('data-nav');
    if (dest && document.getElementById(dest)) {
      switchTab(dest);
      document.querySelector('.glass-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.getElementById('btnAlertaPortada')?.addEventListener('click', () => {
  alert('📢 ¡Bienvenido! Actividad 5 - Semestre Enero-Junio 2026\nAlumno: Benjamin Piña Rangel | Matrícula: 2051766\nProgramación Web - Docente Lilia Santos.');
});

const tablaHorario = document.getElementById('horarioTabla');
const resBtn = document.getElementById('resaltarHoyBtn');
const resetBtn = document.getElementById('reiniciarTabla');

function limpiarHighlights() {
  tablaHorario?.querySelectorAll('td').forEach((cell) => cell.classList.remove('highlight'));
}

function resaltarDia() {
  if (!tablaHorario) return;
  limpiarHighlights();

  const hoy = new Date().getDay();
  if (hoy < 1 || hoy > 5) {
    alert('Hoy es fin de semana, no hay clases presenciales en horario.');
    return;
  }

  const colIndex = hoy;
  tablaHorario.querySelectorAll('tbody tr').forEach((fila) => {
    const celdas = fila.querySelectorAll('td');
    if (celdas.length > colIndex) {
      const celda = celdas[colIndex];
      if (celda.innerText.trim() !== '-' && celda.innerText.trim() !== '') {
        celda.classList.add('highlight');
      }
    }
  });
}

resBtn?.addEventListener('click', resaltarDia);
resetBtn?.addEventListener('click', limpiarHighlights);

document.addEventListener("DOMContentLoaded", () => {
    const navFlotante = document.createElement("div");
    navFlotante.className = "nav-flotante-universal";

    const btnIndex = document.createElement("a");
    btnIndex.innerHTML = "🏠 AF03";
    btnIndex.href = "../AF03/index.html";
    btnIndex.className = "btn-flotante btn-flotante-index";

    const btnAnterior = document.createElement("a");
    btnAnterior.innerHTML = "◀ Ant";
    btnAnterior.href = "../AF02/AF02-2051766.xml"; 
    btnAnterior.className = "btn-flotante btn-flotante-ant";

    const btnSiguiente = document.createElement("a");
    btnSiguiente.innerHTML = "Sig ▶";
    btnSiguiente.href = "../AF06/index.html"; 
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