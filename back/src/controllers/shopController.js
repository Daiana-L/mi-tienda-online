const productsService = require("../services/productsService");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const { categoria } = req.query;
      const product = await productsService.getProduct(categoria);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los productos", error });
    }
  }
};
