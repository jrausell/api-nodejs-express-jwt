import express, { Request, Response } from "express";

const app = express();
app.use(express.json()); // Add this line to enable JSON parsing in the request body

const port = process.env.PORT || 3000;

/**
 *
 */
import aboutRoutes from "./routes/about";
import todoRoutes from "./routes/todo";

/**
 *
 */
// Home
// we have the GET logic here.
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});
// About
app.use("/about", aboutRoutes); // And for the rest we use or router tree from another file
// To-do
app.use("/api/todo", todoRoutes); // Add this line to mount the Task API routes

/**
 *
 */
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
