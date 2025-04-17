"use strict";

//cargar publicaciones de 5 en 5 y al final no hay mas publicaciones

//5:55
const publicaciones = document.querySelector(".publicaciones");

const createPublicationCode = (name, content)=>{
	const container = document.createElement("DIV");
	const comentarios = document.createElement("DIV");
	const nombre = document.createElement("H3");
	const contenido = document.createElement("P");
	const btnComentario = document.createElement("INPUT");
	const btnEnviar = document.createElement("INPUT");

	container.classList.add("publicacion");
	comentarios.classList.add("comentarios");
	btnEnviar.classList.add("enviar");
	btnComentario.classList.add("comentario");

	btnComentario.setAttribute("placeholder", "Introduce un comentario");
	btnEnviar.type = "submit";

	nombre.textContent = name;
	contenido.textContent = content;

	comentarios.appendChild(btnComentario); 
	comentarios.appendChild(btnEnviar);

	container.appendChild(nombre);
	container.appendChild(contenido);
	container.appendChild(comentarios);

	return container;
}

//para verificar funcionamiento de createPublicationCode
/*
let contenido = "aca puede ir cualquier contenido en el ejemplo utiliza un lorem"

publicaciones.appendChild(createPublicationCode("nombre de prueba", contenido));

*/

const cargarPublicaciones = async num =>{
	const request = await fethc ("informacion.txt");
	const arr = await request.json();
	console.log(arr);
}

cargarPublicaciones()//llevamos la carpeta lazyload completa a la carpeta htdoc de
// de xamp para trabajar con fecht
