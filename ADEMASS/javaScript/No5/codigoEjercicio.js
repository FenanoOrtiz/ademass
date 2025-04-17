//agregara a la calculador potencia, raiz cuadrada, raiz cubica

class Calculadora{
	constructor(){

	}

	suma(num1, num2){
	return num1+num2;

	}
	resta(num1, num2){
	return num1-num2;
	}

	multiplicacion(num1, num2){
	return num1*num2;

	}

	division(num1, num2){
		if (num2<=0){
		return ("debe digitar un numero mayor de cero");
		}else{
			return num1/num2;
		}

	}
	potencia(num1, num2){
		return(Math.pow(num1, num2));
		
	}
	raizCuadrada(num1){
		return(Math.sqrt(num1));
	}
	raizCubica(num1){
		return(Math.cbrt(num1));
	}	


}



const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt ("1: suma; 2:resta; 3: Multiplicación; 4: División; 5: Potencia; 6: Raiz Cuadrad; 7: Raiz Cubica");
let num1=0;
let num2=0;

switch(operacion){
	

	case "1":
		num1 =parseInt (prompt ("digite el primer numero"));
		num2 =parseInt (prompt ("digite el segundo numero"));
		resultado = calculadora.suma(num1, num2);
		alert(`tu resultado es: ${resultado}`);
		break;
	case "2":
		num1 =parseInt (prompt ("digite el primer numero"));
		num2 =parseInt (prompt ("digite el segundo numero"));
		resultado = calculadora.resta(num1, num2);
		alert(`tu resultado es: ${resultado}`)
		break;
	case "3":
		num1 =parseInt (prompt ("digite el primer numero"));
		num2 =parseInt (prompt ("digite el segundo numero"));
		
		resultado = calculadora.multiplicacion(num1, num2);
		alert(`tu resultado es: ${resultado}`);
		break;
	case "4":
		num1 =parseInt (prompt ("digite el primer numero"));
		num2 =parseInt (prompt ("digite el segundo numero"));
		
		resultado = calculadora.division(num1, num2);
		alert(`tu resultado es: ${resultado}`);
		break;
	case "5":
		num1 =parseInt (prompt ("digite la base de la potencia"));
		num2 =parseInt (prompt ("digite el indice de la potencia"));
		
		resultado = calculadora.potencia(num1, num2);
		alert(`tu resultado es: ${resultado}`);
		break;
	case "6":
		num1 =parseInt (prompt ("digite el numero al cual se le va a sacar la raiz cuadrada"));
			
		resultado = calculadora.raizCuadrada(num1);
		alert(`tu resultado es: ${resultado}`);
		break;
	case "7":
		num1 =parseInt (prompt ("digite el numero al cual se le va a sacar la raiz cubica"));
			
		resultado = calculadora.raizCubica(num1);
		alert(`tu resultado es: ${resultado}`);
		break;
	default:
		alert("no escojiste una opcion valida");
		break;


}


//6:28




