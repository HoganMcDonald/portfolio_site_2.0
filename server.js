// requires
require('dotenv').config()
const express = require('express'),
  app = express();

// require routes
const index = require('./modules/routes/index'),
  resume = require('./modules/routes/resume'),
  email = require('./modules/routes/email');

const port = process.env.PORT;

// uses
app.use(express.static('public'));

// use routes
app.use('/', index);
app.use('/resume', resume);
app.use('/email', email);

app.listen(port, ()=> {
  console.log('running on port', port);
});
