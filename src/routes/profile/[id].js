const router = require("express").Router();
const path = require("path");

// TODO: get fake users from fakeusers.js

// GET the dynamic parameter from the URL
router.get("/:id", (req, res) => {
  const id = req.params.id;
  // no id, or invalid, return
  if (!id || !isNaN(parseInt(id))) {
    return res.status(400).json({
      error: null,
      data: {
        title: "Hello!!",
        profile: req.params,
        path: req.path,
        var1: parseInt(id),
        var2: isNaN(parseInt(id)),
      },
    });
  }

  // id is valid
  // do your things
  // and return the response

  const user = fakeusers.find((user) => user.username === id);
  if (!user) {
    return res.status(404).json({
      error: null,
      data: {
        title: "User not found",
      },
    });
  }

  res.json({
    error: null,
    data: {
      user,
    },
  });
});

module.exports = router;

const fakeusers = [
  {
    id: 1,
    username: "jdoe",
    name: "John Doe",
    email: "john.doe@fake.com",
    phone: "1114567890",
    address: "1234 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    hosts: ["http://localhost:3000", "http://localhost:3001"],
  },
  {
    id: 2,
    username: "mjane",
    name: "Marie Jane",
    email: "jane.marie@fake.com",
    phone: "1214567890",
    address: "Arlington St 1234",
    city: "London",
    state: "London",
    zip: "L4321",
  },
  {
    id: 3,
    username: "jsmith",
    name: "John Smith",
    email: "",
    phone: "131337890",
    address: "23 Rodeo Dr",
    city: "Los Angeles",
    state: "CA",
    zip: "34105",
  },
];
