const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

const authorizeMiddleware = (req, res, next) => {
  const userToken = req.headers.authorization.split(" ")[1];
  // console.log(userToken)
  jwt.verify(userToken, "thisIsSecretKey", async function (err, decoded) {
    const userId = decoded.userId;
    const user = await UserModel.findOne({ _id: userId });
    if (err || !user) {     
      return res.status(400).send("User Is Not Authorized");
    }

    req.userId = userId;
    next();
  });
};

module.exports = authorizeMiddleware;