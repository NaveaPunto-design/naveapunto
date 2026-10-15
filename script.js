// VARIABLES GLOBALES
let productos = [];
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

// CARGAR PRODUCTOS DESDE EL JSON
async function cargarProductos() {
    try {
        const respuesta = await fetch("productos.json");
        productos = await respuesta.json();
        mostrarProductos(productos);
        actualizarCarrito();
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

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

        const disponibles = Number(p.disponibles ?? 0);
        const agotado = disponibles <= 0;

        // Formato prolijo para las unidades disponibles con espacio correcto
        const textoStock = agotado
            ? "Sin unidades disponibles"
            : `${disponibles} ${disponibles === 1 ? "unidad disponible" : "unidades disponibles"}`;

        tarjeta.innerHTML = `
            <div class="producto-imagen-contenedor" onclick="abrirDetallesProducto(${p.id})">
                <img src="${p.imagen}" alt="${p.nombre}" class="producto-imagen" loading="lazy">
            </div>
            <div class="producto-info">
                <span class="producto-marca">${p.marca || "K78"}</span>
                <h3 class="producto-nombre" onclick="abrirDetallesProducto(${p.id})">${p.nombre}</h3>
                <p class="producto-precio">$${p.precio.toLocaleString("es-AR")}</p>
                <div class="producto-pie">
                    <span class="producto-stock ${agotado ? "stock-agotado" : ""}">${textoStock}</span>
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

    modalProducto.setAttribute("aria-hidden", "false");
    modalProducto.classList.add("activo");
}

function cerrarModal() {
    modalProducto.setAttribute("aria-hidden", "true");
    modalProducto.classList.remove("activo");
}

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
        itemsCarrito.innerHTML = `<p class="carrito-vacio">El carrito está vacío.</p>`;
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
            <div class="item-detalles">
                <h4>${p.nombre}</h4>
                <p class="item-precio">$${p.precio.toLocaleString("es-AR")}</p>
                <div class="controles-cantidad">
                    <button onclick="cambiarCantidad(${p.id}, -1)">-</button>
                    <span>${p.cantidad}</span>
                    <button onclick="cambiarCantidad(${p.id}, 1)">+</button>
                </div>
            </div>
            <button class="boton-eliminar" onclick="eliminarDelCarrito(${p.id})">✕</button>
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

        const telefono = "5491112345678"; // Reemplazar con tu número real de WhatsApp
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });
}

// ABRIR Y CERRAR CARRITO
if (abrirCarrito) {
    abrirCarrito.addEventListener("click", () => {
        fondoCarrito.classList.add("activo");
    });
}

if (cerrarCarrito) {
    cerrarCarrito.addEventListener("click", () => {
        fondoCarrito.classList.remove("activo");
    });
}

if (fondoCarrito) {
    fondoCarrito.addEventListener("click", (e) => {
        if (e.target === fondoCarrito) {
            fondoCarrito.classList.remove("activo");
        }
    });
}

// INICIALIZAR
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 800, once: true });
    }
});
