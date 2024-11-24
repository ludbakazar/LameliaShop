const { Category } = require("../models");
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findAll();
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};
