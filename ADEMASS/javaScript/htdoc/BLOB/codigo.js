
const imagen  = document.querySelector(".imagen");



fetch("imagen.jpg")
	.then(res=>res.blob())
	.then(img=>imagen.src = URL.createObjectURL(img)); 

	//imagen.src es el selector imagen con la propiedad src de la etiqueta de img
	//el tipo de dato blob nos crea una ruta imaginaria osea una URL donde se 
	//almacena la imagen para visualizarla

	 