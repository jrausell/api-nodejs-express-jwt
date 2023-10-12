import { Router, Request, Response } from "express";

// import the posts array from posts.js
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
// Blog home
router.get("/", (req: Request, res: Response) => {
  res.send("...");
});

// Blog Post
router.get("/:slug", (req: Request, res: Response) => {
  // const {slug}:{slug:string} = req?.params;
  const slug = req?.params?.slug as string;

  if (!slug) {
    res.status(404).send("Post not found");
  }

  // Find the post. We will use an array with some fake posts
  const thePost = posts.find((post: Post) => post.slug === slug);

  // return the post
  res.send("...");
});

// This Blog will not have the CRUD logic, that will be in the To-Do API

// Export the router
export default router;
