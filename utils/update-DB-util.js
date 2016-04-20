var fs = require('fs');
var path = './db/users.json'

module.exports = data => {
  data = JSON.stringify(data);
  fs.writeFile(path, data, (err) => {
    if(err) {console.log('ERROR: ', err); return;}
    console.log('SAVED!');
  })
}
