/*
- firstChild
- lastChild
- firstElementChild
- lastElementChild
- ChilNodes: devuelve todos los nodos hijos
- Children




*/
/*
const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.firstChild;
console.log(primerHijo);//#text: en consola nos muestra esto puesto
//que los espacios los toma como texto. eliminado el espacio
//entre el div y el primer h2 nos muetra:
//<h2>un h2 común</h2>
const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo);// no muestra #text por lo mismo el 
//espacion entre el elemento p y el div eliminamos el espacio
//<p>un simple párrafo</p> nos muestra el ultimo hijo que esta en
//div que es el contenedor

const primerElementoHtml = contenedor.firstElementChild;
console.log(primerElementoHtml);//colocamos los espacios
//y esta instruccion nos muestra el primer elemento que esta
// en el contenedor
const ultimoElementoHtml = contenedor.lastElementChild;
console.log(ultimoElementoHtml);//colocamos los espacios
//y esta instruccion nos muestra el ultimo elemento que esta
// en el contenedor
const hijos = contenedor.childNodes;
console.log(hijos);//odeList(7) [text, h2, text, h4, text, p, text]
//devueve todos los nodos hijos, tanto los epacios que son los text como
//los elementos
//se puede recorrer su elementos así:
hijos.forEach(hijo=> console.log(hijo));



const elementos = contenedor.children;//devuelve solo los elementos
//que estan dentro del padre pero solo las etiquetas html
//console.log(elementos);
// este no se puede recorrer con el forEach puesto que es
//una coleccion HTML se puede recorrer con for in (indices)o for of (valor)
for (elemento of elementos){
	console.log(elemento);
}
/*
//9:11

/*    METODOS DE LOS CHILD

- replaceChild() - remplazar hijos

- removeChild() - eliminar hijos

- hasChildNodes() - verifica si tiene un elemento hijo o no


*/

const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P");
parrafo.innerHTML= "Parrafo Nuevo";


let texto ="Acá se va a colocar lo que yo quiera";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML= texto;

const h4 = document.querySelector(".h4");
h2_antiguo = document.querySelector(".h2");
contenedor.replaceChild(h2_nuevo, h2_antiguo);

p_antiguo = document.querySelector(".pAntiguo");
contenedor.replaceChild(parrafo, p_antiguo);

//ejemplo removeChild()
//9:16

contenedor.removeChild(parrafo);// se elimina el parrafo 
// contenedor.removeChild(h2_nuevo);
// contenedor.removeChild(h4);

//elimina un hijo de un elemento padre

let respuesta = contenedor.hasChildNodes();//devuelve false o true
//devuelve true hasta por los espacios que son nodos y cuenta como hijos
//para que devuelva false tiene que estar vacio
document.write (respuesta+"<br>");

texto="";
h2_nuevo.innerHTML= texto;
respuesta = h2_nuevo.hasChildNodes()
if (respuesta){
	document.write("el elemento iene hijos");
}else{
	document.write("el elemento No tiene hijos");
}
 
//propiedades elementos padres

/*
- parentElement: selecciona el padre elemento de un elemento 
que sea html
- parentNode: elije el padre node sin importar que sea html
*/ 
console.log(h2_nuevo.parentElement);
//<div class="contenedor">
console.log(contenedor.parentElement);
//nos muestra el body


//propiedades de elmentos hermanos (siblings)
/*

- nextSibling
- previousSibling
- nextElemenSibling
- previousElementSibling


*/
console.log(h2_antiguo.previousSibling);//null porque no existe
console.log(h2_nuevo.previousSibling);// text poque muestra el texto
// o el espacio que hay entre las etiquetas
console.log(h2_nuevo.nextSibling);//text
console.log(h2_nuevo.nextElementSibling);//muestra el h4
console.log(h2_nuevo.previousElementSibling);//null pues no hay etiquetas entre 
// este y la etiqueta del padre

//closest busca el elemento padre asendente mas cercano



