// const http = require('node:http');
// const fs = require("fs")

import http from "http"
import obj, {a, b} from "./mymodule.js"
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>BARCAAAAAAA</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log(a , b);
console.log(obj)

