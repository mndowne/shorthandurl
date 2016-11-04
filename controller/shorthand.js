
var urls = {"1" : "https://www.youtube.com"};

module.exports = function(app){

//app.get('/4' , function (req,res){     });

app.get('/*', function (req,res){
 
  var shorthand = "";

  if (urls.hasOwnProperty(req.params[0]) )
  {
  
    res.redirect(urls[req.params[0]]);

  }
  else if (/http[s]?:\/{1,2}\w+\.[0-9a-zA-Z]+\.\w+/
  .test(req.params[0]) == false) 
  {

     req.params[0] = null;
     shorthand = null;

  }
  else{

    var jsonOb = { original_url: req.params[0],
                 shorthand_url: shorthand };
    res.json(jsonOb);

  }
});

};
