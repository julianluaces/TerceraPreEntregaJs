
const productos = [
    {
        id: "producto-01",
        titulo: "PC Gamer",
        imagen: "../img/PcGamer.png",
        categoria: {
            nombre: "Productos",
            id: "pcgamer"
        },
        precio: "USD 600"
    },

    {
        id: "producto-02",
        titulo: "Notebook",
        imagen: "../img/notebook.png",
        categoria: {
            nombre: "Productos",
            id: "notebook"
        },
        precio: "USD 700"
    },
    {
        id: "producto-03",
        titulo: "Silla Gamer",
        imagen: "../img/SillaGamer.png",
        categoria: {
            nombre: "Productos",
            id: "notebook"
        },
        precio: "USD 120"
    },
    {
        id: "producto-04",
        titulo: "Teclado",
        imagen: "../img/TecladoGamer.png",
        categoria: {
            nombre: "Productos",
            id: "notebook"
        },
        precio: "USD 80"
    },
    {
        id: "producto-05",
        titulo: "Mouse Gamer",
        imagen: "../img/mousegamer.png",
        categoria: {
            nombre: "Productos",
            id: "mousegamer"
        },
        precio: "USD 60"
    },
    {
        id: "producto-06",
        titulo: "Pendrive",
        imagen: "../img/pendrive.png",
        categoria: {
            nombre: "Productos",
            id: "pendrive"
        },
        precio: "USD 10"
    },
    {
        id: "producto-07",
        titulo: "Parlantes",
        imagen: "../img/parlantes.png",
        categoria: {
            nombre: "Productos",
            id: "parlantes"
        },
        precio: "USD 200"
    },
    {
        id: "producto-08",
        titulo: "Camara Wifi",
        imagen: "../img/CamaraSeguridad.png",
        categoria: {
            nombre: "Productos",
            id: "parlantes"
        },
        precio: "USD 100"
    },



];

const contenedorProductos = document.querySelector("#contenedor-productos");

function CargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto"); // Nota: es "classList" en lugar de "classlist"
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">AGREGAR</button>
            </div>
        `;
        contenedorProductos.appendChild(div); // Usar "appendChild" en lugar de "append"
    });
}

CargarProductos();





