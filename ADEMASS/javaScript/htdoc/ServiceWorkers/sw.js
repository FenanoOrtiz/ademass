/*
el self se utiliza dentro del service worker y es como si fuera un this
*/

self.addEventListener("install",e=>{
	console.log("instalando service worker")
})
//la instalación solo sucede una vez, luego se hace la activacion

self.addEventListener("activate", ()=>{
	console.log("el service worker esta activo")
})// este evento es importante porque verifica que esta activo

// tambien esta el evento para verificar errores self.addEventListener("error",()=>{})

//otro evento es el fetch

self.addEventListener("fetch",()=>{
	console.log("service worker interceptando peticion")
})

self.addEventListener("message",e=>{
	console.log("Mensaje recibido del navegador: ");
	console.log(e.data);
	e.source.postMessage("hola hermano");//respuesta enviada al navegador
})
// ejercicio chat en tiempo real entre dos pestañas usando service worker 7:58
