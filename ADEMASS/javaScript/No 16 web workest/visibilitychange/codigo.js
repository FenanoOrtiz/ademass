/* VISIBILITYCHANGE
  - event visibilityChange
Se genera un evento al cambiar de pestaña en el navegador

los estados se verifican con visibilityState pueden ser hidden o visible
  - usos
	en caso de que se cambie de pestaña se pausa un video que se este ejecutando
	si estamos jugando un juego y cambiamos de pestaña se pausa el juego




*/
"use strict";

addEventListener("visibilitychange", (e)=>{
	//console.log(document.visibilityState);
	//console.log(e.target.visibilityState);//de ambas formas se puede verificar
	if(e.target.visibilityState=="visible"){
		console.log("porque te cambias de pestaña");
	}else{
		alert("volviste, que bien");
	}
}) //6:10