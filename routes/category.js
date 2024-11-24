const { getCategory } = require("../controllers/category");

const router = require("express").Router();

router.get("/", getCategory);

module.exports = router;
