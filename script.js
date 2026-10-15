AOS.init({ duration: 800, once: true });

const productos = [
    { id: 1, nombre: "Sport Car Essence", descripcion: "Aromatizante ambiental · 3,25 g", categoria: "aromatizantes", marca: "K78", precio: 3700, stock: 8, imagen: "https://placehold.co/600x600/101722/1688ff?text=Sport+Car+Essence" },
    { id: 2, nombre: "Silicona para interiores", descripcion: "Para interiores, plásticos y alfombras · 600 ml", categoria: "interior", marca: "K78", precio: 12200, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Silicona+Interior" },
    { id: 3, nombre: "Car Wash PH Neutro", descripcion: "Shampoo para el lavado del auto · 600 ml", categoria: "lavado", marca: "K78", precio: 5500, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Car+Wash" },
    { id: 4, nombre: "APC All Purpose", descripcion: "Limpiador multipropósito · 600 ml", categoria: "limpieza", marca: "K78", precio: 6800, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=APC+All+Purpose" },
    { id: 5, nombre: "Car Wax", descripcion: "Cera para carrocería · 600 ml", categoria: "proteccion", marca: "K78", precio: 6600, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Car+Wax" },
    { id: 6, nombre: "Microfibra de secado Waffle", descripcion: "Paño de secado · 60 × 40 cm", categoria: "microfibras", marca: "K78", precio: 8000, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Microfibra+Waffle" },
    { id: 7, nombre: "Esponja Microfibra Dual", descripcion: "Esponja de microfibra · 23 × 11 × 5 cm", categoria: "accesorios", marca: "K78", precio: 6000, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Esponja+Dual" },
    { id: 8, nombre: "Foam Applicator", descripcion: "Aplicadores de poliespuma · pack x2", categoria: "accesorios", marca: "K78", precio: 2500, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Foam+Applicator" },
    { id: 9, nombre: "Pack Microfibra Multiuso", descripcion: "Pack de 3 paños de colores · 30 × 30 cm", categoria: "microfibras", marca: "K78", precio: 4800, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Pack+Microfibra" },
    { id: 10, nombre: "Wheel & Tire Brush", descripcion: "Cepillo para limpieza de ruedas y llantas", categoria: "accesorios", marca: "K78", precio: 10100, stock: 6, imagen: "https://placehold.co/600x600/101722/1688ff?text=Wheel+Tire+Brush" },
    { id: 11, nombre: "Combo Exterior Básico", descripcion: "Ph neutro + Esponja + Paño de secado + Cepillo", categoria: "lavado", marca: "K78 (Combo)", precio: 28000, stock: 5, esCombo: true, imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Exterior+Basico" },
    { id: 12, nombre: "Combo Interior Premium", descripcion: "APC + Silicona + Pad x2 + Aromatizante", categoria: "interior", marca: "K78 (Combo)", precio: 24000, stock: 5, esCombo: true, imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Interior+Premium" },
    { id: 13, nombre: "Combo Brillo y Protección", descripcion: "Cera Autobrillo + Paño microfibra x3", categoria: "proteccion", marca: "K78 (Combo)", precio: 10900, stock: 5, esCombo: true, imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Brillo+y+Proteccion" },
    { id: 14, nombre: "Combo Full Detailing", descripcion: "Los 10 productos completos para el cuidado total", categoria: "lavado", marca: "K78 (Combo)", precio: 63000, stock: 5, esCombo: true, imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Full+Detailing" }
];

const numeroWhatsApp = "5491160271711";
let carrito = [];
let categoriaActual = "todos";
let busquedaActual = "";

const grilla = document.getElementById("grilla-productos");
const contadorCarrito = document.getElementById("cantidad-carrito");
const fondoCarrito = document.getElementById("fondo-carrito");
const botonAbrirCarrito = document.getElementById("abrir-carrito");
const botonCerrarCarrito = document.getElementById("cerrar-carrito");
const listaCarrito = document.getElementById("items-carrito");
const totalCarrito = document.getElementById("total-carrito");
const botonFinalizar = document.getElementById("finalizar-compra");

const formatoPrecio = p => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(p);

function obtenerProducto(id) {
    return productos.find(prod => prod.id === Number(id));
}

function cantidadEnCarrito(id) {
    const item = carrito.find(i => i.id === Number(id));
    return item ? item.cantidad : 0;
}

function mostrarProductos() {
    if (!grilla) return;
    const filtrados = productos.filter(prod => {
        const cat = categoriaActual === "todos" || prod.categoria === categoriaActual;
        const texto = (prod.nombre + " " + prod.descripcion + " " + prod.marca).toLowerCase();
        return cat && texto.includes(busquedaActual.toLowerCase());
    });

    if (filtrados.length === 0) {
        grilla.innerHTML = `<p class="sin-productos" style="color:white; text-align:center; padding:20px;">No encontramos productos con esa búsqueda.</p>`;
        return;
    }

    grilla.innerHTML = filtrados.map(prod => {
        const disp = prod.stock - cantidadEnCarrito(prod.id);
        const ag = disp <= 0;
        return `
            <article class="tarjeta-producto" data-aos="fade-up">
                ${prod.esCombo ? '<span class="badge-combo">COMBO TOP</span>' : ''}
                <div class="producto-imagen">
                    <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x600/101722/f7faff?text=NaveaPunto';">
                    <span class="etiqueta-marca">${prod.marca}</span>
                </div>
                <div class="producto-info">
                    <p class="producto-categoria">${prod.categoria}</p>
                    <h3>${prod.nombre}</h3>
                    <p class="producto-descripcion">${prod.descripcion}</p>
                    <button class="boton-ver-detalles" type="button" data-detalles="${prod.nombre}">VER DETALLES</button>
                    <div class="producto-pie">
                        <div class="producto-precio">${formatoPrecio(prod.precio)}</div>
                        <span class="producto-stock ${ag ? "stock-agotado" : ""}">${ag ? "Sin stock" : `${disp}${disp === 1 ? "unidad" : "unidades"} disponibles`}</span>
                    </div>
                    <button class="boton-agregar" data-agregar="${prod.id}" ${ag ? "disabled" : ""}>${ag ? "Sin stock" : "Agregar al carrito"}</button>
                </div>
            </article>
        `;
    }).join("");
}

function actualizarCarrito() {
    if (!listaCarrito || !contadorCarrito || !totalCarrito) return;
    const totalCant = carrito.reduce((t, i) => t + i.cantidad, 0);
    contadorCarrito.textContent = totalCant;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío.</p>`;
    } else {
        listaCarrito.innerHTML = carrito.map(item => {
            const prod = obtenerProducto(item.id);
            if (!prod) return "";
            return `
                <div class="item-carrito">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <div class="item-carrito-info">
                        <h4>${prod.nombre}</h4>
                        <p>${formatoPrecio(prod.precio)}</p>
                        <div class="cantidad-controles">
                            <button data-cambiar="${prod.id}" data-delta="-1">−</button>
                            <span>${item.cantidad}</span>
                            <button data-cambiar="${prod.id}" data-delta="1" ${item.cantidad >= prod.stock ? "disabled" : ""}>+</button>
                        </div>
                        <button class="quitar-producto" data-quitar="${prod.id}">Quitar</button>
                    </div>
                </div>
            `;
        }).join("");
    }

    const totalVal = carrito.reduce((sum, item) => {
        const prod = obtenerProducto(item.id);
        return prod ? sum + (prod.precio * item.cantidad) : sum;
    }, 0);

    totalCarrito.textContent = formatoPrecio(totalVal);
    if (botonFinalizar) {
        botonFinalizar.disabled = carrito.length === 0;
        botonFinalizar.textContent = "Consultar y pedir por WhatsApp";
    }
    mostrarProductos();
}

function agregarAlCarrito(id) {
    const prod = obtenerProducto(id);
    if (!prod) return;
    const ext = carrito.find(i => i.id === prod.id);
    if (ext) {
        if (ext.cantidad >= prod.stock) { alert("Stock máximo alcanzado."); return; }
        ext.cantidad++;
    } else {
        if (prod.stock < 1) { alert("Sin stock."); return; }
        carrito.push({ id: prod.id, cantidad: 1 });
    }
    actualizarCarrito();
}

function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === Number(id));
    const prod = obtenerProducto(id);
    if (!item || !prod) return;
    const nueva = item.cantidad + Number(delta);
    if (nueva <= 0) {
        carrito = carrito.filter(i => i.id !== Number(id));
    } else if (nueva <= prod.stock) {
        item.cantidad = nueva;
    }
    actualizarCarrito();
}

function quitarDelCarrito(id) {
    carrito = carrito.filter(i => i.id !== Number(id));
    actualizarCarrito();
}

if (grilla) {
    grilla.addEventListener("click", e => {
        const btn = e.target.closest("[data-agregar]");
        if (btn) agregarAlCarrito(btn.dataset.agregar);
    });
}

if (listaCarrito) {
    listaCarrito.addEventListener("click", e => {
        const camb = e.target.closest("[data-cambiar]");
        const quit = e.target.closest("[data-quitar]");
        if (camb) cambiarCantidad(camb.dataset.cambiar, Number(camb.dataset.delta));
        if (quit) quitarDelCarrito(quit.dataset.quitar);
    });
}

document.querySelectorAll("[data-categoria]").forEach(btn => {
    btn.addEventListener("click", () => {
        categoriaActual = btn.dataset.categoria;
        document.querySelectorAll("[data-categoria]").forEach(o => o.classList.toggle("activo", o === btn));
        mostrarProductos();
    });
});

const busq = document.getElementById("buscar-productos");
if (busq) {
    busq.addEventListener("input", () => {
        busquedaActual = busq.value.trim();
        mostrarProductos();
    });
}

if (botonAbrirCarrito) botonAbrirCarrito.addEventListener("click", () => fondoCarrito?.classList.add("abierto"));
if (botonCerrarCarrito) botonCerrarCarrito.addEventListener("click", () => fondoCarrito?.classList.remove("abierto"));
if (fondoCarrito) fondoCarrito.addEventListener("click", e => { if (e.target === fondoCarrito) fondoCarrito.classList.remove("abierto"); });

if (botonFinalizar) {
    botonFinalizar.addEventListener("click", () => {
        if (carrito.length === 0) return;
        const lineas = carrito.map(i => {
            const p = obtenerProducto(i.id);
            return `• ${p.nombre} x${i.cantidad} — ${formatoPrecio(p.precio * i.cantidad)}`;
        });
        const totalVal = carrito.reduce((s, i) => s + (obtenerProducto(i.id).precio * i.cantidad), 0);
        const msg = ["¡Hola, NaveaPunto! Quiero este pedido:", "", ...lineas, "", `Total: ${formatoPrecio(totalVal)}`, "", "¿Me confirman cómo seguimos?"].join("\n");
        window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(msg)}`, "_blank");
    });
}

const detallesProductos = {
    "Sport Car Essence": { uso: "Fragancia concentrada para eliminar malos olores y ambientar el habitáculo.", aplicacion: "1. Agitar.\n2. Rocear a 20-30 cm sobre alfombras o debajo de asientos." },
    "Silicona para interiores": { uso: "Acondicionador de plásticos y vinilos que restaura el color y protege contra rayos UV.", aplicacion: "1. Limpiar el polvo.\n2. Aplicar con pad de poliespuma.\n3. Repasar con microfibra seca." },
    "Car Wash PH Neutro": { uso: "Shampoo de alta espuma y pH neutro que no barre ceras ni selladores.", aplicacion: "1. Diluir 30-50 ml en 10 litros de agua.\n2. Lavar de arriba hacia abajo y enjuagar." },
    "APC All Purpose": { uso: "Limpiador multipropósito desengrasante para plásticos, motor y manchas.", aplicacion: "1. Diluir según suciedad (1:10 o 1:5).\n2. Pulverizar, cepillar y retirar con microfibra húmeda." },
    "Car Wax": { uso: "Cera protectora que intensifica el brillo y repele agua y polvo.", aplicacion: "1. Con auto seco y a la sombra, aplicar capa fina con espuma.\n2. Lustrar con microfibra limpia." },
    "Microfibra de secado Waffle": { uso: "Toalla de secado técnico de gran absorción sin riesgo de micro-rayas.", aplicacion: "1. Desplegar sobre el panel húmedo.\n2. Deslizar tirando de las esquinas sin hacer presión." },
    "Esponja Microfibra Dual": { uso: "Esponja de doble cara para lavado seguro sin dañar la laca.", aplicacion: "1. Sumergir en shampoo y pasar suavemente.\n2. Enjuagar seguido con agua limpia." },
    "Foam Applicator": { uso: "Pads de poliespuma para distribución uniforme de ceras y acondicionadores.", aplicacion: "1. Colocar producto en el centro del pad.\n2. Trabajar con movimientos circulares." },
    "Pack Microfibra Multiuso": { uso: "Set de 3 paños de alta densidad para múltiples tareas de limpieza.", aplicacion: "1. Usar un color por área.\n2. Lavar con jabón neutro sin suavizante." },
    "Wheel & Tire Brush": { uso: "Cepillo ergonómico para remover polvillo de freno y barro en llantas.", aplicacion: "1. Rociar APC o desengrasante.\n2. Cepillar y enjuagar a presión." },
    "Combo Exterior Básico": { uso: "Kit esencial para un lavado exterior completo y seguro.", aplicacion: "1. Lavar con shampoo pH neutro y esponja dual.\n2. Limpiar llantas con cepillo.\n3. Enjuagar y secar con paño waffle." },
    "Combo Interior Premium": { uso: "Kit completo de limpieza y acondicionamiento de habitáculo.", aplicacion: "1. Limpiar plásticos con APC.\n2. Acondicionar con silicona.\n3. Ambientar con aromatizante." },
    "Combo Brillo y Protección": { uso: "Combo rápido de encerado y acabado espejo con gran repelencia.", aplicacion: "1. Aplicar cera sobre auto limpio y seco.\n2. Lustrar con microfibra." },
    "Combo Full Detailing": { uso: "Kit definitivo para el cuidado total interior y exterior del vehículo.", aplicacion: "1. Lavar exterior y secar.\n2. Encerar carrocería.\n3. Limpiar y acondicionar interiores." }
};

const modalProducto = document.getElementById("modal-producto");
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
let productoDetalleActual = null;

function abrirDetallesProducto(nombre) {
    const prod = productos.find(i => i.nombre === nombre);
    if (!prod || !modalProducto) return;
    productoDetalleActual = prod;
    const ext = detallesProductos[prod.nombre] || { uso: "Consultar envase.", aplicacion: "Seguir instrucciones." };

    detalleNombre.textContent = prod.nombre;
    detalleMarca.textContent = prod.marca || "Nave a Punto";
    detalleCategoria.textContent = prod.categoria || "";
    detalleDescripcion.textContent = prod.descripcion || "";
    detalleUso.textContent = ext.uso;
    detalleAplicacion.textContent = ext.aplicacion;
    detalleImagen.src = prod.imagen || "";
    detalleImagen.alt = prod.nombre;
    detallePrecio.textContent = formatoPrecio(prod.precio);
    detalleStock.textContent = `Stock disponible: ${prod.stock} ${prod.stock === 1 ? "unidad" : "unidades"}`;
    detalleAgregar.disabled = prod.stock <= 0;
    detalleAgregar.textContent = prod.stock <= 0 ? "SIN STOCK" : "AGREGAR AL CARRITO";

    modalProducto.classList.add("abierto");
    modalProducto.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-producto-abierto");
}

function cerrarDetallesProducto() {
    if (!modalProducto) return;
    modalProducto.classList.remove("abierto");
    modalProducto.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-producto-abierto");
}

if (grilla) {
    grilla.addEventListener("click", e => {
        const btn = e.target.closest("[data-detalles]");
        if (btn) abrirDetallesProducto(btn.dataset.detalles);
    });
}

document.getElementById("cerrar-modal-producto")?.addEventListener("click", cerrarDetallesProducto);
document.getElementById("cerrar-modal-fondo")?.addEventListener("click", cerrarDetallesProducto);
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarDetallesProducto(); });

if (detalleAgregar) {
    detalleAgregar.addEventListener("click", () => {
        if (!productoDetalleActual) return;
        const btn = document.querySelector(`[data-agregar="${productoDetalleActual.id}"]`);
        if (btn) { btn.click(); cerrarDetallesProducto(); }
    });
}

mostrarProductos();
actualizarCarrito();
