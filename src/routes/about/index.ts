import { Router, Request, Response } from "express";

const router = Router();

/**
 * A simple way to return statis Html on the response
 * Just add the html
 */
router.get("/", (req: Request, res: Response) => {
  res.send(`
  <h1>About</h1>
  <p>This is a HTML page we return directly from the router GET.</p>
  <p>No much logic here, but you can use this to return a static page.</p>
  <p>Check other endpoints:</p>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/api/todo">To-Do</a></li>
  </ul>
`);
});

/**
 *
 */
export default router;
