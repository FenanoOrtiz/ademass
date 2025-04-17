"use strict";
/*			FUNCIONES FLECHA

-¿Porque aparecieron? (funciones compactas y el uso de this)
-si solo hay una expresión, la retornan
-parentesis opcionales ante un soloparametro (sin parametros se requiere parentesi)
-no son adecuadas para ser usada como métodos y no pueden ser usadas como constructores
-Retornan literales su su cuerpo está entre ()
-This contextual (no tienen propio this, sino que toman el de la función que lo envuelven)
-Las reglas de modo estricto aplicadas a This, son ignoradas
-Función flecha invocada a tráves de los métodos call, apply y bind
-No tiene objetos Arguments
-No tienen propiedades del prototipo prototype
-No se puede usar Yield (por ende no se puede usar como funciones generadoras)
-No puede contener saltos de linea entre sus parametros y su flecha
-Orden de parseo
*/
//funcion normal
/*
const saludar =function () {
	nombre = "pedro";
	return nombre
}

resultado = saludar();
console.log(resultado);
*/
//funcion flecha
/*
const saludar= ()=> nombre = "pedro";
resultado = saludar();
console.log(resultado);
*/
//en la funcion flecha se puede omitir el paretesis cuando es un solo parametro

/*
const saludar = function (res) {return nombre = res};//normal
//const saludar = res => nombre = res;//funcion flecha
resultado = saludar("hola carebola");
console.log(resultado);
*/

//no pueden se usadas como metodos

/*
"use strict"

const objeto ={
	nombre: "Juan",
	saludar:function(){console.log(`Hola ${this.nombre}`)}
}
const objeto2 ={
	nombre: "Pedro",
	saludar:()=>console.log(`Hola ${this.nombre}`)
}

window.nombre = "Fernando";


objeto.saludar();//resultado  hola Juan
objeto2.saludar();//resultado hola Fernando, porque en la funcion flecha el 
//this no llama al elemento de la funcion sino al elemento que llamo al elemento 
//de la funcion, en este caso el objeto window. por eso no se utiliza las funciones
//flecah para realizar metodos
*/

// NO USAMO FLECHA COMO CONTRUCTOR
/*
"use strict";

// function constructorPersona(nombre,apellido){//constructor nomal
// 	this.nombre = nombre;
// 	this.apellido = apellido;
// }

const constructorPersona = (nombre,apellido)=>{//no es un constructor no sirve
	this.nombre = nombre;						//para hacer constructor
	this.apellido = apellido;
}



const persona = new constructorPersona("fernando", "ortiz");
console.log(persona);
*/

//THIS CONTEXTUAL
//hace referencia al objeto que esta llamando a la funcion que esta llamando
//a  ese objeto this afuera de cualquier funcion es window osea window es 
//estrictamente igual a window
/*

"use strict"

//console.log(this)//hace referencia al objeto window

this.nombre = "Fernando";

function saludar(){
	console.log(`Hola ${this.nombre}`)//el this hace referencia al nombre que
									// llama la funcion dentro del objeto
}

const objeto = {
	nombre: "Pedro",//llamamos la funcion saludar y toma el this esta variable
	saludar			//nombre como parametro
}
objeto.saludar();//1:16:00

*/

//FUNCIONES RECURSIVAS

//Funciones que se llaman asi misma

//ejemplo
/*
"use strict"
const validarEdad = (msg)=>{
	let edad;
	try{
		if (msg) edad = prompt(msg);
		else edad = prompt("introduce tu edad");
		edad = parseInt(edad);
		if (isNaN(edad)) throw "introduce un número para la edad";
		if (edad>18) console.log("Eres mayor de edad")
		else console.log("Eres menor de edad");
	}catch(e){
		validarEdad(e);//la funcion se va a llamar a si misma hasta que el dato
	}				  //que se introduce sea un numero	

} 
validarEdad();
*/

//CLAUSURAS O CIERRES

// Las clausuras son funciones que retornan otras funciones

//ejemplo en clausuras.html//1:21


//PARAMETROS POR DEFECTO  1:25


/*
const suma = (a,b)=>{
	console.log(a+b);
};

suma(10);//cuando falta un parametro no hay respuesta pues muestra es NaN
*/

/*
const suma = (a,b)=>{
	b=b||0;
	a=a||0;
	console.log(a+b);
}
suma (0,3);//de esta forma se tiene por defecto un valor para a y b
*/

/*
const suma = (a =0,b = 0)=>{//los argumentos tienen un valor por defecto
	
	console.log(a+b);
}
suma (12);//esta forma tambien sirve para escribir valores por defecto
*/

// PARAMETRO rest (...param)

// es el spread operator básicamente, pero dentro de una función se conoce
//como parametro rest.

/*
const suma = (...num)=>{
	console.log(num)
}

suma(4,5,4);//nos muestra un array con los parametros que se carga en la 
//variable num
*/
/*
const suma = (...num)=>{//parametro rest se debe colocar siempre como ultimo
	//parametro
	let resultado = 0;
	for (let i = 0; i < num.length; i++) {
		resultado += num[i];	
	}
	console.log(resultado);
}

suma(4.5,5.6,6.6,8,9.2);// parametros que la funcion va a trabajar
*/
/*
const suma = (frase,...num)=>{//parametro rest se debe colocar siempre como ultimo
	//parametro no puede ir al inicion ni en la mitad pues no se sabe que parametros
	//serian los del rest
	let resultado = 0;
	for (let i = 0; i < num.length; i++) {
		resultado += num[i];	
	}
	console.log(`${frase} ${resultado}`);
}

suma("Juan antonio", 4,5,6,8,7);

*/

//DESTRUCTURACION

//DESTRUCTURAR ARRAYS Y OBJETOS

//FUNCION DESTRUCTURADORA// no mostro nada de esto 1:28

//OPERADOR CONDICIONAL O TERNARIO  //1:29
/*
let edad = 14;

if (edad>18) console.log("es mayor de edad");
else console.log("es menor de edad");
*/
//la anterior es la forma normal
//ahora con operador ternario

//(edad>18) ? console.log("mayor de edad"): console.log("menor de edad");

//todo lo que venga despues del interrogante es para la ocurrencia verdadera
//del evento y despues de los dos puntos si es falsa

// si se tienen varias sentencias se realiza de la siguiente manera
/*
let edad = 15;
(edad>18) 
	?
	 (
		console.log("mayor de edad"),
		console.log("puede pasar")
	 )
	 : 
	 (
	 	console.log("menor de edad"),
	 	console.log("no puede pasar")	
	 );

*/



//OPERADOR SPREAD (SPREAD OPERATOR)

/*
let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 2";

let array = ["valor 1", "valor 2", "valor 3"];


console.log (valor1,valor2,valor3);
//console.log(array);//si queremos que se vea igual sin el array utilizamos
//el operador spread los tres puntos ...array
console.log(...array);
*/

//ejemplo spread para añadir array a otros array
/*
let array1 = ["manzana", "pera", "lulo"];
let array2 = [ "durazno", "naranja"];

// la forma para agregar el array2 al array1 seria

//array1.push(array2[0],array2[1]);

//pero en caso de que se quieran agregar muchos
//elementos se vuelve tedioso, para eso utilizamos spread

array1.push(...array2);

console.log(array1);
*/

//ejemplo spread para concaternar array 

/*
let array1 = ["manzana", "pera", "lulo"];
let array2 = [ "durazno", "naranja", "maracuya"];

let array3 = [...array1, ...array2];
console.log (array3);
*/

//ejemplo spread para pasar argumentos a una funcion

const sumar = (num1, num2)=>{
	console.log(num1+num2);
}

let array = [3,5];
sumar(...array);//aca se pasa como argumentos




/*

- AÑADIR ARRAYS A OTROS ARRAYS
- CONCATENAR ARRAYS
- COMO ARGUMENTO REST
*/

