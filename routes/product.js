const {
  getProduct,
  getProductById,
  createProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/product");
const isAdmin = require("../middlewares/isAdmin");

const router = require("express").Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", editProduct);

module.exports = router;
