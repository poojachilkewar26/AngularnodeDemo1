var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var mysql = require('mysql');
var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;
var app = express();

//View Engine
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);

// First you need to create a connection to the db
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


app.listen(port,function(){
  console.log('server started on port '+port);
});
