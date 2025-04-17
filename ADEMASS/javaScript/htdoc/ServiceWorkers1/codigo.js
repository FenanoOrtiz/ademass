/*		SERVICE WORKERS
es un archivo java script que intercepta todas las peticiones del servidor, osea todas
las peticiones que se hacen al servidor primero pasan por el archivo service worker al 
igual que todas las respuestas del servidor

este archivo escucha muchos sucesos osea addEvenListener que tenemos que agregar y hace 
procesos con ellos


* service workers interfaz
	navigator.serviceWorker


* register(): al registrar se guarda el archivo en la pc, pues los service workers son archivos
que se guardan en la computadora
	navigator.serviceWorker.register()

* postMessage(): trabaja igual que en los workers

* Fetch Event

* Registrar cache y mostrar sitio web offline

* Chat Realtime

7:41
*/


//console.log(navigator.serviceWorker)

if(navigator.serviceWorker){
	navigator.serviceWorker.register("sw.js");
}
//7:54 para verificar que el serviceworker alla cargado se utiliza el ready que nos devuelve
//una promesa por ende hay que utilizar el then()
/*
navigator.serviceWorker.ready.then(res=>{
	console.log(res)
})
*/
// en active podemos verificar el serviceworker su url y el estado
//active:ServiceWorker {scriptURL: 'http://localhost/CODIGO/ServiceWorkers/sw.js', state: 'act
// para acceder al serviceWorker se usa: res.active
/*
navigator.serviceWorker.ready.then(res=>{
	console.log(res.active)
})//ahora si se puede utilizar posmessage
*/

navigator.serviceWorker.ready.then(res=> res.active.postMessage("hola como estas?"));

//ahora para verificar si nuestro serviceworker nos responde realizamos el siguiente evento

navigator.serviceWorker.addEventListener("message",e=>{
	console.log("Mensaje recibido del serviceWorker")
	console.log(e.data);
})

//Registrar Cache y mostrar sitio web offline
