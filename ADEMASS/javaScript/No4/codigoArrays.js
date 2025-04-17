
//METODOS TRANSFORMADORES


//pop()elimina el ultimo elemento del array y lo muestra

let nombres = ["pedro", "maria", "jorge", "fernando"];
document.write(nombres+"<br>");//muestra el array original

let resultado = nombres.pop();
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante


//shift()elimina el primer elemento del array y lo muestra
document.write("<br>");
document.write("<br>");
nombres = ["pedro", "maria", "jorge", "fernando"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.shift();
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante

//push()agrega un elemento del array al final de la lista y me 
//devuelve la cantidad de elemntos que hay en el array
//puede agregar mas de un elemento
document.write("<br>");
document.write("<br>");
nombres = ["pedro", "maria", "jorge", "fernando"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.push("juan");
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante
resultado = nombres.push("caro", "diana");
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante

//reverse()- invierte el orden de los elementos del array y muestra 
// el array resultante

document.write("<br>");
document.write("<br>");
nombres = ["pedro", "maria", "jorge", "fernando"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.reverse();
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante


//unshift() -  agrega uno o mas elementos al principio del array
// y devuelve la cantidad de elementos con los que queda el array
document.write("<br>");
document.write("<br>");
nombres = ["pedro", "maria", "jorge"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.unshift("fernando", "caro");
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante

//sort() -  ordena los elementos de un array localmente y lo
//devuelve ordenado alfabeticamente, tambien ordena numeros
document.write("<br>");
document.write("<br>");
nombres = ["xavi", "pedro", "maria", "jorge"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.sort();
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante
nombres = [6,5,4,8,9,1,0];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.sort();
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante

//splice() - cambia el contenido del array eliminando elementos
// existentes y/o agregando nuevos elementos
//splice(n, n2, elementos), n= posicion donde empieza y n2 = numero de elementos
//a eliminar, Elementos = elementos que se van agregar
//muestra los elementos que elimino 

document.write("<br>");
document.write("<br>");
nombres = ["xavi", "pedro", "maria", "jorge"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.splice(1, 1, "juan");//remplace pedro por juan
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante
nombres.splice(1, 2, "brayan", "rocio");//remplace pedro por juan
document.write(nombres+"<br>");//array resultante
//se puede usar sin variable a menos que quiera guardar los datos
//eliminados
//si no quiero eliminar y colocar al principio (0, 0, elementos)
// si quiero agregar en otra posicion (n, 0, elementos)
//si quiero agregar alfinal -1 agrega los elementos una posicion
// antes del final
document.write("<br>");
document.write("<br>");
nombres = ["maria", "jorge"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.splice(1, 0, "juan", "roberto");//remplace pedro por juan
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante
document.write("<br>");
document.write("<br>");
nombres = ["maria", "jorge", "juan"];
document.write(nombres+"<br>");//muestra el array original
resultado = nombres.splice(-1, 0, "seba", "roberto");//remplace pedro por juan
document.write(resultado+"<br>");
document.write(nombres+"<br>");//array resultante

