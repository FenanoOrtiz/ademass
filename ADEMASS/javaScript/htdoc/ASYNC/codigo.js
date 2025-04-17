// *****fetch y axios con await y async*****

// implementacion
// la siguiente funcion esta bien realizada pero no se ejecuta por el tiempo de
// respuesta del servidor, por eso se utiliza ASYN Y AWAIT y la respuesta es
// undifined


/*
const getName = ()=>{
	fetch("informacion.txt")
		.then(res=>{
			if(res.ok) Promise.resolve(res)
			else Promise.reject(res)
		})
		.then(res=> console.log(res))
		.catch(e=>console.log(e))
}

getName();
*/
//este ejemplo funciona bien pero no crea el DIV
/*

const getName = async ()=>{
	
	let peticion = await fetch ("informacion.txt");
	let resultado = await peticion.json();
	//console.log(resultado)
	let HtmlCode = `Nombre: ${resultado.nombre}<br>`
	document.querySelector(".nombre").innerHTML= HtmlCode;

}
const getAge = async ()=>{
	
	let peticion = await fetch ("informacion.txt");
	let resultado = await peticion.json();
	//console.log(resultado)
	let HtmlCode = `Edad: ${resultado.Edad}<br>`
	document.querySelector(".edad").innerHTML= HtmlCode;

}
//getName();//7:32

document.getElementById('getName').addEventListener("click", getName);
document.getElementById('getAge').addEventListener("click", getAge);//7:42

*/
// el mismo ejemplo anterior pero creando el div del html

/*
const getName = async ()=>{
	
	let peticion = await fetch ("informacion.txt");
	let resultado = await peticion.json();
	let div = document.createElement("DIV");
	div.classList.add("nombre");
	div.innerHTML=`Nombre:${resultado.nombre};`
	document.body.appendChild(div);

}
const getAge = async ()=>{
	
	let peticion = await fetch ("informacion.txt");
	let resultado = await peticion.json();
	let div = document.createElement("DIV");
	div.classList.add("edad");
	div.innerHTML= `Su edad es: ${resultado.edad}`;
	document.body.appendChild(div);

}
//getName();

document.getElementById('getName').addEventListener("click", getName);
document.getElementById('getAge').addEventListener("click", getAge);
*/

//el mismo ejemplo ahora con axios, lo unico es que hay que incluir la libreria en el index



const getName = async ()=>{
	
	let resultado = await axios ("informacion.txt");
	let div = document.createElement("DIV");
	div.classList.add("nombre");
	div.innerHTML=`Nombre:${resultado.data.nombre};`
	document.body.appendChild(div);

}
const getAge = async ()=>{
	
	let resultado = await axios ("informacion.txt");
	let div = document.createElement("DIV");
	div.classList.add("edad");
	div.innerHTML= `Su edad es: ${resultado.data.edad}`;
	document.body.appendChild(div);

}


document.getElementById('getName').addEventListener("click", getName);
document.getElementById('getAge').addEventListener("click", getAge)