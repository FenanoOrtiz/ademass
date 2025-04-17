 //APIS son todad aquellas funciones que tienen los lenguaje
//alert() prompt() etc

//objeto date

"use strict";

const fecha = new Date();// si no se utiliza el new se carga la fecha
//pero no seria un ogbeto y no se podrian aplicar los metodos para el
//objeto date
console.log(fecha);

//getDate() nos devuelve el dia
console.log(fecha.getDate());//si se quita el new no va a funcionar 


//getDay() nos devuelve el dia de la semana

console.log(fecha.getDay());//devuelve el dia de la semana, domingo 0,
//lunes 1, martes 2....

console.log(fecha.getMonth()+1); //devuelve el mes enero=0 , feb =1 ...dic = 11
//siempre trabaja como indices dentro de un array, si quiere el mes tradicional
// se suma 1 fecha.getMont()+1 

console.log(fecha.getYear());//me da como resultado 124 estamos en 2024 el metodo
//arroja el año actual -1900 si queremos el año real le sumamos 1900
console.log(`estamos en el año ${fecha.getYear()+1900}`);

console.log(fecha.getHours());//devuelve la hora
console.log(fecha.getMinutes());//devuelve los minutos
console.log(fecha.getSeconds());//devuelve los segundos

//1:56

const date1 = new Date(1971,9,1,13,25,4,450);//forma de ingresar datos año, indice del mes,
//dia, hora, minutos, segundos y milisegundos

console.log(date1);
// unix-time se define como la cantidad de segundos transcurridos desde 
//la medianoche UTC del 1 de enero de 1970

const date2 = new Date(1721820698479);//formato de entrada en milisegundos desde el 
//unixtime

console.log(date2.getYear()+1900);//devuelve año
console.log(date2.getMonth()+1);//devuelve mes
console.log(date2.getDate());//devuelve el dia

//metodo Date.now() valor numerico correspondiente a la hora actual milisegundos

console.log(Date.now());//el valor que se obtuvo lo coloque en date 2 


