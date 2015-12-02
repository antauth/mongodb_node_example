var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var results = mongo.bios.find({'_id': parseInt(req.params.id)}).limit(1); //cursor of results
  var array = results.toArray(function(err, arr) {
    var doc = arr[0];
    res.json(doc);
  });
});

module.exports = router;
