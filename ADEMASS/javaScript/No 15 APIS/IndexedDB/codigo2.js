
"use strict";
const IDBRequest = indexedDB.open("basefer",1);
IDBRequest.addEventListener("upgradeneeded",()=>{
	const db = IDBRequest.result;
	db.createObjectStore("nombres",{
		autoIncrement:true
	})
})


IDBRequest.addEventListener("success",()=>{
	console.log("todo salió correctamente");
})
IDBRequest.addEventListener("error",()=>{
	console.log("ocurrió un error al abrir o crear la base de datos");
})
//adicionar objetos

const addObjeto = objeto =>{
	const IDBdata = getIDBData("readwrite", "objeto agregado correctamente");
	IDBdata.add(objeto);
	
}

// leer objetos

const leerObjetos = ()=>{
	const IDBdata = getIDBData("readonly");  
	const cursor = IDBdata.openCursor();
	cursor.addEventListener("success",()=>{
		if(cursor.result){
			console.log(cursor.result.value);
			cursor.result.continue();//para continuar leyendo los objetos
		}else console.log("todos los datos fueron leidos");
	})
}//ahora en consola digitamos leerObjetos()

//modificar objetos
const modificarObjeto = (key,objeto) =>{
	const IDBdata = getIDBData("readwrite", "objeto modificado correctamente");
	IDBdata.put(objeto,key);//si existe lo modifica si no existe lo crea
	
	
}
// en consola: modificarObjeto(3,{nombre: "cofla"}) (enter)


//eliminar objetos
const eliminarObjeto = key =>{
	// const db = IDBRequest.result;
	// const IDBtransaction = db.transaction("nombres","readwrite");
	// const objectStore = IDBtransaction.objectStore("nombres");
	const IDBdata = getIDBData("readwrite", "objeto eliminado correctamente");
	IDBdata.delete(key);

	// IDBdata[0].delete(key);//si existe lo modifica si no existe lo crea
	// IDBdata[1].addEventListener("complete",()=>{
	// 	console.log("objeto eliminado correctamente")
	//})
	// **** se redujo a 3 lineas utilizando la función ****
}
// como este codigo se repite en todas las peticiones creamos
//una funcion que la remplace
/*
const db = IDBRequest.result;
const IDBtransaction = db.transaction("nombres","readwrite");
const objectStore = IDBtransaction.objectStore("nombres");
objectStore.(----) 

como en todos tambien se repite, lo unico que cambia es el mensaje
cambiamos el mensaje por una variable y agregamos a la funcion
		IDBtransaction.addEventListener("complete",()=>{
		console.log("objeto eliminado correctamente")

		IDBtransaction.addEventListener("complete",()=>{
		console.log(msg)
	})
*/

const getIDBData = (mode, msg) =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres",mode);
	const objectStore = IDBtransaction.objectStore("nombres");
	IDBtransaction.addEventListener("complete",()=>{
		console.log(msg)
	})
	return(objectStore);
}//4:40