/*
drag drop es la api de arrastrar//2:30

eventos del objeto
-dragstart
-drag
-dragend

eventos de la zona
- dragenter
- dragmove
- drop
- dragleave


propiedad dataTransfer
- objeto dataTransfer: es el objeto que transmite informacion entre las dos partes se utiliza en el metodo 
dragstart
- getData()
- setData()

ejemplo de uso (texturizador)


*/
"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");
// circulo.addEventListener("dragstart",(e)=>{
//  	console.log(e.dataTransfer);//se puede ver la informacion del evento
//  });

 // circulo.addEventListener("dragstart",(e)=>{
 // 	e.dataTransfer.setData("text-plane",e.target.className);//agregamos informacion setData
 // 	//text-plane es el nombre del dato que agregamos que es el nombre de la clase e.target.className
 // 	console.log(e.dataTransfer.getData("text-plane"))
 // });
circulo.addEventListener("dragstart",(e)=>{
 	//e.dataTransfer.setData("tortolo",("otra informacion"));//agregamos informacion setData
 	e.dataTransfer.setData("tortolo",e.target)//enviamos el tipo de elemento
 	//el primer parametro es el nombre del dato a transferir y el segundo es la informacion que
 	//que transferimos
 	//console.log(e.dataTransfer.getData("tortolo"))//de esta forma recuperamos la informacion obtenida del evento
 	//console.log(typeof e.dataTransfer.getData("tortolo"))//tipo de dato ya no es un objeto ahora es un string
 });
// circulo.addEventListener("drag",()=>console.log(2));
// circulo.addEventListener("dragend",()=>console.log("soltado"));

rectangulo.addEventListener("dragenter",()=>console.log(1));
rectangulo.addEventListener("dragover",(e)=>{
	e.preventDefault();//esto nos permite soltar elementos en la zona
	console.log(2)
});
//rectangulo.addEventListener("drop",()=>console.log(3));//solo trabaja si existe el prevenDefault
//para recuperar la informacion que se envia a rectangulo en el circulo
rectangulo.addEventListener("drop",(e)=>{
	console.log(typeof e.dataTransfer.getData("tortolo"))
});
rectangulo.addEventListener("dragleave",()=>console.log("4"));//2:43