// https://medium.com/@prashantramnyc/authenticate-rest-apis-in-node-js-using-jwt-json-web-tokens-f0e97669aad3
// https://bluuweb.github.io/node/07-jwt/#jwt
// https://codeburst.io/to-handle-authentication-with-node-js-express-mongo-jwt-7e55f5818181

// API rest with 2 endpoints
// 1. /api/hello
// 2. /api/profile/:id
// /api/hello recive a GET request and return a JSON with a message
// /api/profile/:id recive a GET request with jwt authorization header, and return a JSON with the profile.
// if the user is not authorized, return a 401 status code

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

// cors
const cors = require("cors");
var corsOptions = {
  origin: "*", // Reemplazar con dominio
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

/**
 * FAKE USER LOGIN
 */
const users = [
  {
    id: 1,
    email: "test@test.com",
    password: "test",
    authorizationToken: "1234567890",
    secret: "secret",
    host: "localhost",
    role: "admin",
  },
];

/**
 * MIDDLEWARE
 */
// get the body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// verify token
const verifyToken = require("./middleware/verifyToken");
const getId = require("./routes/profile/middlewareGetId");

/**
 * ROUTES
 */
// import routes
const home = require("./routes/home");
const hello = require("./routes/hello");
const todoapp = require("./routes/todo");
const profile = require("./routes/profile/[id].js");

// root
app.use("/", home);

// /api/hello recive a GET request and return a JSON with a message
app.use("/api/hello", hello);

// /api/todo recive a GET/POST/PUT/DELETE request and proceed with the corresponding logic. Protected route.
app.use("/api/todo", verifyToken, todoapp);

// /api/profile/:id recive a GET request with authorization token header, and return a JSON with the profile. Protected route.
app.use("/api/profile/", verifyToken, profile);

/**
 * SERVER
 */
// Start the server
// if is development, listen on port 3000
// if is production, listen on port 8080
// if is test, listen on port 3001

const port =
  process.env.NODE_ENV === "production"
    ? 8080
    : process.env.NODE_ENV === "test"
    ? 3000
    : 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
