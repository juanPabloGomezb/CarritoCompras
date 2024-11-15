const productos = [
    {
        nombre: "Toyota Corolla 2022",
        imagen: "./frontend/imagenes/1.jpg",
        precio: 90000000,
        descripcion: "Sedán de alta eficiencia y confiabilidad, ideal para uso urbano y viajes largos.",
        categoria: "Autos",
        marca: "Toyota"
    },
    {
        nombre: "Ford Mustang GT",
        imagen: "./frontend/imagenes/2.jpeg",
        precio: 150000000,
        descripcion: "Coche deportivo con motor V8, diseño icónico y potente desempeño en carretera.",
        categoria: "Autos",
        marca: "Ford"
    },
    {
        nombre: "Chevrolet Silverado 2023",
        imagen: "./frontend/imagenes/3.jpg",
        precio: 95000000,
        descripcion: "Camioneta robusta ideal para trabajo pesado, con amplio espacio y tecnología avanzada.",
        categoria: "Camionetas",
        marca: "Chevrolet"
    },
    {
        nombre: "Honda Civic 2023",
        imagen: "./frontend/imagenes/4.jpg",
        precio: 85000000,
        descripcion: "Sedán compacto y eficiente, con tecnología avanzada y diseño moderno.",
        categoria: "Autos",
        marca: "Honda"
    },
    {
        nombre: "BMW X5 2023",
        imagen: "./frontend/imagenes/5.jpg",
        precio: 250000000,
        descripcion: "SUV de lujo con alto rendimiento, tecnología avanzada y un interior de primera clase.",
        categoria: "SUV",
        marca: "BMW"
    },
    {
        nombre: "Audi A4 2022",
        imagen: "./frontend/imagenes/6.jpg",
        precio: 170000000,
        descripcion: "Sedán de lujo con motor eficiente y acabados de alta calidad.",
        categoria: "Autos",
        marca: "Audi"
    },
    {
        nombre: "Mercedes-Benz C-Class 2023",
        imagen: "./frontend/imagenes/7.jpg",
        precio: 180000000,
        descripcion: "Sedán premium con tecnología avanzada, motor potente y diseño elegante.",
        categoria: "Autos",
        marca: "Mercedes-Benz"
    },
    {
        nombre: "Chevrolet Camaro 2022",
        imagen: "./frontend/imagenes/8.jpeg",
        precio: 160000000,
        descripcion: "Coche deportivo con diseño agresivo, motor V8 y rendimiento impresionante.",
        categoria: "Autos",
        marca: "Chevrolet"
    },
    {
        nombre: "Hyundai Tucson 2023",
        imagen: "./frontend/imagenes/9.jpg",
        precio: 95000000,
        descripcion: "SUV compacta y eficiente con excelente relación calidad-precio.",
        categoria: "SUV",
        marca: "Hyundai"
    },
    {
        nombre: "Kia Sportage 2023",
        imagen: "./frontend/imagenes/10.jpg",
        precio: 105000000,
        descripcion: "SUV moderna con tecnología avanzada, buen rendimiento y confort.",
        categoria: "SUV",
        marca: "Kia"
    },
    {
        nombre: "Volkswagen Golf GTI 2022",
        imagen: "./frontend/imagenes/11.jpg",
        precio: 120000000,
        descripcion: "Coche deportivo con gran agilidad, potente motor y diseño práctico.",
        categoria: "Autos",
        marca: "Volkswagen"
    },
    {
        nombre: "Nissan Rogue 2023",
        imagen: "./frontend/imagenes/12.png",
        precio: 105000000,
        descripcion: "SUV familiar con buen espacio, eficiencia y tecnología avanzada.",
        categoria: "SUV",
        marca: "Nissan"
    },
    {
        nombre: "Mazda CX-5 2023",
        imagen: "./frontend/imagenes/13.jpg",
        precio: 115000000,
        descripcion: "SUV con diseño elegante, conducción ágil y un interior de calidad.",
        categoria: "SUV",
        marca: "Mazda"
    },
    {
        nombre: "Subaru Outback 2022",
        imagen: "./frontend/imagenes/14.jpg",
        precio: 130000000,
        descripcion: "SUV robusta con tracción en las cuatro ruedas y capacidad para terrenos difíciles.",
        categoria: "SUV",
        marca: "Subaru"
    },
    {
        nombre: "Jeep Wrangler 2023",
        imagen: "./frontend/imagenes/15.jpg",
        precio: 150000000,
        descripcion: "SUV todoterreno con gran capacidad de off-road y diseño icónico.",
        categoria: "SUV",
        marca: "Jeep"
    }
];

localStorage.setItem("productos", JSON.stringify(productos));

// Carrito de compras
let carrito = [];

// Función para cargar los productos en la página
function cargarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    mostrarProductos(productos);
    cargarFiltros(productos); // Cargar filtros al cargar los productos
}

// Función para cargar los filtros de categoría y marca
function cargarFiltros(productos) {
    const categoriaFilter = document.getElementById("category-filter");
    const marcaFilter = document.getElementById("brand-filter");

    // Extraer categorías y marcas únicas
    const categorias = [...new Set(productos.map(producto => producto.categoria))];
    const marcas = [...new Set(productos.map(producto => producto.marca))];

    // Agregar opciones de categoría
    categorias.forEach(categoria => {
        const option = document.createElement("option");
        option.value = categoria;
        option.textContent = categoria;
        categoriaFilter.appendChild(option);
    });

    // Agregar opciones de marca
    marcas.forEach(marca => {
        const option = document.createElement("option");
        option.value = marca;
        option.textContent = marca;
        marcaFilter.appendChild(option);
    });
}

// Función para aplicar los filtros seleccionados
function aplicarFiltros() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const categoriaSeleccionada = document.getElementById("category-filter").value;
    const marcaSeleccionada = document.getElementById("brand-filter").value;

    // Filtrar los productos según la categoría y la marca seleccionadas
    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
        const coincideMarca = marcaSeleccionada ? producto.marca === marcaSeleccionada : true;
        return coincideCategoria && coincideMarca;
    });

    mostrarProductos(productosFiltrados);
}

// Agregar eventos de cambio a los selectores de filtro
document.getElementById("category-filter").addEventListener("change", aplicarFiltros);
document.getElementById("brand-filter").addEventListener("change", aplicarFiltros);

// Función para mostrar productos en la página
function mostrarProductos(productos) {
    const productsGrid = document.getElementById("products-grid");
    productsGrid.innerHTML = "";

    productos.forEach((producto, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("bg-white", "rounded-lg", "border", "p-4", "mb-4");

        productCard.innerHTML = `
            <div class="max-w-sm mx-auto p-5 bg-gray-100 rounded-2xl shadow-xl">
                <!-- Imagen del producto, ahora encima -->
                <img src="${producto.imagen}" alt="${producto.nombre}" class="h-52 w-52 object-cover rounded-2xl mx-auto mb-5">

                <!-- Contenedor de información del producto -->
                <div class="flex-1 text-center">
                    <h3 class="text-xl font-bold text-black">${producto.nombre}</h3>
                    <p class="text-gray-700 mt-2">${producto.descripcion}</p>
                    <p class="text-black font-bold text-lg">$${producto.precio.toFixed(2)}</p>

                    <label for="estado-${index}" class="block mt-4 font-medium text-gray-700">Estado:</label>
                    <select id="estado-${index}" class="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-gray-500">
                        <option value="Nuevo">Nuevo</option>
                        <option value="Usado">Usado</option>
                    </select>

                    <label for="kilometraje-${index}" class="block mt-4 font-medium text-gray-700">kilometraje:</label>
                    <input type="number" id="kilometraje-${index}" class="border border-gray-300 rounded-xl p-3 w-full focus:ring-2 focus:ring-gray-500" min="1" value="1">

                    <button onclick="añadirAlCarrito(${index})" class="bg-yellow-500 text-black rounded-full mt-5 px-6 py-3 w-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg">
                        Añadir al Carrito
                    </button>
                </div>
            </div>

        `;
        productsGrid.appendChild(productCard);
    });
}

// Función para añadir productos al carrito
function añadirAlCarrito(index) {
    const productos = JSON.parse(localStorage.getItem("productos"));
    const producto = productos[index];
    const estado = document.getElementById(`estado-${index}`).value;
    const kilometraje = parseInt(document.getElementById(`kilometraje-${index}`).value, 10);

    carrito.push({ ...producto, estado, kilometraje });
    actualizarCarrito();

    // Mostrar el mensaje de éxito
    mostrarMensajeExito();

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        ocultarMensajeExito();
    }, 5000);
}

// Función para mostrar el mensaje de éxito
function mostrarMensajeExito() {
    const mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.classList.remove("hidden");
    mensajeExito.textContent = "¡Producto añadido exitosamente!";
}

// Función para ocultar el mensaje de éxito
function ocultarMensajeExito() {
    const mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.classList.add("hidden");
}

// Función para actualizar y mostrar el carrito
function actualizarCarrito() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    cartItems.innerHTML = "";

    carrito.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("border-b", "pb-2", "mb-2");

        cartItem.innerHTML = `
            <h4 class="text-xl font-bold text-blue-600">${item.nombre}</h4>
            <p class="text-gray-700">Estado: ${item.estado}</p>
            <p class="text-gray-700">kilometraje: ${item.kilometraje}</p>
            <p class="font-semibold text-green-600">Precio: $${(item.precio * item.kilometraje).toFixed(2)}</p>
            <button onclick="eliminarDelCarrito(${index})" class="bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 border-2 border-red-800 rounded-full px-5 py-2 mt-3">Eliminar</button>
            <button onclick="modificarCarrito(${index})" class="bg-yellow-400 text-white hover:bg-yellow-500 transition-colors duration-300 border-2 border-yellow-600 rounded-full px-5 py-2 mt-3">Modificar</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartCount.textContent = carrito.length;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para modificar un producto del carrito
function modificarCarrito(index) {
    const nuevoEstado = prompt("Ingrese el nuevo estado (Nuevo/Usado):", carrito[index].estado);
    const nuevakilometraje = parseInt(prompt("Ingrese la nueva kilometraje:", carrito[index].kilometraje), 10);

    if (nuevoEstado && nuevakilometraje > 0) {
        carrito[index].estado = nuevoEstado;
        carrito[index].kilometraje = nuevakilometraje;
        actualizarCarrito();
    }
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.toggle("hidden");
    cartModal.classList.toggle("visible");
}



// Cargar productos y filtros al cargar la página
window.onload = () => {
    cargarProductos();
};
