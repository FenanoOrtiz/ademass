/*las mesas de examen ya finalizaron y el profesor le tomó unultimo examen 
espacial a cofla, ya cofla hizo 2 pruebas mas, pero lamentablemente se 
rompio el sistema de inscripcion de notas, por ende habra que crear una 
solucion a este problema, desarrollando una web que sea capás de simular 
su funcionamiento

* crear mini interfaz para introducir nota

* validar que no haya errores

* se debe promedira la nota del profesor con otras 2 notas de trabajos anteriores

* si promedio es mayor de 7/10 aprobo la materia


*/
//4:12
const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
	let resultado, mensaje;
	try{
		prevRes  = parseInt(document.getElementById('nota').value);
		if(isNaN(prevRes)){
			throw "Burrooooo";
		}
		
		mensaje = definirMensaje(prevRes);
		resultado = verificarAprobacion(8,5,prevRes);
		
	}catch(e){
		resultado = e+"¿SOS GRACIOSO?";
		mensaje = "He descubierto que intentaste hackear el sitio";
	}

	abrirModal(resultado,mensaje);
} )

const definirMensaje =(pr)=>{
	let resultado;
	switch (pr){
		case 1: resultado = "tan bruto saco 1, bestia";
			break;
		case 2: resultado = "la verdad no te mereces ni palabras, bestia";
			break;
		case 3: resultado = "te espero el proximo semestre, burro";
			break;
		case 4: resultado = "en serio, que hizo en el semestre";
			break;
		case 5: resultado = "nada de nada, a estudiar";
			break;
		case 6: resultado = "regular, te falto pelo para moña";
			break;
		case 7: resultado = "bueno, puedes mejorar";
			break;
		case 8: resultado = "muy bueno";
			break;
		case 9: resultado = "excelente";
			break;
		case 10: resultado = "Eres un montruo para el estudio";
			break;
		default: resultado = null;	 		 
	}
	return resultado;//4:20 
}

const verificarAprobacion = (nota1, nota2, prevRes)=>{
	
	let promedio = (nota1+nota2+prevRes)/3;
	if(promedio>=7){
		return "<span class='green'>APROBADO</span>"
	}
	return "<span class='red'>DESAPROBADO</span"
	
}



const abrirModal = (res,msj)=>{
	//console.log(res);
	document.querySelector(".resultado").innerHTML = res;
	//console.log(msj)
	document.querySelector(".mensaje").innerHTML = "tu prueba: "+msj;
	let modal = document.querySelector(".modal-background");
	modal.style.display = "flex";
	modal.style.animation = "aparecer 1s forwards";
} 