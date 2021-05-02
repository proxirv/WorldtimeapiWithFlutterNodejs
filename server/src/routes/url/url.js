var axios = require('axios');

var RouterUrl = function(){

  this.reqTime = function (req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log('Ingreso la ip: ',ip);
    /*
    res.send({
      status:'success',
      msj:'Consulta realizada.',
      data:'ayvl'
    });
    */
    
    let serverUrl='https://worldtimeapi.org/api/ip'+ip;

    axios.all([
      axios.get(serverUrl),
    ]).then(axios.spread((response) => {
      console.log('Tiempo devuelto --> ',response.data.datetime);
      res.send({
        status:'success',
        msj:'Consulta realizada.',
        data:response.data.datetime
      });
    })).catch(error => {
      console.log('Error --> ',error);
      res.send({
        status:'error',
        msj:'No se pudo realizar la consulta. Error de WorldTimeApi.'
      });
    });
    
  };

};

module.exports = function(){
  var instancia = new RouterUrl();
  return instancia;
};