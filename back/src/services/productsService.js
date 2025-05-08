const Product = require("../models/Product"); // asegurate de tener este import

const getProduct = async (categoria) => {
  const filtro = categoria ? { categoria } : {};
  const productos = await Product.find(filtro);
  return productos;
};

module.exports = {
  getProduct,
};
