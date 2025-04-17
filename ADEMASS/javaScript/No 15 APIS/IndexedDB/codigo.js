/*
IndexedDB


	CRUD: Create Read Update Delete, operaciones basicas de todo
	sistema y bases de datos
	-caracteristicas
		-almacena informacion en el navegador de forma similar a localStorage
			es una base de datos no relaciona ose no es SQL

		-es orientada a objetos
		-es Asíncrona
		-Trabaja con eventos del DOM

-procedimiento de creacion
	*Objeto IndexedDB
	*Metodo open()
	*onupgradeneeded, onsucess, onerror

- crear almacen de objetos 
	*Almacen de objetos- concepto
	*metodo createObjectStore()
	*autoIncrement vs KeyPath
	
- almacenar objetor
	*Metodo Transaction()
	*IDBTransaction.objectStore()
	*IDBObjectStore.add()

*/

//

"use strict";
//1 se solicita al navegador abrir una base de datos

// const IDBRequest = indexedDB;
// console.log(IDBRequest);

//open() = llama a una base de datos y si no existe la crea
//el primera parametro el nombre de la base a crear o a llmar
//el segundo es la version por ahora utilizamos la version 1

//const IDBRequest = indexedDB.open("basefer",1);
//console.log(IDBRequest);//muestra que abre la base de datos


//metodos
/*
si la base de datos no existe se ejecuta el onupgradeneeded y onsucess
si ya existe y solo se esta llamando no se ejecuta el onupgradeneeded
*/
// success y error
const IDBRequest = indexedDB.open("basefer",1);
IDBRequest.addEventListener("upgradeneeded",()=>{
	//console.log("se creo correctamente");//si no existe sucede este evento
	//como ejercicio desde la consola borrar la base de datos y actualizar
	const db = IDBRequest.result;//como la solicitud fue positiva creamos la base
	//de datos (db)
	db.createObjectStore("nombres",{//se crea el almacen de objetos nombre
		//con el parametro de autoincremento
		autoIncrement:true
	})
})


IDBRequest.addEventListener("success",()=>{
	console.log("todo salió correctamente");
})
IDBRequest.addEventListener("error",()=>{
	console.log("ocurrió un error al abrir o crear la base de datos");
})

//4:26

//crear objetos

const addObjeto = objeto =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readwrite");
	//readwrite : cuando se quiera crear, modificar y eliminar
	//readonly: cuando solo se quiera leer
	// el primer parametro el nombre del almacen de objetos (nombres)
	const objectStore = IDBtransaction.objectStore("nombres");
	//transaccion abierta ahora agregamos
	objectStore.add(objeto);
	IDBtransaction.addEventListener("complete",()=>{
		console.log("objeto agregado correctamente")
	})
}
// en consola digitamos addObjeto({nombre:"roberto"}) y enter
//addObjeto({nombre:"lucas"})	y enter, creamos 5 o 6 objetos
//para el ejemplo
//4:34

// leer objetos

const leerObjetos = ()=>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readonly");
	const objectStore = IDBtransaction.objectStore("nombres");
	const cursor = objectStore.openCursor();
	cursor.addEventListener("success",()=>{
		if(cursor.result){
			console.log(cursor.result.value);
			cursor.result.continue();//para continuar leyendo los objetos
		}else console.log("todos los datos fueron leidos");
	})
}//ahora en consola digitamos leerObjetos()

//modificar objetos
const modificarObjeto = (key,objeto) =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readwrite");
	const objectStore = IDBtransaction.objectStore("nombres");
	objectStore.put(objeto,key);//si existe lo modifica si no existe lo crea
	IDBtransaction.addEventListener("complete",()=>{
		console.log("objeto modificado correctamente")
	})
}
// en consola: modificarObjeto(3,{nombre: "cofla"}) (enter)


//eliminar objetos
const eliminarObjeto = key =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readwrite");
	const objectStore = IDBtransaction.objectStore("nombres");
	objectStore.delete(key);//si existe lo modifica si no existe lo crea
	IDBtransaction.addEventListener("complete",()=>{
		console.log("objeto eliminado correctamente")
	})
}
// en consola: eliminarObjeto(7) (enter)
//eliminamos el objeto con key o clave No 7