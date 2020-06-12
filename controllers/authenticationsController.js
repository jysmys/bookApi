const jwt = require("jsonwebtoken");
const salt = "thisismyfuckingsecret";
const authenticationsController = {
  login: async (req, res) => {
    const payload = req.body;
    const token = await jwt.sign(payload, salt);
    res.send({ token: `Bearer ${token}` });
  },
};

module.exports = authenticationsController;
