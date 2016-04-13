var getUsers = require('./get-users-util');

module.exports = (id, callback) => {
  getUsers(function(err, data) {
    if(err) {callback(err); return;}
    for(user in data.users)
      if(data.users[user].id === id)
        callback(null, data.users[user]);
  })
}