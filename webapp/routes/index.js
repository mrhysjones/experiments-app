var express = require('express');
var router = express.Router();

router.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load our public/index.html file
});
module.exports = router;
