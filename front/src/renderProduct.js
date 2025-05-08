const contenedor = document.getElementById("contenedor");

const renderProduct = (data) => {
    contenedor.innerHTML = "";
data.map((product) => {
    const tarjeta = `
    <div class="flex items-center flex-col z-0 transition-transform duration-300 transform hover:scale-105">
        <img 
            src="${product.img}" 
            alt="${product.title}" 
            class="w-full object-cover">
        <h2>${product.title}</h2>
        <p><strong>Precio:</strong>  $${product.precio}</p>
        <p><strong>Categoría:</strong> ${product.categoria}</p>
        <div class="flex items-center">
        <button class="bg-pink-100 mt-5  px-4 py-2 rounded-md">Añadir al carrito</button>
        <button class="bg-pink-100 mt-5 ml-6 px-4 py-2 rounded-md">Ver</button>
        </div>
    </div>`;
    contenedor.innerHTML += tarjeta;
});
};

module.exports = renderProduct;
