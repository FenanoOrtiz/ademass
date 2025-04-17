/* canal de youtube "pasos por ingenieria"

Callbacks: funcion dentro de otra funcion





*/
// ejemplo Callbacks

/*
function prueba(parametro){
	parametro("carlos","contreras");
}

function decirNombre(nombre,apellido) {		
	console.log(`su nombre es: ${nombre}`);
	decirApellido(apellido);
}

function decirApellido(apellido){
	console.log(`su apellido es: ${apellido}`);
}

prueba(decirNombre);//llamamos la función nombre y como parametro otra función que
// es decir nombre
*/

// se puede resumir a lo siguiente y funciona igual
/*
function prueba(callback){
	callback("Raul");
}

prueba(function decirNombre(nombre){
	console.log(nombre);
});*/

// mas resumida la funcion callbacks
/*
function prueba(callback){
	callback("pedro");
}
prueba(nombre=> console.log(nombre));
*/


// EJEMPLO DE UTILIDAD

class Persona{
	constructor(nombre, instagram){
		this.nombre = nombre;
		this.instagram = instagram;
	}
}

//console.log(new Persona("lucas dalto", "@soydalto"));// se crea un objeto
//para crar muchos objetos

const data = [
	["Lucas Dalto","@SoyDalto"],
	["Robertico","@Robertico"],
	["Laureta","@laureta"],
	["Carlangas"],

];

const personas = [];

for (let i =0; i<data.length;  i++ ) {
	personas[i] = new Persona(data[i][0],data[i][1]);
}
//console.log(personas[1]);
//console.log(personas[0].nombre);//muestra solo el nombre
const obtenerPersona = (id, cb)=>{
	if (personas[id]==undefined){
		cb("No se ha encontrado la persona");
	}else{
		cb(null,personas[id],id)
	}
}

const obtenerInstagram = (id,cb)=>{
	if (personas[id].instagram ==undefined){
		cb("No se ha encontrado el instagram");
	}else{
		cb(null,personas[id].instagram)
	}
}
let id=2

obtenerPersona(id,(err,persona,id)=>{
	if (err){console.log(err);
	}else{
		console.log(persona.nombre);
		obtenerInstagram(id,(err,instagram)=>{
			if(err){console.log(err);
			}else console.log(instagram);
			
		})
	}
})//5:13