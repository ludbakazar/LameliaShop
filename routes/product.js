const {
  getProduct,
  getProductById,
  createProduct,
  deleteProduct,
} = require("../controllers/product");
const isAdmin = require("../middlewares/isAdmin");

const router = require("express").Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

module.exports = router;
