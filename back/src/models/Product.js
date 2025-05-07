const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    img: String,
    precio: Number,
    categoria: String,
});

const Product = mongoose.model("Product", ProductSchema, "Products");

module.exports = Product;
