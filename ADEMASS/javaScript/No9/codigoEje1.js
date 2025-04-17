/*
hacer un formulario debe conterne nombre mail, materia 
validar mails y nombre
enviar al servidor de manera pulida
 

*/

const nombre = document.getElementById("nombre");//en consola podemos verificar
//si lee el elemento de html asi nombre.value
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado")

boton.addEventListener("click",(e)=>{
	e.preventDefault();//previene el comportamiento por defecto que es
	//actualizar la pagina
	let error = validarCampos();
	if (error[0]){
		resultado.innerHTML = error[1];
		resultado.classList.add("red");
		resultado.classList.remove("green");
	}else{
		resultado.innerHTML = "Solicitud enviada correctamente"
		resultado.classList.add("green");
		resultado.classList.remove("red");
	}
})
/*//para hacer pruebas
const validarCampos = ()=>{
	let error = [];
	error[0] = false;
	error[1] = "mensaje de error"
	return error
}
*/

const validarCampos =()=>{
	let error=[];
	if (nombre.value.length < 5 || nombre.value.length > 40){
		error[0] = true;
		error[1] = "El nombre es inválido";
		return error;
	}else if(email.value.length < 5 ||
			 email.value.length > 40 ||
			 email.value.indexOf("@") == -1||
			 email.value.indexOf(".") == -1){
		error[0] = true;
		error[1] = "El mail es invalido";
		return error;
	}else if ( materia.value < 4 || materia.value > 40){
		error[0]= true;
		error[1]= "la materia no existe";
	}
	error[0] = false;
	return error;
}
/*
siempre se trata de hacer la mayor cantidad de validaciones del lado del 
cliente por medio de javaScript, pero no se hace de esta forma se utiliza
expresiones regulares
*/