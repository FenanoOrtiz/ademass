"use strict";
const modal = document.querySelector(".modal-overlay");//esto es el div que contiene todo
const definirIdioma = ()=>{
	document.querySelector(".en").addEventListener("click",()=>{//cuando se selecciona el idioma se guarda y
		// se cierra la pagina
		localStorage.setItem("idioma","en");
		cerrarModal();
	})
	document.querySelector(".es").addEventListener("click",()=>{
		localStorage.setItem("idioma","es");
		cerrarModal();
	})

}

const cerrarModal = ()=>{
	modal.style.animation = "desaparecer 1s forwards";
	setTimeout(()=>modal.style.display = "none",1000);
}
const idioma = localStorage.getItem("idioma");

if(idioma === null )definirIdioma();
else {
	console.log(`Idioma: ${idioma}`)
	modal.style.display = "none";
} //esto solo funciona una vez pues despues se guarda en el localStorage el idioma seleccionado y si volvimos
//a abrir la pagina no se nos va a mostrar de nuevo para seleccionar, para que se muestre de nuevo tenemos
//que ir a la consola y borrar lo que hay en localStorage así: localStorage.clear() y si queremos ver que 
//idioma se escogio se busca en aplicacion - almacenamiento - almacenamiento local - file