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
caches.open("archivos").then(cache=>{
	console.log(cache);
	cache.add("indexCache.html")

})

/*
cache.add(request): toma una URL, la recupera y agrega objetos de respuesta resultante ala 
cahe dada. esto es equivalente a llamar fetch() y luego usar put() para agregar
los resultados a la caché. estos dos archivos los traslade a localhost en una carpeta
llamada cache para seguir haciendo el estudio del tema
*/

