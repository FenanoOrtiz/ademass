/*1. mostrar las particularidades de 3 celulares
2. cada uno debe tener color, peso, resolucion, camara, memoria
3. debe poder prender, reiniciar, tomar fotos y grabar.
4. implementar estas cualidades en los celulares de alta gama

5. sistema que ayude a decidir cual app de juegos descargar
6. debe contener cada app la cantidad de descargas puntuacion y peso
7. se deben poder instalar, abrir, cerrar y desinstalar

*/

//4:41
class Celular {
	constructor(color, peso, tamaño, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido= false;
	}
	presionarBotonEncenddido(){
		if (this.encendido == false){
			alert("celular prendido");
			this.encendido = true;
		}else{
			alert("celular apagado");
			this.encendido = false;
		}

	}
	reiniciar(){
		if(this.encendido == true){
			alert("reiniciando celular");
		}else{
			alert("el celular está apagado");
		}
	}
	tomarFoto(){
		alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`grabando Video en ${this.resolucionDeCamara}`);
	}
	mobileInfo(){
		return ` 
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Resolucion Video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br> 

		`
	}



}

 celular1 = new Celular("negro","100g","5'", "hd", "1Gb");
 celular2 = new Celular("rojo","150g","5.4'", "full hd", "2Gb");
 celular3 = new Celular("blanco","146","5.9'", "full hd", "2Gb");
class CelularAltaGama extends Celular{
	constructor(color, peso, tamaño, rdc, ram, rdce){
		super(color, peso, tamaño, rdc, ram)
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideo(){
		alert("estas grabando en camara lenta");
	}
	reconocimientoFacial(){
		alert("vamos a iniciar un reconocimiento facial");
	}
	infoAltaGama(){
		return this.mobileInfo() + `Resolucion de camara 
		Extra:<b style="color:#0a9560; font-size:32px;" > ${this.resolucionDeCamaraExtra}</b>`
	}
}




// document.write("celular de color: "+celular1.color+", memoria: "+ celular1.memoriaRam);
// celular1.presionarBotonEncenddido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncenddido();

celular4 = new CelularAltaGama("rojo","130g","5.2'", "4k", "3Gb", "full Hd");
celular5 = new CelularAltaGama("negro","142g","6'", "4k", "4Gb", "HD");


document.write(`
	${celular1.mobileInfo()}<br>
	${celular2.mobileInfo()}<br>
	${celular3.mobileInfo()}<br>

	`);

document.write(`
	${celular4.infoAltaGama()}<br><br>
	${celular5.infoAltaGama()}<br>
	

	`);
