var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient
var _db = null


var app = express()

app.use(bodyParser.json())





app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

//mongodb://<dbuser>:<dbpassword>@ds155490.mlab.com:55490/capiroto
MongoClient.connect('mongodb://capiroto:capiroto@ds155490.mlab.com:55490/capiroto', function(err, db) {
    if (err) {
        throw err;
    }

    require('./routes/user.route')(app, db)
    console.log('banco de dados conectado')
});