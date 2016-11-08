var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongo = require('mongodb').MongoClient

var server = app.listen(5000, function(){
    console.log('express listening on port', server.address().port)
})

app.use(bodyParser.json())

app.post('/api/message', function(req, res){
    console.log(req.body)
    res.status(200)
})

//add this to enable data communication between front and backend
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})

//test is the db name
mongo.connect('mongodb://localhost:27017/test', function(err, db){
    if(!err){
        console.log('connected to mongo')
        db.collection('messages').insertOne({'msg':'test'})
    }
    else(console.log(err))
})

//how to test this:
//before node server.js -> run mongod --dbpath D:\MEAN\MyLyndaMEAN\db
//mongo
//show collections
//db.messages.find()