"use strict"

/*
trabaja con eventos de archivos, lectura de archivos





*/
/*
const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
	leerArchivo(archivo.files[0])
});



const leerArchivo = ar =>{
	const reader = new FileReader();
	reader.readAsText(ar);//para leer archivos de texto
	reader.addEventListener("load",(e)=>{
		//console.log(e.currentTarget.result)//para ver directamente
		// el texto en consola
		//console.log(typeof e.currentTarget.result)//para ver tipo de archivo
		console.log(JSON.parse(e.currentTarget.result))
	} )
}
*/

/*
// para leer varios archivos de texto
const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
	leerArchivo(archivo.files)
});


const leerArchivo = ar =>{
	for (let i = 0; i < ar.length; i++) {
		const reader = new FileReader();
		reader.readAsText(ar[i]);
		reader.addEventListener("load",(e)=>{
			console.log(JSON.parse(e.currentTarget.result))
		})
	}
	
}
*/

// readAsDataUrl() es para leer otro tipo de archivos, imagenes
// videos etc
// se aagrego al index <div class="resultado"></div>
const archivo = document.getElementById('archivo');
archivo.addEventListener("change",(e)=>{
	leerArchivo(archivo.files)
});


const leerArchivo = ar =>{
	for (let i = 0; i < ar.length; i++) {
		const reader = new FileReader();
		reader.readAsDataURL(ar[i]);//Se coloca aca la instruccion
		// para leer otros archivos
		reader.addEventListener("load",(e)=>{
			let newImg = `<img src='${e.currentTarget.result}'>`;
			document.querySelector(".resultado").innerHTML += newImg;
		})
	}
	
}