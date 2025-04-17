const titulo = document.querySelector(".titulo");
//ejemplos style
/*
titulo.style.color = "red";
titulo.style.backgroundColor ="blue"; // el guion se elimina por la letra mayuscula


titulo.style.fontSize = "100px";// igual que aca
titulo.style.width = "40%";
document.write(titulo.style.fontSize);//osea la propiedade de CSS que tiene guion
// se utilizan aca sin el guion estilo camel case

*/

//METODOS DE clases, classList y metodos classList

/*
una etiqueta puede tener varias clases
<h1 class="titulo grande rojo circular" >Texto a Modificar</h1>
estos metods aplican a esas clases
add() - añade una clase
remove() - remueve una clase
item() - devuelve el valor del indice de la clase que se busca
contains() - verifica si ese elemento contiene una clase
replace() - reemplaza una clase por otra
toggle() - si no tiene la clase especificada la agrega, si ya
la tiene la elimina, como segundo parametro true o false, forza
a que la deje o a eliminarla
*/

//ejemplo add


//<h1 class="titulo grande rojo circular" >Texto a Modificar
titulo.classList.add("frentera");
//<h1 class="titulo grande rojo circular frentera">Texto a Modificar</h1>


//ejemplo remove

titulo.classList.remove("frentera");
//<h1 class="titulo grande rojo circular">Texto a Modificar</h1>

//ejemplo item()

let valor = titulo.classList.item(0);
document.write(valor+"<br>");//titulo
/*
valor = titulo.classList.item(1);
document.write(valor+"<br>");//grande

valor = titulo.classList.item(2);
document.write(valor+"<br>");//rojo
*/
//ejemplo contains


valor =titulo.classList.contains("rojo");
document.write(valor+"<br>");//(true) pues existe esa clase

valor =titulo.classList.contains("cien");
document.write(valor+"<br>");//(false) pues no existe esa clase

if (valor){//este ejemplo hace que si exite se elimine la clase
	// y si no existe la agrega, que es lo que hace toggle
	titulo.classList.remove("cien");
}else{
	titulo.classList.add("cien");
}//resultado : 
//<h1 class="titulo grande rojo circular cien">Texto a Modificar</h1>


//ejemplo replace()

titulo.classList.replace("cien","mil");
//resultado
//<h1 class="titulo grande rojo circular mil">Texto a Modificar</h1>

//ejemplo toggle()

valor = titulo.classList.toggle("cien");//agrega (cien) porque no existe
document.write("salida de toggle: "+valor+"<br>");
//<h1 class="titulo grande rojo circular mil cien">Texto a Modificar</h1>

valor = titulo.classList.toggle("cien");//elimina (cien) porque existe
document.write("salida de toggle: "+valor+"<br>");
//<h1 class="titulo grande rojo circular mil">Texto a Modificar</h1>
valor = titulo.classList.toggle("cien",true);//si existe lo deja si no lo agrega
document.write("salida de toggle: "+valor+"<br>");
//<h1 class="titulo grande rojo circular mil cien">Texto a Modificar</h1>

valor = titulo.classList.toggle("cien",false);//si existe lo elimina si y no lo agrega
document.write("salida de toggle: "+valor+"<br>");



//8:44


