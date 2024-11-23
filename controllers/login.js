const { User } = require("../models");
const { comparePass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw { name: "emailrequired" };
    }
    if (!password) {
      throw { name: "passwordrequired" };
    }
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw { name: "unauthentication" };
    }
    const compared = comparePass(password, user.password);
    if (!compared) {
      throw { name: "unauthentication" };
    }

    const access_token = signToken({ id: user.id });
    res.status(200).json({ access_token });
  } catch (error) {
    next(error);
  }
};
