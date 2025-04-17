/*1.Abstraccion: hacer los objetos metodos clases  lo menos complejo que se 
pueda, que sean generales
2. Modularidad: resolver un problema grande por modulos o por partes
3. encapsulamiento: datos privados
4. polimorfismo: hacer que un metodo que se pueda comportar distindo por sus
propiedades

*/

//4:27

class Animal{
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

class Perro extends Animal{//no se pueden crear objetos con el 
	//mismo nombre de la clase
	constructor(especie, edad, color, raza){
		super(especie, edad, edad)//hereda de animal estas caracteristicas
		this.raza = raza;

	}
	static ladrar(){//static me permite utilizar un metodo sin necesidad der crear
		// el objeto, en este metodo no necesitamos las caracteristicas del objeto
		// por esto se puede utilizar directamente con el nombre de la clase

		alert("Perro Dice ¡Wau!");
	}
	ladrar(){//este metodo se acced despues de crear el objeto 

		alert("Perro Dice ¡Wau!");
	}
	set setRaza(raza){
		this.raza = raza;
	}
	get getRaza(){
		return this.raza;
	}

}


const perro = new Perro("perro", 5, "marrón","chihuahua");//el objeto perro debe ser con
// la p en minuscula pues si se coloca con el mismo nombre de la
//clase genera error
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();
// perro.ladrar();//utilizando la funcion
// Perro.ladrar();//utilizando el metodo estatico

document.write(perro.raza+"<br>");
perro.setRaza="doberman";
document.write(perro.raza+"<br>");
document.write(perro.getRaza);//la forma correcta de llamar propiedades
//es por medio del metodo get y para cambiar por set