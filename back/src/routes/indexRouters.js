const { Router } = require("express");
const shopRouter = require("./shopRouter");
const router = Router();

router.use("/Products", shopRouter); 

module.exports = router;
