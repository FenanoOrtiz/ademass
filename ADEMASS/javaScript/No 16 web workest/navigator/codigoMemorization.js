"use strict";
/* 

const hacerAlgo = num =>{
	const a = 20;
	const b = 12;
	let  c = 0;
	for (let i = num-1; i >=0; i--) {
		for (let j = i; j>=0;  j--) {
			c+=a*b
		}
	}
	return c;
}


let date = new Date();//cargamos el valor del tiempo inicial
hacerAlgo(60000);
console.log(new Date()-date);//restamos el tiempo final menos el inicial

date = new Date();//cargamos el valor del tiempo inicial
hacerAlgo(60000);
console.log(new Date()-date);//restamos el tiempo final menos el inicial

date = new Date();//cargamos el valor del tiempo inicial
hacerAlgo(60000);
console.log(new Date()-date);

date = new Date();//cargamos el valor del tiempo inicial
hacerAlgo(60000);
console.log(new Date()-date);
*/
//creamos el memorizador

let cache = []; 

const memoizer = func =>{
	return e =>{
		const index = e.toString();
		//console.log(index);
		if (cache[index] == undefined){
			//console.log(cache[index]);
			//console.log(cache);
			cache[index] = func(e);
			//console.log(cache[index]);se utilizo para obsevar funcionamiento
			//console.log(cache);
		}
		return cache[index];

	}
}


const hacerAlgo = num =>{
	const a = 20;
	const b = 12;
	let  c = 0;
	for (let i = num-1; i >=0; i--) {
		for (let j = i; j>=0;  j--) {
			c+=a*b
		}
	}
	return c;
}
console.log("funcion sin memoizer"); 
let date = new Date();
hacerAlgo(60000);
console.log(new Date()-date);

date = new Date();
hacerAlgo(60000);
console.log(new Date()-date);

date = new Date();
hacerAlgo(60000);
console.log(new Date()-date);

date = new Date();
hacerAlgo(60000);
console.log(new Date()-date);


console.log("funcion con memoizer");
const memo = memoizer(hacerAlgo);

date = new Date();
memo(60000);
console.log(new Date()-date);

date = new Date();
memo(60000);
console.log(new Date()-date);

date = new Date();
memo(30000);
console.log(new Date()-date);

date = new Date();
memo(30000);
console.log(new Date()-date);


/*
se memorizan los valores de una funcion cuando hay datos que se van a repetir
y sobretodo para valores grandes
7:14
*/