/*
geolocalization

-getCurrentPosition()
	-parametros (position, error, option)
	-propiedades de option(enableHightAccuaracy, timeout, maximumAge)
- watchPosition()
navigator es para acceder a herramientas del navegador

*/
"use strict";

const geolocation = navigator.geolocation;
 
 const posicion = (pos)=>{
 	console.log(pos)
 	//console.log(pos.coords.latitude);//obtengo solo la latitud coordenadas
 	//console.log(pos.coords.longitude);//obtengo solo la longitud coordenadas
 }
 const err = ()=> console.log(e);//para manejo de errores, segundo parametro
 const options ={
 	maximunAge:0, //maximo tiempo que almacena en cache la informacion de ubicacion
 	timeout: 3000, // tiempo de solicitud 
 	enableHightAccuracy: true//habilita la precision
 };


 geolocation.getCurrentPosition(posicion, err, options);//3:04