const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      throw { name: "Unauthorized" };
    }
    const token = bearerToken.split(" ")[1];
    const verified = verifyToken(token);

    const user = await User.findByPk(verified.id);
    if (!user) {
      throw { name: "Unauthorized" };
    }
    req.user = {
      id: user.id,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
