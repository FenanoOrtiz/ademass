/*
1. crear un minisistema que nos permita registrar los alumnos presentes (P)
y ausentes (A) en clase.
2. pasados los 30 dias mostrar las situacion de todos los alumnos
numero total de presentes y ausentes
3.se puede tener un maximo de 10% de ausensias por semestre
si se tiene mas sera reprobado

*/

let cantidad = prompt ("¿Cuantos alumnos se van a registrar?");
let alumnosTotales = [];

for (i=0; i < cantidad; i++){
	alumnosTotales[i] = [prompt("nombre del alumno "+ (i+1)),0]
	//document.write(alumnosTotales[0]+": "+alumnosTotales[1]+"<br>");
}

const tomarAsistencia = (nombre, i)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P"){
		alumnosTotales[i][1]++;
	}
} 

// const diasEvaluados = 3;
// const maximoInasistencia=1;

for (i=0; i<30; i++){
	for(alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}

}

for (alumno in alumnosTotales){
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	________Presente: <b>${alumnosTotales[alumno][1]}</b> <br>
	________Ausencia: <b>${30 - parseInt (alumnosTotales[alumno][1])}</b>`;
	if (30- alumnosTotales[alumno][1] >18){
		resultado+= "<b style= 'color:red'> REPROBADO POR INASISTENCIA </b><br><br>";

	}else{
		resultado+= "<br><br>";
	}
	document.write(resultado); 	
}
