const { User } = require("../models");
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (user.role !== "Admin") {
      throw { name: "forbidden" };
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = isAdmin;
