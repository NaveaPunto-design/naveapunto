// LISTA DE PRODUCTOS Y COMBOS CON SUS FOTOS OFICIALES
let productos = [
    {
        id: 1,
        nombre: "Ph neutro car wash",
        marca: "K78",
        categoria: "lavado",
        precio: 5500,
        disponibles: 6,
        imagen: "phneutro.jpeg.jpeg",
        descripcion: "Shampoo con PH neutro que limpia sin dañar tratamientos previos ni ceras.",
        uso: " Shampoo de pH neutro para limpiar la pintura y la carrocería del auto.",
        aplicacion: "Diluir en agua, lavar con esponja y enjuagar."
    },
    {
        id: 2,
        nombre: "Aromatizantes ambiental Sport car essence",
        marca: "K78",
        categoria: "aromatizantes",
        precio: 3700,
        disponibles: 8,
        imagen: " perfumeindivudual.jpeg.jpeg",
        descripcion: "Aromatizante ambiental de alta duración. Fragancias disponibles: Cítrico, Pino, Lavanda, Vainilla, New Car y Acqua.",
        uso: " Aromatizante en gel para perfumar el interior del vehículo.",
        aplicacion: "Abrir según las instrucciones del envase y colgar en el interior del auto."
    },
    {
        id: 3,
        nombre: "Apc Limpiador multipropósito (interior y exterior)",
        marca: "K78",
        categoria: "limpieza",
        precio: 6800,
        disponibles: 6,
        imagen: "limpiadornaranja.jpeg.jpeg",
        descripcion: "Limpiador para eliminar suciedad y grasa de plásticos, alfombras y otras superficies compatibles.",
        uso: "Limpieza profunda de interiores, paneles y llantas.",
        aplicacion: "Diluir según la superficie, aplicar con un paño o cepillo y retirar la suciedad."
    },
    {
        id: 4,
        nombre: "Silicona Aromatizada para interiores plásticos y alfombras",
        marca: "K78",
        categoria: "interior",
        precio: 12200,
        disponibles: 6,
        imagen: "cilicona.jpeg.jpeg",
        descripcion: " Producto para acondicionar plásticos interiores, mejorar su aspecto y aportar brillo y fragancia.",
        uso: "Protección y brillo de plásticos interiores.",
        aplicacion: "Aplicar una pequeña cantidad con un paño o pad sobre la superficie limpia."
    },
    {
        id: 5,
        nombre: "Car wax cera Autobrillo",
        marca: "K78",
        categoria: "proteccion",
        precio: 6600,
        disponibles: 6,
        imagen: "ceraindividual.jpeg.jpeg",
        descripcion: "Cera automotriz Autobrillo de gran durabilidad para el brillo de la pintura y ayudar a proteger la carrocería.",
        uso: "Protección de la laca y acabado espejo.",
        aplicacion: "Aplicar sobre la pintura limpia y seca, distribuir y lustrar con microfibra."
    },
    {
        id: 6,
        nombre: "Esponja Microfibra",
        marca: "K78",
        categoria: "accesorios",
        precio: 6000,
        disponibles: 6,
        imagen: "esponjamicrofibraindividual.jpeg.jpeg",
        descripcion: "Esponja de microfibra  de doble acción para un lavado seguro sin rayas.",
        uso: "Lavado general y remoción de suciedad.",
        aplicacion: "Humedecer con agua y shampoo automotor y limpiar sin frotar con fuerza."
    },
    {
        id: 7,
        nombre: "Cepillo mango corto",
        marca: "K78",
        categoria: "accesorios",
        precio: 10100,
        disponibles: 6,
        imagen: "cepillomangocorto.jpeg.jpeg",
        descripcion: "Cepillo para limpiar llantas y otras superficies resistentes, removiendo suciedad de zonas difíciles.",
        uso: "Limpieza de llantas, alfombras y plásticos.",
        aplicacion: "Utilizar con un limpiador adecuado y frotar suavemente."
    },
    {
        id: 8,
        nombre: "Paño microfibra de secado (x3)",
        marca: "K78",
        categoria: "microfibras",
        precio: 4800,
        disponibles: 6,
        imagen: "pañosecado3.jpeg.jpeg",
        descripcion: "Pack de 3 Paños para limpiar superficies, retirar productos y dar terminaciones.",
        uso: "Limpieza de interiores, ceras y detalles.",
        aplicacion: "Utilizar limpios, secos o ligeramente húmedos, según la tarea."
    },
    {
        id: 9,
        nombre: "Pad Aplicador poliespuma pack (x2)",
        marca: "K78",
        categoria: "accesorios",
        precio: 2500,
        disponibles: 6,
        imagen: "esponjainidivual.jpeg.jpeg",
        descripcion: "Pack x2 de paños absorbente para secar el vehículo después del lavado y evitar marcas.",
        uso: "Aplicación uniforme de ceras y acondicionadores.",
        aplicacion: "Pasar suavemente sobre la carrocería después del enjuague."
    },
    {
        id: 10,
        nombre: "Paño de secado",
        marca: "K78",
        categoria: "microfibras",
        precio: 8000,
        disponibles: 6,
        imagen: "microfibrasecado.jpeg.jpeg",
        descripcion: "Paño de secado de alta absorción diseñado para no dejar marcas.",
        uso: "Secado rápido y seguro de vidrios y carrocería.",
        aplicacion: "Deslizar suavemente sobre la superficie húmeda."
    },
    // COMBOS OFICIALES CON FOTOS
    {
        id: 11,
        nombre: "Combo Exterior Básico",
        marca: "K78",
        categoria: "lavado",
        precio: 28000,
        disponibles: 5,
        imagen: "esponja.jpeg.jpeg",
        esCombo: true,
        descripcion: "Ph neutro + Esponja + Paño de secado + Cepillo mango corto.",
        uso: "Kit completo y especializado para realizar un lavado exterior eficiente, seguro y sin dejar marcas.",
        aplicacion: "Lavar con shampoo y esponja, limpiar las zonas adecuadas con el cepillo, enjuagar y secar."
    },
    {
        id: 12,
        nombre: "Combo Interior Premium",
        marca: "K78",
        categoria: "interior",
        precio: 24000,
        disponibles: 5,
        imagen: "combointeriorprem.jpeg.jpeg",
        esCombo: true,
        descripcion: "APC + Silicona + Pad x2 + Aromatizante (Aromas disponibles: Cítrico, Pino, Lavanda, Vainilla, New Car y Acqua).",
        uso: "Kit integral para la limpieza profunda, restauración de brillo, acondicionar plásticos y perfumar el vehículo.",
        aplicacion: "Limpiar con APC, aplicar la silicona con el pad y colocar el aromatizante."
    },
    {
        id: 13,
        nombre: "Combo Brillo y Protección",
        marca: "K78",
        categoria: "proteccion",
        precio: 10900,
        disponibles: 5,
        imagen: "cera.jpeg.jpeg",
        esCombo: true,
        descripcion: "Cera Autobrillo + Paño microfibra x3.",
        uso: "Kit diseñado para lograr un acabado espejo profesional y una alta protección duradera sobre la carrocería.",
        aplicacion: "Aplicar la cera por secciones y lustrar cuidadosamente utilizando los paños de microfibra."
    },
    {
        id: 14,
        nombre: "Combo Full Detailing",
        marca: "K78",
        categoria: "proteccion",
        precio: 63000,
        disponibles: 5,
        imagen: "ultimototal.jpeg.jpeg",
        esCombo: true,
        descripcion: "Incluye los 10 productos completos de la línea.",
        uso: "Mantenimiento profesional absoluto y cuidado integral de todo el vehículo de punta a punta.",
        aplicacion: "Combinar todos los artículos del kit según los requerimientos de lavado, interior y protección."
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito_naveapunto")) || [];
let categoriaActual = "todos";

// ELEMENTOS DEL DOM
const grillaProductos = document.getElementById("grilla-productos");
const buscador = document.getElementById("buscar-productos");
const botonesFiltro = document.querySelectorAll(".filtro");
const cantidadCarrito = document.getElementById("cantidad-carrito");
const abrirCarrito = document.getElementById("abrir-carrito");
const cerrarCarrito = document.getElementById("cerrar-carrito");
const fondoCarrito = document.getElementById("fondo-carrito");
const itemsCarrito = document.getElementById("items-carrito");
const totalCarrito = document.getElementById("total-carrito");
const finalizarCompra = document.getElementById("finalizar-compra");

// ELEMENTOS DEL MODAL DE DETALLES
const modalProducto = document.getElementById("modal-producto");
const cerrarModalProducto = document.getElementById("cerrar-modal-producto");
const cerrarModalFondo = document.getElementById("cerrar-modal-fondo");
const detalleImagen = document.getElementById("detalle-imagen");
const detalleMarca = document.getElementById("detalle-marca");
const detalleCategoria = document.getElementById("detalle-categoria");
const detalleNombre = document.getElementById("detalle-nombre");
const detalleDescripcion = document.getElementById("detalle-descripcion");
const detalleUso = document.getElementById("detalle-uso");
const detalleAplicacion = document.getElementById("detalle-aplicacion");
const detallePrecio = document.getElementById("detalle-precio");
const detalleStock = document.getElementById("detalle-stock");
const detalleAgregar = document.getElementById("detalle-agregar");

let productoSeleccionadoActual = null;

// MOSTRAR PRODUCTOS EN LA GRILLA
function mostrarProductos(lista) {
    if (!grillaProductos) return;
    grillaProductos.innerHTML = "";

    if (lista.length === 0) {
        grillaProductos.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8a99ad; padding: 40px 0;">No se encontraron productos.</p>`;
        return;
    }

    lista.forEach((p) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-producto");

        const badgeCombo = p.esCombo ? `<span class="badge-combo">COMBO</span>` : "";
        const disponibles = Number(p.disponibles ?? 0);
        const agotado = disponibles <= 0;

        const textoStock = agotado
            ? "Sin unidades disponibles"
            : `${disponibles} ${disponibles === 1 ? "unidad disponible" : "unidades disponibles"}`;

        tarjeta.innerHTML = `
            ${badgeCombo}
            <div class="producto-imagen-contenedor" onclick="abrirDetallesProducto(${p.id})">
                <img src="${p.imagen}" alt="${p.nombre}" class="producto-imagen" loading="lazy">
            </div>
            <div class="producto-info">
                <span class="producto-marca">${p.marca || "K78"}</span>
                <h3 class="producto-nombre" onclick="abrirDetallesProducto(${p.id})">${p.nombre}</h3>
                <p class="producto-precio">$${p.precio.toLocaleString("es-AR")}</p>
                <div class="producto-pie">
                    <span class="producto-stock ${agotado ? "stock-agotado" : ""}">${textoStock}</span>
                    <button class="boton-ver-detalles" onclick="abrirDetallesProducto(${p.id})">VER DETALLES</button>
                    <button class="boton-agregar" onclick="agregarAlCarrito(${p.id})" ${agotado ? "disabled" : ""}>
                        ${agotado ? "AGOTADO" : "AGREGAR"}
                    </button>
                </div>
            </div>
        `;
        grillaProductos.appendChild(tarjeta);
    });
}

// FILTRAR POR CATEGORÍA
botonesFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        btn.classList.add("activo");
        categoriaActual = btn.dataset.categoria;
        filtrarProductos();
    });
});

// BUSCADOR EN TIEMPO REAL
if (buscador) {
    buscador.addEventListener("input", filtrarProductos);
}

function filtrarProductos() {
    const textoBuscado = buscador ? buscador.value.toLowerCase().trim() : "";

    const filtrados = productos.filter((p) => {
        const coincideCategoria =
            categoriaActual === "todos" ||
            (p.categoria && p.categoria.toLowerCase() === categoriaActual.toLowerCase());

        const coincideTexto =
            p.nombre.toLowerCase().includes(textoBuscado) ||
            (p.marca && p.marca.toLowerCase().includes(textoBuscado)) ||
            (p.descripcion && p.descripcion.toLowerCase().includes(textoBuscado));

        return coincideCategoria && coincideTexto;
    });

    mostrarProductos(filtrados);
}

// ABRIR VENTANA DE DETALLES
function abrirDetallesProducto(id) {
    const p = productos.find((prod) => prod.id === id);
    if (!p) return;

    productoSeleccionadoActual = p;

    detalleImagen.src = p.imagen;
    detalleImagen.alt = p.nombre;
    detalleMarca.textContent = p.marca || "K78";
    detalleCategoria.textContent = p.categoria ? p.categoria.toUpperCase() : "GENERAL";
    detalleNombre.textContent = p.nombre;
    detalleDescripcion.textContent = p.descripcion || "Sin descripción disponible.";
    detalleUso.textContent = p.uso || "Uso general automotor.";
    detalleAplicacion.textContent = p.aplicacion || "Aplicar según instrucciones del envase.";
    detallePrecio.textContent = `$${p.precio.toLocaleString("es-AR")}`;

    const disponibles = Number(p.disponibles ?? 0);
    const agotado = disponibles <= 0;

    detalleStock.textContent = agotado
        ? "Sin unidades disponibles"
        : `${disponibles} ${disponibles === 1 ? "unidad disponible" : "unidades disponibles"}`;

    if (agotado) {
        detalleStock.classList.add("stock-agotado");
        detalleAgregar.disabled = true;
        detalleAgregar.textContent = "AGOTADO";
    } else {
        detalleStock.classList.remove("stock-agotado");
        detalleAgregar.disabled = false;
        detalleAgregar.textContent = "AGREGAR AL CARRITO";
    }

    modalProducto.classList.add("abierto");

    // TRUCO PARA EL BOTÓN "ATRÁS" DEL CELU: Añade estado al historial
    history.pushState({ modalAbierto: true }, "");
}

function cerrarModal() {
    modalProducto.classList.remove("abierto");
    // Si se cierra manualmente, damos un paso atrás en el historial del navegador si corresponde
    if (window.history.state && window.history.state.modalAbierto) {
        history.back();
    }
}

// ESCUCHAR EL BOTÓN "ATRÁS" DEL CELULAR PARA CERRAR EL MODAL EN VEZ DE SALIR DE LA WEB
window.addEventListener("popstate", () => {
    if (modalProducto.classList.contains("abierto")) {
        modalProducto.classList.remove("abierto");
    }
});

if (cerrarModalProducto) cerrarModalProducto.addEventListener("click", cerrarModal);
if (cerrarModalFondo) cerrarModalFondo.addEventListener("click", cerrarModal);

if (detalleAgregar) {
    detalleAgregar.addEventListener("click", () => {
        if (productoSeleccionadoActual) {
            agregarAlCarrito(productoSeleccionadoActual.id);
            cerrarModal();
        }
    });
}

// LOGICA DEL CARRITO
function agregarAlCarrito(id) {
    const p = productos.find((prod) => prod.id === id);
    if (!p) return;

    const enCarrito = carrito.find((item) => item.id === id);
    const disponibles = Number(p.disponibles ?? 0);

    if (enCarrito) {
        if (enCarrito.cantidad < disponibles) {
            enCarrito.cantidad++;
            mostrarToast(p.nombre);
        } else {
            alert("Alcanzaste el límite de unidades disponibles para este producto.");
            return;
        }
    } else {
        if (disponibles > 0) {
            carrito.push({ ...p, cantidad: 1 });
            mostrarToast(p.nombre);
        } else {
            alert("Producto agotado.");
            return;
        }
    }

    guardarYActualizarCarrito();
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find((p) => p.id === id);
    if (!item) return;

    const productoOriginal = productos.find((p) => p.id === id);
    const disponibles = Number(productoOriginal?.disponibles ?? 99);

    if (cambio > 0 && item.cantidad >= disponibles) {
        alert("No hay más unidades disponibles.");
        return;
    }

    item.cantidad += cambio;

    if (item.cantidad <= 0) {
        carrito = carrito.filter((p) => p.id !== id);
    }

    guardarYActualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter((p) => p.id !== id);
    guardarYActualizarCarrito();
}

function guardarYActualizarCarrito() {
    localStorage.setItem("carrito_naveapunto", JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    if (!cantidadCarrito || !itemsCarrito || !totalCarrito) return;

    const totalUnidades = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    cantidadCarrito.textContent = totalUnidades;

    if (carrito.length === 0) {
        itemsCarrito.innerHTML = `<p class="carrito-vacio" style="color: #8a99ad; text-align: center; padding: 30px 0;">El carrito está vacío.</p>`;
        totalCarrito.textContent = "$0";
        return;
    }

    itemsCarrito.innerHTML = "";
    let subtotal = 0;

    carrito.forEach((p) => {
        subtotal += p.precio * p.cantidad;
        const item = document.createElement("div");
        item.classList.add("item-carrito");
        item.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="item-carrito-info">
                <h4>${p.nombre}</h4>
                <p>$${p.precio.toLocaleString("es-AR")}</p>
                <div class="cantidad-controles">
                    <button onclick="cambiarCantidad(${p.id}, -1)">-</button>
                    <span>${p.cantidad}</span>
                    <button onclick="cambiarCantidad(${p.id}, 1)">+</button>
                </div>
                <button class="quitar-producto" onclick="eliminarDelCarrito(${p.id})">Eliminar</button>
            </div>
        `;
        itemsCarrito.appendChild(item);
    });

    totalCarrito.textContent = `$${subtotal.toLocaleString("es-AR")}`;
}

// MOSTRAR TOAST (NOTIFICACIÓN SOBRIA)
function mostrarToast(nombreProducto) {
    const toastElement = document.getElementById("toast-carrito");
    if (!toastElement) return;

    const toastSubtitulo = document.getElementById("toast-subtitulo");
    if (toastSubtitulo) {
        toastSubtitulo.textContent = `${nombreProducto} se sumó a tu pedido.`;
    }

    const toast = new bootstrap.Toast(toastElement, { delay: 2500 });
    toast.show();
}

// PEDIDO POR WHATSAPP
if (finalizarCompra) {
    finalizarCompra.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        let mensaje = "Hola NaveaPunto! Quisiera realizar el siguiente pedido:\n\n";
        let total = 0;

        carrito.forEach((p) => {
            const subtotalItem = p.precio * p.cantidad;
            total += subtotalItem;
            mensaje += `• ${p.nombre} x${p.cantidad} - $${subtotalItem.toLocaleString("es-AR")}\n`;
        });

        mensaje += `\n*TOTAL: $${total.toLocaleString("es-AR")}*`;
        mensaje += "\n\n¿Tienen disponibilidad para coordinar la entrega?";

        const telefono = "5491160271711";
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });
}

// ABRIR Y CERRAR CARRITO
function alternarCarrito(abrir) {
    if (!fondoCarrito) return;
    if (abrir) {
        fondoCarrito.classList.add("abierto", "activo");
        document.body.classList.add("carrito-abierto");
    } else {
        fondoCarrito.classList.remove("abierto", "activo");
        document.body.classList.remove("carrito-abierto");
    }
}

if (abrirCarrito) abrirCarrito.addEventListener("click", () => alternarCarrito(true));
if (cerrarCarrito) cerrarCarrito.addEventListener("click", () => alternarCarrito(false));
if (fondoCarrito) {
    fondoCarrito.addEventListener("click", (e) => {
        if (e.target === fondoCarrito) alternarCarrito(false);
    });
}

// INICIALIZAR
mostrarProductos(productos);
actualizarCarrito();
if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true });
}
