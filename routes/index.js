'use strict'

var express = require('express');
var router = express.Router();
var uploadManager = require('./uploadManager')(router);
var getUsers = require('./../utils/get-users-util');
var getUserInfo = require('./../utils/get-user-info-util');
var updateDB = require('./../utils/update-DB-util');

// Returns json of users
router.get('/users', function (req, res) {
  res.status(200)
  getUsers(function(err, userInfo) {
    if(err) {console.log(err); return;}
    res.send(userInfo);
  })
})

// Returns json of user information
router.get('/user/:id', function (req, res) {
  res.status(200)
  getUserInfo(req.params.id, function(err, data) {
    if(err) {console.log(err); return;}
    res.send(data);
  })
})

//returns a json of the user's hobbies
router.get('/user/hobbies/', function (req, res) {
  res.status(200)
  res.send()
})

// Returns json list of user's projects
router.get('/user/projects/', function (req, res) {
  res.status(200)
  res.send()
})

//returns a json of the id specified user's pinterest board
router.get('/user/pinterest/:id', function (req, res) {
  res.status(200)
  res.send()
})

//returns a json of the latest projects
router.get('/projects/', function (req, res) {
  res.status(200)
  res.send()
})

//returns a json of the latest projects of a specified hobby
router.get('/projects/:hobby', function (req, res) {
  res.status(200)
  res.send()
})

//returns a json of a project matching the specified id
router.get('/projects/:id', function (req, res) {
  res.status(200)
  res.send()
})

//creates a new project for the user with the given id
router.post('/user/:id', function (req, res) {
  res.status(202)
  getUserInfo(req.params.id, function(err, userInfo) {
    if(err) {console.log('ERROR: ', err); return;}
    var newProject = {
      id: Date.now(),
      name: req.body.projectName,
      dateStart: new Date().toLocaleDateString(),
      progressShots: ["hi"]
    }
    userInfo.projects.push(newProject);
    getUsers(function(err, data) {
      if(err) {console.log('ERROR: ', err); return;}
      for(var user in data.users)
        if(data.users[user].id === userInfo.id)
          data.users[user] = userInfo;
      updateDB(data)
    })
  })
})

//returns a json of the updated project
router.patch('/projects/:id', function (req, res) {
  res.status(202)
  res.send()
})

//removes the project with the matching id and returns a json of the projects without the id
router.delete('/projects/:id', function (req, res) {
  res.status(202)
  res.send()
})


module.exports = router;
