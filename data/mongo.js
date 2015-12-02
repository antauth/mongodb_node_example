var mongodb = require('mongodb');
// init function will allow us to reuse db connection
module.exports.init = function(callback) {
  var server = new mongodb.Server('localhost', 27017);
  var db = new mongodb.Db('challenge', server);
  db.open(function(error, db) {
    //export the db
    module.exports.db = db;
    module.exports.bios = db.collection('bios');
    callback(error);
  });
};
