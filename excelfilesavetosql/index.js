const fs = require('fs');
let mysql = require('mysql');
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser({ limit: '50mb' }));
// let readFile = fs.readFileSync('./outputPhysics11th.json' ,'utf-8'); //READ FILE 

https://https://github.com/tusharkaushik3200/sendApi://github.com/tusharkaushik3200/sendApiub.com/tusharkaushik3200/sendApi
//MYSQL DATABASE CONNECTION//

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "userdata"
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});








// TO TAKE DATA(JSON FILE) FROM OTHER req//


app.post('/data', (req, res) => {

  let stdData = req.body.studentData;
  let valu = [];

  
  stdData.forEach(element => {
    // console.log(element)
    valu.push(Object.values(element));
  });


  const sql = `INSERT INTO student_data ( e_value , chapter_id, chapter_name, topic_id ,topic_name , concept_id , concept_name , description) VALUES ?`;

  con.query(sql, [valu], function (err, result) {
    if (err) {
      // throw (err);
      console.log(err)
      res.send(err)
    }
    else {
      console.log('data saved' , result);
      res.send("data saved!")
    }
    con.end();

  });
});


// TO SEND DATA TO OTHER URL //


// app.get('/', (req, res) => {
//    res.send(req.body)
// });





app.listen(4010, '0.0.0.0', () => console.log('Example app listening on port 4010!'));