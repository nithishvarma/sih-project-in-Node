var express = require('express');
addblog  = require('../bin/admincontrollers/blog/addblog');
editblog = require('../bin/admincontrollers/blog/editblog');
addquiz  = require('../bin/admincontrollers/quiz/addquiz');
editquiz = require('../bin/admincontrollers/quiz/editquiz');
var router = express.Router();
router.use('/addblog',addblog);
router.use('/editblog',editblog);

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('welcome admin')
});

module.exports = router;
