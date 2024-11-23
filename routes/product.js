const { getProduct } = require("../controllers/product");

const router = require("express").Router();

router.get("/", getProduct);
router.get("/:id");

module.exports = router;
