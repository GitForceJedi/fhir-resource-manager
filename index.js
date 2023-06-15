const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

// Middleware function to log request method and URL
app.use(
  cors({
    origin: '*',
  })
);
app.use((req, res, next) => {
  console.log(`Request method: ${req.method}, URL: ${req.url}`);
  next();
});

// Route handler to simulate slow response
app.get('/', (req, res, next) => {
  async function getData() {
    let theData = await axios.get('http://localhost:6000/products');
    console.log(theData);
    res.send(theData.data);
  }
  let theData = getData();
});

// Another route handler to send response
app.get('/', (req, res) => {
  res.send('This is the about page');
  console.log('about page');
});

// Start server
app.listen(9090, () => {
  console.log('Server listening on port 9090');
});
