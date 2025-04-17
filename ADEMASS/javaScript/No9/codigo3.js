//eventos del mouse
/*
- click: click
- dblclick: doble click
- mouseover: puntero sobre un elemento o uno de sus hijos
- mouseout: puntero fuera de un elemento o elementos secundarios
----otros----
- contextmenu: click derecho para abrir un menu contextual
- mouseenter: puntero se mueve sobre un elemento
- mousedowm: aprieta el boton del mouse sobre un elemento
- mouseleave: puntero se mueve fuera de un elemento
- mouseup: cuando se suelta un boton del mouse sobre un elemento
- mousemove - ocurre cuando el puntero se mueve mientras esta sobre
un elemento.

2:10

*/
const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
// const contenedor2 = document.querySelector(".contenedor-2");

// contenedor1.addEventListener("click", (e)=>{
// 	alert("da click en un contenedor rojo");
// },); 
// contenedor2.addEventListener("click", (e)=>{
// 	alert("da click en un contenedor azul");
// });

/*//ejemplo doble click
button.addEventListener("dblclick", (e)=>{
	alert("diste doble click en un boton");
},);
*///fin ejemplo

/*  //------ejemplo mouse over----  
contenedor1.addEventListener("mouseover", (e)=>{
 	alert("te mueves sobre uno de los hijos del conteneor1");
 },);
	
 */   //----fin ejemplo
/*	//------ejemplo mouseout---- 
contenedor1.addEventListener("mouseout", (e)=>{
 	alert("te mueves sobre uno de los hijos del conteneor1");
 },);
	//fin ejemplo
	*/
/*
	//------ejemplo contextmenu---- 
button.addEventListener("contextmenu", (e)=>{
 	alert("oprimiste click derecho");
 },);
		//fin ejemplo
*/		

//------ejemplo mousedown---- 
button.addEventListener("mousedown", (e)=>{//solo con apretar el click funciona
 	alert("apretaste el click");
 },);
		//fin ejemplo