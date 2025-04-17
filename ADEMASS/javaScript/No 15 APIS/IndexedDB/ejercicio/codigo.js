
"use strict";

const IDBRequest = indexedDB.open("basefer",1);
IDBRequest.addEventListener("upgradeneeded",()=>{
	const db = IDBRequest.result;
	db.createObjectStore("nombres",{
		autoIncrement:true
	})
})


IDBRequest.addEventListener("success",()=>{
	//console.log("todo salió correctamente");
	leerObjetos();//para que cuando se carge la pagina lea lo que 
	// esta en la BD (base de datos indexedDB)
})
IDBRequest.addEventListener("error",()=>{
	console.log("ocurrió un error al abrir o crear la base de datos");
})

//VAMOS A LEER LOS OBJETOS DINAMICAMENTE DESDE LA PAGINA

document.getElementById('add').addEventListener("click",()=>{
	let nombre = document.getElementById("nombre").value;
	if(nombre.length > 0){
		//se agregan validaciones para detectar si hay registros
		//sin guardar
		if(document.querySelector(".posible")!=undefined){
			if(confirm("hay elementos sin guardar: ¿Quieres continuar")){
				addObjeto({nombre});
				leerObjetos()
			}
		}else{
			addObjeto({nombre});//esto es como colocar nombre:"nombre"
			//como la variable es igual al valor se coloca {} para 
			leerObjetos();
		}
	}
})

//funcion que realiza la transaccion
const getIDBData = (mode, msg) =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres",mode);
	const objectStore = IDBtransaction.objectStore("nombres");
	IDBtransaction.addEventListener("complete",()=>{
		console.log(msg)
	})
	return(objectStore);
}

//adicionar objetos

const addObjeto = objeto =>{
	const IDBdata = getIDBData("readwrite", "objeto agregado correctamente");
	IDBdata.add(objeto);
	
}

// leer objetos

const leerObjetos = ()=>{
	const IDBdata = getIDBData("readonly");  
	const cursor = IDBdata.openCursor();
	const fragment = document.createDocumentFragment();
//al leer objetos lee toda la BD entonces lo primero es desocupar
//el contenedor que es nombres con la siguiente instruccion
	document.querySelector(".nombres").innerHTML =  "";	
	cursor.addEventListener("success",()=>{
		if(cursor.result){
			let elemento = nombresHTML(cursor.result.key, cursor.result.value);
			fragment.appendChild(elemento);
			cursor.result.continue();//para continuar leyendo los objetos
		}else document.querySelector(".nombres").appendChild(fragment);
	})
}

//modificar objetos
const modificarObjeto = (key,objeto) =>{
	const IDBdata = getIDBData("readwrite", "objeto modificado correctamente");
	IDBdata.put(objeto,key);//si existe lo modifica si no existe lo crea
	
	
}
//eliminar objetos
const eliminarObjeto = key =>{
	const IDBdata = getIDBData("readwrite", "objeto eliminado correctamente");
	IDBdata.delete(key);

}

//los registros que estan en comentario en el index se van hacer desde
//java script

const nombresHTML = (id,name)=>{//funcion para crear todo el html
	const container = document.createElement("DIV");
	const h2 = document.createElement("H2");
	const options = document.createElement("DIV");
	const saveButton = document.createElement("BUTTON");
	const deleteButton = document.createElement("BUTTON");

	container.classList.add("nombre");
	options.classList.add("options");
	saveButton.classList.add("imposible");
	deleteButton.classList.add("delete");

	saveButton.textContent = "Guardar";
	deleteButton.textContent = "Eliminar";
	h2.textContent = name.nombre;//lee el objeto hay que acceder al 
	//valor name.nombre name viene de lo datos leidos en BD

	//lineas para cambiar el dato y guardar, cambiamos los atributos
	//del h2 para que se permita editar y le quitamos el auto corrector
	h2.setAttribute("contenteditable","true");
	h2.setAttribute("spellcheck","false");


	options.appendChild(saveButton);
	options.appendChild(deleteButton);

	container.appendChild(h2);
	container.appendChild(options);
	//evento para detectar cuando se modifica el texto y se habilite
	//el boton para guardar
	h2.addEventListener("keyup",()=>{
		saveButton.classList.replace("imposible","posible");
	})

	//evento para guardar
	saveButton.addEventListener("click",()=>{
		if(saveButton.className == "posible"){
			modificarObjeto(id, {nombre: h2.textContent});
			saveButton.classList.replace("posible","imposible");
		}
	})

	//evento para borrar

	deleteButton.addEventListener("click",()=>{
		eliminarObjeto(id);
		document.querySelector(".nombres").removeChild(container);
	})



	return container;

}//5:02

