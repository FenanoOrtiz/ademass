//DOM (document object model)
/*
- NODO  un nodo en el DOM es cualquier etiqueta del cuerpo, como
un parrafo, el mismo body o la etiquetas de una lista

- Document : el nodo document es el nodo raiz, a partir del cual
derival el resto de nodos

- element : nodo definidos por etiquetas html

- text : el texto dentro de un nodo element se considera un nuevo
hijo del tipo text.

- atribute: los atributos de las etiquetas definen nodos, ej JS no los
vermos como nodos sino como información asociada al nodo de tipo
element

- comentarios y otros: los comentario y otros elementos como las
declaraciones DOCTYPE en cabecere de los documentos html generan
nodos

Metodos de Seleccion de elementos

-getElementById(): selecciona un elemento por Id
-getElementByTagName(): selecciona todos los elementos que concidan
con el nombre de la etiqueta especificada
-querySelector(): Devuelve el primer elemento que concida con
el grupo especificado de selectores
- querySelectorAll():Devuelve todos los elementos que concida con
el grupo especificado de selectores



*/

let parrafo = document.getElementById("parrafo");
document.write(parrafo);

//[object HTMLParagraphElement] muestra que es un elemento p
// si cambio el p por div muestra [object HTMLDivElement]

//7:55
 document.write("<br>");
 document.write("<br>");

 parrafo = document.getElementsByTagName("p");//selecciona por etiqueta
// document.write(parrafo);//[object HTMLCollection], porque selecciona
// todos los parrafos o todas las etiquetas <p> es una lista de elemntos
 document.write("<br>");
 document.write("<br>");
 document.write(parrafo[0]);// muestra [object HTMLParagraphElement]
// es el primer p
document.write(parrafo[1]);//muestra lo mismo porque es otro parrafo
document.write("<br>");
document.write("<br>");
parrafo = document.querySelector(".parrafo");//seleccionar por medio de clase
document.write(parrafo);
document.write("<br>");
document.write("seleccionamos ahora por id<br>");//seleccion por id
parrafo = document.querySelector("#parrafo");
document.write(parrafo);


//querySelectorAll
document.write("<br>");
parrafo = document.querySelectorAll(".parrafo");
document.write(parrafo);//[object NodeList] sale esto porque
//se selecciona una lista de nodos

document.write("<br>");
parrafo = document.querySelectorAll(".parrafo");
document.write(parrafo[0]);//nodo en la posicion 0 o el primero









































