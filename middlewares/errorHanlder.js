const errorHandler = (error, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";

  if (error.name === "emailrequired") {
    status = 400;
    message = "Email is required";
  } else if (error.name === "passwordrequired") {
    status = 400;
    message = "Password is required";
  } else if (error.name === "unauthentication") {
    status = 401;
    message = "Invalid email or password";
  }

  res.status(status).json({ message });
};

module.exports = errorHandler;
