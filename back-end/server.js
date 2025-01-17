var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var Message = mongoose.model('message',{
    msg: String
})

app.use(bodyParser.json())

//add this to enable data communication between front and backend
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.get('/api/message', GetMessages)

app.post('/api/message', function(req, res){
    console.log(req.body)
    
    var message = new Message(req.body)
    message.save()

    res.status(200)
})

function GetMessages(req, res){
    Message.find({}).exec(function(err, result){
        res.send(result)
    })
}

mongoose.connect('mongodb://localhost:27017/test', function(err, db){
    if(!err){
        console.log('connected to mongo')
    }
    else(console.log(err))
})

var server = app.listen(8080, function(){
    console.log('express listening on port', server.address().port)
})
