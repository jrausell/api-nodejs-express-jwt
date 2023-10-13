import express, { Request, Response, NextFunction } from "express";
import * as path from "path";
import bodyParser from "body-parser";

const app = express();

app.use(express.static(path.join(__dirname, "public"))); // This will load static content from /src/public folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // Add this line to enable JSON parsing in the request body

require("dotenv").config();

const port = process.env.PORT || 3000;

/**
 * Routes
 */
// Import the middleware
import { verifyToken } from "./auth/middleware/verifyToken";

// Import the routes
import aboutRoutes from "./routes/about";
import blogRoutes from "./routes/blog";
import todoRoutes from "./routes/todo";

// Home
// we have the GET logic here.
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Hello, TypeScript Express! Check out the <a href='/about'>About page</a>"
  );
});
// About
app.use("/about", aboutRoutes); // And for the rest we use or router tree from another file
//// Blog
app.use("/blog", blogRoutes); // for the blog with dynamic routes
// Login to get the token
app.use("/auth", require("./auth/login")); // for the login
// To-do
app.use("/api/todo", verifyToken, todoRoutes); // Add this line to mount the Task API routes

/**
 *
 */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
