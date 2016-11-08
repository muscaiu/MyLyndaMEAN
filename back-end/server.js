var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var database
var Message = mongoose.model('message',{
    msg: String
})

var server = app.listen(5000, function(){
    console.log('express listening on port', server.address().port)
})

app.use(bodyParser.json())

app.post('/api/message', function(req, res){
    console.log(req.body)
    
    var message = new Message(req.body)
    message.save()

    res.status(200)
})

//add this to enable data communication between front and backend
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    next()
})

//test is the db name
mongoose.connect('mongodb://localhost:27017/test', function(err, db){
    if(!err){
        console.log('connected to mongo')
        database = db
    }
    else(console.log(err))
})

//how to test this:
//restart node server.js and post another message