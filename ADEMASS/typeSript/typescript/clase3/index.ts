//genericos: plantilla de codigo para poder reutiliza y que se pueda cambiar y con
//la cual podemos aplicar un tipo de datos determinados a varios puntos de nuestro
//codigo

//los genericos se pueden aplicar en una interface, un type, una class, o una funcion
//tradiconal o flecha

interface MyGenericInterface<T,U>{//es es un generico definido con dos variables
    myGenericType: T|U
}

const example: MyGenericInterface<string, number|boolean> = {//podemos hacer que el generico
    //tambien reciba otro parametro modificando las variables de entrada esto es
    //lo que se llama mutables o que se pueden adaptar a otros requisitos
    myGenericType : true
}

function getValue<T>(value:T){//otra forma de definir un generico en una funcion
    console.log(value)
}
const getValueV2 = <T>(value:T) =>{//generico en una funcion tipo flecha
    console.log(value)
}
type MyGenericType  <T,U>={//es es un generico en un type
    myGenericType: T | U
}

class GenericClass<T>{
    protected value!: T;//se coloca protected para cuando estemos llamando a las 
    //funciones heredadas no se vea este al colocar el punto 
    /*
    el signo de admiracion se utiliza para darle a entender al metodo que no 
    va a recibir una declaracion en el momento de definirse pero que es 
    un argumento que nunca va a ser indefinido. El contrario de esto es el signo 
    de pregunta "?", este sirva para dar a entender que puede recibir un valor o 
    ser indefinido tambien
    */ 
    constructor(value:{new(): T }){
        this.value = new value();
    }
}

class Rodri{
    public name: string = "Rodri";
    public age: number = 28;
}
class Maria{
    public nameMaria: string = "Maria";
    public ageMaria: number = 20;
}
class Greet extends GenericClass<Rodri> {
    constructor(){
        super(Rodri)
    }

    public greet(): void{
        console.log(`hello, ${this.value.name}`)
    }
}

new Greet().greet();

