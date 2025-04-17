"use strict";
//"strict mode";se equivoca en el video pues se debe utilizar use strict 1:23:52
// px12, px14, px16 deben se declaradas en modo estricto como const
//ejemplo
/*
const cambiarTamaño = tamaño=>{
	document.querySelector(".texto").style.fontSize = `${tamaño}px`;
}
document.querySelector(".t12").addEventListener("click", ()=>cambiarTamaño(12));
document.querySelector(".t14").addEventListener("click", ()=>cambiarTamaño(14));
document.querySelector(".t16").addEventListener("click", ()=>cambiarTamaño(16));

// en el anterior ejemplo no se utilizan clausuras
*/
//ejemplo utilizando clausuras

const cambiarTamaño = tamaño=>{
	return ()=>{
		document.querySelector(".texto").style.fontSize = `${tamaño}px`;
	}
	
}
const px12 = cambiarTamaño(12);
const px14 = cambiarTamaño(14);
const px16 = cambiarTamaño(16);


document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);
