/*let numero;/*las variables se declaran con let y var pero
se va a utilizar let.
cuando se declara una constante se utiliza "const" se debe 
declar e inicializar
const pi=3.14; */
/*cuando de NaN (Not a Number) no es un numero, es porque estas
tratando de hacer una operacion matematica y uno de los terminos
no es un numero*/

/*numero=4;
const pi=3.14; 
alert(numero);
alert(pi);*/

/* prompt se utiliza para preguntar y guardar datos*/
/*let nombre = prompt ("escriba su nombre");

alert("Bienvenido "+nombre);*/

/*OPERADORES*/
/*lo operadores con su abreviacion -=, +=, /=, %=
potenciacion (**) se utiliza asi (numero **=3) numero elevado al cubo*/
/*let numero = 10;
/*numero += 5*/
/*numero **=3 /*mostrara en pantalla 1000 que es 10 elevado a la 3*/
/*
document.write(numero);/*document.write sirve para escribir directamente en la pagina*/

/*1:04*/
/*let correo = prompt ("digite su correo");
let nombre = prompt ("digite su nombre")
let edad = prompt("digite su edad");
alert("hola "+nombre+" su correo es: "+correo+" y su edad "+edad+" años de viejo");
document.write(nombre+edad+correo);*/
//en este ejemplo se concatenan textos
 /*saludo = "!hola Pedro¡";
 pregunta = " ¿Comó estas?";
 frase = saludo + pregunta;
 document.write(frase);*/
 //para concatenar numero y se entienda como caracteres
 //se puede forsar asi:
/* 
numero1= 4;
numero2=3;
// sin concatenamos daria 43
// cadena = numero1 + numero2	de esta forma cadena = 7
//pero si utilizamos cadena= ""+numero1 + numero2

cadena= ""+numero1 + numero2;*/
//alert(cadena);//muestra 43 porque se forza que sea texto
//OTRA FORMA DE CONCATENAR ES CON Backticks o acento fuerte (`)${}
//(``)combinacion de teclas ctrl + alt + } 
//ejemplo
/*
nombre= "Fernando"
frase = `soy ${nombre} y estoy estudiando`;
document.write(frase);
*/

// escape de comillas simples y dobles
//si dentro de  una cadena de texto queremos utilizar comillas
//dobles debemos encerrar la cadena de texto con comillas siples
// y si queremos utilizar comillas simples debemos encerrar la
//cadena con comillas dobles


//frase = 'mi nombres es "Fernando" y estoy estudiando';
/*
frase = "mi nombres es 'Fernando' y estoy estudiando";
document.write(frase);
*/

//operadores intermedios 
//operadores logicos
//igualdad ==; desigualdad !=; identily === (igualdad estricta);
//no identily !== mayor que, menorque, mayor igual, menor igual
// igual a php o java
/*
let numero=23;
let numero2 = 13;
document.write(numero == numero2);//muestra false
*/
/*
let numero = 23;
let texto = "23";

document.write (texto === numero);//muestra resultado false porque
//evalua si es estrictamente igual tanto en valor como tipo

*/
/*
let numero1= 15;
let numero2=4;
let resultado = (numero1>numero2);
document.write(resultado);
*/
//OPREADORES LOGICOS
/*
let valor = true;
let valor2 = true;

// and &&, or ||, negacion ! igual que otros lenguajes

resultado= valor && valor2;

document.write(resultado);

*/
/*
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;


op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 !=num3);

document.write(op);
*/


// CAMEL CASE

//nombra de escritura de variables igual que otros lenguajes, la primer
//letra de la primera palabra minusculas la primer letra de la otra palabra
//que conforma el nombre del metodo variable clase o demas es mayuscula
// let cantidadDePersonas = 100;

// condicionale  ejemplo

let nombre = "Juan p";

if (nombre == "JUAN"){
    alert("tu nombre es "+nombre);
}

else if (nombre == "juan"){
    alert("tu nombre es "+nombre);

}

else if (nombre == "Juan"){
    alert("tu nombre es "+ nombre);
}
else{
    alert("tu nombre es otro");
}
