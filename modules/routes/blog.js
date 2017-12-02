// dependancies
const path = require('path'),
  AWS = require('aws-sdk'),
  marked = require('marked'),
  fs = require('fs'),
  bodyParser = require('body-parser');

// router
const router = require('express').Router();

// uses
router.use(bodyParser.urlencoded({extended: true}));
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

router.get('/post/:name', (req, res)=> {
  const name = req.params.name;

  const params = {
    Bucket: "blog.hoganmcdonald",
    Key: name
   };

   S3.getObject(params, (err, data)=> {
     let file = data.Body.toString('utf-8');
     res.send(marked(file));
   });
});

router.get('/admin', (req, res)=> {
  res.sendFile(path.resolve('public/views/admin.min.html'));
});

router.post('/admin/newPost', (req, res)=> {
  console.log(req.body);
  if (req.body.password === process.env.PASSWORD) {
    const file_name = req.body.fileName;
    //create file
    const params = {
      Bucket: "blog.hoganmcdonald",
      Key: file_name + '.md',
      Body: req.body.file
     };
    //post to S3
    S3.putObject(params, (err, data)=> {
      console.log(err);
      console.log(data);
      res.sendStatus(201);
    });
  }

});

module.exports = router;
