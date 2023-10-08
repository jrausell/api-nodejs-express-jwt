const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const payloadTest = {
    id: 1,
    email: "test@text.com",
    role: "admin",
  };
  const secretKeyTest = "secret";

  const token = jwt.sign(payloadTest, secretKeyTest);
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRleHQuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjk2NzQ5ODE1fQ.BIWoZ9ZAgSrUteuPYvnmZOxj_Pq1BxNLgH7rE4lJp7A

  res.json({
    error: null,
    data: {
      title: "Hello World!",
      description: "Today is a beautiful day!",
      testToken: token,
    },
  });
});

module.exports = router;
