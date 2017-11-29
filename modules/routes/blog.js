// dependancies
const path = require('path'),
  AWS = require('aws-sdk'),
  marked = require('marked'),
  fs = require('fs'),
  bodyParser = require('body-parser');

// router
const router = require('express').Router();

// uses
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

// S3 client
let S3 = new AWS.S3({apiVersion: '2006-03-01'});

//routes
router.get('/', (req, res)=> {
  res.sendFile(path.resolve('public/views/blog.min.html'));
});

router.get('/post/:id', (req, res)=> {
  const id = req.params.id;

  const params = {
    Bucket: "blog.hoganmcdonald",
    Key: id
   };

   S3.getObject(params, (err, data)=> {
     console.log(data);
     let file = data.Body.toString('utf-8');
     res.send(marked(file));
   });
});

router.get('/feed', (req, res)=> {

});

module.exports = router;
