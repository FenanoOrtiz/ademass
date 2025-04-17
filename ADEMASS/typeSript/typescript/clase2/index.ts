const names:string[] =[]//Forma correcta de definir un array que contiene String
//me permite utilizar tosod los metodos que aplica sobre el array y al mapiar
// el array tambien me visualiza los metodos de las cadenas o string
//por ejemplo
//names.map((n)=>n.length)

//tambien se puede declarar asi:
const namesV2: Array<string>=[]
//agregamos elementos al array
//names.push(25) //si intento agregar un numero no me permite pues el array es string
names.push('25')
names.push('Fernando')

//Object o Records (interface)

const myObject: Object ={
    name:"Fernando"
}
const myObjectV2 : Record<string, any> ={}
//Record permite definir el key de cada elemento del objeto
//para este caso el key es un string
// y el any es el value que para este caso puede ser de cualquier tipo
myObjectV2.name = 'Fernando'
myObjectV2.age = 51

//tuplas: me permite hacer que un elemento del objeto reciba dos tipos diferetes de
//value

const myObjectV3 : Record<string, string | number> ={}//asi se forma una tupla
//me permite que los elementos de mi objeto reciban como valores o un numero o
//un string
myObjectV3.name = 'Fernando'
myObjectV3.age = 51 //aca recibe un numero
myObjectV3.name = 'Carlos'
myObjectV3.age = 'Cincuenta'//aca recibe un string

//promise

const myPromise = async():Promise<string> =>{
    return await new Promise((res, _rej)=>{
        setTimeout(()=>{
            res('Hola mundo')
        },2000)
    
    })
}
myPromise().then((r)=>console.log(r))

//compuestos

const myNewObject:{//el objeto compuesto permite especificar el tipo de key y value
    //ademas obliga a declarar el elemento
    name:string;
    age:number;

} = {
   name: "Fernando",
   age: 51,
}
//diferencia entre interfaces y tipos


