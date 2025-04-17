/*
los datod de cofla y de otros alumnos fueron recibidos y ya están almacenados,
ahor hay que crear un sistema que muestre esa información y se pueda asignar
cuando rinde.

- la interfaz debe ser agradabel y atractiva

- debe contener todo los datos de manera estructurada

- el profesor puede seleccionar en cual de las 2 semanas rinde el usuario

- si el profesor confirma, los datos se deben actualizar y reemplazar el espacio
de seleccion de semana por la semana seleccionada

*/

//3:15
const alumnos = [{//array con objetos cada objeto es un alumno
	nombre: "Fernando Ortiz",
	email: "ortiz@gmail.com",
	materia: "Electronica"
},{
	nombre: "Juan Ortiz",
	email: "juanortiz@gmail.com",
	materia: "matematicas"
},{
	nombre: "Ana Cogollo",
	email: "cogollo@gmail.com",
	materia: "mercadeo"
},{
	nombre: "Brayan Ortiz",
	email: "broortiz@gmail.com",
	materia: "institucional"
},{
	nombre: "Nelso Ortiz",
	email: "nelor@gmail.com",
	materia: "mecanica"
}];
/*   //se muestran los objetos en la consola
for (alumno in alumnos){
	console.log(alumnos[alumno])
}*/
/*  // para motror todos los datos en la consola
for (alumno in alumnos){
	for(datos in alumnos[alumno]){
		console.log(alumnos[alumno][datos])
	}
}
*/
const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");
let htmlCode = "";

for (alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos["materia"]
	//en el video 3:31 tiene definida la variable por fuera pero la vuelve a 
	//definir dentro del for, esto genera un erro y no funciona el error que 
	// muestra es que no se esta definiendo la variable con = sino con +=
	// se elimina el let y listo 
	htmlCode += `
	<div class="grid-item nombre">${nombre}</div>
		<div class="grid-item email">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semana">
			<select class="semana-elegida">
				<option value="semana 1">Semana 1</option>
				<option value="semana 2">Semana 2</option>
			</select>
		</div>`;
};
contenedor.innerHTML = htmlCode;	





boton.addEventListener("click",()=>{
	let confirmar = confirm("¿realmente quieres confirmar las mesas?");
	if (confirmar){
		document.body.removeChild(boton);
		let elementos = document.querySelectorAll(".semana");
		let semanasElegidas = document.querySelectorAll(".semana-elegida"); 
		for (elemento in elementos){
			let semana = elementos[elemento];
			// console.log(semanasElegidas[elemento].value);
			// console.log(semana);
			semana.innerHTML = semanasElegidas[elemento].value;
		}

	}
	
})//3:26