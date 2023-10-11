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
    "forceConsistentCasingInFileNames": true // this will ensure that casing is correct in imports
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
