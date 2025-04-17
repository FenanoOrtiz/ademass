let cadena = "cadena de prueba";
let cadena2 = " para agregar";

let resultado = cadena.concat(cadena2);
let resultado1 = cadena.concat(" o se agrega a si");
document.write(resultado+"<br>");
document.write(resultado1+"<br>");

let resultado2 = cadena.startsWith("ca");
let cadena3="vamos a buscar la palabra buscar en la cadena a buscar";
let cadena4= "buscar"
let cadena5= "vamos"
let resultado3 = cadena3.startsWith(cadena4);
let resultado4 = cadena3.startsWith(cadena5);


document.write(resultado2+"<br>");
document.write(resultado3+"<br>");
document.write(resultado4+"<br>");

let resultado5 = cadena3.endsWith("buscar");
let resultado6 = cadena3.endsWith(cadena4);

document.write(resultado5+"<br>");
document.write(resultado6+"<br>");

let resultado7 = cadena3.includes(" vuscar");
let resultado8 = cadena3.includes("buscar");
document.write("<h4>resultados de includes</h4>")

document.write(resultado7+"<br>");
document.write(resultado8+"<br>");//5:13

//indexOf, lastIndexOf
let resultado9 = cadena3.indexOf("buscar");
document.write(resultado9+"<br>");//reultado 8
document.write(cadena3[8]+"<br>");

let resultado10 = cadena3.lastIndexOf(cadena4);//buscar pero en variable
document.write(resultado10+"<br>");//resultado 48 que es el indice donde
//empieza la ultima palabra (buscar) de la cadena
document.write(cadena3[48]+"<br>");//b de buscar pero en la ultima
//concidencia de la cadena

//padStart()rellena la cadena con los caracteres especificados
//al inicio padStart(n, "C"); n = numero de caracteres que va
//a tener la cadena y "C" el caracter con el que se va a rellenar
//la cadena, padEnd()hace lo mismo pero rellena al final

let resultado11 = cadena5.padStart(15, "a");
document.write(resultado11+"<br>");
let resultado12 = cadena5.padEnd(15, "&");
document.write(resultado12+"<br>");

//repeat, repite la cadena
let resultado13 = cadena5.repeat(2);
document.write(resultado13+"<br>");

//split(), divide la cadena como pidamos, la convierte en un
//array

cadena = "hola como estas";
resultado13= cadena.split(" ");

document.write(resultado13+"<br>");
document.write(resultado13[0]+"<br>");
document.write(resultado13[1]+"<br>");
document.write(resultado13[2]+"<br>");

cadena = "hola/como/estas";
resultado= cadena.split("/");

document.write(resultado+"<br>");
document.write(resultado[0]+"<br>");
document.write(resultado[1]+"<br>");
document.write(resultado[2]+"<br>");

//substring()recorta el array desde una posicion de inicio 
// y donde termina
cadena = "ABCDE FG H2KKJ";
resultado= cadena.substring(0, 2);
document.write(resultado+"<br>");
resultado= cadena.substring(0, 3);
document.write(resultado+"<br>");
resultado= cadena.substring(1, 4);
document.write(resultado+"<br>");
resultado= cadena.substring(3, 4);
document.write(resultado+"<br>");
resultado= cadena.substring(3, 5);
document.write(resultado+"<br>");

//toLowerCase(), convierte a minusculas
cadena = "ABCDE FG H2KKJ";
resultado= cadena.toLowerCase();
document.write(resultado+"<br>");
//toUpperCase() convierte a mayusculas
cadena = "fernando ortiz reyes";
resultado= cadena.toUpperCase();
document.write(resultado+"<br>");

//toString(), convierte un numero en String, tambien convierte
// un array en una cadena de texto

cadena = 354;
resultado = cadena.toString();
document.write(resultado*2+"<br>");

cadena = ["pedro", "matias"];
resultado = cadena.toString();
document.write(resultado+"<br>");
document.write(resultado[8]+"<br>");//se convierte en cadena 
//todos los componentes del array
document.write(cadena[0]+"<br>");
document.write(resultado[0]+"<br>");

//trim()elimina los espacios al principio y al final de una 
//cadena no los que hay en la mitad
cadena = "  otra     palabra  ";
resultado = cadena.trim();
document.write(cadena.length+"<br>");
document.write(resultado.length+"<br>");
document.write(resultado+ "<br>");

//trimEnd()elimina los espacios al final de la cadena
// trimStart()elimina los espacion a comienzo de la cadena
 





