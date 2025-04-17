class generica<T>{
    private dato1:T;
    private dato2:T;

    constructor(dato1:T, dato2:T){
        this.dato1= dato1;
        this.dato2 = dato2;

    }
    //metodo
    sumaConcatena(): T | string{
        if (typeof this.dato1 === 'number' && typeof this.dato2 === 'number'){
            return(this.dato1 + this.dato2) as T;
        }else if (typeof this.dato1 === 'string' && typeof this.dato2 === 'string'){
            return this.dato1+this.dato2;
        }else{
            throw new Error('los tipos de datos son diferentes o no son compatibles')
        }
    }
    
    
}
const sumaNumeros = new generica<number>(4,5)
console.log(sumaNumeros)
console.log(sumaNumeros.sumaConcatena())


// Ejemplo con cadenas de texto
const operadorCadenas = new generica<string>('Hola, ', 'mundo!');
console.log(operadorCadenas.sumaConcatena()); // "Hola, mundo!"
