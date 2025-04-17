//27:04  MODO ESTRICTO ("use strict")
//elimina errores de java script, es buena practica usarlo
/*
 -convierte errores de javascript en excepciones
 - mejorando la optimización de los errores y consigue mejores tiempos de 
   ejecución
 - evita sintaxis usadas en posteriores a ES6
 - NO permite que el programador realize una "mala sintaxis"


 en el modo estricto esto no se puede aser
 variable = 23; por defecto js la define como un dato (var) en el modo 
 estricto me jenera un error de sintaxis

  el modo estricto es una instruccion para el interprete, para que ponga ciertas
  reglas

  las variables: deben ser declaradas


 */

//usando el modo esctricto
//ejemplo
/*
"use strict";//instruccion global para que le aplique a todo, se debe colocar al
              //inicio de todo el codigo o al inicio de un bloque de instrucciones
var nombre = "fernando";//en el modo estricto dice "no defined", sin el no genera error
console.log(nombre.__proto__);
*/
//fin ejemplo

//ejemplo modo estricto no permite modificar propiedades (defineProperty()) y
// writeable

/*
"use strict";

const obj = {}; //se crea un objeto

// esta es una forma de agregar propiedaes a un objeto
Object.defineProperty(obj, 'nombre',{value: "pedro", writeable:false});
//writeable no permite sobre escribir las propiedades del objeto en moto esctricto
//si intentamos lo siguiente
obj.nombre = "lucas";//me sale el error no se puede asigna o leer la propiedad nombre
// si comento el modo estricto igual no cambia el valor pero no genera ningún error
console.log(obj.nombre);
*/

//

// EN MODO ESTRICTO NO se puede agregar propiedades

//ejemplo
/*
"use strict";
const obj = {nombre: "luis"};
Object.preventExtensions(obj);//con esta instruccion se prohibe agregar propiedades
obj.apellido = "Castro";//en estricto genera error modo normal no lo agrega pero
//no genera error
console.log(obj); 
*/

//NO SE PUEDE AGREGAR PROPIEDADES A UN STRING
/*
"use strict"
const str= "Lucas Dalto";
str.canal="soy dalto";
console.log(str.canal);//no bota undefined pero no un error, aunque sea un error
//tratar de colocar propiedades a un string ahora si utilizamos modo estricto
//la respuesta es un error que dice que no se puede colocar la propiedad canal a un string
*/

// NO EXISTENLAS MULTIPLES VARIABLES EN UNA FUNCION

//35:52
//"use strict";

//si ejecutamos la funcion así no funciona
/*
function hablar (texto, texto){
  console.log(texto);
}

hablar("pedro")
*/
// ejemplo 
/*
"use strict"
function hablar (texto, texto){
  console.log(texto);
}

hablar("pedro","juan")//asi funciona porque toma como parametro el ultimo valor
//por eso muestra juan, pero no deberia de funcionar pues es un erros del
//progrmador haciendo lo mismo con modo estricto nos genera un error parametro
//duplicado
*/

//39:42

//DELETE EN OBJETOS Y VARIABLES


//no se pueden borrar objetos ni variable delete solo se utiliza para eliminar
//propiedade de un objeto pero si no se utiliza el modo estricto no marca ese
//uso como error


/*
"use strict"
const variable = "nombre";
delete variable;//si tiene modo estricto marca error si no lo tiene no la borra
//pero no marca el error
console.log(variable);
*/

/*
"use strict";
const obj={
  nombre:"lucas"
};

//delete obj;//no se puede borrar un objeto, pero si puedo borrar una propiedad
delete obj.nombre;//funcion y no bota error porque esta bien ejecutado
console.log(obj.nombre);
*/
//42:11

// LAS PALABRAS RESERVADAS NO PUEDEN SER USADAS COMO VARIABLES
/*
"use strict";

let package = "pedro";
console.log(package);//strict mode reserverd word, sin modo estricto funciona

*/

//THIS NO SE DEBE USAR EN MODO ESTRICTO
/*
"use strict"

function saludar(){
  this.nombre = "pedro";
  this.saludar = function(){
    console.log(`hola ${this.nombre}`) 
  }
}
obj = saludar(); //en modo estricto no funciona se define sin el new
obj.saludar();//y la funcion no funciona en modo estricto 
*/


//NUMEROS OCTALES VAN CON UNA "o" ADELANTE Y NO SE PERMITE EL WITH
/*
"use strict";
//console.log(09);//asi es un numero octal pero en modo estricto genera error
console.log(0o27);//esta es la forma en moto estrico el 0 y luego la vocal o
//ya sea mayuscula o minuscula

*/



//NO PUEDEN SER VARIABLES arguments y eval




















