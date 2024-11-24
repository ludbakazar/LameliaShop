const { Category } = require("../models");
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findAll();
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
