/*
			LIBRERIA AXIOS
* Axios es un remplazo de fecth basado en XMLRequest optimizado se utiliza en
sitios en los que tengamos que realizar muchas peticiones al servidor
para instalar https://github.com/axios/axios
la libreria se copia y se coloca antes del script del codigo.js
si ser requiere una libreria que se ejecunte siempre se coloca en el header

* basado en promesas 			

* trabaja por defecto con peticiones GET, se pued axios.get() y para trabajar
con metodo POST axios.post()



*/

//7:17
// esta es la peticion con fetch
/*

fetch("informacion.txt")
	.then(res=>res.json())
	.then(res=>console.log(res))

*/
//ahora utilizando axios
/*
axios.get("informacion.txt")
	.then(res=>console.log(res));//method:"get"
*/
/*
axios.post("informacion.txt")
	.then(res=>console.log(res));//method:"post", esta respuesta se ve en config
*/

//https://reqres.in/api/users


axios.post("https://reqres.in/api/users",{
	"nombre" : "Fernando",
	"apellido" : "Ortiz"
})
	.then(res=>console.log(res));




