//POO

class animal{
	constructor(especie, edad, color){
		this.especie= especie;
		this.edad = edad;
		this.color= color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años, 
		y soy de color ${this.color}`;
	}
	verInfo(){//metodo para mostrar informacion
		document.write(this.info+"<br>");
	}

}

let perro = new animal("perro", 5, "marrón");
let gato = new animal("gato", 2, "negro");
let pajaro = new animal("pajaro", 1, "verde");

//document.write(perro);
//console.log(perro);//muestra en la consola el objeto
 
 // document.write(perro.info+"<br>");
 // document.write(gato.info+"<br>");
 // document.write(pajaro.info+"<br>"); 

perro.verInfo();
gato.verInfo();
pajaro.verInfo();//4:22