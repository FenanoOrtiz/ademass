// crear un sistema que valide si las personas que van a 
// entrar a un sitio son mayores de 18 años, ademas si 
// es la primer persona que entra des pues de las 2 am 
// la entrada es gratis, solo una persona

let free = false;

const validarCliente = (time) =>{
	let edad = prompt("¿Cual es du edad?");
	if (edad >= 18){
		if (time >= 2 && time < 7 && free == false){
			alert("puedes pasar gratis porque eres la primera persona despues de las 2 am");
			free = true;
		}else{
			alert(`son las ${time}:00 hs y puedes pasar, pero debes pagar la entrada`);
		}
	}else{
		alert("eres menor de edad, no puedes pasar");
	}
}
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3); 
//3:42