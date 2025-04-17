//obtencion y modificacion de elementos
/*
textContent - devuelve el texto de cualquier nodo
innerText - devuelve el texto visible en un node element
//No se utiliza ya

outerText - devuelve el texto de las etiquetas html incluidas
las etiquetas, tampoco se utiliza
innerHTML - Devueve el contenido de un elemento
outerHTML - Devuelve el codigo html completo del elemento
*/
/*
const titulo = document.querySelector(".titulo");
document.write(titulo.textContent+"<br>");
document.write(titulo.innerText+"<br>");
alert(titulo.outerText);
alert(titulo.innerHTML);//muestra la etiquetas que tiene dentro del nodo
document.write("Con innerHTML muestra: " +titulo.innerHTML+"<br>");
// en html no muestra las etiquetas con alert si
alert(titulo.outerHTML);
document.write( "Aca muestra: "+titulo.outerHTML+"<br>");
// muestra lo mismo
*/
//creacion de elementos
//8:50
/*
createElement - crea elementos
createTextNode - crea un nodo  de texto 
*/
const contenedor = document.querySelector(".contenedor");
//console.log(contenedor);
const item = document.createElement("LI");//se crea con createElement
//console.log(item);
//y el elemento se muestra en mayuscula
//document.write(item);
//item.document.createTextNode("Texto dentro de lista");asi no se puede
const textDelItem = document.createTextNode("Este es un item de la lista");
//console.log(textDelItem);
//esta creada la lista y el texto, para colocar el texto dentro de
//la lista utilizamos appendChild()
item.appendChild(textDelItem);

//item.innerHTML = "Este es un item de la lista";!ESTA ES LA FORMA 
//QUE SE USA GENERALMENTE pues se coloca un texto en el item y no
//un objeto que contiene un texto

contenedor.appendChild(item);

//createDocumentFragment() para agregar muchos item antes se hacia esto
/*
for (i=0; i<20; i++){//se crean 20 item funciona pero no se utiliza
	//porque consume muchos recursos, actuamente se utiliza 
	//createDocumentFragment
	const item = document.createElement("LI");
	item.innerHTML = "Este es un item de la lista";//esta instruccion se usa
	//para colocar el texto al elemento de la lista
	contenedor.appendChild(item);

}
*/

// se crea primero la variable

const fragmento = document.createDocumentFragment();
for(i=0; i<20;i++){
	const item = document.createElement("LI");
	item.innerHTML = "Este es un item de la lista";
	fragmento.appendChild(item);
}
console.log(fragmento);//no ha creado la lista pero esta toda en 
//la variable fragmento, ahora se carga en la lista por medio de appendChild
contenedor.appendChild(fragmento);

//9:03