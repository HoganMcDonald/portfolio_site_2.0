// requires
require('dotenv').config()
const express = require('express'),
  app = express();

// require routes
const index = require('./modules/routes/index');

const port = process.env.PORT;

// uses
app.use(express.static('public'));

// use routes
app.use('/', index);

app.listen(port, ()=> {
  console.log('running on port', port);
});
