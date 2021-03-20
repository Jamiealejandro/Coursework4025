var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;
var port = PORT;
const PASS = process.env.DBPASS
var mdbpass = PASS

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jamiealejandro:<Damansara1>@cluster0.rhco3.mongodb.net/test";

app.route('/login')

    .get(function(req, res){
      var output = 'getting the login';
      var input1 = req.query['input1'];
      var input2 = req.query['input2'];
      if (typeof input1 != 'undefined' && typeof input2 != 'undefined'){
        output+=('There was input: ' + input1 + ' and ' + input2);
        res.send(output);
      }
      console.log('Start the database stuff');

      MongoClient.connect(uri, function (err, db) {
             if(err) throw err;
             //Write databse Insert/Update/Query code here..
             console.log('Start the database stuff');
             var dbo = db.db("mydb");
             var myobj = { firstInput: input1, secondInput: input2 };
             dbo.collection("users").insertOne(myobj, function(err, res) {
               if (err) throw err;
               console.log("1 user inserted");
               db.close();
             });
             console.log('End the database stuff');
      });

    })

      .post(function(req, res){
      console.log('processing');
      res.send('processing the login form!');
    });

app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});

var adminRouter = express.Router();

  adminRouter.use(function(req, res, next){

    console.log(req.method, req.url);
    console.log("Its middleware!!!");

    next();
  });

adminRouter.get('/', function(req, res) {
    res.send('I am the dashboard!');
});

adminRouter.get('/users', function(req, res) {
  res.send('I show all the users');
});

adminRouter.param('name', function(req, res, next, name){
  console.log('doing name validations on ' + name);
});

adminRouter.get('/users/:name', function(req, res) {
   res.send('hello ' + req.params.name + '!')
});

adminRouter.get('/posts', function(req, res){
  res.send('I show all the posts');
});

app.use('/admin', adminRouter);


app.listen(PORT);
console.log('Express Server running at http://127.0.0.1:'.PORT);
