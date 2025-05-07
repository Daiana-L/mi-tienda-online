const productsService = require("../services/productsService")

module.exports ={
getAllProducts: async (req, res) =>{
const product = await productsService.getProduct();
res.status(200).json(product);
}};