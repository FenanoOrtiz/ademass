const getInfo = async ()=>{
	let aprobados = document.querySelector(".num-aprobados");
	let desaprobados = document.querySelector(".num-desaprobados");
	try{
		resultado = await axios("informacion.txt")
		//console.log(resultado);
		aprobados.innerHTML = resultado.data.aprobados;
		desaprobados.innerHTML = resultado.data.desaprobados;
	}catch(e){
		//console.log(e);
		aprobados.innerHTML ="fallo en el servidor";
		desaprobados.innerHTML = "fallo en el servidor";
	}

}
document.getElementById('getInfo').addEventListener("click",getInfo);//7:52