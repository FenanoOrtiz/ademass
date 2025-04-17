let materias = {
		fisica:["Profesor Perez","Pedro", "Pablo", "Cofla", "Maria"],
		programacion:["Profesor Dalto","Pedro", "Juan", "Pablo"],
		logica:["Profesor Hernandez","Pedro", "Juan", "Carlos", "Claudia"],
		quimica:["Profesor Rodriguez","Pedro", "Juan", "Cofla", "Maria"]
	}


const inscribir = (alumno, materia) =>{
	personas = materias[materia];
	if (personas.length >= 21){
		 document.write(`lo siento ${alumno}, las clases de ${materia} 
		 	ya estan llenas<br>`);
	}else{
		personas.push(alumno);
		if (materia == "fisica"){
			materias = {
				fisica: personas,
				programacion: materias['programacion'],
				logica: materias['logica'],
				quimica: materias['quimica']
			}
		}	
		else if (materia == "programacion"){
			materias = {
				fisica: materias['fisica'],
				programacion: personas,
				logica: materias['logica'],
				quimica: materias['quimica']
			}
		}	
		else if (materia == "logica"){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: personas,
				quimica: materias['quimica']
			}
		}	
		else if (materia == "quimica"){
			materias = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: materias['logica'],
				quimica: personas
			}
		}
		document.write (`¡Felicidades ${alumno}! te has inscrito a
			 ${materia} correctamente<br><br>`);
	}
}

document.write(materias['fisica']+ "<br>");
document.write(materias['quimica']+ "<br>");

inscribir("cofla", "quimica");
inscribir("pedrito", "fisica");
inscribir("carlita", "fisica");
inscribir("juanita", "fisica");
inscribir("cofla", "quimica");
inscribir("pedrito", "fisica");
inscribir("carlita", "fisica");
inscribir("juanita", "fisica");
inscribir("cofla", "fisica");
inscribir("pedrito", "fisica");
inscribir("carlita", "fisica");
inscribir("juanita", "fisica");
inscribir("cofla", "fisica");
inscribir("pedrito", "quimica");
inscribir("carlita", "fisica");
inscribir("juanita", "fisica");
inscribir("cofla", "fisica");
inscribir("pedrito", "fisica");
inscribir("carlita", "quimica");
inscribir("juanita", "fisica");
document.write(materias['fisica']+ "<br>");
document.write(materias['quimica']+ "<br>");


//6:55





	