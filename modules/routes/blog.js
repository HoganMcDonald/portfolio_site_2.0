// dependancies
const path = require('path'),
  S3 = require('aws-sdk/clients/s3'),
  bodyParser = require('body-parser');

// router
const router = require('express').Router();

// uses

//routes
router.get('/', (req, res)=> {
  res.sendFile(path.resolve('public/views/blog.min.html'));
});

module.exports = router;
