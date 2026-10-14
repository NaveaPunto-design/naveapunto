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

const detallesProductos = {
    "Sport Car Essence": {
        uso: "Fragancia concentrada formulada para eliminar malos olores dentro del habitáculo y dejar un ambiente fresco y agradable por semanas. No deja manchas sobre tapizados ni plásticos.",
        aplicacion: "1. Agitar el envase antes de usar.\n2. Rocear a 20-30 cm de distancia sobre alfombras de tela o debajo de los asientos.\n3. Evitar pulverizar directamente sobre cristales o pantallas táctiles."
    },
    "Silicona para interiores": {
        uso: "Acondicionador de plásticos, vinilos y torpedos que restaura el color original, aporta protección contra la decoloración por rayos UV y deja un acabado satinado sin sensación grasosa.",
        aplicacion: "1. Limpiar previamente el polvo de la superficie con microfibra húmeda.\n2. Aplicar unas gotas del producto sobre un pad o aplicador de poliespuma.\n3. Extender de manera uniforme y repasar con una microfibra limpia y seca para retirar excesos."
    },
    "Car Wash PH Neutro": {
        uso: "Shampoo de alta espuma y pH neutro formulado para desprender la suciedad y tierra vial sin barrer ceras, selladores ni tratamientos cerámicos previos.",
        aplicacion: "1. Diluir de 30 a 50 ml de shampoo en un balde con 10 litros de agua limpia.\n2. Generar espuma e impregnar un guante o esponja de microfibra.\n3. Lavar la carrocería siempre de arriba hacia abajo y enjuagar con abundante agua a presión."
    },
    "APC All Purpose": {
        uso: "Limpiador multipropósito concentrado de alto poder desengrasante. Ideal para limpiar interiores (plásticos, telas, cuero), motor, pasos de rueda y manchas difíciles.",
        aplicacion: "1. Diluir el producto según el tipo de suciedad (1:10 para liviana, 1:5 para pesada).\n2. Pulverizar sobre la superficie o un cepillo suave de detailing.\n3. Trabajar la zona y retirar el producto inmediatamente con una microfibra húmeda. No dejar secar sobre la superficie."
    },
    "Car Wax": {
        uso: "Cera protectora de alta calidad que intensifica el brillo, resalta la profundidad del color y aporta un acabado suave al tacto con excelente repelencia al agua y al polvo.",
        aplicacion: "1. Lavar y secar completamente el vehículo a la sombra.\n2. Aplicar una capa fina y pareja panel por panel usando un aplicador de espuma.\n3. Dejar actuar unos minutos y lustrar con una microfibra limpia hasta lograr brillo espejo."
    },
    "Microfibra de secado Waffle": {
        uso: "Toalla de secado técnico con entramado tipo 'waffle' que absorbe hasta 7 veces su peso en agua, evitando refregar y reduciendo a cero la creación de micro-rayas (swirls).",
        aplicacion: "1. Desplegar la microfibra sobre el panel húmedo después del enjuague.\n2. Deslizar suavemente tirando de las esquinas sin ejercer presión vertical.\n3. Al finalizar, lavar con agua fría y jabón neutro (sin suavizantes)."
    },
    "Esponja Microfibra Dual": {
        uso: "Accesorio de lavado de doble cara: un lado con fideos de microfibra suaves para retener suciedad en la carrocería y otro lado de textura suave para remover bichos y suciedad pegada.",
        aplicacion: "1. Sumergir en la balde con shampoo para que absorba bastante espuma.\n2. Pasarla suavemente sobre el vehículo sin presionar fuerte.\n3. Enjuagar la esponja con agua limpia frecuentemente durante el lavado."
    },
    "Foam Applicator": {
        uso: "Pads o aplicadores de poliespuma de alta densidad diseñados para la aplicación uniforme y controlada de ceras, acondicionadores de plásticos, geles de cubierta y acondicionadores de cuero.",
        aplicacion: "1. Colocar una pequeña cantidad de producto en el centro del pad.\n2. Trabajar sobre la superficie haciendo movimientos circulares o lineales cruzados.\n3. Lavar con agua tibia y detergente neutro después de cada uso."
    },
    "Pack Microfibra Multiuso": {
        uso: "Set de 3 paños de microfibra premium de alta densidad sin bordes agresivos. Indispensables para retirar ceras, limpiar vidrios, aplicar detalladores rápidos y acondicionar el interior.",
        aplicacion: "1. Asignar un color de microfibra para cada tarea (ej: azul para vidrios, verde para interiores).\n2. Utilizar siempre doblada en cuatro partes para tener 8 caras limpias de trabajo.\n3. Lavar con jabón neutro a mano o lavarropas."
    },
    "Wheel & Tire Brush": {
        uso: "Cepillo de cerdas resistentes diseñado ergónomicamente para remover polvillo de freno pegado, barro y grasa en llantas, neumáticos y pasos de rueda sin rayar.",
        aplicacion: "1. Rociar desengrasante o APC sobre la llanta y neumático.\n2. Cepillar enérgicamente las caras de la cubierta y los huecos de la llanta.\n3. Enjuagar el cepillo y las ruedas con agua a presión."
    },
    "Combo Exterior Básico": {
        uso: "Kit esencial desarrollado para realizar un lavado exterior completo y seguro. Su fórmula de pH neutro remueve la suciedad vial sin dañar ni barrer ceras o selladores previos, cuidando la pintura.",
        aplicacion: "1. Diluir el Shampoo pH Neutro en un balde con agua limpia hasta generar abundante espuma.\n2. Lavar la carrocería de arriba hacia abajo utilizando la Esponja Dual de microfibra.\n3. Usar el Cepillo de mango corto junto con espuma para limpiar a fondo llantas y neumáticos.\n4. Enjuagar con agua a presión y secar la superficie deslizando el Paño de secado sin hacer presión."
    },
    "Combo Interior Premium": {
        uso: "Kit completo de restauración y detallado de habitáculo. Elimina manchas, suciedad pegada y malos olores, dejando plásticos y torpedos con aspecto a nuevo y protegidos.",
        aplicacion: "1. Pulverizar el APC sobre superficies o cepillo para remover la suciedad pegada en plásticos y telas.\n2. Retirar los restos con una microfibra húmeda.\n3. Acondicionar los plásticos secos aplicando la Silicona con los Pads de poliespuma.\n4. Finalizar aplicando el Aromatizante sobre las alfombras para un ambiente limpio y fresco."
    },
    "Combo Brillo y Protección": {
        uso: "Combo rápido de encerado y acabado espejo. Crea una capa protectora contra el polvo, rayos solares y lluvia, dejando un tacto sedoso y brillo profundo en la pintura.",
        aplicacion: "1. Asegurarse de que el vehículo esté lavado y bien seco a la sombra.\n2. Aplicar una capa fina de Cera Autobrillo sobre la carrocería.\n3. Dejar secar unos minutos hasta que tome un tono brumoso.\n4. Lustrar con una cara de las Microfibras hasta obtener brillo espejo."
    },
    "Combo Full Detailing": {
        uso: "El kit definitivo para los apasionados del car care. Incluye los 10 productos indispensables para lavar, restaurar, proteger y mantener el vehículo impecable por dentro y por fuera.",
        aplicacion: "1. Lavar exteriormente con Shampoo pH Neutro, Esponja Dual y cepillo de ruedas.\n2. Secar con paño Waffle sin rayar la pintura.\n3. Aplicar Cera protectora con Foam Applicator y lustrar con microfibra.\n4. Limpiar interior con APC, acondicionar plásticos con Silicona y perfumar con Aromatizante."
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

mostrarProductos();
actualizarCarrito();
