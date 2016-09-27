var express = require( 'express' );
var app = express(); 



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


app.get('/', function(request, response){

	response.send('here is your response');

});

app.post('/', function(request, response){
	request
	response.send(status);
});



app.listen('3000', function(){
	console.log('listening');
})