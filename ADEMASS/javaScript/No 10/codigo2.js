// Sentencia de manejo de excepciones
/*
* definicion: error que nos salta dentro de la ejecución del programa


* excepciones ECMAScript: excepciones que dependen de javascript


*DOMException y DOMError: estas estan relacionada al DOM

EL BLOQUE QUE MANEJA ERRORES Y EXCEPCIONES

Try...catch

sirve para evitar errores basados en un compartamiento que el programador espera
no sirve para errores de sintaxis


*/
//sintaxis
//ejemplo
/*
try {
	asldflskfj
}
catch (error){
	console.log(error);
}*/
//ejemplo
/*
try{
	lkasdflkj
}
catch(error){
	console.log(typeof error)
}*/
//ejemplo
/*
try {
	//console.log("aqui no ha pasado nada");
	ajkjhk//evitamos el error y nos envia a ejecutar otro bloque de 
	//sentencias
}
catch (error){
	console.log("lo siento, ocurrio un error de referencia");
}*/

//finally : se ejecuta pase lo que pase
//ejemplo
/*
try{
	console.log("no hay errores");
}
catch(error){
	console.log("ocurrio un error");
}
finally{
	console.log("se muestra así no haya ocurrido un error");
}*/
//ejemplo
/*
const pruebaTry=()=>{
	try{
		return 1;
	}
	catch(e){
		return 2;
	}
	finally{//sin el finally returna 1, pero con el finally obliga a mostrar el 3
		return 3;
	}
}
console.log(pruebaTry());
*/
//throw: tira un error
//ejemplo
/*
try{
	throw "lo que sea";//muestra esto en el error
}
catch(error){
	console.log(error);
}
finally{

}*/
//ejemplo
try{
	throw{//creamos un objeto
		error:"Nombre del Error",
		info:"Información del Error"
	}
}
catch(e){
	console.log(e)//muestra el objeto
	console.log(e.error);//muestra (Nombre del Error)
	console.log(e.info);//muestra (Informacion del error )
}
finally{

}
//4:01