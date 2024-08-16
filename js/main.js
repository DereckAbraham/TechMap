let root = document.querySelector("#root")

root.innerHTML = `
    <header class="header">
        <div class="logo">
            <span>TechMap</span>
          </div>
          <nav>
            <a href="#">PC</a>
            <a href="#">GPU</a>
            <a href="#">CPU</a>
            <a href="#">Fuentes de poder</a>
            <a href="#">Placa madre</a>
            <a href="https://github.com/DereckAbraham/TechMap" class="gitlink">GitHub</a>
          </nav>
    </header>
    <section class="cuerpo">
        <div class="sidebar">
            <ul class="menu-categorias">
                <li><a href="#ranuras">Ranuras</a></li>
                <li><a href="#puertos">Puertos</a></li>
                <li><a href="#alimentacion">Alimentación</a></li>
                <li><a href="#disipadores">Disipadores</a></li>
                <li><a href="#chips">Chips</a></li>
            </ul>
        </div>
        <div class="background-container">
            <img src="https://cdn.pixabay.com/photo/2015/03/21/06/28/motherboard-683247_960_720.png" alt="Descripción de la imagen" class="responsive-image">
            
            <button class="btn btn1" data-modal="modal1">Disipador</button>
            <button class="btn btn2" data-modal="modal2">Ranuras de Memoria RAM</button>
            <button class="btn btn3" data-modal="modal3">Entrada De Alimentación</button>
            <button class="btn btn4" data-modal="modal4">BIOS</button>
            <button class="btn btn5" data-modal="modal5">Puertos de Video</button>
          </div>
          
    </section>
    <footer class="footer"></footer>

    <!-- Ventanas Modales -->
    <div id="modal1" class="modal">
    <div class="modal-content">
        <span class="close-btn" data-modal="modal1">
            <span class="material-symbols-outlined">close</span>
        </span>
        <span class="material-symbols-outlined" id="descargarModal1">download</span>
        <h2>Informacion del Disipador</h2>
        <p class="textoInfo">
            Un disipador es un instrumento que se utiliza para bajar la temperatura de algunos componentes electrónicos.
        </p>
        <img src="https://m.media-amazon.com/images/I/81R2HPCllOL.jpg" alt="">
    </div>
</div>
<div id="modal2" class="modal">
    <div class="modal-content">
        <span class="close-btn" data-modal="modal2">
            <span class="material-symbols-outlined">close</span>
        </span>
        <span class="material-symbols-outlined" id="descargarModal2">download</span>
        <h2>Informacion de las Ranuras de RAM</h2>
        <p class="textoInfo">
            Conector físico en una computadora tarjeta madre Diseñado para contener y conectar módulos de memoria de acceso aleatorio (RAM).
        </p>
        <h3>Tipos de Memoria RAM</h3>
        <ul>
            <li>DDR3 </li>
            <li>DDR4 </li>
            <li>DDR5 </li>
        </ul>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqw4roD0MGlJC0zh_yv1TMoRvkCJybrYDxFQ&s" alt="" class="componentes">
    </div>
</div>
<div id="modal3" class="modal">
    <div class="modal-content">
        <span class="close-btn" data-modal="modal3">
            <span class="material-symbols-outlined">close</span>
        </span>
        <span class="material-symbols-outlined" id="descargarModal3">download</span>
        <h2>Informacion de la entrada de la fuente de poder</h2>
        <p class="textoInfo">
            La fuente de poder en una computadora convierte la corriente alterna (AC) de la toma de corriente en corriente continua (DC) que necesitan los componentes de la computadora para funcionar. También distribuye la energía a estos componentes y protege el sistema contra problemas eléctricos.
        </p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQ04wnFv7rNBuHHtIH8h21Q5ff46l3pSVHQ&s" alt="">
    </div>
</div>
<div id="modal4" class="modal">
    <div class="modal-content">
        <span class="close-btn" data-modal="modal4">
            <span class="material-symbols-outlined">close</span>
        </span>
        <span class="material-symbols-outlined" id="descargarModal4">download</span>
        <h2>Informacion de la BIOS</h2>
        <p class="textoInfo">
            La BIOS (Basic Input/Output System) es un firmware en la placa madre que inicializa y prueba el hardware al encender la computadora antes de cargar el sistema operativo. Aquí está un resumen de sus funciones principales:
            <br>
        </p>
        <ul>
            <li><b>Inicialización del Hardware:</b> Verifica y configura componentes como la CPU, RAM, y dispositivos de almacenamiento.</li>
            <li><b>Prueba de POST (Power-On Self-Test):</b> Realiza una serie de pruebas para asegurar que el hardware esencial esté funcionando correctamente.</li>
            <li><b>Configuración del Sistema:</b> Permite ajustar configuraciones del hardware, como la prioridad de arranque y ajustes del reloj del sistema.</li>
            <li><b>Cargado del Sistema Operativo:</b> Busca y carga el cargador de arranque del sistema operativo desde el dispositivo de almacenamiento seleccionado.</li>
            <li><b>Interfaz de Usuario:</b> Proporciona una interfaz de configuración accesible generalmente mediante una tecla específica durante el arranque (como F2, DEL, ESC).</li>
        </ul>
        <img src="https://hardzone.es/app/uploads-hardzone.es/2020/06/Portada-BIOS.jpg" alt="" class="biosImg">
    </div>
</div>
<div id="modal5" class="modal">
    <div class="modal-content">
        <span class="close-btn" data-modal="modal5">
            <span class="material-symbols-outlined">close</span>
        </span>
        <span class="material-symbols-outlined" id="descargarModal5">download</span>
        <h2>Informacion de los Puertos de Video</h2>
        <p class="textoInfo">
            Los puertos de video en una computadora permiten conectar monitores y otros dispositivos de visualización. Aquí está un resumen de los tipos más comunes:
        </p>
        <ul>
            <li><b>HDMI (High-Definition Multimedia Interface):</b> Transmite video de alta definición y audio digital en un solo cable. Es ampliamente utilizado en televisores, monitores y proyectores.</li>
            <li><b>DisplayPort:</b> Similar a HDMI, ofrece alta calidad de video y audio. Es común en monitores de computadora y permite conexiones en cadena de varios monitores.</li>
            <li><b>DVI (Digital Visual Interface):</b> Transmite video digital, con versiones que admiten señales analógicas (DVI-A). Es menos común hoy en día pero aún se usa en algunos monitores.</li>
            <li><b>VGA (Video Graphics Array):</b> Conecta monitores mediante señales analógicas. Aunque es más antiguo y ofrece menor calidad en comparación con los estándares más nuevos, todavía se encuentra en algunos dispositivos.</li>
            <li><b>USB-C:</b> Un puerto versátil que puede transmitir video, audio, datos y energía. Usado en algunos monitores modernos y dispositivos portátiles.</li>
        </ul>
        <img src="https://hardzone.es/app/uploads-hardzone.es/2018/02/puertos-de-tarjeta-grafica-e1694516507827.jpg" alt="" class="puertoVidImg">
    </div>
</div>

`

function abrirModal(id) {
    let modal = document.getElementById(id);
    modal.classList.add('modal-show');
}

function cerrarModal(id) {
    let modal = document.getElementById(id);
    modal.classList.remove('modal-show');
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        let modalId = button.dataset.modal;
        abrirModal(modalId);
    });
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
        let modalId = button.dataset.modal;
        cerrarModal(modalId);
    });
});


window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        cerrarModal(event.target.id);
    }
});
