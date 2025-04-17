/*
	CONTROL DE FLUJO Y MANEJO DE ERRORES

	*Sentencias de bloque: Ee todo lo que se ejecuta dentro de corchetes
	{
		let nombre = "juan";
		alert(nombre);
	}
	esto es un bloque y dentro del bloque se puede definir la variable con el
	mismo nombre que este en otro bloque

	* Sentencias de control de flujo: if, elseif, while, do while

	* Sentencias de manejo de errores:


Switch: 

sintaxis

break

default

*/


//switch:

//ejemplos

let fruta = "manzana";

switch (fruta){
case "manzana":
	console.log("esta fruta es roja o verde");
	alert("es manzana");
	break;
case "banano":
	console.log("le gusta a los rolos en la sopa");
	alert("es banana");
	break;
case "pera":
	console.log("fruta verde de sabor dulce");
	alert("es pera");
	break;
default:
	console.log("no es ninguna de la lista");
	alert("no es ninguna fruta");

}//3:45