
// ejemplos de await y async

/*
const objeto ={
	propiedad1 : "valor1",
	propiedad2 : "valor2",
	propiedad3 : "valor3"
};

const obtenerInformacion = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve(objeto)},3000)
	})
}


//obtenerInformacion().then(resultado=>console.log(resultado));

//como se usa async() para crear funciones asincronas

//resultado = await obtenerInformacion(); //no funciona porque await solo
// trabaja con funciones asyncronas, se hace la funcion asyncrona de esta
// manera

const mostrarResultado = async()=>{
	resultado = await obtenerInformacion();
	console.log(resultado);
}

mostrarResultado();
*/

// ejemplo 2

const obtenerInformacion =(text)=>{//este bloque simula una llamada a un servidor
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve(text)},Math.random()*200)//es setTimeout simula los
		//retardos que puede tener un servidor
	})
}
// si solicitamos la informacion de esta forma pueden llegar datos aleatorios
// y no de la forma que solicitamos


// obtenerInformacion("pito").then(resultado=>console.log(resultado));
// obtenerInformacion("pedro").then(resultado=>console.log(resultado));
// obtenerInformacion("juan").then(resultado=>console.log(resultado));

// se realiza de la siguiente manera

const mostrarData = async()=>{
	data1 = await obtenerInformacion("1. Pito");
	data2 = await obtenerInformacion("2. Pepido");
	data3 = await obtenerInformacion("3. Carlangas");
	console.log(data1);
	console.log(data2);
	console.log(data3);
}

mostrarData();//await básicamente accede al valor que retorna la promesa