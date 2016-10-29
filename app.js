var express = require('express');
var app = express();


app.set('port',(process.env.PORT || 3000));

app.get('/4' , function (req,res){
});

app.get('/*', function (req,res){
 
  var shorthand = "";

  if (/http[s]?:\/{1,2}\w+\.[0-9a-zA-Z]+\.\w+/.test(req.params[0]) == false) 
  {
     req.params[0] = null;
     shorthand = null;
  }
  else if (req.param[0] == //something in mongodb)
  {
    res.redirect(somethingfrom mongo);
  }

  var jsonOb = { original_url: req.params[0],
                 shorthand_url: shorthand };
  res.json(jsonOb);

});


app.listen(app.get('port'), function() {console.log('server is up on 3000 or the process.env.PORT');});
