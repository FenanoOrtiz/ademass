//para poder dar el valor a age sin necesidad de instanciar la clase utilizamos el siguiente 
//decorador
function SetAge(age:number){//esta funcion es parte del decorador
    return function<T extends{new(...args: any[]):{}}>(constructor: T){
        return class extends constructor{
            age!: number
            constructor(...arhs: any[]){
                super()
                this.age= age
            }

        }
        
    }
} 
@SetAge(28)
class Person {
    age!:number;
}

const getUser = new Person()
console.log(getUser.age)//me muestra 28

function ValidateAge(age:number){
    return function(target:any, propName: string){
        let assignedAge = target[propName]
        Object.defineProperty(target, propName,{
            set:(newAge:number)=>{
                if(newAge < age) {
                    throw new Error("Error, debe ser mayor de 18")
                }
                assignedAge = newAge;

            },
            get: ()=> assignedAge

        })
    }
}


class Person2{
    @ValidateAge(18)
    age:number = 28;
}

const newPerson2 = new Person2()
console.log(newPerson2.age);
/*
newPerson2.age=17
console.log(newPerson2.age)//bota el error que debe se age mayor de 18
*/
newPerson2.age=21
console.log(newPerson2.age);