/* En este ejemplo, T es un tipo genérico que se utiliza para capturar el tipo
 del argumento que se pasa a la función. La función identity puede ahora 
 trabajar con cualquier tipo de dato, y el tipo se infiere automáticamente 
 cuando se llama a la función.
  */ 
//Generico para argumentos
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
let output3 = identity<boolean>(true);

console.log(output1)
console.log(output2)
console.log(output3)

//Generico para clase
class GenericNumber<T> {
    VarGeneric: T;
    add: (x: T, y: T) => T;

    constructor(VarGeneric: T, add: (x: T, y: T) => T) {
        this.VarGeneric = VarGeneric;
        this.add = add;
    }
}

let myGenericNumber = new GenericNumber<number>(8, (x, y) => x + y);
let myGenericVar = new GenericNumber<string>('hola', (x,y)=> x + y)

console.log(`el valor de la variable: ${myGenericVar.VarGeneric}`); // Output: 0
console.log(myGenericVar.add('juan ', 'andres')); // Output: 15

console.log(`el valor de la variable: ${myGenericNumber.VarGeneric}`); // Output: 0
console.log("el resultado de "+ myGenericNumber.add(4, 8)); // Output: 15