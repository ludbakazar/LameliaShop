const { getCategory, createCategory } = require("../controllers/category");

const router = require("express").Router();

router.get("/", getCategory);
router.post("/", createCategory);

module.exports = router;
