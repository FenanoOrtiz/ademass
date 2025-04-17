// crear un sistema que almacene toda la informacion de las materias y las muestre en
//pantalla de forma ordenada

//5:47

const materiasHTML = document.querySelector(".materias");

const materias = [
	{
		nombre: "Fisica 4",
		nota: 7
	},{
		nombre: "Calculo 3",
		nota: 8
	},{
		nombre: "Base de datos 3",
		nota: 9
	},{
		nombre: "Matemáticas discretas 2",
		nota: 7
	},{
		nombre: "Programación 4",
		nota: 8
	}	
];

const obtenerMateria = (id)=>{
	return new Promise((resolve,reject)=>{
		materia = materias[id];
		if (materia == undefined) reject("La materia no existe");
		else setTimeout(()=>{resolve(materia)},Math.random()*1400);//se simula la
		//demora de respuesta del servidor por medio del setTimeout y el tiempo
		// con Math.random()

	});

}
// si se realiza la solicitud asi siempre genera un error al salir
// la misma materia
//obtenerMateria(0).then(res=> console.log(res));
// obtenerMateria(1).then(res=> console.log(res));
// obtenerMateria(2).then(res=> console.log(res));
// obtenerMateria(3).then(res=> console.log(res));

const devolverMaterias = async()=>{
	let materia = [];
	for (let i = 0; i<materias.length; i++){
		materia[i] = await (obtenerMateria(i));
		//console.log(materia[i]);
		let newHTMLCode =`
		<div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota">${materia[i].nota}</div>
		</div>`;
		materiasHTML.innerHTML += newHTMLCode;
	}
}

devolverMaterias(); 

//6:04