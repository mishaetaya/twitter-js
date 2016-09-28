var express = require( 'express' );
var nunjucks = require('nunjucks');
var app = express(); 
var routes = require('./routes/');
app.use('/', routes);

nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // 


app.use('/', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
},

 function (req, res, next) {
  console.log('Status code:', res.statusCode);
  next();
}

);

app.use(express.static('public'));



app.listen('3000', function(){
	console.log('listening');
})



