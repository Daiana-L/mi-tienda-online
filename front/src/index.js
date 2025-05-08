const axios = require("axios");
const renderProduct = require("./renderProduct");
const filtrarCategoria = require("./filtrarCategorias");
import { initModals } from './modals';
const fetchProducts = async () => {
    try {
        const response = await axios.get("http://localhost:3000/Products");
        renderProduct(response.data);
        console.log(response)
    } catch (error) {
        console.log("Error:", error.message);
    }
};

fetchProducts();


document.getElementById("btn-vestidos").addEventListener
("click", () => {
    filtrarCategoria('vestidos');
});

document.getElementById("btn-blusas").addEventListener
("click", () => {
    filtrarCategoria('blusas');
});

document.getElementById("btn-pantalones").addEventListener
("click", () => {
    filtrarCategoria('pantalones');
});

document.getElementById("btn-accesorios").addEventListener
("click", () => {
    filtrarCategoria('accesorios');
});




document.addEventListener('DOMContentLoaded', () => {
initModals();

window.google.accounts.id.initialize({
    client_id: '889609881589-e027nfe87nn3arnh36u6n7b7gpdao5pg.apps.googleusercontent.com',
    callback: (response) => {
        console.log('Token:', response.credential);
        alert('Login con Google exitoso');
        const loginModal = document.getElementById('loginModal');
        loginModal.classList.add('hidden');
    }
});

window.google.accounts.id.renderButton(
    document.getElementById('google-sign-in-button'),
    { theme: 'outline', size: 'large' }
);
});
