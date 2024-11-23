exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    console.log(error);
  }
};
