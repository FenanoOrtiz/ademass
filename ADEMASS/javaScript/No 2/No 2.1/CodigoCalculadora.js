const suma = (num1, num2)=>{
	return num1+num2;

}
const resta = (num1, num2)=>{
	return num1-num2;
}

const multiplicacion = (num1, num2)=>{
	return num1*num2;

}

const division = (num1, num2)=>{
	if (num2<=0){
		return ("debe digitar un numero mayor de cero");
	}else{
		return num1/num2;
	}

}
alert("¿Que operacion deseas realizar?");
let operacion = prompt ("1: suma; 2:resta; 3: Multiplicación; 4: División");


if (operacion == 1){
	let num1 =parseInt (prompt ("digite el primer numero"));
	let num2 =parseInt (prompt ("digite el segundo numero"));
	resultado = suma(num1, num2);
	alert(`tu resultado es: ${resultado}`);
}else if (operacion == 2){
	let num1 =parseInt (prompt ("digite el primer numero"));
	let num2 =parseInt (prompt ("digite el segundo numero"));
	resultado = resta(num1, num2);
	alert(`tu resultado es: ${resultado}`);
}else if (operacion == 3){
	let num1 =parseInt (prompt ("digite el primer numero"));
	let num2 =parseInt (prompt ("digite el segundo numero"));
	resultado = multiplicacion(num1, num2);
	alert(`tu resultado es: ${resultado}`);
}else if (operacion == 4){
	let num1 =parseInt (prompt ("digite el primer numero"));
	let num2 =parseInt (prompt ("digite el segundo numero"));
	resultado = division(num1, num2);
	alert(`tu resultado es: ${resultado}`);
}else{
	alert("no escojiste una opcion valida");
}




