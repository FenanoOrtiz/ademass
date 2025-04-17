"use strict";

//cargar publicaciones de 5 en 5 y al final no hay mas publicaciones

//5:55
const publicaciones = document.querySelector(".publicaciones");
let contador = 0;
let banderaNomore=true;

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
const cargarMasPublis = entry=>{
	if (entry[0].isIntersecting) cargarPublicaciones(4); 
}
const observer = new IntersectionObserver(cargarMasPublis);
console.log(observer);



const cargarPublicaciones = async num =>{
	const request = await fetch ("informacion.txt");
	const content = await request.json();
	const arr = content.content;
	const documentFragment = document.createDocumentFragment();
	//console.log(arr);
	for (let i = 0; i<num; i++) {
		if (arr[contador] != undefined){
				const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].contenido);
				documentFragment.appendChild(newPublicacion);
				contador++;
				if (i == num-1) observer.observe(newPublicacion);
			}
			else{
				//if(publicaciones.lastElementChild.id !== "nomore"){//una soluclion
				if(banderaNomore){	//otra solucion
					let noMore = document.createElement("H3");
					noMore.textContent = "No hay mas publicaciones";
					//noMore.id = "nomore";
					banderaNomore=false;
					documentFragment.appendChild(noMore);
					publicaciones.appendChild(documentFragment);
					break;
				}

				/*
			let noMore = document.createElement("H3");
			noMore.textContent = "No hay mas publicaciones";

			documentFragment.appendChild(noMore);
			publicaciones.appendChild(documentFragment)
			break;*/
		}

	}
	publicaciones.appendChild(documentFragment)

}

cargarPublicaciones(3);//6:06 corregir error se repite aviso no hay mas publicaciones

//llevamos la carpeta lazyload completa a la carpeta htdoc de
// de xamp para trabajar con fetch
//6:01