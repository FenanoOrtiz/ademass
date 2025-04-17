/* Notifications

- Notification.requestPermission()
- Notification.permission
- Notifications(msg,options)


todo esto se debe hacer desde el localhost, pues para que funcionen las notificaciones



*/
"use strict";
if (!('Notification'in window)){
	console.log("las noficaciones no estan disponibles en tu navegador");
}
Notification.requestPermission(()=>{
	if(Notification.permission=="granted"){
		console.log("permiso concedido")
	}
})
new Notification("suscribite")