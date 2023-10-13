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
    <li><a href="/blog">Blog</a></li>
    <li><a href="#api">To-Do (API. New Authorization Token)</a></li>
  </ul>

  <h2 id="api">API</h2>
  <p>A simple API to test JWT token authorization.</p>
  <p>Endpoints:</p>
  <ul>
    <li>GET /api/todo (return Tasks)</li>
    <li>POST /api/todo (create a new Task)</li>
    <li>GET /api/todo/:id (return a Task)</li>
    <li>PUT /api/todo/:id (update a Task)</li>
    <li>DELETE /api/todo/:id (delete a Task)</li>
  </ul>


  <h3>Authorization</h3>
  <p>To use the API, you need to send a token in the Authorization header.</p>
  <p>Get your valid token from the login:</p>
  <pre>eyJhbGciOiJIUzI1...K5Y1z9J5J8yjDQ</pre>
`);
});

/**
 *
 */
export default router;
