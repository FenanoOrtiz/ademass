"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//para poder dar el valor a age sin necesidad de instanciar la clase utilizamos el siguiente 
//decorador
function SetAge(age) {
    return function (constructor) {
        return class extends constructor {
            constructor(...arhs) {
                super();
                this.age = age;
            }
        };
    };
}
let Person = class Person {
};
Person = __decorate([
    SetAge(28)
], Person);
const getUser = new Person();
console.log(getUser.age); //me muestra 28
function ValidateAge(age) {
    return function (target, propName) {
        let assignedAge = target[propName];
        Object.defineProperty(target, propName, {
            set: (newAge) => {
                if (newAge < age) {
                    throw new Error("Error, debe ser mayor de 18");
                }
                assignedAge = newAge;
            },
            get: () => assignedAge
        });
    };
}
class Person2 {
    constructor() {
        this.age = 28;
    }
}
__decorate([
    ValidateAge(18),
    __metadata("design:type", Number)
], Person2.prototype, "age", void 0);
const newPerson2 = new Person2();
console.log(newPerson2.age);
/*
newPerson2.age=17
console.log(newPerson2.age)//bota el error que debe se age mayor de 18
*/
newPerson2.age = 21;
console.log(newPerson2.age);
