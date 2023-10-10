var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var secert = "babyfizzymama" 

app.use(cors())

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'babayfizzymama'
});

app.post('/register', jsonParser, function (req, res, next) {
    // var email = req.body.email
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.execute(
            'INSERT INTO users (email, password, fname, lname) VALUES (?, ?, ?, ?)',
            [req.body.email, hash, req.body.fname, req.body.lname],
            function(err, results, fields) {
                if(err){
                    res.json({status: 'error', message : err});
                    return
                }
                res.json({status : 'ok'})
            }
        );
    });
})

//Generate token
app.post('/login', jsonParser, function (req, res, next) {
    // var email = req.body.email
    connection.execute(
        'SELECT * FROM users WHERE email = ?',
        [req.body.email],
        function(err, users, fields) {
            console.log(users);
            if(err){ res.json({status: 'error1', message : err}); return }
            if(users.length == 0){ res.json({status: 'error2', message : err.message}); return}
            bcrypt.compare(req.body.password, users[0].password, function(err, isLogin) {
                if(isLogin){
                    var token = jwt.sign({ email: users[0].email }, secert, { expiresIn : '1h' });
                    res.json({status : 'ok', message : 'login success', token});
                }else{
                    res.json({status: 'error3', message : err.message}); 
                }
            });
        }
    );    
})

//checktoken 
app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        var decoded = jwt.verify(token, secert);
        console.log(decoded) 
        res.json({status : 'ok', decoded});
            // verify a token symmetric
        // jwt.verify(token, 'shhhhh', function(err, decoded) {
        //     console.log(decoded.foo) // bar
        // });                   
        // res.json({token});
    } catch(err) {
        // err
        res.json({status: 'error', message : err.message}); 
    }
})

app.listen(5050, function () {
  console.log('CORS-enabled web server listening on port 80')
})