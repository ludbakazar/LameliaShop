const { Product, Category } = require("../models");
exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findAll({ include: Category });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
