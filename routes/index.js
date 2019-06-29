var express = require('express');
var router = express.Router()
// var mysql = require('mysql');

// // First you need to create a connection to the db
// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database:'dbmean'
// });

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });
router.get('/',function(req,res,next){
  res.render('index.html');  
   
});
module.exports = router;