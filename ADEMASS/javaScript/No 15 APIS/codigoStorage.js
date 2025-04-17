//  api  localStorage SessionStorage

/*
Session informacion que se almacena en la session cuando se cierra la pestaña o 
actualiza la pagina esa información se pierde

local lo almacena localmente y si se cierra la pestaña o actualiza la pagina no se
pierde la informacion

*/

"use strict";

/*
localStorage.setItem("nombre","Pedro");//setItem es para introducir informacion
//getItem es para llamar la informacion
console.log(localStorage);
let nombre = localStorage.getItem("nombre");
console.log(nombre);


sessionStorage.setItem("nombre1","Claudia");// si comentamos esta instruccion, en este
// caso al cerrar la pestaña se pierde la informacion
console.log(sessionStorage);
let nombre1 =sessionStorage.getItem("nombre1");
console.log(nombre1);

setTimeout(()=>{
	let nombre1 = sessionStorage.removeItem("nombre1")//removeItem elimina item
},2000);

setTimeout(()=>{
	 nombre = localStorage.removeItem("nombre")
	 console.log (localStorage)
},2000)


//clear borra todo con remove solo el item

// console.log (localStorage)
setTimeout(()=>{
	 nombre = localStorage.clear()// no se entiende muy bien
	 console.log (localStorage)
},2000)

*/


// ejemplo 2:21

