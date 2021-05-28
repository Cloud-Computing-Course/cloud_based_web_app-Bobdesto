var express = require('express');
var router = express.Router();
var fs = require('fs');
//var users = require('../datastore/users.json');

/* GET home page. */
router.post('/', function(req, res, next) {
  var userName = req.body.username;
  var userPassword = req.body.password;
  console.log(userName + " " + userPassword);
 
  var isFound = false;
  let userData = fs.readFileSync('./datastore/users.json');
  let users = JSON.parse(userData);
  console.log(users[0].user_name);
  'use strict';

  console.log(users);
   //Looping Structure
  for(var x = 0; x < users.length; ++x){
    var user = users[x];
        //Decison making logic 
        if(userName == user.user_name && userPassword == user.user_password){
          res.render('profile', { user: user.user_name });
            
            x = users.length;
           

        }else{
            res.render('login');
        }
   }

  
  

 
});

module.exports = router;