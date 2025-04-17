"use strict"
//2:51

const zona = document.querySelector(".zona");

zona.addEventListener("dragover",(e)=>{
	e.preventDefault();
})
zona.addEventListener("drop",(e)=>{
	let n = e.dataTransfer.getData("textura");
	zona.style.background= `url("textura${n}.png")`;
})


for (let i = 1;i<document.querySelector(".texturas").children.length+1 ; i++) {
	document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e))
	console.log(`texturas${i}`);
}


/*
// esto es lo que resume el for y en caso de crear mas div en el html con otras texturas se agrega sin
// necesidad de modificar el codigo js
document.querySelector(".textura1").addEventListener("dragstart",(e)=>transferirTextura(1,e));
document.querySelector(".textura2").addEventListener("dragstart",(e)=>transferirTextura(2,e));
document.querySelector(".textura3").addEventListener("dragstart",(e)=>transferirTextura(3,e));
*/




const transferirTextura = (n,e)=>{
	e.dataTransfer.setData("textura",n);
	console.log(n,e);
}

//2:57