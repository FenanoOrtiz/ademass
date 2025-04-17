//METODOs para Definir, obtener y eliminar valore de atributos
/*
setAttribute() - modifica el valor de un atributo
getattribute() - obtiene el valor de un atributo
removeAttribute() - remueve el valor de un atributo

*/

// const rangoEdad = document.querySelector(".rangoEdad");
// //document.write(rangoEdad);
// rangoEdad.setAttribute("type", "submit");
// rangoEdad.setAttribute("value", "subir");
// rangoEdad.setAttribute("name", "envio");

// let atributo = rangoEdad.getAttribute("name")//se solicita por
// // medio del metodo get ver el atributo type
// document.write("<br>");
// document.write(atributo+ "<br>");
// document.write("<a href='#'>enlace a pagina </a>");
// let enlace = document.getElementsByTagName("a");
// document.write(enlace);
// rangoEdad.removeAttribute("value");
// //rangoEdad.setAttribute("type", "submit");
//8:06

//Atributos Globales (todos los elemento en html tienen esos atributos)

/*
-class:  lista de clases del elemento separadas por espacios

-contenteditable: indica si el elemento puede ser modificado
por el usuario (bool)

-dir: indica la direccionalidad del texto

- hidden: indica si el elento aún no es, o ya no es, relevante.

- id - contiene declaraciones de estilo CSS para ser aplicadas al
elemento

-tabindex - indica si el elemento puede obtener un focus de input

- title: cotiene un texto con información relacionada al elemento al
que le pertenece


*/
//const titulo = document.querySelector(".titulo");


//titulo.setAttribute("contentEditable", "false");// con esto puedo editar
// el contenido desde la página html
//titulo.setAttribute("dir", "ltr");//lef to rigth de izquieda a derecha 
// por default 
//titulo.setAttribute("dir", "rtl");//rigth to lef de der a izq
//titulo.setAttribute("hidden", " ");//oculta el titulo ya sea con true o false
// para que se vea el titulo se debe remover ese atributo
//titulo.removeAttribute("hidden");

//titulo.setAttribute("tabIndex", "0");// es el orden como se selecciona
// por medio del la tecla tabuladora

//titulo.setAttribute("title", "lo que sea");//cuando se pasa
//el mouse por encima me muestra esta informacion de la etiqueta


// atributos de los inputs

//los siguiente se pueden modificar sin utilizar setAttribute
// y para llamarlos tampoco getAttribute

const input = document.querySelector(".input-normal");

// document.write(input+"<br>");//muestra el objeto
// document.write(input.className+"<br>");// muestra el nombre de la clase
// document.write(input.value+"<br>");//muestra ese valor que tien el input
// input.type = "text"; //con esto se modifica el imput
// document.write(input.type+"<br>");//con esto se muestra el type
// //accept - es el tipo de archivo que va a permitir en un input de type file
// input.accept = "image/gif";//solo acepta imagenes gif

//form - nos permite ejecutar un input dentro de un form
//ejemplo en index2

// minlength - minima cantidad de caracteres que tiene un input 
input.minLength = 4;
//input.setAttribute("minLength", "5");//otra forma 

input.placeholder = "aviso de fondo";

input.required = "required";//ese input es un espacio requerido





