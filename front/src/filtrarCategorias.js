const renderProduct = require("./renderProduct");
const axios = require("axios");
const filtrarCategoria = async (categoria = "") => {
    try {
        const url = categoria
            ? `http://localhost:3000/Products?categoria=${categoria}`
            : "http://localhost:3000/Products";
        const response = await axios.get(url);
        renderProduct(response.data);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

module.exports = filtrarCategoria;