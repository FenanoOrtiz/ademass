/*----EVENTOS DE TECLADO

- keydown - ocurre cuando una tecla se deja de presionar
- keypress - ocurre cuando una tecla se preiona
- onkeyup - ocurre despues de que los dos eventos anteriores hayan concluido
			consecutivamente.



*/






const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");

/*
contenedor1.addEventListener("click", (e)=>{
	alert("da click en un contenedor rojo");
},); 
contenedor2.addEventListener("click", (e)=>{
	alert("da click en un contenedor azul");
});


button.addEventListener("click", (e)=>{
	alert("diste doble click en un boton");
},);
*/
input.addEventListener("keydown",(e)=>{
	console.log("una tecla fue presionada");
});
input.addEventListener("keypress",(e)=>{
	console.log("una usuario presiono una tecla y la solto");
});

input.addEventListener("keyup",(e)=>{
	console.log("una tecla fue soltada");

});

//2:20