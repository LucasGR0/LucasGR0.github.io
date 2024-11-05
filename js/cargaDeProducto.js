// Array de productos
let productos = JSON.parse(localStorage.getItem("productos")) || [
    {
        id: 1,
        nombre: "Nike Air Max 1 '86 OG",
        precio: 120,
        descripcion: "Zapatilla icónica con amortiguación visible.",
        stock: 5,
        categoria: "Zapatillas",
        imagen: "../asets/nike_air_max.jpg",
    },
    {
        id: 2,
        nombre: "Adidas Gazelle",
        precio: 100,
        descripcion: "Zapatilla de estilo clásico y cómodo.",
        stock: 8,
        categoria: "Zapatillas",
        imagen: "../asets/adidas_gazelle.jpg",
    },
    {
        id: 3,
        nombre: "Vans Old Skool Classic",
        precio: 75,
        descripcion: "Zapatilla skate de estilo atemporal.",
        stock: 10,
        categoria: "Zapatillas",
        imagen: "../asets/vans_old_skool.jpg",
    },
    {
        id: 4,
        nombre: "Puma RS-X",
        precio: 110,
        descripcion: "Zapatilla con diseño moderno y amortiguación.",
        stock: 6,
        categoria: "Zapatillas",
        imagen: "../asets/puma_rs_x.jpg",
    },
    {
        id: 5,
        nombre: "New Balance 574",
        precio: 90,
        descripcion: "Zapatilla clásica y cómoda para el uso diario.",
        stock: 4,
        categoria: "Zapatillas",
        imagen: "../asets/new_balance_574.jpg",
    },
    {
        id: 6,
        nombre: "Reebok Classic Leather",
        precio: 85,
        descripcion: "Zapatilla de cuero con estilo retro.",
        stock: 3,
        categoria: "Zapatillas",
        imagen: "../asets/reebok_classic_leather.jpg",
    }
];

// Guardar productos en localStorage
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// Renderizar productos en la tabla de administración
function renderizarProductos() {
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = '';

    productos.forEach((producto) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;"></td>
            <td>$${producto.precio}</td>
            <td>${producto.stock}</td>
            <td>${producto.categoria}</td>
            <td>
                <button class="btn btn-danger btn-sm eliminar-producto" data-id="${producto.id}">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Agregar evento a los botones de eliminar
    document.querySelectorAll('.eliminar-producto').forEach((button) => {
        button.addEventListener('click', eliminarProducto);
    });
}

// Convertir imagen a base64 y agregar producto
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('imagen-producto');
    const reader = new FileReader();

    reader.onload = function(event) {
        const nuevoProducto = {
            id: productos.length ? productos[productos.length - 1].id + 1 : 1,
            nombre: document.getElementById('nombre-producto').value,
            descripcion: document.getElementById('descripcion-producto').value,
            precio: parseFloat(document.getElementById('precio-producto').value),
            imagen: event.target.result, // URL base64 de la imagen
            stock: parseInt(document.getElementById('stock-producto').value, 10),
            categoria: document.getElementById('categoria-producto').value
        };

        productos.push(nuevoProducto);
        guardarProductos(); // Guarda en localStorage
        renderizarProductos(); // Actualiza la tabla
        document.getElementById('product-form').reset();
    };

    reader.readAsDataURL(fileInput.files[0]);
});

// Eliminar producto
function eliminarProducto(e) {
    const id = parseInt(e.target.getAttribute('data-id'), 10);
    productos = productos.filter(producto => producto.id !== id);
    guardarProductos(); // Guarda en localStorage
    renderizarProductos(); // Actualiza la tabla
}

// Renderizar productos en la tabla al cargar la página
renderizarProductos();
