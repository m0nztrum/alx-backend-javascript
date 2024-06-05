const http = require('http');
const url = require('url');
const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} dataPath - path to the CSV data file.
 * @returns {Promise<String>} A promise that resolves with the student data as a string.
 */

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const dataPath = parsedUrl.pathname;

  if (dataPath === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (dataPath === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
  }
});

module.exports = app;
