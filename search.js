var elasticsearch = require('es');
var config = require('./config');
var options = {
  _index: config.index,
  _type: config.type
};

var es = elasticsearch(options);

exports.search_coords = function(coords) {
  var lat = coords[0];
  var lon = coords[1];

  return new Promise(function(resolve, reject) {
    es.search({
      query: {
        match_all: {
        }
      },
      filter: {
        geo_shape: {
          geometry: {
            relation: 'intersects',
            shape: {
              coordinates: [lon, lat],
              type: 'point'
            }
          }
        }
      }
    }, function(err, data) {
      if (err) {
        console.log(err);
        resolve([]);
      }

      if (data.hits.total === 0) {
        resolve([]);
      } else {
        data.hits.hits.forEach(function(e) {
        });
        resolve(data.hits.hits.map(function(e) {
          return e._source.properties;
        }));
      }
    });
  });
}
