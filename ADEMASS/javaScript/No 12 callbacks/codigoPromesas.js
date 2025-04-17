/*
promesas
-concepto: son un objeto que tiene dos callbacks (resolve, reject)
 palabra clave (Promise)
- ¿Que puede representar?
	*terminacion de una operaión asíncrona
	*fracaso de una operación asíncrona

- ejemplos y solucion de problemas de los callbacks

then() es un metodo que tiene las promesas que permite acceder el valor
que tiene resolve

*/
/*

let nombre = "pedro";

const promesa = new Promise((resolve,reject)=>{
	if (nombre!== "pedro") reject("lo siento, el nombre no es pedro");
	else resolve(nombre);
})

promesa.then((resultado)=>{//el acierto con then()
	console.log(resultado)
}).catch((e)=>{//el error se maneja con cathc
	console.log(e);
})

*/

class Persona{
	constructor(nombre, instagram){
		this.nombre = nombre;
		this.instagram = instagram;
	}
}

const data = [
	["Lucas Dalto","@SoyDalto"],
	["Robertico","@Robertico"],
	["Laureta","@laureta"],
	["Carlangas"]

];

const personas = [];

for (let i =0; i<data.length;  i++ ) {
	personas[i] = new Persona(data[i][0],data[i][1]);
}
//console.log(personas[0].instagram)

const obtenerPersona = (id)=>{
	 return new Promise((resolve, reject)=>{
	 	if (personas[id] == undefined) reject("No se ha encontrado la persona");
	 else{resolve(personas[id])}
	})
}

const obtenerInstagram = (id)=>{
	return new Promise((resolve, reject)=>{
		if (personas[id].instagram == undefined) reject ("no se ha encontrado el instagram"); 
		else {resolve(personas[id].instagram)}
	})

}

let id = 3;

obtenerPersona(id).then((persona)=>{
	console.log(persona.nombre);
	return obtenerInstagram(id);
}).then((instagam)=>{
	console.log(personas[id].instagram);
}).catch((e)=>{
	console.log(e);
})
//5:30
