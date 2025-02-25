const JWT = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const token = req.cookies["token"];
  if (token) {
    JWT.verify(token, "secret-is-secret", (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "UnAuthorized Access, Please Login!!",
        });
      }

      req.user = decoded;
      next();
    });
  } else {
    res.status(401).send({
      message: "UnAuthorized Access, Please Login!!",
    });
  }
};

module.exports = VerifyToken;
