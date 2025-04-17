/*
para comprar una computadora
-debe ser al menos full hd
-cuando este por cormprar, preguntarle si esta seguro de eso

screen.availHeigth es la altura que puede tener la window (ventana)
del browser si esta maximizada, incluidas las barras del browser
mientras que screen.height basicamente es el alto total de la pantalla

*/
// let alto = window.screen.availHeight;//se puede de las dos formas
// let ancho = window.screen.availWidth;

let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

if(comprar){
	alert("compra realizada exitosamente");
}else{
	alert("compra cancelada");
}