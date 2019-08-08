const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "../src")));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

server.listen(3000, () => {
  console.log('Server start at 3000 port');
});
