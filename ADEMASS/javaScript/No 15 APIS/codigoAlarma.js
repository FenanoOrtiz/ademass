 "use strict";

 const addCero = n=>{
 	if (n.toString().length < 2) return "0".concat(n);
 	return n;
 }



 const actualizarHora = ()=>{
 	const time = new Date();
 	//let hora = time.getHours();//así funciona pero sale sin el 0 cuando es un solo
 	//digito por eso se hace una funcion para colocar ese 0
 	let hora = addCero(time.getHours());
 	let min = addCero(time.getMinutes());
 	let seg = addCero(time.getSeconds());
 	document.querySelector(".hora").textContent = hora;
 	document.querySelector(".min").textContent = min;
 	document.querySelector(".seg").textContent = seg;
 }

 actualizarHora();

 setInterval(actualizarHora,1000);//2:13