/*
-- PROTOTIPOS

	*DEFINICION: son objetos que se crean en base a otro objeto agregando otras 
	cualidades o caracteristicas

	prototype chain: prototipos padre
	prototype object





*/
/*
//ejemplo 1

let variable = "un datos cualquiera"

console.log(variable.__proto__);//todo los datos nos dan dos prototipos, el tipo 
//de datos y el prototipo object, en este caso es el tipo de dato String y el
//object
// fin ejemplo 1

*/
/*
//ejemplo 2
let variable = 45;

console.log(variable.__proto__);//todo los datos generan dos prototipos, el tipo 
//de datos y el prototipo object, en este caso es el tipo de dato number y el
//object
// fin ejemplo 2
*/

/*
//ejemplo 3

let variable = [34, 45, 34];

console.log(variable.__proto__);//todo los datos generan dos prototipos, el tipo 
//de datos y el prototipo object, en este caso es el tipo de dato array y el
//object
// fin ejemplo 3
*/

// para crear un prototipo se crea es una funcion


// ejemplo 4
/*
let variable = function(){};
console.log(variable.prototype);// me sale que es un prototype y el constructor
// y de esta forma se accede a los prototipos que  nosotros creamos
*/
// fin ejempolo 4


// para acceder a lo prototypos ya creados
//ejemplo5
/*
let variable = "lkjljlkjs";

console.log(variable.__proto__);//de esta forma d se accede pues el string es un
//prototypo ya creado
*/
//fin ejemplo 5

/*

		CARACTERISITCAS

* Un prototipo definido en su código fuente es mutable.
* Es en sí mismo un objeto, asi como otros.
* Tiene una existencia física en la memoria.
* Puedes ser modificado y llamado
* Puede ser visto como un modelo ejemplar de una familia objeto
* Un objeto hereda propiedades(valores y métodos) de su prototipo




*/

//propiedad proto o (dunder proto)__proto__
/*

let variable = ["carlos", 25, "Pintor"];

console.log(variable);//en prototype podemos ver todas las funciones que hereda
//al ser de tipo array, esto ayuda en caso de que necesitemos algo y se nos
//haya olvidado
// como es un array simplemente con el nombre de la variable se puede ver, pero
//si es un string o un numero se ven por medio de (variable.__proto__)
*/
//ejemplo con un string
/*
let variable = "string";
console.log(variable.__proto__);//se acede a todos los metodos de string
*/
// ejemplo con un objeto
/*
class Objeto{//es es un objeto con contructor y un metodo
	constructor(){};
	hablar(){
		console.log("hola");
	}
}

//al instanciar se hereda lo que esta en el Objeto creado
const objeto = new Objeto();

//console.log(objeto);//vemos lo que hereda del Objeto creado

//ahora si vemos el proto

//console.log(objeto.__proto__);// y si ahora accedemos al proto del proto


console.log(objeto.__proto__.__proto__);//entramos a las propiedades directamente
//todo heredad el tipo objeto

//fin ejemplo
*/

// diferencia entre sobreescribir __proto__ y sobreescribir un método
/*

//inicio ejemplo
class Objeto{
	constructor(){};
	hablar(){
		console.log("hola");
	}
}
const objeto = new Objeto();
objeto.hablar();//nos muestra hola, pero si hacemos lo siguiente

objeto.hablar = ()=>{
	console.log("ahora mostrara este parrafo");
}
objeto.hablar();//estamos agregando propiedades al metodo pues el objeto interno
//sigue siendo el mismo

//para modificar el obejto se hace lo siguiente

objeto.__proto__.hablar = ()=>{
	console.log("ya no va decir hola");
}
console.log(objeto);//Objeto {hablar: ƒ}hablar: ()=>{
 					//console.log("ahora mostrara este parrafo");
 					//}[[Prototype]]: Object  //muestra esto en consola

*/
//fin ejemplo




//para sobreescribir un proto heredandolo
//inicio ejemplo

/*
class Objeto{
	constructor(){};
	hablar(){
		console.log("hola");
	}
}
const objeto = new Objeto();
let array = [];

array.__proto__ = objeto;
array.hablar();

*/

//inicio ejemplo


class Objeto{
	constructor(){};
	hablar(){
		console.log("hola");
	}
}
const objeto = new Objeto();

objeto.hablar = ()=>{
	console.log("agregamos esto al método");
}


let array = [];

array.__proto__ = objeto;
//array.hablar();
array.__proto__.hablar();//accedemos al prototipo
array.__proto__.__proto__.hablar();//accedemos al prototipo del prototipo

//ahora si queremos heredar el metodo original
//array.__proto__ = objeto.__proto__;
//array.hablar();//nos mostrara lo que esta en el objeto original osea "hola"


//fin de ejemplo



 