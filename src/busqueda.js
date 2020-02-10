'use strict';
function investigacion() {
  const fs = require('fs');  
  const request = require('request');
  var id_seller = process.argv.slice(2)[0];
  //179571326
  request('https://api.mercadolibre.com/sites/MLA/search?seller_id='+id_seller, function (error, response, body) {
    var jsonData = JSON.parse(body);
    var file = fs.createWriteStream('log.txt');
    file.on('error', function(err) { Console.log(err) });
    
     jsonData.results.forEach(element => 

      file.write("ID DEL ITEM: "+element["id"]+"\n\r NOMBRE DEL ITEM:"+
      element["title"]+"\n\r CATEGORIA ID:"+element["category_id"]+
      "\n\r NOMBRES CATEGORIAS:"+element["tags"]+"\n\r"+"************************************************"+"\n\r")
      );
    file.end(); 
  });
  
}
investigacion();
