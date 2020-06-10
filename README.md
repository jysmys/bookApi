### How to

// NODE

npm i -g express-generator-api

express-api booksApi && cd booksApi

git init
git status

// add .gitignore
// add:
node_modules
DS_Store

yarn
yarn start

// add test suite
yarn add -D mocha chai supertest

touch tests/booksEndpoint.test.js

// Add to package.json, scripts:
"test": "mocha --recursive --exit tests"

// Needs to be in every test file:

const app = require("../app");
const supertest = require("supertest");
const expect = require("chai").expect;

let server, request, response;

before((done) => {
server = app.listen(done);
request = supertest.agent(server);
});

after((done) => {
server.close(done);
});

// create jsonResponse.js in test folder
