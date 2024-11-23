const { getProduct, getProductById } = require("../controllers/product");

const router = require("express").Router();

router.get("/", getProduct);
router.get("/:id", getProductById);

module.exports = router;
