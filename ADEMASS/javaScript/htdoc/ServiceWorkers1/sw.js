/*
Se reconfigura para mostrar la pagina offline
1. se modifica el evento install
*/

let version = "version 1"; 

self.addEventListener("install",e=>{
	console.log("instalando service worker")
	caches.open(version).then(cache=>{
		cache.add("index.html").then(res=>{
			console.log("Información cacheada");
		}).catch(e=>{
			console.log(e);
		})
	})
})
//la instalación solo sucede una vez, luego se hace la activacion pero para 
// el ejemplo eliminamos el index en cache si ya existe

self.addEventListener("activate", ()=>{
	caches.keys().then(key=>{
		return Promise.all(
			key.map(cache=>{
				if (cache !== version){
					console.log("cache antiguo, eliminado")
					return caches.delete(cache);				
				}
			})
		)
	})
})

// este evento es importante porque verifica que esta activo

// tambien esta el evento para verificar errores self.addEventListener("error",()=>{})

//otro evento es el fetch ahora lo vamos a utilizar para ver la pagina offline 

self.addEventListener("fetch",e=>{
	e.respondWith(async function()=>{
		const respuestaEnCache = await caches.match(e.request);
		if(respuestaEnCache) return respuestaEnCache;
		return e.request;
	})
})