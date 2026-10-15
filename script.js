
/* ==================================================
   NAVEAPUNTO | CATÁLOGO, COMBOS, CARRITO Y WHATSAPP
================================================== */

// PRECIOS EN PESOS ARGENTINOS

const productos = [
    {
        id: 1,
        nombre: "Sport Car Essence",
        descripcion: "Aromatizante ambiental · 3,25 g",
        categoria: "aromatizantes",
        marca: "K78",
        precio: 3700,
        stock: 8,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Sport+Car+Essence"
    },
    {
        id: 2,
        nombre: "Silicona para interiores",
        descripcion: "Para interiores, plásticos y alfombras · 600 ml",
        categoria: "interior",
        marca: "K78",
        precio: 12200,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Silicona+Interior"
    },
    {
        id: 3,
        nombre: "Car Wash PH Neutro",
        descripcion: "Shampoo para el lavado del auto · 600 ml",
        categoria: "lavado",
        marca: "K78",
        precio: 5500,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Car+Wash"
    },
    {
        id: 4,
        nombre: "APC All Purpose",
        descripcion: "Limpiador multipropósito · interior y exterior",
        categoria: "limpieza",
        marca: "K78",
        precio: 6800,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=APC+All+Purpose"
    },
    {
        id: 5,
        nombre: "Car Wax",
        descripcion: "Cera para carrocería · Cera Autobril lo",
        categoria: "proteccion",
        marca: "K78",
        precio: 6600,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Car+Wax"
    },
    {
        id: 6,
        nombre: "Paño de secado",
        descripcion: "Paño para secado automotor",
        categoria: "microfibras",
        marca: "Accesorios",
        precio: 8000,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Pano+Secado"
    },
    {
        id: 7,
        nombre: "Esponja Microfibra Dual",
        descripcion: "Esponja de microfibra para lavado",
        categoria: "accesorios",
        marca: "Accesorios",
        precio: 6000,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Esponja+Microfibra"
    },
    {
        id: 8,
        nombre: "Foam Applicator",
        descripcion: "Aplicadores de poliespuma · pack x2",
        categoria: "accesorios",
        marca: "Accesorios",
        precio: 2500,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Foam+Applicator"
    },
    {
        id: 9,
        nombre: "Pack Microfibra Multiuso",
        descripcion: "Pack de 3 paños · 30 × 30 cm",
        categoria: "microfibras",
        marca: "Accesorios",
        precio: 4800,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Pack+Microfibra"
    },
    {
        id: 10,
        nombre: "Cepillo de mango corto",
        descripcion: "Cepillo para limpieza de ruedas y zonas compatibles",
        categoria: "accesorios",
        marca: "Accesorios",
        precio: 10100,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Cepillo+Mango+Corto"
    }
];


// COMBOS DE NAVEAPUNTO
// El stock de los combos es independiente del stock individual.

const combos = [
    {
        id: 101,
        nombre: "Exterior Básico",
        descripcion: "PH Neutro + esponja + paño de secado + cepillo",
        categoria: "combos",
        marca: "NaveaPunto",
        precio: 28000,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Exterior+Basico"
    },
    {
        id: 102,
        nombre: "Interior Premium",
        descripcion: "APC + silicona + pad x2 + aromatizante",
        categoria: "combos",
        marca: "NaveaPunto",
        precio: 24000,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Interior+Premium"
    },
    {
        id: 103,
        nombre: "Brillo y Protección",
        descripcion: "Car Wax + pack de 3 paños de microfibra",
        categoria: "combos",
        marca: "NaveaPunto",
        precio: 10900,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Brillo+y+Proteccion"
    },
    {
        id: 104,
        nombre: "Full Detailing",
        descripcion: "Los 10 productos de la lista en un solo combo",
        categoria: "combos",
        marca: "NaveaPunto",
        precio: 63000,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/f7faff?text=Full+Detailing"
    }
];

const todosLosItems = [...productos, ...combos];
const numeroWhatsApp = "5491160271711";

let carrito = [];
let categoriaActual = "todos";
let busquedaActual = "";
let productoDetalleActual = null;


// ELEMENTOS HTML

const grilla = document.getElementById("grilla-productos");
const grillaCombos = document.getElementById("grilla-combos");

const contadorCarrito = document.getElementById("cantidad-carrito");
const fondoCarrito = document.getElementById("fondo-carrito");
const botonAbrirCarrito = document.getElementById("abrir-carrito");
const botonCerrarCarrito = document.getElementById("cerrar-carrito");
const listaCarrito = document.getElementById("items-carrito");
const totalCarrito = document.getElementById("total-carrito");
const botonFinalizar = document.getElementById("finalizar-compra");

const campoBusqueda = document.getElementById("buscar-productos");

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


// FORMATO DE PRECIOS

function formatoPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(precio);
}


// BUSCAR PRODUCTOS Y COMBOS

function obtenerProducto(id) {
    return todosLosItems.find(
        producto => producto.id === Number(id)
    );
}

function cantidadEnCarrito(id) {
    const item = carrito.find(
        item => item.id === Number(id)
    );

    return item ? item.cantidad : 0;
}

function unidadesDisponibles(producto) {
    return producto.stock - cantidadEnCarrito(producto.id);
}


// INFORMACIÓN AMPLIADA PARA LA VENTANA DE DETALLES

const detallesProductos = {
    "Sport Car Essence": {
        uso: "Aromatizante ambiental para aportar una fragancia al interior del vehículo.",
        aplicacion: "Seguí las indicaciones del envase para conocer cómo colocarlo, dónde utilizarlo y cuánto producto usar."
    },

    "Silicona para interiores": {
        uso: "Producto para el cuidado de interiores, plásticos y otras superficies indicadas por el fabricante.",
        aplicacion: "Aplicá únicamente sobre las superficies autorizadas en el envase. Probá primero en una zona poco visible y evitá volante, pedales y superficies donde no deba quedar residuo."
    },

    "Car Wash PH Neutro": {
        uso: "Shampoo automotriz para ayudar a remover la suciedad habitual del exterior del vehículo.",
        aplicacion: "Prepará la dilución indicada por el fabricante. Lavá siguiendo las instrucciones del envase y enjuagá según corresponda."
    },

    "APC All Purpose": {
        uso: "Limpiador multipropósito para distintas tareas, según las superficies compatibles con su fórmula.",
        aplicacion: "Revisá la dilución y las superficies permitidas en el envase. Probá primero en una zona poco visible y no lo dejes secar sobre la superficie."
    },

    "Car Wax": {
        uso: "Producto para el cuidado de la carrocería y el acabado indicado por su fabricante.",
        aplicacion: "Usalo sobre las superficies y de la manera especificadas en el envase. Respetá los tiempos de aplicación y retiro indicados."
    },

    "Paño de secado": {
        uso: "Accesorio para ayudar a secar el vehículo después del lavado.",
        aplicacion: "Usalo limpio sobre la superficie. Evitá arrastrarlo si tiene partículas de suciedad y lavalo siguiendo sus instrucciones de cuidado."
    },

    "Esponja Microfibra Dual": {
        uso: "Accesorio para ayudar en tareas de lavado y limpieza del vehículo.",
        aplicacion: "Usala con el producto adecuado para la tarea. Mantenela limpia y revisá que no tenga partículas que puedan rayar la superficie."
    },

    "Foam Applicator": {
        uso: "Aplicadores de poliespuma para distribuir productos compatibles de forma controlada.",
        aplicacion: "Utilizá un aplicador limpio y seguí las instrucciones del producto que vayas a aplicar. Separá los aplicadores según el uso."
    },

    "Pack Microfibra Multiuso": {
        uso: "Conjunto de paños para distintas tareas de limpieza y mantenimiento.",
        aplicacion: "Separá los paños según la tarea y la superficie. Lavá los paños después de utilizarlos y mantenelos libres de polvo y partículas."
    },

    "Cepillo de mango corto": {
        uso: "Cepillo para tareas de limpieza en ruedas y otras zonas compatibles con sus cerdas.",
        aplicacion: "Utilizalo con un limpiador compatible. Comprobá que las cerdas sean adecuadas para la superficie y enjuagá el cepillo después de usarlo."
    },

    "Exterior Básico": {
        uso: "Combo pensado para el lavado exterior del vehículo. Incluye shampoo PH neutro, esponja, paño de secado y cepillo de mango corto.",
        aplicacion: "Prepará el shampoo según las indicaciones del envase. Lavá con la esponja limpia, enjuagá y secá con el paño. Usá el cepillo únicamente en superficies compatibles con sus cerdas."
    },

    "Interior Premium": {
        uso: "Una combinación para la limpieza y el cuidado de superficies compatibles del interior del vehículo, junto con un aromatizante ambiental.",
        aplicacion: "Revisá la dilución y las superficies permitidas del APC. Probá primero en una zona poco visible. Aplicá la silicona solo donde indique su fabricante, utilizá el pad para productos compatibles y colocá el aromatizante según su envase."
    },

    "Brillo y Protección": {
        uso: "Combo que reúne la cera Car Wax y tres paños de microfibra para tareas de cuidado y mantenimiento de la carrocería.",
        aplicacion: "Aplicá la cera siguiendo las instrucciones del envase y utilizá los paños limpios según corresponda. Evitá utilizar paños con polvo o partículas sobre la carrocería."
    },

    "Full Detailing": {
        uso: "El combo más completo de NaveaPunto: reúne los diez productos de la lista para distintas tareas de lavado, limpieza, cuidado y mantenimiento automotor.",
        aplicacion: "Cada producto tiene un uso específico. Revisá las superficies compatibles, las diluciones y las precauciones de cada envase. Elegí los accesorios adecuados para cada tarea y mantenelos limpios."
    }
};


// CREAR TARJETAS DE PRODUCTOS Y COMBOS

function crearTarjeta(producto) {
    const disponibles = unidadesDisponibles(producto);
    const agotado = disponibles <= 0;
    const esCombo = producto.categoria === "combos";

    return `
        <article class="tarjeta-producto ${esCombo ? "tarjeta-combo" : ""}">
            <div class="producto-imagen">
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/600x600/101722/f7faff?text=NaveaPunto';"
                >

                <span class="etiqueta-marca">
                    ${esCombo ? "NAVEAPUNTO" : producto.marca}
                </span>

                ${esCombo ? '<span class="etiqueta-combo">COMBO</span>' : ""}
            </div>

            <div class="producto-info">
                <p class="producto-categoria">
                    ${esCombo ? "COMBOS EXCLUSIVOS" : producto.categoria}
                </p>

                <h3>${producto.nombre}</h3>

                <p class="producto-descripcion">
                    ${producto.descripcion}
                </p>

                <button
                    class="boton-ver-detalles"
                    type="button"
                    data-detalles="${producto.id}"
                >
                    VER DETALLES
                </button>

                <div class="producto-pie">
                    <div class="producto-precio">
                        ${formatoPrecio(producto.precio)}
                    </div>

                    <span class="producto-stock ${agotado ? "stock-agotado" : ""}">
                        ${agotado
                            ? "Sin unidades disponibles"
                            : `${disponibles} ${disponibles === 1 ? "unidad" : "unidades"} disponibles`}
                    </span>
                </div>

                <button
                    class="boton-agregar"
                    type="button"
                    data-agregar="${producto.id}"
                    ${agotado ? "disabled" : ""}
                >
                    ${agotado ? "Sin stock" : "Agregar al carrito"}
                </button>
            </div>
        </article>
    `;
}


// MOSTRAR CATÁLOGO INDIVIDUAL

function mostrarProductos() {
    if (!grilla) return;

    const filtrados = productos.filter(producto => {
        const coincideCategoria =
            categoriaActual === "todos" ||
            producto.categoria === categoriaActual;

        const texto = (
            producto.nombre + " " +
            producto.descripcion + " " +
            producto.marca
        ).toLowerCase();

        return coincideCategoria &&
            texto.includes(busquedaActual.toLowerCase());
    });

    if (filtrados.length === 0) {
        grilla.innerHTML = `
            <p class="sin-productos">
                No encontramos productos con esa búsqueda.
            </p>
        `;
        return;
    }

    grilla.innerHTML = filtrados.map(crearTarjeta).join("");
}


// MOSTRAR COMBOS EN SU PROPIA SECCIÓN

function mostrarCombos() {
    if (!grillaCombos) return;

    grillaCombos.innerHTML = combos.map(crearTarjeta).join("");
}


// ACTUALIZAR CARRITO

function actualizarCarrito() {
    if (!listaCarrito || !contadorCarrito || !totalCarrito) return;

    const cantidadTotal = carrito.reduce(
        (total, item) => total + item.cantidad,
        0
    );

    contadorCarrito.textContent = cantidadTotal;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío. ¡Agregá algunos productos!
            </p>
        `;
    } else {
        listaCarrito.innerHTML = carrito.map(item => {
            const producto = obtenerProducto(item.id);
            if (!producto) return "";

            return `
                <div class="item-carrito">
                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                    >

                    <div class="item-carrito-info">
                        <h4>
                            ${producto.categoria === "combos" ? "COMBO · " : ""}
                            ${producto.nombre}
                        </h4>

                        <p>${formatoPrecio(producto.precio)} c/u</p>

                        <div class="cantidad-controles">
                            <button
                                type="button"
                                data-cambiar="${producto.id}"
                                data-delta="-1"
                                aria-label="Quitar una unidad"
                            >−</button>

                            <span>${item.cantidad}</span>

                            <button
                                type="button"
                                data-cambiar="${producto.id}"
                                data-delta="1"
                                aria-label="Agregar una unidad"
                                ${item.cantidad >= producto.stock ? "disabled" : ""}
                            >+</button>
                        </div>

                        <p>
                            Subtotal:
                            <strong>
                                ${formatoPrecio(producto.precio * item.cantidad)}
                            </strong>
                        </p>

                        <button
                            type="button"
                            class="quitar-producto"
                            data-quitar="${producto.id}"
                        >
                            Quitar producto
                        </button>
                    </div>
                </div>
            `;
        }).join("");
    }

    const total = carrito.reduce((suma, item) => {
        const producto = obtenerProducto(item.id);

        return producto
            ? suma + producto.precio * item.cantidad
            : suma;
    }, 0);

    totalCarrito.textContent = formatoPrecio(total);

    if (botonFinalizar) {
        botonFinalizar.disabled = carrito.length === 0;
        botonFinalizar.textContent = "PEDIR POR WHATSAPP ↗";
    }

    // Actualizar disponibilidad en las dos grillas.
    mostrarProductos();
    mostrarCombos();
}


// AGREGAR PRODUCTO O COMBO

function agregarAlCarrito(id) {
    const producto = obtenerProducto(id);
    if (!producto) return;

    const existente = carrito.find(
        item => item.id === producto.id
    );

    if (existente) {
        if (existente.cantidad >= producto.stock) {
            alert("No hay más unidades disponibles de este producto o combo.");
            return;
        }

        existente.cantidad++;
    } else {
        if (producto.stock < 1) {
            alert("Este producto o combo está agotado.");
            return;
        }

        carrito.push({
            id: producto.id,
            cantidad: 1
        });
    }

    actualizarCarrito();
}


// CAMBIAR CANTIDAD

function cambiarCantidad(id, delta) {
    const producto = obtenerProducto(id);

    const item = carrito.find(
        item => item.id === Number(id)
    );

    if (!producto || !item) return;

    const nuevaCantidad = item.cantidad + Number(delta);

    if (nuevaCantidad <= 0) {
        carrito = carrito.filter(
            item => item.id !== Number(id)
        );
    } else if (nuevaCantidad <= producto.stock) {
        item.cantidad = nuevaCantidad;
    } else {
        alert("Alcanzaste el stock disponible.");
    }

    actualizarCarrito();
}


// QUITAR DEL CARRITO

function quitarDelCarrito(id) {
    carrito = carrito.filter(
        item => item.id !== Number(id)
    );

    actualizarCarrito();
}


// ABRIR Y CERRAR CARRITO

function abrirCarrito() {
    if (!fondoCarrito) return;

    fondoCarrito.classList.add("abierto");
    document.body.classList.add("carrito-abierto");
}

function cerrarCarrito() {
    if (!fondoCarrito) return;

    fondoCarrito.classList.remove("abierto");
    document.body.classList.remove("carrito-abierto");
}


// FINALIZAR COMPRA POR WHATSAPP

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const lineas = carrito.map(item => {
        const producto = obtenerProducto(item.id);
        if (!producto) return "";

        const subtotal = producto.precio * item.cantidad;
        const etiqueta = producto.categoria === "combos"
            ? "COMBO "
            : "";

        return `• ${etiqueta}${producto.nombre} x${item.cantidad} — ${formatoPrecio(subtotal)}`;
    }).filter(Boolean);

    const total = carrito.reduce((suma, item) => {
        const producto = obtenerProducto(item.id);

        return producto
            ? suma + producto.precio * item.cantidad
            : suma;
    }, 0);

    const mensaje = [
        "¡Hola, NaveaPunto! Quiero realizar este pedido:",
        "",
        ...lineas,
        "",
        `TOTAL: ${formatoPrecio(total)}`,
        "",
        "¿Me confirman la disponibilidad y cómo seguimos con el envío?"
    ].join("\n");

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}


// ABRIR DETALLES DE PRODUCTOS Y COMBOS

function abrirDetallesProducto(id) {
    const producto = obtenerProducto(id);

    if (!producto || !modalProducto) return;

    productoDetalleActual = producto;

    const detalleExtra = detallesProductos[producto.nombre] || {
        uso: "Consultá las indicaciones del fabricante para conocer los usos del producto.",
        aplicacion: "Seguí las instrucciones y precauciones que figuran en el envase."
    };

    detalleNombre.textContent = producto.nombre;

    detalleMarca.textContent =
        producto.categoria === "combos"
            ? "COMBO NAVEAPUNTO"
            : producto.marca;

    detalleCategoria.textContent =
        producto.categoria === "combos"
            ? "COMBO EXCLUSIVO"
            : producto.categoria;

    detalleDescripcion.textContent = producto.descripcion;
    detalleUso.textContent = detalleExtra.uso;
    detalleAplicacion.textContent = detalleExtra.aplicacion;

    detalleImagen.src = producto.imagen;
    detalleImagen.alt = producto.nombre;

    detallePrecio.textContent = formatoPrecio(producto.precio);

    detalleStock.textContent =
        `Stock disponible: ${unidadesDisponibles(producto)}`;

    const agotado = unidadesDisponibles(producto) <= 0;

    detalleAgregar.disabled = agotado;
    detalleAgregar.textContent = agotado
        ? "SIN STOCK DISPONIBLE"
        : "AGREGAR AL CARRITO";

    modalProducto.classList.add("abierto");
    modalProducto.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-producto-abierto");
}


// CERRAR DETALLES

function cerrarDetallesProducto() {
    if (!modalProducto) return;

    modalProducto.classList.remove("abierto");
    modalProducto.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-producto-abierto");

    productoDetalleActual = null;
}


// EVENTOS PARA LAS DOS GRILLAS

function configurarGrilla(grillaActual) {
    if (!grillaActual) return;

    grillaActual.addEventListener("click", event => {
        const botonAgregar = event.target.closest("[data-agregar]");
        const botonDetalles = event.target.closest("[data-detalles]");

        if (botonAgregar) {
            agregarAlCarrito(botonAgregar.dataset.agregar);
        }

        if (botonDetalles) {
            abrirDetallesProducto(botonDetalles.dataset.detalles);
        }
    });
}

configurarGrilla(grilla);
configurarGrilla(grillaCombos);


// EVENTOS DEL CARRITO

if (listaCarrito) {
    listaCarrito.addEventListener("click", event => {
        const cambiar = event.target.closest("[data-cambiar]");
        const quitar = event.target.closest("[data-quitar]");

        if (cambiar) {
            cambiarCantidad(
                cambiar.dataset.cambiar,
                Number(cambiar.dataset.delta)
            );
        }

        if (quitar) {
            quitarDelCarrito(quitar.dataset.quitar);
        }
    });
}

if (botonAbrirCarrito) {
    botonAbrirCarrito.addEventListener("click", abrirCarrito);
}

if (botonCerrarCarrito) {
    botonCerrarCarrito.addEventListener("click", cerrarCarrito);
}

if (fondoCarrito) {
    fondoCarrito.addEventListener("click", event => {
        if (event.target === fondoCarrito) {
            cerrarCarrito();
        }
    });
}

if (botonFinalizar) {
    botonFinalizar.addEventListener("click", finalizarCompra);
}


// FILTROS DEL CATÁLOGO

document.querySelectorAll(".filtros [data-categoria]").forEach(boton => {
    boton.addEventListener("click", () => {
        categoriaActual = boton.dataset.categoria;

        document.querySelectorAll(".filtros [data-categoria]").forEach(otro => {
            otro.classList.toggle("activo", otro === boton);
        });

        mostrarProductos();
    });
});


// BUSCADOR DE PRODUCTOS

if (campoBusqueda) {
    campoBusqueda.addEventListener("input", () => {
        busquedaActual = campoBusqueda.value.trim();
        mostrarProductos();
    });
}


// EVENTOS DE LA VENTANA DE DETALLES

document.getElementById("cerrar-modal-producto")
    ?.addEventListener("click", cerrarDetallesProducto);

document.getElementById("cerrar-modal-fondo")
    ?.addEventListener("click", cerrarDetallesProducto);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        cerrarDetallesProducto();
        cerrarCarrito();
    }
});

if (detalleAgregar) {
    detalleAgregar.addEventListener("click", () => {
        if (!productoDetalleActual) return;

        const id = productoDetalleActual.id;

        agregarAlCarrito(id);
        cerrarDetallesProducto();
    });
}


// INICIAR LA TIENDA

mostrarProductos();
mostrarCombos();
actualizarCarrito();
