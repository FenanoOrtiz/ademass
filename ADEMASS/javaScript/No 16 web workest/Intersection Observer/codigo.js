//5:26
/*
Intersection Observer

	-¿Que es y para que sirve?:es para detectar si un elemento esta
	ciendo visible en wiepor (area visible de la pagina) o no

	- IntersectionObserver()

	- callback y options

	-isIntersecting

	-configurar options// las opciones no las explico bien toca
	investigarlas 

	-ejemplo de uso (Lazy)


*/
"use strict";
/*
const caja3 = document.querySelector(".caja3");

const verifyVisibility = (entries)=>{
	const entry = entries[0];
	console.log(entry.isIntersecting)//en  consola vemos si no
	//se muestra false si se muestra true
}

const observer = new IntersectionObserver(verifyVisibility);

observer.observe(caja3);
*/
const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries)=>{
	for (const entry of entries){
		if(entry.isIntersecting) console.log("se esta viendo la: ", entry.target.textContent);
	}
}

const observer = new IntersectionObserver(verifyVisibility);

for (const caja of cajas){
	observer.observe(caja);
}

