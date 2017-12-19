// requires
require('dotenv').config()
const express = require('express'),
  compression = require('compression'),
  app = express();

// require routes
const index = require('./modules/routes/index'),
  resume = require('./modules/routes/resume'),
  // blog = require('./modules/routes/blog'),
  email = require('./modules/routes/email');

const port = process.env.PORT;

// uses
app.use(compression());
app.use(express.static('public'));

// use routes
app.use('/', index);
app.use('/resume', resume);
app.use('/email', email);
// app.use('/blog', blog);

app.listen(port, ()=> {
  console.log('running on port', port);
});
