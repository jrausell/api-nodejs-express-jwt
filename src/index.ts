import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

import taskRoutes from "./routes/tasks";

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use("/tasks", taskRoutes); // Add this line to mount the Task API routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
