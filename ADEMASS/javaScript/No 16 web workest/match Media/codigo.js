"use strict"
/*
-matchMedia()
-propiedades match
-evento onchange
-¿cuando debería usar esto?: se usa cuando hay un estilo que no
se puede realizar por medio de css

*/

//5:17

/*
const mq = matchMedia("");//entre las comillas van la mediaquery de css
//si no se coloca las comillas genera error
console.log(mq);
*/

/*
en consola muestra:
MediaQueryList {media: '', matches: true, onchange: null}
matches: true
media: ""
onchange: null[[Prototype]]: 
MediaQueryList
*/


/*
const mq = matchMedia("(max-width:500px)");//esa es la mediaquery

console.log(mq);
*/

/*
con la pantalla en vista dispositivo moviles y actualizamos la pagina
vemos lo siguiente
MediaQueryList {media: '(max-width: 500px)', 
matches: true, //cambia a true porque la pantalla tiene un ancho
menor de 500, si tiene mayor de 500 es false en matches
media:"(max-width: 500px)"
onchange:null
[[Prototype]
*/
//console.log(mq.matches);//dependiendo del tamanño muestra false o true


//el evento onchange cada vez que cambie de false a true el matches el 
//detecta un evento
const mq = matchMedia("(max-width: 500px)")
const caja = document.querySelector(".caja");

mq.addEventListener("change",()=>{
	if (mq.matches){caja.classList.replace("caja","responsive-caja");
	}else{caja.classList.replace("responsive-caja","caja")}
})