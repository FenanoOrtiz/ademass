//  TEMPORIZADORES

/*
* setTimeout(): temporizador que ejecuta una funcion despues de un tiempo, este
se escribe en milisegundos 2 segundos 2.000 milisegundos
* setInterval()
* clearTimeOut()
* clearInterval()
*/

//ejemplo setTimeout()
/*
setTimeout(()=>{
	document.write("hola")
},2000);//este ultimo parametro es el tiempo en milisegundos
*/
// o tambien asi:
//setTimeout(saludar,2000);

//const saludar = ()=>{document.write("hola")};//estilo flecha
/*
const saludar = ()=>{
	document.write("hola")
};

setTimeout(saludar,2000);
*/


//clearTimeout() no deja ejecutar el temporizador
//ejemplo
/*
const temporizador = setTimeout(()=>{
	document.write("hola")
},2000);// asi se ejecuta 
clearTimeout(temporizador);//no se ejecuta
*/
//fin de ejemplo

//setInterval() hace que se ejecute una funcion repetidamente

//ejemplo
/*
const intervalo = setInterval(()=>{
	document.write("hola")
},3000);

//clearInterval(intervalo) desde la consla para la repeticion 
*/ // fin ejemplo
//2:44

//ejemplo
const parrafo = document.querySelector(".parrafo");
const mensaje = ()=>{
	//parrafo.innerHTML=`<b>Hola a Todos</b>`;
	document.write("<b>hola bienvenidos</b> <br>");
};
/*
const intervalo = setInterval(()=>{
	document.write("<b>hola bienvenidos</b> <br>")
},400);
*/
const intervalo = setInterval(mensaje,400);

setTimeout(()=>{
	clearInterval(intervalo)
},9000);// en este ejemplo utilizamo setInterval para mostrar cada 3 segundos la
//palabra hola, por medio de setTimeout esperamos 9 segundos para ejecutar el 
// clearInterval para parar el intervalo en su tercer ejecucion