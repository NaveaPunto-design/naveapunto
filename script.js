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
        grilla.innerHTML = `<div class="col-12 text-center py-4"><p class="text-secondary">No encontramos productos con esa búsqueda.</p></div>`;
        return;
    }

    grilla.innerHTML = filtrados.map(prod => {
        const disp = prod.stock - cantidadEnCarrito(prod.id);
        const ag = disp <= 0;
        return `
            <div class="col-6 col-md-4 col-lg-3 d-flex align-items-stretch">
                <div class="card bg-dark text-white border-secondary w-100 shadow-sm position-relative d-flex flex-column justify-content-between p-2">
                    ${prod.esCombo ? '<span class="position-absolute top-0 start-0 badge bg-danger m-2">COMBO TOP</span>' : ''}
                    <div>
                        <div class="text-center bg-black p-2 rounded mb-2">
                            <img src="${prod.imagen}" alt="${prod.nombre}" class="img-fluid" style="height: 100px; object-fit: contain;">
                        </div>
                        <span class="badge bg-outline-light border border-secondary text-secondary small mb-1">${prod.marca}</span>
                        <h6 class="card-title text-white mb-1 fs-6 fw-bold text-truncate">${prod.nombre}</h6>
                        <p class="card-text text-secondary small mb-2 text-truncate">${prod.descripcion}</p>
                    </div>

                    <div>
                        <button class="btn btn-outline-info btn-sm w-100 mb-2 py-1 small" onclick="abrirDetallesModal('${prod.nombre}')">Ver detalles</button>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="fw-bold text-white">${formatoPrecio(prod.precio)}</span>
                            <small class="text-${ag ? 'danger' : 'secondary'} small">${ag ? 'Agotado' : `${disp} disp.`}</small>
                        </div>
                        <button class="btn btn-danger btn-sm w-100 fw-bold py-1" onclick="agregarAlCarrito(${prod.id})" ${ag ? 'disabled' : ''}>
                            ${ag ? 'Sin stock' : 'Agregar 🛒'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function actualizarCarrito() {
    if (!listaCarrito || !contadorCarrito || !totalCarrito) return;
    const totalCant = carrito.reduce((t, i) => t + i.cantidad, 0);
    contadorCarrito.textContent = totalCant;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<p class="text-secondary text-center my-4">Tu carrito está vacío.</p>`;
    } else {
        listaCarrito.innerHTML = carrito.map(item => {
            const prod = obtenerProducto(item.id);
            if (!prod) return "";
            return `
                <div class="d-flex align-items-center justify-content-between bg-dark p-2 rounded mb-2 border border-secondary">
                    <img src="${prod.imagen}" alt="${prod.nombre}" style="width: 45px; height: 45px; object-fit: contain;" class="bg-black rounded me-2">
                    <div class="flex-grow-1">
                        <h6 class="mb-0 text-white small fw-bold text-truncate" style="max-width: 120px;">${prod.nombre}</h6>
                        <small class="text-danger fw-bold">${formatoPrecio(prod.precio)}</small>
                    </div>
                    <div class="d-flex align-items-center gap-1">
                        <button class="btn btn-sm btn-outline-light py-0 px-2" onclick="cambiarCantidad(${prod.id}, -1)">-</button>
                        <span class="small fw-bold px-1">${item.cantidad}</span>
                        <button class="btn btn-sm btn-outline-light py-0 px-2" onclick="cambiarCantidad(${prod.id}, 1)" ${item.cantidad >= prod.stock ? 'disabled' : ''}>+</button>
                        <button class="btn btn-sm btn-outline-danger py-0 px-1 ms-1" onclick="quitarDelCarrito(${prod.id})">✕</button>
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
    }
    mostrarProductos();
}

function agregarAlCarrito(id) {
    const prod = obtenerProducto(id);
    if (!prod) return;
    const ext = carrito.find(i => i.id === prod.id);
    if (ext) {
        if (ext.cantidad >= prod.stock) { return; }
        ext.cantidad++;
    } else {
        if (prod.stock < 1) { return; }
        carrito.push({ id: prod.id, cantidad: 1 });
    }
    actualizarCarrito();

    // Notificación Toast
    const toastTitulo = document.getElementById('toast-titulo');
    const toastSubtitulo = document.getElementById('toast-subtitulo');
    if (toastTitulo && toastSubtitulo) {
        toastTitulo.innerText = prod.nombre;
        toastSubtitulo.innerText = '¡Agregado al carrito de compras!';
        const toastElement = document.getElementById('toast-carrito');
        if (toastElement) {
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
        }
    }
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

// Filtros por categoría
document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        categoriaActual = btn.dataset.categoria;
        document.querySelectorAll(".filtro-btn").forEach(o => {
            o.classList.remove("btn-danger");
            o.classList.add("btn-outline-light");
        });
        btn.classList.remove("btn-outline-light");
        btn.classList.add("btn-danger");
        mostrarProductos();
    });
});

// Buscador
const busq = document.getElementById("buscar-productos");
if (busq) {
    busq.addEventListener("input", () => {
        busquedaActual = busq.value.trim();
        mostrarProductos();
    });
}

// Pedido WhatsApp
if (botonFinalizar) {
    botonFinalizar.addEventListener("click", () => {
        if (carrito.length === 0) return;
        const lineas = carrito.map(i => {
            const p = obtenerProducto(i.id);
            return `• ${p.nombre} x${i.cantidad} — ${formatoPrecio(p.precio * i.cantidad)}`;
        });
        const totalVal = carrito.reduce((s, i) => s + (obtenerProducto(i.id).precio * i.cantidad), 0);
        const msg = ["¡Hola, NaveaPunto! Quiero encargar este pedido:", "", ...lineas, "", `Total: ${formatoPrecio(totalVal)}`, "", "¿Me confirman cómo seguimos?"].join("\n");
        window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(msg)}`, "_blank");
    });
}

// Fichas técnicas profesionales
const detallesProductos = {
    "Sport Car Essence": { uso: "Fragancia concentrada para eliminar malos olores y ambientar el habitáculo.", aplicacion: "1. Agitar antes de usar.\n2. Rociar a 20-30 cm sobre alfombras o debajo de los asientos." },
    "Silicona para interiores": { uso: "Acondicionador de plásticos y vinilos que restaura el color y protege contra rayos UV.", aplicacion: "1. Limpiar el polvo previamente.\n2. Aplicar con pad de poliespuma.\n3. Repasar con microfibra seca." },
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

function abrirDetallesModal(nombre) {
    const prod = productos.find(i => i.nombre === nombre);
    if (!prod) return;
    const ext = detallesProductos[prod.nombre] || { uso: "Consultar envase.", aplicacion: "Seguir instrucciones." };

    document.getElementById("detalle-nombre").textContent = prod.nombre;
    document.getElementById("detalle-marca").textContent = prod.marca || "K78";
    document.getElementById("detalle-categoria").textContent = prod.categoria || "";
    document.getElementById("detalle-descripcion").textContent = prod.descripcion || "";
    document.getElementById("detalle-uso").textContent = ext.uso;
    document.getElementById("detalle-aplicacion").textContent = ext.aplicacion;
    document.getElementById("detalle-imagen").src = prod.imagen || "";
    document.getElementById("detalle-precio").textContent = formatoPrecio(prod.precio);
    document.getElementById("detalle-stock").textContent = `Stock disponible: ${prod.stock} ${prod.stock === 1 ? 'unidad' : 'unidades'}`;
    
    const btnAgregar = document.getElementById("detalle-agregar");
    btnAgregar.disabled = prod.stock <= 0;
    btnAgregar.onclick = () => {
        agregarAlCarrito(prod.id);
        const modalEl = document.getElementById('modalProducto');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    };

    const modalEl = document.getElementById('modalProducto');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

mostrarProductos();
actualizarCarrito();
