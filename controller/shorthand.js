//var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({extended: false});
var keys = 1;
var urls = {"1" : "https://www.freecodecamp.com"};
var list = [];


module.exports = function(app){

app.get('/' , function (req,res){  
  console.log("its trying to render my page");
  res.render('index', {url: list} );
});

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
  else 
  {
    keys++; 
    urls[keys] = req.params[0]; 
    shorthand = "https://www.shorthand.herokuapp.com/" + keys ;
    
    var str = {item: "\n{original_url: " + req.params[0] + ",\n shorthand_url: https://shorthand.herokuapp.com/" + keys + "}"};
    list.push(str);

  }

    var jsonOb = { original_url: req.params[0],
                 shorthand_url: shorthand };
    res.json(jsonOb);


  
});

};
