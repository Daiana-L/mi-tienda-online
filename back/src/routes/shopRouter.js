const { Router } = require("express");
const shopController = require("../controllers/shopController")
const shopRouter = Router();

shopRouter.get("/", shopController.getAllProducts);

module.exports = shopRouter;