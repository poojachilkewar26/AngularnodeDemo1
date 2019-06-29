var express = require('express');
var router = express.Router()
var mysql = require('mysql');
// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'dbmean'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
router.get('/tasks',function(req,res,next){
  con.query('SELECT * FROM task',function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    res.json(results);

  }
  });  
  
});
module.exports = router;