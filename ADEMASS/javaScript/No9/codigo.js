/*
*****EVENTOS*****
Definicion: un evento es cualquier cosa que suceda dentro de la
pagina, un click oprimir una tecla etc

de eventos, on event handlerd (manejador de evento)


1:55



*/
const button = document.querySelector(".button");
/****asi lo hice yo
button.onclick = () =>{
	const container = document.querySelector(".container");
	let parrafo = document.getElementById("parrafo");
	parrafo.innerHTML="ACA ESCRIBO";
	
}
*/
/*
button.onclick = () =>{
	alert("hola");//no es recomendable
}
*/
// la forma correcta es la escucha de eventos o event listener

//button.addEventListener("click", saludar); //click el evento y
//saludar es la funcion, pero no puede funciar la funcion flecha
/*
function saludar(){
	alert ("utilizando la funcion");
}*/
/*//de esta forma bota error
const saludar =() =>{
	alert("saludar");
}
*/
//para usar la funcion flecha se hace esto
/*
button.addEventListener("click", ()=>{
	alert("hola a Todos");
});
*/
/*
button.addEventListener("click", saludar);

function saludar() {
	alert("hola vamo a quitar el listener");
	button.removeEventListener("click",saludar);//quitamos el
	//escucha de eventos del boton despues del primer click
	//no funciona mas
}

*/
//OBJETO EVENT
// Es el evento que se ejecuta y todas sus propiedades
/*
button.addEventListener("click", (e)=>{//e o event o cualquier otro
	//nombre son los eventos
	console.log(e.target);//e solo muestra lo eventos
	//y e.target muestra lo que ocasiono el evento target es 
	//una propiedad hay muhas propiedade dependiendo el evento
// muestra en consola:
//<button class="button">oprima</button>

})

*/
// FLUJO DE EVENTOS O event flow
//orden en que se ejecutan














