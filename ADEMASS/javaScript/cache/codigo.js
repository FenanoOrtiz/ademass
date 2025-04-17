/*
Cache

definicion: almacena información que se solicita  al abrir la pagina para que
la proxima vez que se abra se demore menos en la carga.
trabaja con promesas

usos:para hacer que las paginas cargen mas rapido

almacenar información:

eliminar información:


*/

"use strict";

//caches.open("archivos");
/*
caches.open("archivos-1").then(cache=>{
	console.log(cache);
	cache.add("index.html")
	
})
*/
/*
cache.add(request): toma una URL, la recupera y agrega objetos de respuesta resultante ala 
cahe dada. esto es equivalente a llamar fetch() y luego usar put() para agregar
los resultados a la caché. 7:24

cache.addAll(request): agrega todos los archivos que se envian en un arreglo;
*/

/*
caches.open("archivos-2").then(cache=>{
	console.log(cache);
	cache.addAll(["index.html", "codigo.js", "estilo.css"])
	
})
*/

/*
cache.match(request, options)
devuelve un promise que se resuelve con la respuesta asociada con la primera solicitud
coincidente en el objeto almacenado

cache.matchAll(request, options)
devuelve un promise que se resuelve con la respuesta asociada con una array de elementos
 coincidentes en el objeto almacenados de donde se solicito


*/
/*

caches.open("archivos-1").then(cache=>{
	cache.match("index.html").then(res =>{
		console.log(res);
	})
})

caches.open("archivos-1").then(cache=>{
	cache.matchAll("index.html").then(res =>{
		console.log(res);
	})
})
*/
/*
cache.put(request,response)
toma tanto una solicitud como una respuesta y la agrega a la cache dad
*/

/*
caches.open("archivos-estaticos").then(cache=>{
	// fetch("index.html").then(res =>{
	// 	cache.put("index.html",res);
	// })estas lineas se remplaza por lo siguiente
	cache.add("index.html")//se recomienda usar add en cambio de put
}) 
*/

/*
cache.delete(request, options)
encuentra la entrada del objeto cuya clave es la solicitud, devolviendo un
primise que resuelve true si el objeto se encuentra y se elimina una
entrada coincidente. si no se encuentra ninguna entrada, l promesa se 
resuelve con false

*/
/*
caches.open("archivos-estaticos").then(cache=>{
	cache.delete("index.html")
}) 

*/


/*
cache.keys(request,options): devuelve un Promise que se resuelve en un matriz de keys
de los objetos almacenados, permite buscar en la cache un archivo o grupo de archivos


*/

caches.open("archivos-estaticos").then(cache=>{
	cache.addAll(["index.html", "codigo.js", "estilo.css"])
	
})
caches.open("archivos-estaticos").then(cache=>{
	cache.keys().then(res=>{
		console.log(res)
	})
})
