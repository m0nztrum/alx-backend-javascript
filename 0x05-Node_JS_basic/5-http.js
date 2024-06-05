const http = require('http');
const url = require('url');

const fs = require('fs');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  }
});
