import { Router, Request, Response } from "express";
import * as Handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";

// import the posts array from posts.json
import { posts } from "./posts";

const router = Router();

type Post = {
  slug: string;
  title: string;
  content: string;
};

/**
 * We will try dynamic routes to return a blog post from a slug
 * /blog/[slug]
 * Do not forget to validate the slug to avoid path traversal attacks
 */

/**
 * Blog home
 */
router.get("/", (req: Request, res: Response) => {
  const templatePath = path.join(__dirname, "home.html");
  const template = fs.readFileSync(templatePath, "utf-8");
  res.send(template);
});

/**
 *  Blog Post
 */
// Read the template file
const templatePath = path.join(__dirname, "post.html");
const template = fs.readFileSync(templatePath, "utf-8");

// Compile the template
const compiledTemplate = Handlebars.compile(template);

router.get("/:slug", (req: Request, res: Response) => {
  // const {slug}:{slug:string} = req?.params;
  const slug = req?.params?.slug as string;

  if (!slug) {
    res.status(404).send("Post not found");
  }

  // Find the post. We will use an array with some fake posts
  const thePost = posts.find((post: Post) => post.slug === slug);

  if (!thePost) {
    res.status(404).send("Post not found");
  }

  // Render the template with your variables
  const renderedTemplate = compiledTemplate({
    title: thePost?.title,
    content: thePost?.content,
  });

  // return the post
  res.send(renderedTemplate);
});

// This Blog will not have the CRUD logic, that will be in the To-Do API

// Export the router
export default router;
