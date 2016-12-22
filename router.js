var express = require('express');
var router = express.Router();
var bluebird = require('bluebird');
var search = require('./search');
var helper = require('./helper');
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({message: 'Instructions to come!'});
});

router.route('/coords/:coords')
  .get(function(req, res) {
    var coordinates = req.params.coords.split(',')
    .map(function(e) { return parseFloat(e); });

    if (coordinates.length % 2 === 1) {
      return res.json({
        error: 'Uneven number of coordinates. You must supply an even number of coordinates'
      });
    }

    if (coordinates.length > 500) {
      return res.json({
        error: 'Only 500 points allowed per request.'
      });
    }

    var pairs = helper.splitPairs(coordinates);

    bluebird.map(pairs, function(coords) {
      return search.search_coords(coords);
    }).then(function(ary) {
      return res.json(ary);
    }, {concurrency: 2});
  });

module.exports = router;
