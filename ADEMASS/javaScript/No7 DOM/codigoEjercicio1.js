/*
hacer un sistema que muestre las llaves posibles y determine cual es la indicada
se debe escoger entre 10 modelos posibles


*/
//9:40

const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio) {
	img = "<img src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p><b>${precio}</b></p>` 
	return [img, nombre,modelo,precio];
}

//const llave = new crearLlave("llave1", "modelo X", "33");

//contenedor.innerHTML = llave[0]+llave[1]+ llave[2]+ llave[3];

//console.log(llave);

//document.write(llave);
const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number;	
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <=20; i++) {
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlave (`llave ${i}`, `modelo ${modeloRandom}`,`precio $${precioRandom}`);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.tabIndex = i;
	div.classList.add(`item-${i}`, `flex-item`);
	div.innerHTML = llave[0] + llave[1] + llave [2] + llave[3];
	documentFragment.appendChild(div);

}
//console.log(documentFragment);
contenedor.appendChild(documentFragment);

//9:48