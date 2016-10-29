var express = require('express');
var app = express();


app.set('port',(process.env.PORT || 3000));

app.get('/', function (req,res){
  res.send("hello World");
});

app.listen(app.get('port'), function() {console.log('server is up on 3000 or the process.env.PORT');});
