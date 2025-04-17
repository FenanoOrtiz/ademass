"use strict";
// tipos basicos
//string
let myStringVar = 'Juan';
console.log(myStringVar);
//number
let myNumberVar = 28;
console.log(myNumberVar);
//boolean
let myBooleanVar = false;
console.log(myBooleanVar);
//null
let myNullVar = null;
//undefined
let myUndefinedVar;
console.log(myUndefinedVar);
//---------------Funciones
function myName(name) {
    return `hola como estas ${name}`;
}
;
//funcion flecha
const myNameV2 = (name) => {
    return `hola como estas ${name}`;
};
//otra forma de definir funciones tipadas
let myNameV3; //se crea una funcion pero no const si no let
myNameV3 = (name) => {
    console.log(name);
};
//se crean variables para llamar a cada funcion en el caso de las dos primeras
//la tersera tiene directamente el console.log
const isName = myName(myStringVar);
const isName2 = myName(myStringVar);
console.log(isName);
console.log(isName2);
myNameV3(myStringVar);
