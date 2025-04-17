/* Datos estructurados (JSON)JavaScript Object Notation (JSON) 
es un formato basado en texto estándar para representar datos 
estructurados en la sintaxis de objetos de JavaScript.


JSON es igual un array asociativo pero las propiedades las define con
comillas, poruqe la informacion que se envia a los servidores siempre va
con comillas



*/

//ejemplo
/*
objeto = {
	variable1 : "Pedro",
	variable2 : "Jorge"
};

console.log(objeto);//lo anterior es un objeto

objetoJSON = {
	"variable1" : "Juan",
	"variable2" : "Luis"
};

console.log(objetoJSON);//lo muestra tambien como un objeto

*/

// serialización y deserialización

//serializado es una cadena de texto con formato JSON
//deserializado en un objeto con propiedade de JSON pero para enviar datos a
//un servidor debe todo ser serializado se utiliza la funcion JSON.stringify

//ejemplo dato JSON serializado



const objeto = `{"variable1":"Pedro", "variable2": "Juan"}`;
console.log(typeof objeto);//dice que es un string

// ejemplo dato JSON deserializado

const objeto1 = {"variable1":"Pedro", "variable2": "Juan"};
console.log(typeof objeto1);//dice que es un objeto aunque tenga el formato
//JSON 

//ejemplo serializar con JSON.stringify

const objeto1Serializado = JSON.stringify(objeto1);
console.log(typeof objeto1Serializado);// muestra que es un string



//cuando se envian los datos van serializados y cuando se reciben
//tambien llegan serializado ahora hay que pasar al formato JSON 
//deserializado con JSON.parse
console.log(objeto1Serializado);//es un string

const objeto1Deserializado = JSON.parse(objeto1Serializado);
console.log(typeof objeto1Deserializado);//es un objeto
console.log(objeto1Deserializado);
console.log(objeto1Deserializado.variable1);//muestra Pedro


// JSON Polyfill https://developer.mozila.org/en-us/docs/web/Javascript/reference/Global_Object/JSON/parse
// para versiones muy viejas de internet explorer que no soportan JSON.parse ni JSON.stringify 
// se utilizan esos archivos para que ya se pueda trabjar con JSON



// AJAX

// asyncronicos javascript and xml

// instalar xampp
//la continuacion del capitulo esta en la carpeta htdoc en xamp
























