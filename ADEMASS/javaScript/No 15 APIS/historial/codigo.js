/*
		HISTORIAL
- back() vuelve atras (ES como dar atras en la pagina o adelante ejemplos desde la consola, digita history.back() o
histoy.forward()
- forward() adelante
- tamaño del historial con length así: history.length
- go() va al sitio indicado con un numero relativo
- pushState() modifica la URL y conserva la info, define una nueva entrada en el historial



- propiedades state y eventos popstate
- replaceState modifia la URL y no la conserva se borra del historial



*/
"use strict"
//console.log(history.length)//tamaño de la pagina

//history.go();//regarca la pagina
//history.go(-1)// va a la pagina anterior
//history.go(1);//vuelve a la pagina original

console.log(location.href);//nos muestra nuestra url//3:08

//dentro de la consola digitamos:history.pushState(), tiene tres
//parametros, data, titulo, url
// history.pushState({nombre:"Pedro"},"titulo","?esta va hacer la pgina");
// ahora digitamos:location.href  ojo si no se coloca el interrogante
//sale qe es origen null

// popstate() es el evento que detecta el cambio en el historial
//realizado por una instruccion pushState

addEventListener("popstate",(e)=>{
	console.log(e.state)
});


// digitamoen consola history.replaceState(data,titulo,url)
// 
