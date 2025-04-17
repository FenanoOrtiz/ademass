//crear un sistema que muestre los suficientes datos como
//para conocer el sitio web

let href = window.location.href;
let hostname = window.location.hostname;
let pathname = window.location.pathname;
let protocol = window.location.protocol;
/*
alert(`la Url es ${href} <br>
		su hotsname es: ${hostname},
		su pathname es: ${pathname},
		su protocolo es: ${protocol}
	`);

*/
let html = `Protocolo: <b>${protocol}</b><br>`
html += `hostname: <b>${hostname}</b><br>`
html += `Pathname: <b>${pathname}</b><br>`
html += `URL Completa: <b>${href}</b><br>`
document.write(html);	/*si vamo a inspeccionar cualquier pagina
borramos consola(console.clear()) y pegamos este codigo, nos mostrara en pantalla
toda la informacion*/
//44:

