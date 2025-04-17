const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",e=>{
	e.preventDefault();
	changeStyle(e.srcElement, "#444");
})
zona.addEventListener("dragleave",e=>{
	e.preventDefault();
	changeStyle(e.srcElement, "#888");
	
})

zona.addEventListener("drop",e=>{
	e.preventDefault();
	changeStyle(e.srcElement, "#888");
	cargarArchivo(e.dataTransfer.files[0])
	zona.style.border = "4px solid #888"
}) 


const changeStyle = (obj, color) =>{
	obj.style.color = color;
	obj.style.border = `4px dashed ${color}`;
}

/*
// con este fragmento se mete texto plano
const cargarArchivo = ar =>{
	const rearder = new FileReader();
	rearder.readAsText(ar);
	rearder.addEventListener("load", e=>{
		document.querySelector(".resultado").textContent = e.currentTarget.result
	})
}

*/

/*
// con este imagenes

const cargarArchivo = ar =>{
	const rearder = new FileReader();
	rearder.readAsDataURL(ar);
	rearder.addEventListener("load", e=>{
		let url = URL.createObjectURL(ar);
		let img = document.createElement("IMG");
		img.setAttribute("src",url);
		document.querySelector(".resultado").appendChild(img);
	})
}

*/
//3:59


// con este video

const cargarArchivo = ar =>{
	const reader = new FileReader();
	reader.readAsArrayBuffer(ar);
	//lineas para la barra de progreso
	reader.addEventListener("progress", e=>{
		let carga = Math.round(e.loaded / ar.size *100); //e.loaded es el tamaño
		//que va cargado ar.size el tamaño del archivo total * 100 se
		// obtiene el porcentaje de carga
		// console.log(ar.size); 
		zona.textContent = `${carga}%`;
		document.querySelector(".barra-de-carga").style.padding = "75px 20px";
		document.querySelector(".barra-de-carga").style.width = `${carga}%`;
	})
	reader.addEventListener("loadend",e=>{
		changeStyle(zona, "#4f9");
		zona.style.borderStyle = "solid"; 
		document.querySelector(".barra-de-carga").style.background = "#4f9";
		setTimeout(()=>{
			zona.style.color= "#fff";
			zona.style.animation = "aparecer 1s forwards";
			zona.textContent = "¡Carga Completa!";
		},500)
	})//4:09


 
	//fin lineas barra de progreso
	reader.addEventListener("load",e=>{
		let video = new Blob([new Uint8Array(e.currentTarget.result)], {type:'video/mp4'})
		let url = URL.createObjectURL(video);
		let img = document.createElement("VIDEO");
		img.setAttribute("src",url);
		document.querySelector(".resultado").appendChild(img); 

		
	})
}//4:11 