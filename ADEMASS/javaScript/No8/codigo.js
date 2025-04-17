/*El objeto Window
window es el elemento mas importante de el depende el DOM, window
esta en la mas alta jerarquia en javascript todo los elementos
dependel de el, y hace referencia a la ventana en si
si se quiere profundizar busca (window objet javascript)
- hereda las propiedades de EventTarget
-open() - metodo abre una ventana nueva
-close() - metodo para cerrar ventana
-closed - verifica si la ventana esta cerrada o no respuesta
true o false
-stop() - detiene la carga de recursos en elcontexto de navegacion actual
-alert() - muestra un cuadro de alerta con el contenido especificado
-print() -abre cuadro de dialogo imprimir para imprimier documento
- prompt() - abre el cuadro de dialogo con un mensaje que solicita
al usuario un dato (String)
-confirm() - abre un cuadro de dialogo con un mensaje y dos botones
aceptar y cancelar


//pantalla
//15:21
- screen - devuelve una referencia al objeto de pantalla asociado con la ventana
- screenLeft - devuelve la distancia horizontal entre el borde
izq del navegador y el borde izq de la pantalla
- sreenTop - devuelve la distancia vertical entre el borde del
navegador y la pantalla parte superior
- scrollX - devuelve el número de pixeles que el documento se 
desplaza actualmente horizontalmente
- scrollY - lo mismo del anterior pero vertical
- scroll() - desplaza la ventana a un lugar particular en el documento (cono option y posiciones)


- resizeBy() - cambia el tamaño de la ventana actua en cantidades especificas
- resizeTo() - redimensiona dinámicamente la ventana
- moveBy()- mueve la ventana a una ubicación relativar
- moveTo() - mueve la ventana a una posicion absoluta

OBJETOS BARPROP (no se utilizan)
	- locationbar eje 
	window.locationbar.visible resultado true o false se comprueba su
	visibilidad
	- menubar
	- personalbar
	- scrollbar
	- statusbar
	- toolbar

LOCATION
- window.location.href - devuelve href (url) pagina actual
- window.location.hostname - devuelve nombre dominio del servidor web
- window.location.pathname - develve ruta y nombre archivo pagina actual
- window.location.protocol - devuelve el protocolo web utilizado (http o https)
- window.location.assign() - carga un nuevo documento



*/
// let youtubeUrl = "https://youtube.com";
// let ventana = window.open(youtubeUrl);
// ventana.close();//no se ve porque se cierra de una vez
// document.write(ventana.closed);//true porque esta cerrada

//print()

//prompt("tu edad");//siempre el dato que toma es un string

// let respuesta = confirm("estas seguro que quiers salir?");
// document.write(respuesta);//muestra true o false

//screen
//ejemplo
/*
const screen = window.screen;
console.log(screen);
document.write(screen.availWidth);
*/
//ejemplos screenLeft y top
/*

const screenLeft = window.screenLeft;
const screenTop = window.screenTop;

document.write(`<b>Left: ${screenLeft}</b><br>
				<b>Top: ${screenTop}</b>
	`)//si se minimiza o mueve la ventana muestra las distancias 
		//donde se ubica, son propiedade de solo lectura

*/
//para ver el ejemplo active los parrafos y el estilo del body en el index
/*
const scrollY = window.scrollY;
const scrollX = window.scrollX;
alert("X: "+scrollX+" Y: "+scrollY);
*/

//scroll solo me funciono de la consola
/*
window.scroll(0, 0); //ubica el scroll en esa posicion x, y
const scrollY = window.scrollY;
const scrollX = window.scrollX;
alert("X: "+scrollX+" Y: "+scrollY);
*/
//29:09

const href = window.location.href;
document.write(href+"<br>");

const hostname = window.location.hostname;//me sale vacio pues no
//es una pagina de un servidor probar en consola
document.write("dominio: "+hostname+"<br>"); 

const pathname = window.location.pathname;
document.write("pathname: "+pathname+"<br>");//es todo lo 
// que viene despues del dominio

const protocol = window.location.protocol;
document.write("protocolo: "+protocol+"<br>");//me sale vacio pues no 
//estamos en una pagina que viene de un servidor probar en consola

const pagina = window.location.assign("https://youtube.com");



