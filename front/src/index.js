const axios = require("axios");
const renderProduct = require("./renderProduct");
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

import { initModals } from './modals';

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
