"use strict";
//genericos: plantilla de codigo para poder reutiliza y que se pueda cambiar y con
//la cual podemos aplicar un tipo de datos determinados a varios puntos de nuestro
//codigo
const example = {
    //tambien reciba otro parametro modificando las variables de entrada esto es
    //lo que se llama mutables o que se pueden adaptar a otros requisitos
    myGenericType: true
};
function getValue(value) {
    console.log(value);
}
const getValueV2 = (value) => {
    console.log(value);
};
class GenericClass {
    //funciones heredadas no se vea este al colocar el punto 
    constructor(value) {
        this.value = new value();
    }
}
class Rodri {
    constructor() {
        this.name = "Rodri";
        this.age = 28;
    }
}
class Maria {
    constructor() {
        this.nameMaria = "Maria";
        this.ageMaria = 20;
    }
}
class Greet extends GenericClass {
    constructor() {
        super(Rodri);
    }
    greet() {
        console.log(`hello, ${this.value.name}`);
    }
}
new Greet().greet();
