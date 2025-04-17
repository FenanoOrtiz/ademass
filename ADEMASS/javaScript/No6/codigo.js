//console
//funciones de registro
/*assert() - aparece un mensaje de error en la consola si 
la afirmacion es falsa, si es verdadera no aparece nada
*/

// console.assert(5>2);
// console.assert(5<2);


// /*clear() - limpia la cosola
// */

// // console.clear();
// console.log("mensaje en la consola");
// console.info("mensaje en la consola pero de informacion");


/*console.table()- solo sirve con un array o un objeto
de resto se comporta igual que log o info*/

//console.table([1,2,5,6,7,8]);


//console.error("estas equivocado en tu codigo")//muestra un error

//console.warn("cuidado puede alterar tu codigo")//muestra un warning 
//advertencia de cuidado

/*console.dir() despliega una lista interactiva de las propiedades del objeto
javascipt*/

//funciones de conteo
/*
count() registra el numero de veces que se llama a cuount(). toma como
argumento opcional una etiqueta

countReset()- resetea el contador console.count()

*/

// console.count();
// console.count();
// console.count();
// console.count();
// console.countReset();
// console.count();



/* FUNCIONE DE AGRUPACION

group() crea un nuevo grupo en liea de el registro
groupEnd() remueve un grupo en linea en el registro
groupCollapsed() crea un grupo en linea pero lo muestra cerrado
ejemplos realizados en la consola

*/

/*FUNCIONE DE TEMPORIZACION

time() inicia contador de tiempo
timeLog() nos indica el tiempo que trascurrio desde que se 
inicio el time
timeEnd()termina y muestra el tiempo al final 
sirve para conocer el tiempo de ejecucion
 


*/
/*MODIFICAR ESTILO DEL TEXTO
tiene ciertas limitaciones pero tiene bastante uso
*/

//console.log("%cRancio","color:red; background:black;padding:30px 60px; font-size:30px");

//7:25