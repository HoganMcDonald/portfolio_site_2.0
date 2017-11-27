// requires
const router = require('express').Router(),
  path = require('path');

router.get('/', (req, res)=> {
  res.sendFile(path.resolve('public/views/index.min.html'));
});

module.exports = router;
