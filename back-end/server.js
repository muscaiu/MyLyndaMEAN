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

//tested ok with postman !!!