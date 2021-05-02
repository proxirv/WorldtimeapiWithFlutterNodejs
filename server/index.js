const express = require('express');
const restApi = express();
const server = require('http').createServer(restApi);
const rutas = require('./src/routes/Routes.js');

restApi.use(express.json());
restApi.use(express.static(__dirname+'/public'));
restApi.set('trust proxy', true);

server.listen(process.env.PORT || 5050,
	(aux)=>
	console.log('Listening server in port: ',server.address().port));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
restApi.use('/api',rutas);