/*
Web Workers
permite que cuando se esta realizando una tarea se pueda hacer otra



- tipos de web workers (Dedicated worker, shared worker, service worker y Abstract worker)
-Dedicate worker: worker()(Constructor)
-Parametro Options(type, credentials y name): para este entramos a la documentacion oficial

worker() mdn digitmas asi en el buscador google


-Método postMessage() (Enviar mensajes entre el web worker y el sript Principal)
-Evento onmessage(Recibir mensajes entre el web worker y el script principal)
-Método terminate ()(finaliza la ejecuion del web worker)
-Política de origen cruzado (Same-Origin) significa que los worker tienen que ser del
mismo origen, no se puede de otro servidor utilizar un worker externo

*/
//6:20

//Dedicated worker: es el mas sensillo pero lo primero es hacer el constructor
//para este tema se continua desde xampp htdoc para usar el localhost
/*
"use strict";

const worker = new Worker("worker.js");//el parametro es el nombre del archivo que esta en segundo
//plano, lo nombramos worker.js, ahora vamos a crear ese archivo
//console.log(worker);

document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());

const ejecutarBucle = ()=>{
	while(true){
		console.log(1)
	}
}*///al ejecutar este bucle infinito no podemos escribir en el input, ahora vamos a probar 
//usando el bucle desde el worker para ello debemos recibir parametros pues su uso es

//limitado, se hace por medio de postMessage



"use strict";
/*
const worker = new Worker("worker.js");
document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());

worker.addEventListener("message",(e)=>{
	console.log(e.data);
})
const ejecutarBucle = ()=>{
	worker.postMessage("hola mi perro, ¿comó estás?") ;
	worker.terminate();//esta instruccion termina la conexion con el worker 
}//de esta forma se utiliza el input aunque allá una tarea en proceso
*/

const worker = new Worker("worker.js");
document.querySelector(".button").addEventListener("click",()=>ejecutarBucle());

worker.addEventListener("message",(e)=>{
	console.log(e.data);
	worker.terminate();
})
const ejecutarBucle = ()=>{
	worker.postMessage("hola mi perro, ¿comó estás?") ;
	/*
	setTimeout(()=>{
		worker.terminate()
	},2000);//ahora terminamos el proceso en dos segundos
	*/   //lo vamos a terminar cuando devuelva el mensaje
}

//6:47


