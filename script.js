AOS.init({ duration: 800, once: true });

const productos = [
    {
        id: 1,
        nombre: "Sport Car Essence",
        descripcion: "Aromatizante ambiental · 3,25 g",
        categoria: "aromatizantes",
        marca: "K78",
        precio: 3700,
        stock: 8,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Sport+Car+Essence"
    },
    {
        id: 2,
        nombre: "Silicona para interiores",
        descripcion: "Para interiores, plásticos y alfombras · 600 ml",
        categoria: "interior",
        marca: "K78",
        precio: 12200,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Silicona+Interior"
    },
    {
        id: 3,
        nombre: "Car Wash PH Neutro",
        descripcion: "Shampoo para el lavado del auto · 600 ml",
        categoria: "lavado",
        marca: "K78",
        precio: 5500,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Car+Wash"
    },
    {
        id: 4,
        nombre: "APC All Purpose",
        descripcion: "Limpiador multipropósito · 600 ml",
        categoria: "limpieza",
        marca: "K78",
        precio: 6800,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=APC+All+Purpose"
    },
    {
        id: 5,
        nombre: "Car Wax",
        descripcion: "Cera para carrocería · 600 ml",
        categoria: "proteccion",
        marca: "K78",
        precio: 6600,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Car+Wax"
    },
    {
        id: 6,
        nombre: "Microfibra de secado Waffle",
        descripcion: "Paño de secado · 60 × 40 cm",
        categoria: "microfibras",
        marca: "K78",
        precio: 8000,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Microfibra+Waffle"
    },
    {
        id: 7,
        nombre: "Esponja Microfibra Dual",
        descripcion: "Esponja de microfibra · 23 × 11 × 5 cm",
        categoria: "accesorios",
        marca: "K78",
        precio: 6000,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Esponja+Dual"
    },
    {
        id: 8,
        nombre: "Foam Applicator",
        descripcion: "Aplicadores de poliespuma · pack x2",
        categoria: "accesorios",
        marca: "K78",
        precio: 2500,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Foam+Applicator"
    },
    {
        id: 9,
        nombre: "Pack Microfibra Multiuso",
        descripcion: "Pack de 3 paños de colores · 30 × 30 cm",
        categoria: "microfibras",
        marca: "K78",
        precio: 4800,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Pack+Microfibra"
    },
    {
        id: 10,
        nombre: "Wheel & Tire Brush",
        descripcion: "Cepillo para limpieza de ruedas y llantas",
        categoria: "accesorios",
        marca: "K78",
        precio: 10100,
        stock: 6,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Wheel+Tire+Brush"
    },
    {
        id: 11,
        nombre: "Combo Exterior Básico",
        descripcion: "Ph neutro + Esponja + Paño de secado + Cepillo mango corto",
        categoria: "lavado",
        marca: "K78 (Combo)",
        precio: 28000,
        stock: 5,
        esCombo: true,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Exterior+Basico"
    },
    {
        id: 12,
        nombre: "Combo Interior Premium",
        descripcion: "APC + Silicona + Pad x2 + Aromatizante",
        categoria: "interior",
        marca: "K78 (Combo)",
        precio: 24000,
        stock: 5,
        esCombo: true,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Interior+Premium"
    },
    {
        id: 13,
        nombre: "Combo Brillo y Protección",
        descripcion: "Cera Autobrillo + Paño microfibra x3",
        categoria: "proteccion",
        marca: "K78 (Combo)",
        precio: 10900,
        stock: 5,
        esCombo: true,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Brillo+y+Proteccion"
    },
    {
        id: 14,
        nombre: "Combo Full Detailing",
        descripcion: "Los 10 productos completos para el cuidado total de tu auto",
        categoria: "lavado",
        marca: "K78 (Combo)",
        precio: 63000,
        stock: 5,
        esCombo: true,
        imagen: "https://placehold.co/600x600/101722/1688ff?text=Combo+Full+Detailing"
    }
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

const formatoPrecio = precio =>
    new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(precio);

function obtenerProducto(id) {
    return productos.find(producto => producto.id === Number(id));
}

function cantidadEnCarrito(id) {
    const item = carrito.find(item => item.id === Number(id));
    return item ? item.cantidad : 0;
}

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

    grilla.innerHTML = filtrados.map(producto => {
        const disponibles = producto.stock - cantidadEnCarrito(producto.id);
        const agotado = disponibles <= 0;

        return `
            <article class="tarjeta-producto" data-aos="fade-up">
                ${producto.esCombo ? '<span class="badge-combo">COMBO TOP</span>' : ''}
                <div class="producto-imagen">
                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='https://placehold.co/600x600/101722/f7faff?text=NaveaPunto';"
                    >
                    <span class="etiqueta-marca">${producto.marca}</span>
                </div>

                <div class="producto-info">
                    <p class="producto-categoria">
                        ${producto.categoria}
                    </p>

                    <h3>${producto.nombre}</h3>
                    <p class="producto-descripcion">${producto.descripcion}</p>
                    <button
                        class="boton-ver-detalles"
                        type="button"
                        data-detalles="${producto.nombre}"
                    >
                        VER DETALLES
                    </button>
                    <div class="producto-pie">
                        <div class="producto-precio">
                            ${producto.precio === null
                                ? "Consultar precio"
                                : formatoPrecio(producto.precio)}
                        </div>

                        <span class="producto-stock ${agotado ? "stock-agotado" : ""}">
                            ${agotado
                                ? "Sin unidades disponibles"
                                : `${disponibles}${disponibles === 1 ? "unidad" : "unidades"} disponibles`}
                        </span>
                    </div>

                    <button
                        class="boton-agregar"
                        data-agregar="${producto.id}"
                        ${agotado ? "disabled" : ""}
                    >
                        ${agotado ? "Sin stock" : "Agregar al carrito"}
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

function actualizarCarrito() {
    if (!listaCarrito || !contadorCarrito || !totalCarrito) return;

    const cantidadTotal = carrito.reduce(
        (total, item) => total + item.cantidad, 0
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
                    <img src="${producto.imagen}" alt="${producto.nombre}">

                    <div class="item-carrito-info">
                        <h4>${producto.nombre}</h4>
                        <p>
                            ${producto.precio === null
                                ? "Consultar precio"
                                : formatoPrecio(producto.precio)}
                        </p>

                        <div class="cantidad-controles">
                            <button
                                data-cambiar="${producto.id}"
                                data-delta="-1"
                                aria-label="Quitar una unidad"
                            >−</button>

                            <span>${item.cantidad}</span>

                            <button
                                data-cambiar="${producto.id}"
                                data-delta="1"
                                aria-label="Agregar una unidad"
                                ${item.cantidad >= producto.stock ? "disabled" : ""}
                            >+</button>
                        </div>

                        <button
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

    const hayPreciosPendientes = carrito.some(item => {
        const producto = obtenerProducto(item.id);
        return producto && producto.precio === null;
    });

    const totalConocido = carrito.reduce((total, item) => {
        const producto = obtenerProducto(item.id);
        if (!producto || producto.precio === null) return total;
        return total + producto.precio * item.cantidad;
    }, 0);

    totalCarrito.textContent = hayPreciosPendientes
        ? "A confirmar"
        : formatoPrecio(totalConocido);

    if (botonFinalizar) {
        botonFinalizar.disabled = carrito.length === 0;
        botonFinalizar.textContent = "Consultar y pedir por WhatsApp";
    }

    mostrarProductos();
}

function agregarAlCarrito(id) {
    const producto = obtenerProducto(id);
    if (!producto) return;

    const existente = carrito.find(item => item.id === producto.id);

    if (existente) {
        if (existente.cantidad >= producto.stock) {
            alert("No hay más unidades disponibles de este producto.");
            return;
        }

        existente.cantidad++;
    } else {
        if (producto.stock < 1) {
            alert("Este producto está agotado.");
            return;
        }

        carrito.push({ id: producto.id, cantidad: 1 });
    }

    actualizarCarrito();

    // Disparar aviso flotante (Toast)
    const toastTitulo = document.getElementById('toast-titulo');
    const toastSubtitulo = document.getElementById('toast-subtitulo');
    if (toastTitulo && toastSubtitulo) {
        toastTitulo.innerText = producto.nombre;
        toastSubtitulo.innerText = 'Agregado al carrito con éxito 🛒';
        const toastElement = document.getElementById('toast-carrito');
        if (toastElement) {
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
        }
    }
}

function cambiarCantidad(id, delta) {
    const producto = obtenerProducto(id);
    const item = carrito.find(item => item.id === Number(id));

    if (!producto || !item) return;

    const nuevaCantidad = item.cantidad + Number(delta);

    if (nuevaCantidad <= 0) {
        carrito = carrito.filter(item => item.id !== Number(id));
    } else if (nuevaCantidad <= producto.stock) {
        item.cantidad = nuevaCantidad;
    } else {
        alert("Alcanzaste el stock disponible de este producto.");
    }

    actualizarCarrito();
}

function quitarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== Number(id));
    actualizarCarrito();
}

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

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const lineas = carrito.map(item => {
        const producto = obtenerProducto(item.id);
        const subtotal = producto.precio === null
            ? "precio a confirmar"
            : formatoPrecio(producto.precio * item.cantidad);

        return `• ${producto.nombre} x${item.cantidad} — ${subtotal}`;
    });

    const hayPreciosPendientes = carrito.some(item => {
        const producto = obtenerProducto(item.id);
        return producto && producto.precio === null;
    });

    const total = carrito.reduce((suma, item) => {
        const producto = obtenerProducto(item.id);
        return producto && producto.precio !== null
            ? suma + producto.precio * item.cantidad
            : suma;
    }, 0);

    const mensaje = [
        "¡Hola, NaveaPunto! Quiero consultar por este pedido:",
        "",
        ...lineas,
        "",
        hayPreciosPendientes
            ? "¿Me pasan los precios y el total del pedido, por favor?"
            : `Total: ${formatoPrecio(total)}`,
        "",
        "¿Me confirman disponibilidad y cómo seguimos?"
    ].join("\n");

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

if (grilla) {
    grilla.addEventListener("click", event => {
        const boton = event.target.closest("[data-agregar]");
        if (boton) agregarAlCarrito(boton.dataset.agregar);
    });
}

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

        if (quitar) quitarDelCarrito(quitar.dataset.quitar);
    });
}

document.querySelectorAll("[data-categoria]").forEach(boton => {
    boton.addEventListener("click", () => {
        categoriaActual = boton.dataset.categoria;
        document.querySelectorAll("[data-categoria]").forEach(otro => {
            otro.classList.toggle("activo", otro === boton);
        });
        mostrarProductos();
    });
});

const campoBusqueda = document.getElementById("buscar-productos");

if (campoBusqueda) {
    campoBusqueda.addEventListener("input", () => {
        busquedaActual = campoBusqueda.value.trim();
        mostrarProductos();
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
        if (event.target === fondoCarrito) cerrarCarrito();
    });
}

if (botonFinalizar) {
    botonFinalizar.addEventListener("click", finalizarCompra);
}

mostrarProductos();
actualizarCarrito();

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
        uso: "Limpiador multipropósito pensado para distintas tareas de limpieza, según las superficies compatibles con su fórmula.",
        aplicacion: "Revisá la dilución y las superficies permitidas en el envase. Probá primero en una zona poco visible y no lo dejes secar sobre la superficie."
    },

    "Car Wax": {
        uso: "Producto de cuidado de la carrocería destinado a aportar el acabado que indique su fabricante.",
        aplicacion: "Usalo sobre las superficies y de la manera especificadas en el envase. Respetá los tiempos de aplicación y retiro indicados."
    },

    "Microfibra de secado Waffle": {
        uso: "Paño de microfibra con tejido tipo waffle, pensado para tareas de secado automotriz.",
        aplicacion: "Usalo limpio sobre la superficie siguiendo una técnica suave. Lavalo según sus instrucciones de cuidado y evitá suavizantes si el fabricante de la microfibra lo desaconseja."
    },

    "Esponja Microfibra Dual": {
        uso: "Accesorio de microfibra para ayudar en tareas de limpieza y lavado del vehículo.",
        aplicacion: "Usala con el producto adecuado para la tarea. Mantenela limpia y revisá que no tenga partículas que puedan rayar la superficie."
    },

    "Foam Applicator": {
        uso: "Aplicadores de poliespuma para distribuir productos compatibles de forma controlada.",
        aplicacion: "Utilizá un aplicador limpio y seguí las instrucciones del producto que vayas a aplicar. Separá los aplicadores según el uso para evitar contaminación cruzada."
    },

    "Pack Microfibra Multiuso": {
        uso: "Conjunto de paños de microfibra para distintas tareas de limpieza y mantenimiento.",
        aplicacion: "Separá los paños según la tarea y la superficie. Lavá los paños después de utilizarlos y mantenelos libres de polvo y partículas."
    },

    "Wheel & Tire Brush": {
        uso: "Cepillo destinado a tareas de limpieza de ruedas y neumáticos.",
        aplicacion: "Utilizalo con un limpiador compatible y siguiendo las indicaciones del fabricante. No lo uses sobre la carrocería si está destinado exclusivamente a las ruedas."
    },

    "Combo Exterior Básico": {
        uso: "Kit completo para lavado y secado exterior del auto.",
        aplicacion: "Incluye Ph neutro + Esponja + Paño de secado + Cepillo mango corto."
    },

    "Combo Interior Premium": {
        uso: "Kit completo para limpieza profunda y acondicionamiento del interior.",
        aplicacion: "Incluye APC + Silicona + Pad x2 + Aromatizante."
    },

    "Combo Brillo y Protección": {
        uso: "Kit ideal para encerar, proteger la pintura y dar máximo brillo.",
        aplicacion: "Incluye Cera Autobrillo + Paño microfibra x3."
    },

    "Combo Full Detailing": {
        uso: "Kit definitivo para tener el auto impoluto por dentro y por fuera.",
        aplicacion: "Incluye los 10 productos del catálogo."
    }
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

function abrirDetallesProducto(nombreProducto) {
    const producto = productos.find(
        item => item.nombre === nombreProducto
    );

    if (!producto || !modalProducto) return;

    productoDetalleActual = producto;

    const detalleExtra = detallesProductos[producto.nombre] || {
        uso: "Consultá las indicaciones del fabricante para conocer los usos del producto.",
        aplicacion: "Seguí las instrucciones y precauciones que figuran en el envase."
    };

    detalleNombre.textContent = producto.nombre;
    detalleMarca.textContent = producto.marca || "Nave a Punto";
    detalleCategoria.textContent = producto.categoria || "Producto automotriz";
    detalleDescripcion.textContent = producto.descripcion || "";
    detalleUso.textContent = detalleExtra.uso;
    detalleAplicacion.textContent = detalleExtra.aplicacion;

    detalleImagen.src = producto.imagen || "";
    detalleImagen.alt = producto.nombre;

    if (producto.precio == null) {
        detallePrecio.textContent = "Precio a consultar";
    } else {
        detallePrecio.textContent = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 2
        }).format(producto.precio);
    }

    detalleStock.textContent =
        `Stock disponible: ${producto.stock ?? "Consultar"}`;

    detalleAgregar.disabled =
        Number(producto.stock) <= 0;

    detalleAgregar.textContent =
        Number(producto.stock) <= 0
            ? "SIN STOCK DISPONIBLE"
            : "AGREGAR AL CARRITO";

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

const grillaParaDetalles = document.getElementById("grilla-productos");

if (grillaParaDetalles) {
    grillaParaDetalles.addEventListener("click", function (evento) {
        const boton = evento.target.closest("[data-detalles]");

        if (!boton) return;

        abrirDetallesProducto(boton.dataset.detalles);
    });
}

document.getElementById("cerrar-modal-producto")
    ?.addEventListener("click", cerrarDetallesProducto);

document.getElementById("cerrar-modal-fondo")
    ?.addEventListener("click", cerrarDetallesProducto);

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        cerrarDetallesProducto();
    }
});

if (detalleAgregar) {
    detalleAgregar.addEventListener("click", function () {
        if (!productoDetalleActual) return;

        const tarjetas = document.querySelectorAll(
            "#grilla-productos .tarjeta-producto"
        );

        for (const tarjeta of tarjetas) {
            const titulo = tarjeta.querySelector("h3");
            const botonAgregar = tarjeta.querySelector("[data-agregar]");

            if (
                titulo &&
                titulo.textContent.trim() === productoDetalleActual.nombre &&
                botonAgregar
            ) {
                botonAgregar.click();
                cerrarDetallesProducto();
                return;
            }
        }

        alert("Buscá el producto en el catálogo para agregarlo al carrito.");
    });
}