var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fs = require("fs");

app.use(bodyParser.json());

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.post('/addUser', function (req, res) {
   // First read existing users.
  // fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
  //     data = JSON.parse( data );
  //     data["user4"] = user["user4"];
	//   var json = JSON.stringify(data); 
   //    fs.writeFile(__dirname + "/" + "users.json", json); 
   //    console.log( data );
  //     res.end( JSON.stringify(data));
  // });
   var postdata = req.body;
   console.log( postdata );
   fs.readFile('./users.json', 'utf-8', function(err, data) {
	if (err) throw err
	console.log( req.body );
	var arrayOfObjects = JSON.parse(data)
	console.log(arrayOfObjects)

	arrayOfObjects.data.push(postdata)

	console.log(arrayOfObjects)

	fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
		if (err) throw err
		console.log('Done!')
	});
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
})

//server.listen(1400,'127.0.0.1')

var server = app.listen(1400, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})