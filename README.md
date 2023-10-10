# api-nodejs-express-jwt

This is a simple API using NodeJS, Express, Typescript and JWT

the api basic 2 endpoints

- /
- /api/hello
- /api/profile/:id
- /api/todo

## Dependencies

```
npm install express typescript ts-node @types/node @types/express --save-dev
```

## endpoints

### root

A home page

### /api/hello

Open endpoint that will return a simple message

### /api/profile/:id

This is a protected endpoint, will return a profile of a user based on the id passed in the url

### /api/todo

A simple protected CRUD endpoint

# Steps

// create package.json
npm init -y

// install express
npm install express --save

// install nodemon, dotenv
npm i --save-dev nodemon dotenv

// install jsonwebtoken, bcrypt, cors, body-parser
npm i jsonwebtoken bcrypt cors body-parser

// create .env file
touch .env

// create index.js
touch index.js

## How does the routes work

## How to protect the endpoint with JWT

A simple way to protect the endpoint is to use a middleware, this middleware will check if the token is valid and if it is valid it will pass the request to the next middleware.

For this example we will use the express-jwt package and a middleware to check the Authorization header.

### How it works

The client send a request with the user credentials, the server will check if the credentials are valid and if they are valid the server will create a token and send it back to the client.

The client will store the token and send it back to the server in the Authorization header on the next request.

The server will check if the token is valid and if it is valid it will pass the request to the next middleware, do the logic and send the response back to the client.

### How to create the token with jwt

jwt.sign(payload, secretOrPrivateKey, [options, callback])

Result:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MT

### How to verify the token recived from the client

jwt.verify(token, secretOrPublicKey, [options, callback])

### payload format

{
id: '1234567890',
role: 'admin'
}
