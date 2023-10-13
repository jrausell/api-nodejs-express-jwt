# NOT FINISHED YET !!!

# api-nodejs-express-typescript-jwt

Let's start with the basics. install the dependencies:

```
npm init
npm install express typescript ts-node @types/node @types/cors @types/express --save-dev
```

Create a tsconfig.json file with the following content:

```
{
  "compilerOptions": {
    "target": "es6", // this will compile our code to es6 version of javascript
    "module": "commonjs", // this will compile our code to commonjs module
    "outDir": "./dist", // this will be the output directory for our compiled code
    "strict": true, // this will enable all strict type-checking options
    "esModuleInterop": true, // this will enable emit __importStar and __importDefault helpers for runtime babel ecosystem compatibility and emit CommonJS-spec-compliant export assignments for ES modules
    "skipLibCheck": true, // this will skip type checking of all declaration files (*.d.ts)
    "forceConsistentCasingInFileNames": true, // this will ensure that casing is correct in imports
    "resolveJsonModule": true // this will allow us to import JSON modules
  },
  "include": ["src/**/*.ts"], // this will include all ts files in src folder
  "exclude": ["node_modules"] // this will exclude node_modules folder
}
```

And add the following scripts to your package.json file:

```
"scripts": {
  "start": "ts-node src/index.ts",
  "build": "tsc",
  "serve": "node dist/index.js"
}
```

Create a src/index.ts file with the following content:

```
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is our TypeScript Express home page!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

Now you can run the application with the following command:

```
npm run start
```

## Endpoints

### GET / (Home)

### GET /about (About)

### GET /blog (Blog)

#### GET /blog/:id (Blog Post)

Using a simple html as template with handlebars to render the blog post. fs to read the file and handlebars to render the html.

```
npm install handlebars --save
```

### CRUD /todo (To-Do)

#### GET /todo/:id (data)

#### POST /todo (crete)

#### PUT /todo/:id (update)

#### DELETE /todo/:id (delete)

# Some useful packages

## 1. Add body-parser

body-parser is a Node.js body parsing middleware. It parses incoming request bodies in a middleware before your handlers, available under the req.body property.

Install body-parser:

```
npm install body-parser
```

Add the following code to your src/index.ts file:

```
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

## 1. Add JWT and bcrypt

JWT is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher, and presented at USENIX in 1999. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

Install JWT and bcrypt:

```
npm install jsonwebtoken bcrypt
npm i --save-dev @types/jsonwebtoken  @types/bcrypt
```

Add the following code to your src/index.ts file:

```
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const user = {
  id: 1,
  name: "John Doe",
  email: "johndoe@mail.com",
  password: "password",
};

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email or password not provided");
  }

  if (email !== user.email) {
    return res.status(401).send("Email or password not valid");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).send("Email or password not valid");
  }

  const token = jwt.sign({ id: user.id }, "secret", {
    expiresIn: 86400,
  });

  res.send({ token });
});

app.get("/me", (req: Request, res: Response) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Token not provided");
  }

  jwt.verify(token, "secret", (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send("Token not valid");
    }

    res.send(decoded);
  });
});
```

## 2. Add nodemon

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Install nodemon:

```
npm install nodemon --save-dev
```

Add the following script to your package.json file:

```
"scripts": {
  "start": "nodemon src/index.ts",
  "build": "tsc",
  "serve": "node dist/index.js"
}
```

## 3. Add cors

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Install cors:

```
npm install cors
```

Add the following code to your src/index.ts file:

```
import cors from "cors";

app.use(cors());
```

## 4. Add helmet

Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

Install helmet:

```
npm install helmet
```

Add the following code to your src/index.ts file:

```
import helmet from "helmet";

app.use(helmet());
```

## 5. Add dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

Install dotenv:

```
npm install dotenv
```

Create a .env file with the following content:

```
PORT=3000
```

Add the following code to your src/index.ts file:

```
import dotenv from "dotenv";

dotenv.config();
```

## 6. Add morgan

Morgan is a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application.

Install morgan:

```
npm install morgan
```

Add the following code to your src/index.ts file:

```
import morgan from "morgan";

app.use(morgan("dev"));
```

## 7. Add express-validator

Express-validator is a set of express.js middlewares that wraps validator.js validator and sanitizer functions.

Install express-validator:

```
npm install express-validator
```

Add the following code to your src/index.ts file:

```
import { body, validationResult } from "express-validator";

app.post(
  "/user",
  body("name").isLength({ min: 3 }).withMessage("must be at least 3 chars long"),
  body("email").isEmail(),
  body("age").isInt(),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User created!");
  }
);
```

## 8. Add @/\* aliases

Install @/\* aliases:

```
npm install @types/node
```

Add the following code to your tsconfig.json file:

```
"baseUrl": "./src",
"paths": {
  "@/*": ["*"]
}
```

## 9. Add prettier

Install prettier:

```
npm install prettier
```

Add the following script to your package.json file:

```
"scripts": {
  "format": "prettier --write \"src/**/*.ts\""
}
```

## 10. Add eslint

Install eslint:

```
npm install eslint --save-dev
```

Add the following script to your package.json file:

```
"scripts": {
  "lint": "eslint \"src/**/*.ts\""
}
```
