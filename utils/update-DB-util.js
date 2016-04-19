var fs = require('fs');
var path = './db/users.json'

module.exports = data => {
  console.log('USERS ', data)
  console.log('USERS PROJECTS ', data.users[0].projects)
  data = JSON.stringify(data);
  fs.writeFile(path, data, (err) => {
    if(err) {console.log('ERROR: ', err); return;}
    console.log('saved');
  })
}
