//   fetch es una forma de trabajar con el objeto XMLHttpRequest
/*
fetch tiene el metodo GET por defecto no hay que definirlo en la peticion
con solo una linea se hace la peticion ahorrando codigo y simplificando
- la informacion llega encapsulada y se utilizan estos metos para utilizarla
- text()
-json()
-blob()
-formData()
-arrayBuffer()



*/


/*
peticion = fetch("https://reqres.in/api/users?page=2")
console.log(peticion);//ya se ha creado la promesa, dice pendiente
*/
//peticion.then(res=>console.log(res))//6:57

//PETICION GET

/*

peticion = fetch("https://reqres.in/api/users?page=2")
	
	//.then(res=>res.text())//con esta forma obtenemos un texto un string
	//.then(res=>console.log(res))
	
	//con estas tres lineas se hace todo
	

	//para pasar a JSON SE Puede hacer de varias formas
	//1:
	
	//.then(res=>res.text())
	//.then(res=>console.log(JSON.parse(res)));//se deserializa
	

	//2. se puede hacer directamente
	.then(res=>res.json())//la obcion de desencapsular la promesa directamente en JSON
	.then(res=>console.log(res));
*/

//PETICION POST

// en la pagina reqres.in buscamos el cuadro de post seleccionamos y damos click
// en Request, nos abre una nueva pagina, seleccionamos la url y la colocamos en 
//la peticion, ahora agregamos el segundo parametro al FETCH que es el metodo y el 
// tercer parametro el body lo que se quiere enviar y para eso se crea un JSON, por ultimo
// parametro el headers


/*
peticion = fetch("https://reqres.in/api/users",{//se envia la solicitud al servidor
	method: "POST",
	body: JSON.stringify({
		"nombre" : "Fernando",
		"apellido" : "Ortiz"
	}),
	headers: {"Content-type" : "application/json"}
})
	.then(res=>res.json())//obtenemos la respuesta
	.then(res=>console.log(res));
*/

//se puede hacer mas limpio el codigo en caso de que los datos a enviar sean pocos
peticion = fetch("https://reqres.in/api/users",{//se envia la solicitud al servidor
	method: "POST",
	body: `{"nombre" : "Fernando",	"apellido" : "Ortiz"}`,//con backticks o comilla inversa
	headers: {"Content-type" : "application/json"}
})	.then(res=>res.json())//obtenemos la respuesta
	.then(res=>console.log(res));
// los headers o cabecera dependen del tipo de informacion que se este enviando al
// servidor hay muchos tipos