//document.cookies="user=dalto"; // ahora desde consola digitamos document.cookies, para ver
//toda las cookies, si cramos mas cookies dentro de la consola digitando: (document.cookie = nombre=valor)
// a los unicos valores que se puede acceder de una cookie es el value(valor)

// utilizar otributos


//max-age cuanto quiere que dure en segundos
//name el nombre y valor de la cookie
//expire es cuando va a expirar en formato UTC
//path es donde se va almacenar

/*
const crearCookies = (name,dias,path,age)=>{
	 document.cookie = `${name};expires=${dias};path=${path};age=${age}`
}

crearCookies("usuario=dalto","Mon 23 oct 2024 12:00:00 UTC","/cookies",60)
*/

 //8:22

const newFechaUTC = dias=>{// esta funcion convierte en formato UTC la cantidad de dias
	//qeu tiene de duaracion (expire) la cookie
	let fecha = new Date();
	fecha.setTime(fecha.getTime()+ (dias*1000*60*60*24))
	return fecha.toUTCString();

}


const crearCookie = (name,dias)=>{
	expires = newFechaUTC(dias)
	 document.cookie = `${name};expires=${expires}`;
}

//crearCookie("usuario=dalto","4");//para que la cookie expiere en 4 dias 

//leer cookies
//const p1=document.getElementById("p1");

const obtenerCookie = cookieName =>{
	let cookies = document.cookie;
	cookies = cookies.split(";");//separa cada elemento en un array
	//console.log(cookies);
	//console.log(cookies.length);
	
	for (let i=0; cookies.length>i; i++){
		let cookie = cookies[i].trim();//elimina espacio en blanco que se crea al inicio de una
		//cookie al momento de crearla
		//console.log(cookie)
		//p1.innerHTML=cookie;
		
		if(cookie.startsWith(cookieName)){
			return cookie.split("=")[1];
		}
			
		// else{// no se utiliza el else pues retorna y fin de la funcion
		//no se podria mirar si existe en las otras cookies por eso en caso 
		// de que no se obtenga ninguna cookie con el nombre buscado des pues
		// de terminar la funcion devolvemos que no hay cookies con ese nombre
		// 	return "No hay cookies con ese nombre"
		// }
		
	}//8:32
	return "No hay cookies con ese nombre"
}

/*
para modificar una cookie 
desde la consola simplemente escribimos document.cookie = ("el nombre de la cookie=
su nuvevo valor")
document.cookie = "nombre=Juan" 


para eliminar se utiliza la forma de modificar pero con el atributo
max-age=0
ejemplo:
document.cookie = "nombre=0;max-age=0"
eliminamos la cookie nombre, asi se hace en la consola

document.cookie
'usuario=dalto; suscrito=si; usur2=valor2; idioma=in; nombre=Juan'
document.cookie= "usuario=0;max-age=0"
'usuario=0;max-age=0'
document.cookie
'suscrito=si; usur2=valor2; idioma=in; nombre=Juan'

tambien se puede eliminar asi:
como si se fuera a crear pero con la max-age=0
crearCookie("nombre=Juan;max-age=0",5), vamos a probar en consola=

document.cookie
'suscrito=si; usur2=valor2; idioma=in; nombre=Juan'
crearCookie("altura=175",2)
undefined
document.cookie
'suscrito=si; usur2=valor2; idioma=in; nombre=Juan; altura=175'
obtenerCookie("altura")
'175'
crearCookie("altura=175;max-age=0",2)
undefined
document.cookie
'suscrito=si; usur2=valor2; idioma=in; nombre=Juan'

investigar (aviso de uso de cookies, cumplimiento con el RGPD y la Privacy)


*/