//matt
let numero1 = 25;
let numero = Math.sqrt(numero1);//raiz cuadrada

document.write("la raiz cuadrada de "+numero1+" es igual "+numero);


let numero2 = 27;
numero = Math.cbrt(numero2);// raiz cubica
document.write("<br><br>");
document.write("la raiz cubica de "+numero2+" es igual "+numero);

//max()devuelve el numero mayor

numero = Math.max(1,3,5,45,-69);// numero mayor
document.write("<br><br>");
document.write("el numero mayor entre 1, 3, 5, 45, -69,  es: "+numero);

//min()devuelve el numero mayor
numero = Math.min(1,3,5,45,-69);// numero menor
document.write("<br><br>");
document.write("el numero menor entre 1, 3, 5, 45, -69,  es: "+numero);


//random()devuelve un numero pseudo-aleatorio en 0 y 1

numero = Math.random();
document.write("<br><br>");
document.write("el numero aleatorio es: "+numero);

//round()redondea a numero entero mas cercano
// si quisieramos un numero aleatorio entre 0 y 100
numero = Math.random()*100;
document.write("<br><br>");
document.write("el numero aleatorio entre 0 y 100: "+numero);
numero = Math.round(numero);
document.write("<br><br>");
document.write("el numero entre 0 y 100 redondeado es: "+numero);

//floor()redondea para abajo , o quita la parte decimal
numero = Math.random()*100;
document.write("<br><br>");
document.write("el numero aleatorio entre 0 y 100: "+numero);
numero1 = Math.floor(numero);
numero = Math.round(numero);
document.write("<br><br>");
document.write("el numero entre 0 y 100 redondeado con round: "+numero+"<br>");
document.write("el numero entre 0 y 100 redondeado con floor: "+numero1+"<br>");

// si buscamos un numero entre 0 y 100 que no incluya ni el 0 ni
//el 100
// for (var i=0 ; i<100000; i++){//mostrar los numeros 100.000 veces
// 	let numero = Math.random()*99;
// 	numero = Math.floor(numero+1);
// 	document.write(numero+"<br>");
// }
numero = Math.random()*99;//de esta forma se obtiene un numero entre
numero = Math.floor(numero+1);//0 y 100
document.write("<br><br>");
document.write("el numero entre 0 y 100: "+numero+"<br>");

//fround()devuelve la representación flotante de presicion simple mas cercana de
//un numoero
//trunc()devuelve la parte entera del número x, la eliminación de los
//digitos fraccionarios

numero = Math.random()*100;
numero = Math.trunc(numero+1);//0 y 100
document.write("<br><br>");
document.write("el numero que se obtiene con trunc: "+numero+"<br>")

numero = Math.PI;//pi
document.write("<br><br>");
document.write("el valor de PI: "+numero+"<br>")

numero = Math.SQRT1_2;//raiz cuadrada de 1/2
document.write("<br><br>");
document.write("el valor de raiz cuadrada de 1/2: "+numero+"<br>")

numero = Math.SQRT2;//raiz cuadrada de 2
document.write("<br><br>");
document.write("el valor de raiz cuadrada de 2 es= "+numero+"<br>")


numero = Math.E;//numero euler
document.write("<br><br>");
document.write("el valor de Euler: "+numero+"<br>");

numero = Math.LN2;//logaritmo natural de 2
document.write("<br><br>");
document.write("el valor de Logaritmo natural de 2: "+numero+"<br>");

numero = Math.LN10;//logaritmo natural de 10
document.write("<br><br>");
document.write("el valor de Logaritmo natural de 10: "+numero+"<br>");

numero = Math.LOG2E;//logaritmo DE E COM BASE  2
document.write("<br><br>");
document.write("el valor de Logaritmo de E con base 2: "+numero+"<br>");

numero = Math.LOG10E;//logaritmo DE E COM BASE  10
document.write("<br><br>");
document.write("el valor de Logaritmo de E con base 10: "+numero+"<br>");
