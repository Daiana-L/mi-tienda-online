const contenedor = document.getElementById("contenedor");
const initModals = require("./modals");

const renderProduct = (data) => {
contenedor.innerHTML = "";

data.forEach((product, index) => {
    const tarjeta = `
    <div class="flex items-center flex-col z-0 transition-transform duration-300 transform hover:scale-105">
        <img src="${product.img}" alt="${product.title}" class="w-full object-cover">
        <h2>${product.title}</h2>
        <p><strong>Precio:</strong> $${product.precio}</p>
        <p><strong>Categoría:</strong> ${product.categoria}</p>
        <div class="flex items-center">
        <button class="bg-pink-100 mt-5 px-4 py-2 rounded-md">Añadir al carrito</button>
        <button 
            class="bg-pink-100 mt-5 ml-6 px-4 py-2 rounded-md ver-detalles-btn" 
            data-modal-target="verModal" 
            data-index="${index}">
            Ver
        </button>
        </div>
    </div>
    `;
    contenedor.innerHTML += tarjeta;
});

document.querySelectorAll(".ver-detalles-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    const product = data[index];
    const detalles = document.getElementById("detalles");
    if (!detalles) return;
    detalles.innerHTML = `
        <div class="flex flex-wrap gap-2 mt-2">
        ${product.fotos_extra?.map(foto => `<img src="${foto}" class="w-20 h-20 object-cover rounded" />`).join("") || ""}
        </div>
        <h2 class="text-lg font-bold mb-1">${product.title}</h2>
        <button class="bg-pink-100 mt-1 ml-6 px-4 py-2 rounded-md">Añadir al carrito</button>
        <p><strong>Descripción:</strong> ${product.descripcion}</p>
        <p><strong>Unidades disponibles:</strong> ${product.unidades_disponibles}</p>
        <p><strong>Talles:</strong> ${product.talles?.join(", ") || "N/A"}</p>
    `;
    });
});

initModals();
};

module.exports = renderProduct