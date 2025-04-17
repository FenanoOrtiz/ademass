/*   EVENTOS DE LA INTERFAZ


* error - ocurre cuando sucede un error durante la carga de un
archivo multimedia
* load - ocurre cuando un objeto se ha cargado
* beforeunload - ocurre antes de que el documento este a punto de 
descargarse
* unload - ocurre una vez que se ha descargado una pagina
* resize - ocurre cuando se cambia el tamaño de la vista del documento
* scroll - ocurre cuando se dezplaza la barra de desplazamiento
* select - ocurre después de que el usuario selecciona texto de <input> o <textarea>


*/
/*
const img = document.querySelector(".img-prueba");
img.addEventListener("error", ()=>{
	console.log("ha sucedido un error")
});//solo pasa cuando sucede un error
*/

/*
window.addEventListener("load", ()=>{//solo se trabaja con el window
	//tambien se puede llamara asi (addEvenListener("load"...)funciona igual
	// sin colocar window
	console.log("ha cargado el sitio")
});
*/
/*
addEventListener("beforeunload", ()=>{//evento antes de irte de la pagina
	console.log("estas por salir del sitio")
});
*/
/*
addEventListener("unload", ()=>{//evento cuando te has ido de la pagina
	console.log("estas por salir del sitio")
});
*/
/*
addEventListener("resize", ()=>{//evento cuando te has ido de la pagina
	console.log("estas cambiando el tamaño de la pagina")
});
*/
/*
addEventListener("scroll", ()=>{//moviendo el scroll
	console.log("estas moviendo la barra de desplazamiento")
});
*/
/*
addEventListener("select", ()=>{//evento cuando te has ido de la pagina
	console.log("estas seleccionando un texto")
});
*/

const input = document.querySelector(".input-prueba");
const parrafo = document.querySelector(".texto");
// const contenedor = document.querySelector(".seleccionado");
/*// ejemplo select
input.addEventListener("select", (e)=>{
	let start = e.target.selectionStart;
	let end = e.target.selectionEnd;
	let texto = input.value.substring(start, end);
	// parrafo.innerHTML = textoCompleto.substring(start, end);
	parrafo.innerHTML = `seleccion inicia en ${start} y finaliza en ${end} 
	selecciono este texto (${texto})`;
})
*/ // fin ejemplo select

    //ejmplo keyup 

input.addEventListener("keyup", (e)=>{
	let texto = e.key;
	parrafo.innerHTML = `La ultima tecla que oprimiste es <b>${texto}</b>`
})

//https://www.w3schools.com/jsref/obj_events.asp