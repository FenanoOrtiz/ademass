//console.log("hola mundo");//con esto ya se ejecuta la tarea

/*
const ejecutarBucle = ()=>{
	while (true)
		console.log(1);
}
addEventListener("message",ejecutarBucle);
*/

addEventListener("message",e=>{
	//console.log(e.data);//vemos el data que es lo que se envia desde el messsage
	if(e.data.length > 4){
		console.log(e.data);
		postMessage("perfecto, nitido");
	} 	
})
//6:32