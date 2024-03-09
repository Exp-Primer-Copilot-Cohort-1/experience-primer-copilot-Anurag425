// Create web server
// Start web server

// 1. Import the `http` module
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2. Create a new web server
const server = http.createServer((req, res) => {
  // 3. Send an HTTP header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // 4. Send the response body "Hello, World!"
  res.write('<h1>Hello, World!</h1>');
  res.end();
});

// 5. Start the web server on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// 6. Add a new route for `/comments`
server.on('request', (req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
      if (err) {
        throw err;
      }
      res.write(data);
      res.end();
    });
  }
});