//2:05
//orden en que se ejecutan los eventos
//event Bubbling (burbuja): orden natural
//event Capturing


/*ejemplo 1
const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");
//¿cual de los dos se ejecuta primero?
//no importa cual se agrega primero el flujo de eventos se ejecuta
//del mas especifico al menos especifico (Bubbling) y de menos especifico
//al mas especifico si al final se le agrega true se puede cambiar
// este orden
contenedor.addEventListener("click", (e)=>{
	alert("da click en un contenedor");
})
button.addEventListener("click", (e)=>{
	alert("da click en un boton");
})
*///fin ejemplo 1


/*//ejemplo 2
const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

contenedor1.addEventListener("click", (e)=>{
	alert("da click en un contenedor rojo");
},true);//true es el ultimo parametro para cambiar el orden en
//que se escucha el evento
contenedor2.addEventListener("click", (e)=>{
	alert("da click en un contenedor azul");
},true);

button.addEventListener("click", (e)=>{
	alert("da click en un boton");
});//de esta forma se ejecuta primero el click del contenedor rojo, luego el azul
//y por ultimo el boton
*/ // fin ejemplo 2


//ejemplo 3 event stopPropagation()
const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

contenedor1.addEventListener("click", (e)=>{
	alert("da click en un contenedor rojo");
},);//para detener los eventos apenas se ejecute uno en especifico
// se utiliza 
contenedor2.addEventListener("click", (e)=>{
	alert("da click en un contenedor azul");
}/*,true*/);//si aca tiene true se ejecuta primero luego el boton y
// no se ejecuta el rojo

button.addEventListener("click", (e)=>{
	alert("da click en un boton");
	e.stopPropagation();
});//de esta forma se detiene que solo se ejecute el boton
// no permite ejecutar los eventos asociados