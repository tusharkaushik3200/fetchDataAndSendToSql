const fs = require('fs');
let mysql = require('mysql');
let express = require('express')
let app = express();
let bodyParser = require('body-parser')
var path = require('path');
var session = require('express-session');
const axios = require('axios');
const ejs = require('ejs');
const { execSync } = require('child_process');

let readFile = fs.readFileSync("./outputPhysics11th.json", "utf8")
/*sql database connection*/
// let parsee=JSON.parse(readFile);
// var conn=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'new-password',
//     database:'test'
// });

// conn.connect(function(err){
//     if(err) throw err;
//     console.log("database is connected successfully");
// });
// console.log(readFile)

var js = JSON.parse(readFile).slice(0, 59);
console.log(js.length)



axios.post('http://192.168.29.45:4010/data', {
   studentData: js 
})
   // Print response
   .then(response => {
      const val = response.data.body
      // console.log(val)
      // console.log(valuee)
   })

   .catch(error => console.log)
// app.listen(4010, () => {
//    console.log("HELLO")
// })
