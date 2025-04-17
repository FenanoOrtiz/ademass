//vamos hacer un ejercicio de lista generica por medio de una clase

class myList<T>{
    private elementos:T[];

    constructor(){
        this.elementos = [];
    }
    // METODOS
    //1. agregar elementos a la lista

    agregar(elemento:T):void{
        this.elementos.push(elemento);
        console.log(`elemento agregado corectamente ${elemento}`)
    }
    //2. Metodo para obtener un elemento de la lista
    obtener(index:number):T{
        return this.elementos[index];
    }
    eliminar(index:number):void{
        this.elementos.splice(index,1)
        console.log(`elemento en la posicion ${index+1} eliminado`);
    }

    
}
//creamos lista de numeros
const listaNumeros = new myList<number>();
listaNumeros.agregar(3);
listaNumeros.agregar(5);
listaNumeros.agregar(6);
console.log(listaNumeros)
console.log(listaNumeros.obtener(1));
listaNumeros.eliminar(0);
console.log(listaNumeros)
console.log (listaNumeros.obtener(0));

//creamos lista de cadena

const listaCadena = new myList<string>();
listaCadena.agregar('Fernando');
listaCadena.agregar('es');
listaCadena.agregar('un');
listaCadena.agregar('duro');
console.log(listaCadena);
listaCadena.eliminar(1);
listaCadena.eliminar(1);
console.log(listaCadena);