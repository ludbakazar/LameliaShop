const { User } = require("../models");
exports.register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await User.create({
      email,
      password,
      name,
    });
    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};
