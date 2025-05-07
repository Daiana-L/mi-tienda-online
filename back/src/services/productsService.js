const Product = require("../models/Product");

module.exports = {
getProduct: async () => {
    const product = await Product.find();
    console.log("PRODUCTOS:", product);
    console.log(product)
    return product;
    
}};
