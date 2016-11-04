var express = require('express');
var shorthand = require('./controller/shorthand');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port',(process.env.PORT || 3000));

app.use(express.static('.'));

//fire controllers
shorthand(app);

app.listen(app.get('port'), function() {console.log('server is up on 3000 or the process.env.PORT');});
