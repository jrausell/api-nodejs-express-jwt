const router = require("express").Router();
const bcrypt = require("bcryptjs");

// register route
router.post("/register", (req, res) => {
  res.send("Register");
});

// login route
router.post("/login", async (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "",
  };

  // create token
  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user.id,
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
});

module.exports = router;
