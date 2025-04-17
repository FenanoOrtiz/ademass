// arreglos
// COMO CREAR, ejemplo

//let frutas = ["banana", "manzana", "pera", 4, 5, "pedro"];
//document.write(frutas);
//document.write(frutas[0]);//muestra banana elemnto 0
//document.write(frutas[3]);// muestra undefined, pues no existe ese elemento

//array asociativos
//asocia los datos internos con nombres
// ejemplo
/*
let pc1 = {
	nombre : "Pc oficina",
	procesador : "Intel core I7",
	ram : "16GB",
	espacio : "1TB"
};
let pc2 = ["Pc oficina", "Inter core I7", "16GB", "1TB"];
*/
//por medio del array asociativo no se necesitan los indices para llamar sino que se
// puede hacer por las caracteristicas con las que se asocia cada elemento

/*//primera forma para mostras con saltos de linea
let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];


let frase = `el nombre de mi pc es: ${nombre} <br>
			 el procesador es : ${procesador} <br>
			 la mermoria ram es: ${ram}<br>
			 el espacio en disco es de ${espacio}`;
document.write(frase);			 
*/
//funciona perfecto
/*
document.write("el nombre de mi pc es:<b> "+pc1["nombre"]+"</b><br>");
document.write("el procesador de mi pc es:<b> "+pc1["procesador"]+"</b><br>");
document.write("la memoria es:<b> "+pc1["ram"]+"</b><br>");
document.write("el espacio en el disco es de:<b> "+pc1["espacio"]+"</b>");
*/
//voy hacer lo mismo sin variables pero con `` estos simbolitos
//parece mas fácil
/*
document.write(`el nombre del pc es:<b> ${pc1["nombre"]}</b><br>
	tiene un procesador de:<b> ${pc1["procesador"]}</b><br>
	su memoria ram es de: <b>${pc1["ram"]}</b><br>su espacio es:<b>${pc1["espacio"]}<b> `);
//los ultimos dos reglones los hice en una sola linea solo para probar
*/
//while
/*

let numero = 0;

while (numero<10){

	document.write(numero+"<br>");
	numero++;
}
*/
// do while
/*
let numero = 0;

do{
	document.write(numero+"<br>");
	numero ++;
}
while (numero <6);//2:32
document.write("<h3>Uso con while y do while</h3><br>");

// la gran diferencia se da en que do while así no se cumpla la condición se 
// alcanza a ejecutar 1 vez en el while no
numero=0
while (numero <6){
	document.write(numero+"<br>");
	numero ++;
}
*/
//ciclo for
//ejemplo ciclo for tablas de multiplicar
/*
for (let i = 1; i <= 9; i++) {
		document.write("la tabla del: "+i+"<br>");
	for (let j = 1; j <= 9; j++) {
		document.write(i + "*" + j +"=" +i*j +"<br>");
	}			
}
*/
// uso de break y continue
// cuando queremos sacar de un ciclo cuando cumpla determinada 
//condicion se usa break, para el ciclo completamente pero si
//solo se quiere que cuando cumpla cierta condicion no se ejecute
// pero que el ciclo continue se utiliza "continue"

//ejemplos
/*
for(let i=0; i<20; i++){
	if(i==12){//condicion que produce que salga del ciclo
		break;
		}
	document.write(i+"<br>");
	
	
}
document.write("ejemplo saltandose solo el 12<br>");
for(let i=0; i<20; i++){
	
	if(i==12){//condicion que produce que salte un punto del ciclo
				//y continue
		continue;
	}
	document.write(i+"<br>");
}
*/
//for in y for of
/*
let animales = ["gato", "perro", "tiranosaurio rex"];

for(animal in animales){//nos muestra la posicion o indice
						// qdel array, tambien sirve para motrar
		//propiedades
	 document.write(animal+"<br>");
}
for(animal of animales){//nos muestra lo que hay en cada posicion 
						//del array, tambien muestra el valor de 
	//las propiedades
	 document.write(animal+"<br>");
}
// con for in se puede mostrar lo que hay en el array así
for(animal in animales){
	document.write(animales[animal]+"<br>");

}
*/
	//2:55

	

//ejemplo mostrando un array asociativo por medio de for in

/*
let datoCliente = {
	nombre: "Fernando",
	apellido: "Ortiz",
	celular: 3016456036,
	placa: "KQN968",
};

for(dato in datoCliente){
	document.write(dato+ ": "+ datoCliente[dato]+"<br>");
}
*/

/*
for (dato of datoCliente){// no sepuede utilizar para un array asociativo
	document.write(dato);
}
*/
//label permite asosiar cualquier bucle a un nombre menos for each
let array1 = ["maria", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "juan"];

//para recorrer un array que esta dentro de otro array

forBucle:
for(let array in array2){
	if(array == 2){

		continue forBucle;//omite el siguiente bucle y ejecuta
		//solo el principal
		for(let array of array1){
			document.write(array+"<br>");
		}

	}else{
		document.write(array2[array]+"<br>");
	}

}

/*
	forBucle://label e como un nombre para el bucle
for(let array in array2){
	if(array == 2){

		
		for(let array of array1){
			document.write(array+"<br>");
			break forBucle;//ejecuta la primer sentencia y termina
			//el bucle principal
		}

	}else{
		document.write(array2[array]+"<br>");
	}
}
*/
/*
forBucle:
for(let array in array2){
	if(array == 2){

		for(let array of array1){
			
			if(array == "josefa"){
				continue forBucle;
			}
			document.write(array+"<br>");
		}
	}else{
		document.write(array2[array]+"<br>");
	}
}*/
//3:03