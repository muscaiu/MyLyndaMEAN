var express = require('express')
var app = express()
var bodyParser = require('body-parser')

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

//tested ok with postman !!!