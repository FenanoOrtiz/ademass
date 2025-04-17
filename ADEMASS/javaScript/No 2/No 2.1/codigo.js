//funciones
//una funcion es un bloque de codigo, que tiene un nombre y se
//puede reutilizar
/*
function saludar() {
	respuesta = prompt("¡hola! ¿Como te fue?");
	if(respuesta == "bien"){
		alert("me alegro");
	}else{
		alert("nada de nervios");
	}
}

saludar();
saludar();//si se quiere volver hacer lo mismo no hay 
//que escribir todo el codigo solo se llama la funcion
//tambien se puede crear la funcion así:

aviso = function(){//lo que hay dentro de los parentecis son
	//los argumentos, esta funcion no tiene argumentos pero hay
	//otros caso que si van a tener argumentos
	nombre = prompt("tu nombre es?");
	alert("hola "+nombre);
}
aviso();

*/ 

//return devuelve el resultado de la funcion cuando existe 
/*
function saludo() {
	alert("hola");
	return("Se ejecuto correctamente");// despues del return 
	// finaliza la funcion, si hay algo despues no se ejecuta.
}

let saludar = saludo();
document.write(saludar);
*/
//parametros
/*
alert("ser realiza la suma de dos numeros");
	let num1 = prompt("digite un numero");
	let num2 = prompt ("digite el segundo numero")



function suma(num1, num2){
	
	let suma = parseInt(num1) + parseInt(num2);
	document.write("el resultado de sumar "+ num1+" + " +num2+ " es: "+suma);
	return;
}//3:23
suma(num1, num2);
*/
/*
//ejemplo funcion con parametros
function suma (num1, num2){
	let res = num1 + num2;
	return res;
}

let resultado = suma(20, 25);
document.write(resultado);
*/
// function saludar(nombre){
// 	let frase = `¡hola ${nombre}! ¿como estas?`
// 	document.write(frase);//scope, ambito de las variables, 
// 	// para una funcion solo existen dentro de la funcion.
// }

// const saludar = function(nombre){
// 	let frase = `¡hola ${nombre}! ¿como estas?`
// 	document.write(frase);
// }


// saludar ("Pedro");
// saludar("Juan");

//funciones flecha
const saludar = (nombre) =>{//se utiliza => en remplazo de 
	//function pero despues de los argumentos
	let frase = `¡hola ${nombre}! ¿como estas?`
	document.write(frase);
}
saludar ("carolina");