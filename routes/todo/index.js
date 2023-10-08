const router = require("express").Router();

// TODO: create a DB and finish the CRUD operations

router.all("/", (req, res, next) => {
  // a middleware to do whatever you want on every request before the route
  next();
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  // no id, or invalid, return
  if (!id || !isNaN(parseInt(id))) {
    return res.status(400).json({
      error: "Invalid id",
    });
  }

  // get the profile
  const user = fakeusers.find((user) => user.username === id);
  if (!user) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  // return the profile
  res.json({
    error: null,
    data: {
      user,
    },
  });
});

router.post("/", (req, res) => {
  // get the body
  const { username, name, email, phone, address, city, state, zip } = req.body;

  // validate the body
  if (
    !username ||
    !name ||
    !email ||
    !phone ||
    !address ||
    !city ||
    !state ||
    !zip
  ) {
    return res.status(400).json({
      error: "Missing required information",
    });
  }

  // .. do all the validations
  // do the create
  // return the new user
  res.json({
    error: null,
    data: {
      title: "Imaging I created the user",
    },
  });
});

// Update a user
router.put("/:id", (req, res) => {
  const id = req.params.id;
  // .. do all the validations
  // do the update
  // return the updated user
  res.json({
    error: null,
    data: {
      title: "Imaging I updated the user",
    },
  });
});

// Delete a user
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  // .. do all the validations
  // do the delete
  // return the updated user
  res.json({
    error: null,
    data: {
      title: "Imaging I deleted the user",
    },
  });
});

module.exports = router;
