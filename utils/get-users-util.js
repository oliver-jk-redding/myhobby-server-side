var fs = require('fs');
var path = './db/users.json'

module.exports = callback => {
  fs.readFile(path, function(err, data) {
    if(err) {callback(err); return;}
    callback(null, JSON.parse(data.toString()));
  })
}
