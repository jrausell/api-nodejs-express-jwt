const jwt = require("jsonwebtoken");

// protect routes
// middleware to validate token
const verifyToken = (req, res, next) => {
  // check if the header has the token
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    // verify token
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = verified;
    // continue to the next middleware
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

module.exports = verifyToken;
