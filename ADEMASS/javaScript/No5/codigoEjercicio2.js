//1.crear una funcion que al pasar como parametro la materia nos
//devuelva el profesor asignado y el nombre de todos los 
//alumnos
//2. crear una funcion que nos diga en cuantas clases esta Cofla
//3.nombrar las materias en las que esta y los profesores
let materias = {
		fisica:["Profesor Perez","Pedro", "Pablo", "Cofla", "Maria"],
		programacion:["Profesor Dalto","Pedro", "Juan", "Pablo"],
		logica:["Profesor Hernandez","Pedro", "Juan", "Carlos", "Claudia"],
		quimica:["Profesor Rodriguez","Pedro", "Juan", "Cofla", "Maria"]
	}

const obtenerInformacion = (materia)=>{
	
	if (materias[materia] !== undefined ){
		return[materias[materia],materia]
	}else{
		return false;
	}
}
const obtenInformacion = ()=>{
	
	return materias;
		
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion (materia);

	if (informacion !== false){
		let profesor = informacion[0][0];
		let alumnos = informacion[0];
		alumnos.shift();
		document.write(`el profesor de <b>${informacion[1]} es:</b>
			<b style='color:red'> ${profesor}</b><br>
			los alumnos son:<b style='color:blue'> ${alumnos}</b><br><br>
			`);
	}	
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenInformacion();
	let cantidadTotal=0;
	let materiaAsistidas = [];

	for (info in informacion){
		//document.write(info+"-"+informacion[info]+"<br>");
		if(informacion[info].includes(alumno)){
			materiaAsistidas.push(" "+info);//esto lo agregue para obtener
			//el nombre de las materias asistidas

			cantidadTotal++;
		}
		
	}
	return document.write(`<b style='color:blue'>${alumno}</b> está en ${cantidadTotal}
	 clase de ${materiaAsistidas}`);

}





mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica")
document.write("<br>");
cantidadDeClases("Cofla");

//6:45


// se realizaron mejoras al ejercicio, el array de materias 
//se saco de las funciones y se llama dentro de dos funcions
//para mejorar la presentacion y reutilizar el codigo
