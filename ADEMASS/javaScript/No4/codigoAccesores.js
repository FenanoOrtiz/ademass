//METODOS ACCESORES 5:55
//join() - une todos los elementos de una matriz (u objeto similar)
//en una dadena y lo devuelve se pueden separar los elementos por 
//cualquier caracter, no modifica el array original

//ejemplos
nombres = ["maria", "jorge", "juan", "cesar"];
resultado = nombres.join();
document.write(nombres+"<br>");
document.write(resultado+"<br>");
// se ven igual pero si llamo la primer posicion me muestra
// el primer elemento del array, y el otro el primer elemento
//de la cadena
document.write(nombres[0]+"<br>");
document.write(resultado[0] +"<br>");

//ejemplo 2 utilizando separador

resultado = nombres.join("%%%%%");
document.write(nombres+"<br>");
document.write(resultado+"<br>");

//ejemplo 3 utilizando separador<br>como el separador es el
//comando html de siguiente linea muestra los elementos en 
//lineas diferentes

resultado = nombres.join("<br>elemento: ");
document.write(nombres+"<br>");
document.write("elemento: "+resultado);
document.write("<br>");

//slice()- devuelve una parte del array dentro de un nuevo empezando
//por inicio hasta el fin(fin no incluido)
nombres = ["maria", "jorge", "juan", "cesar"];
resultado = nombres.slice(0, 1);
document.write(nombres+"<br>");
document.write(resultado+"<br>");
resultado = nombres.slice(0, 2);
document.write(resultado+"<br>");
resultado = nombres.slice(0);//todo el array desde la posicion 0 al final
document.write(resultado+"<br>");
resultado = nombres.slice(2);
document.write(resultado+"<br>");


//filter()
document.write("<br>");
document.write("<b>Ejemplos filter()</b><br>");

//Crea un nuevo array con todos los elementos que cumpla la condicion
// funciona como un bucle que recorre cada elemento

nombres = ["maria", "jorge", "juan", "cesar"];

nombres.filter (nombre => document.write(nombre + "<br>"));
document.write("<br>");
//si queremos mostrar los elementos que cumplan con una condicion
resultado = nombres.filter(nombre => nombre.length > 4);
document.write("muestra los nombres que tiene mas de 4 caracteres <br>");
document.write(resultado +"<br>");

//la diferencia entre filter y forEach es que filter me permite
//ejecutar una decicion dentro del bucle


//forEach()
//ejecuta la funcion indicada una vez por cada elemento del array
// a diferencia del filter no permite ejecutar una condicion
nombres = ["maria", "jorge", "juan", "cesar"];
document.write("Mostrando la informacion del array con forEach()<br>");
nombres.forEach (nombre => document.write(nombre + "<br>"));
document.write("<br>");
//si queremos mostrar los elementos que cumplan con una condicion
resultado = nombres.forEach(nombre => nombre.length > 4);//no se puede realizar
document.write(resultado +"<br>");
