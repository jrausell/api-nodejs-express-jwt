const router = require("express").Router();

router.all("/", (req, res, next) => {
  console.log("You did a request to /api/todo", req.user);
  next();
});

router.get("/", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "Protected route",
      var2: "You did GET",
    },
  });
});

router.post("/", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "Protected route",
      var2: "You did POST",
    },
  });
});

router.put("/", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "Protected route",
      var2: "You did PUT",
    },
  });
});

router.delete("/", (req, res) => {
  res.json({
    error: null,
    data: {
      title: "Protected route",
      var2: "You did DELETE",
    },
  });
});

module.exports = router;
