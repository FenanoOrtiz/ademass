/*
Objeto Navigator: 

-navigatorID

-NavigatorLanguage

-NavigatorOnline

- NavigatorContentUtils

-NavigatorStorageUtils

-NavigatorConcurrentHardware

-NavigatorPlugins

-NavigatorUserMedia

 
*/

console.log("AppCodeName: ",navigator.appCodeName);
console.log("");//para dar un espacio en la consola
//no siempre es correcto

console.log("AppName: ",navigator.appName);
console.log("");
//no siempre es correcto
console.log("AppVersion: ",navigator.appVersion);
console.log("");
//no siempre es corrrecto
console.log("Connection: ",navigator.connection);
console.log("");

console.log("Geolocation: ",navigator.geolocation);
console.log("");

console.log("hadwareConcurrency: ",navigator.hardwareConcurrency);
console.log("");

console.log("language: ",navigator.language);
console.log("");

console.log("Lanuages: ",navigator.languages);//arreglo con los tipos de idioma
console.log("");

console.log("MimeTypes: ",navigator.mimeTypes);//relacionado con lo que se envia en el
console.log("");//encabezado header de la pagina

console.log("Online: ",navigator.online);
console.log("");

console.log("UserAgent: ",navigator.userAgent);
console.log("");

console.log("CookieEnabled: ",navigator.cookieEnabled);
console.log("");

console.log("Permissions: ",navigator.permissions);
console.log("");

console.log("Plataform: ",navigator.platform);
console.log("");

console.log("Plugins: ",navigator.plugins);
console.log("");

console.log("Product: ",navigator.product);
console.log("");

console.log("ServiceWorker: ",navigator.serviceWorker);

//METODOS

//navigator.getUserMedia() para acceder al audio y video "no se usa"

//navigator.registerContentHandler() permite a los web sites registrarse como posible controlador
// de un tipo MIME determinado

//navigator.registerProtocolHandler() permite a los web sites registrarse como posible controlador
// de un tipo protocolo determinado

//navigator.requestMediaKeySystemAccess() Devuelve un objeto Promise para un objeto MediaKeySystemAccess

//navigatorPlugins.javaEnabled() devuelve un valor boolean que indica si el navegador
// tiene o no habilitado java

//navigator.sendBeacon() usado para transferir, de forma asíncrona, conjuntos pequeños de datos
//http del agente usuario al servidor

//navigator.vibrate() causa vibración en el dispositivo que lo soporta







