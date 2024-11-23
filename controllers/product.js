const { Product, Category } = require("../models");

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findAll({ include: Category });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, { include: Category });
    if (!product) {
      throw { name: "notfound" };
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
