const { login } = require("../controllers/login");
const { register } = require("../controllers/user");
const authentication = require("../middlewares/authentication");
const isAdmin = require("../middlewares/isAdmin");

const router = require("express").Router();

router.post("/login", login);
router.use(authentication);
router.post("/register", isAdmin, register);

router.get("/products");

module.exports = router;
